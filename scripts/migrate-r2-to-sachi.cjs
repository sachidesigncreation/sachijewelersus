/**
 * One-way migration: oswar-assets (sachi_jewellers/ prefix, old account)
 * → sachi bucket (same keys, new account d67a96c34e71b31d86b25fe235868e66).
 * Usage: OLD_R2_* env for source, current .env R2_* for destination.
 */
/* eslint-disable @typescript-eslint/no-require-imports -- plain Node script, not bundled */
const {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
  HeadObjectCommand,
} = require('@aws-sdk/client-s3');

const OLD = {
  endpoint: process.env.OLD_R2_ENDPOINT,
  accessKeyId: process.env.OLD_R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.OLD_R2_SECRET_ACCESS_KEY,
  bucket: process.env.OLD_R2_BUCKET || 'oswar-assets',
};
// Destination credentials passed via env to avoid hardcoding secrets.
const NEW = {
  endpoint: process.env.R2_ENDPOINT,
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  bucket: process.env.R2_BUCKET || 'sachi',
};

const oldClient = new S3Client({
  region: 'auto', endpoint: OLD.endpoint,
  credentials: { accessKeyId: OLD.accessKeyId, secretAccessKey: OLD.secretAccessKey },
  forcePathStyle: true,
});
const newClient = new S3Client({
  region: 'auto', endpoint: NEW.endpoint,
  credentials: { accessKeyId: NEW.accessKeyId, secretAccessKey: NEW.secretAccessKey },
  forcePathStyle: true,
});

async function streamToBuffer(stream) {
  const chunks = [];
  for await (const c of stream) chunks.push(c);
  return Buffer.concat(chunks);
}

(async () => {
  // List everything under the Sachi prefix in the old bucket.
  let token;
  const keys = [];
  do {
    const r = await oldClient.send(new ListObjectsV2Command({
      Bucket: OLD.bucket, Prefix: 'sachi_jewellers/', MaxKeys: 1000, ContinuationToken: token,
    }));
    for (const o of r.Contents || []) keys.push({ Key: o.Key, Size: o.Size });
    token = r.IsTruncated ? r.NextContinuationToken : undefined;
  } while (token);
  console.log(`Found ${keys.length} objects in ${OLD.bucket}`);

  let ok = 0, skipped = 0, failed = 0;
  for (const { Key, Size } of keys) {
    try {
      // Skip if destination already has identical size.
      try {
        const head = await newClient.send(new HeadObjectCommand({ Bucket: NEW.bucket, Key }));
        if (head.ContentLength === Size) { skipped++; continue; }
      } catch { /* missing — copy it */ }

      const get = await oldClient.send(new GetObjectCommand({ Bucket: OLD.bucket, Key }));
      const body = await streamToBuffer(get.Body);
      await newClient.send(new PutObjectCommand({
        Bucket: NEW.bucket,
        Key,
        Body: body,
        ContentType: get.ContentType || 'application/octet-stream',
        CacheControl: 'public, max-age=31536000, immutable',
      }));
      // Byte-verify.
      const verify = await newClient.send(new HeadObjectCommand({ Bucket: NEW.bucket, Key }));
      if (verify.ContentLength !== body.length) throw new Error(`size mismatch after put (${verify.ContentLength} vs ${body.length})`);
      ok++;
      console.log(`  ✓ ${Key} (${(body.length / 1024).toFixed(1)} KB)`);
    } catch (e) {
      failed++;
      console.log(`  ✗ ${Key}: ${e.message}`);
    }
  }
  console.log(`Done — copied: ${ok}, already-there: ${skipped}, failed: ${failed}`);
  process.exit(failed ? 1 : 0);
})().catch((e) => { console.error('FATAL', e.message); process.exit(1); });

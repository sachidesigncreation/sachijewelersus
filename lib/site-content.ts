import { cache } from 'react';
import { prisma } from '@/lib/db';
import {
  DEFAULT_CONTENT,
  CMS_KEYS,
  cmsSettingKey,
  type SiteContent,
  type ContentKey,
} from '@/lib/site-content-defaults';

export {
  DEFAULT_CONTENT,
  CMS_KEYS,
  cmsSettingKey,
  type SiteContent,
  type ContentKey,
};
export { resolveContentImage } from '@/lib/site-content-defaults';

function safeParse<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw) as T;
    if (parsed && typeof parsed === 'object') return { ...(fallback as object), ...(parsed as object) } as T;
    return parsed;
  } catch {
    return fallback;
  }
}

/** Server-only: fetch all CMS sections, merged over defaults.
 * React-cached per request, so layout + page + components share one DB query. */
export const getSiteContent = cache(async (): Promise<SiteContent> => {
  try {
    const rows = await prisma.siteSettings.findMany({
      where: { key: { startsWith: 'cms_' } },
    });
    const map = new Map(rows.map((r) => [r.key, r.value]));
    const out = {} as SiteContent;
    for (const key of CMS_KEYS) {
      const raw = map.get(cmsSettingKey(key));
      (out as Record<string, unknown>)[key] = safeParse(
        raw,
        DEFAULT_CONTENT[key],
      );
    }
    return out;
  } catch {
    return DEFAULT_CONTENT;
  }
});

/** Server-only: fetch a single section. */
export async function getContentSection<K extends ContentKey>(
  key: K,
): Promise<SiteContent[K]> {
  const all = await getSiteContent();
  return all[key];
}

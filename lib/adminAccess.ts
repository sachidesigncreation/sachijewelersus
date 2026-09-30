import { prisma } from '@/lib/db';
import { isAdminEmail } from '@/lib/isAdminEmail';

export type AdminRole = 'owner' | 'admin';
export type DbAdminUser = { email: string; name?: string | null; role: AdminRole; createdAt?: string };

// Short in-memory cache so every admin-gated request doesn't hit the DB.
let cache: { at: number; byEmail: Map<string, DbAdminUser> } | null = null;
const TTL_MS = 120_000;

export function clearAdminCache() {
  cache = null;
}

export function getEnvAdminEmails(): string[] {
  return (process.env.ADMIN_EMAIL ?? '')
    .split(/[,;]/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

export function normalizeRole(v: unknown): AdminRole {
  return String(v ?? '').trim().toLowerCase() === 'owner' ? 'owner' : 'admin';
}

async function loadTableAdmins(): Promise<Map<string, DbAdminUser>> {
  const now = Date.now();
  if (cache && now - cache.at < TTL_MS) return cache.byEmail;
  const byEmail = new Map<string, DbAdminUser>();
  try {
    const rows = await prisma.adminUser.findMany();
    for (const r of rows) {
      const email = String(r.email).trim().toLowerCase();
      if (!email.includes('@')) continue;
      byEmail.set(email, {
        email,
        name: r.name ?? null,
        role: normalizeRole(r.role),
        createdAt: r.createdAt?.toISOString?.() ?? undefined,
      });
    }
  } catch {
    // DB unreachable — fall through to env-only access.
  }
  cache = { at: now, byEmail };
  return byEmail;
}

/** Role for an email, or null. Server-config (ADMIN_EMAIL) emails count as owner. */
export async function getAdminRole(email: string | undefined | null): Promise<AdminRole | null> {
  const e = email?.trim().toLowerCase();
  if (!e) return null;
  if (isAdminEmail(e)) return 'owner';
  const table = await loadTableAdmins();
  return table.get(e)?.role ?? null;
}

/** True if the email can access the admin panel (any role). */
export async function isAdminAccess(email: string | undefined | null): Promise<boolean> {
  return (await getAdminRole(email)) !== null;
}

/** True only for owners — the only role that can manage admins. */
export async function isOwner(email: string | undefined | null): Promise<boolean> {
  return (await getAdminRole(email)) === 'owner';
}

export async function getAllAdmins(): Promise<
  { email: string; name?: string | null; role: AdminRole; source: 'config' | 'panel' }[]
> {
  const env = getEnvAdminEmails();
  const envSet = new Set(env);
  const table = await loadTableAdmins();
  return [
    ...env.map((email) => ({ email, name: null as string | null, role: 'owner' as AdminRole, source: 'config' as const })),
    ...[...table.values()]
      .filter((u) => !envSet.has(u.email))
      .map((u) => ({ email: u.email, name: u.name ?? null, role: u.role, source: 'panel' as const })),
  ];
}

export async function addPanelAdmin(input: { email: string; name?: string | null; role?: AdminRole }) {
  const email = input.email.trim().toLowerCase();
  const row = await prisma.adminUser.upsert({
    where: { email },
    create: { email, name: input.name?.trim() || null, role: input.role ?? 'admin' },
    update: { name: input.name?.trim() || null, role: input.role ?? 'admin' },
  });
  clearAdminCache();
  return row;
}

export async function removePanelAdmin(email: string) {
  await prisma.adminUser.deleteMany({ where: { email: email.trim().toLowerCase() } });
  clearAdminCache();
}

export async function setPanelAdminRole(email: string, role: AdminRole) {
  await prisma.adminUser.updateMany({
    where: { email: email.trim().toLowerCase() },
    data: { role },
  });
  clearAdminCache();
}

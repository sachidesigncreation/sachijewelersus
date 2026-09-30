/** `ADMIN_EMAIL` may be comma/semicolon-separated for multiple admins (login + notifications). */
export function isAdminEmail(email: string | undefined | null): boolean {
  if (!email?.trim()) return false;
  const u = email.trim().toLowerCase();
  const list = (process.env.ADMIN_EMAIL ?? '')
    .split(/[,;]/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  return list.includes(u);
}

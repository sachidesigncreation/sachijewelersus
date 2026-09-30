import { prisma } from '@/lib/db';
import { isAdminAccess } from '@/lib/adminAccess';

/**
 * Where to send an already-signed-in user who hits /auth/login or /auth/register.
 * Keeps behaviour aligned with `/api/auth/status`.
 */
export async function getPostAuthRedirectPath(email: string | undefined | null): Promise<string> {
  if (!email) return '/products';

  if (await isAdminAccess(email)) return '/admin';

  const account = await prisma.clientAccount.findUnique({
    where: { email },
    select: { status: true },
  });

  if (!account) {
    return '/auth/pending';
  }

  if (account.status === 'PENDING') return '/auth/pending';
  if (account.status === 'REJECTED') return '/auth/rejected';

  return '/products';
}

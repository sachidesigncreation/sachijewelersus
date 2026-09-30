import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { isAdminAccess } from '@/lib/adminAccess';
import { getPostAuthRedirectPath } from '@/lib/getPostAuthRedirectPath';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── Build a mutable response so Supabase can refresh session cookies ──
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Fast path: getSession() reads cookies only — zero network roundtrips.
  // Real verification happens in layouts via getUser() before any protected
  // content renders, so a stale/spoofed session can never leak data here.
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user ?? null;

  // ── ADMIN ROUTES ─────────────────────────────────────────────────────
  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login') {
      if (user && (await isAdminAccess(user.email))) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      return response;
    }

    // No session at all — bounce immediately without any network calls.
    if (!user) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Session present: role is checked here for a fast bounce of non-admins,
    // and re-verified securely (getUser) in the dashboard layout.
    if (!(await isAdminAccess(user.email))) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    return response;
  }

  // ── CLIENT ACCOUNT ROUTES ────────────────────────────────────────────
  if (pathname.startsWith('/account')) {
    if (!user) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    // Status check (PENDING vs APPROVED) is handled server-side in the layout
    return response;
  }

  // ── AUTH ROUTES: redirect away if already logged in ──────────────────
  if (pathname === '/auth/login' || pathname === '/auth/register') {
    if (user) {
      const dest = await getPostAuthRedirectPath(user.email);
      return NextResponse.redirect(new URL(dest, request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/account/:path*',
    '/auth/login',
    '/auth/register',
  ],
};

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';
import { slugify, isReservedSlug } from '@/lib/cms-pages';

async function isAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return isAdminAccess(user?.email);
}

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const pages = await prisma.cmsPage.findMany({
    orderBy: [{ navOrder: 'asc' }, { updatedAt: 'desc' }],
    include: { _count: { select: { sections: true } } },
  });
  return NextResponse.json({ pages });
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json() as {
    title?: string; slug?: string; status?: string;
    showInNav?: boolean; navLabel?: string; navOrder?: number; metaDescription?: string;
  };
  const title = String(body.title || '').trim();
  if (!title) return NextResponse.json({ error: 'Title is required' }, { status: 400 });
  const slug = slugify(String(body.slug || title));
  if (isReservedSlug(slug)) return NextResponse.json({ error: `“${slug}” is a reserved URL` }, { status: 400 });
  const existing = await prisma.cmsPage.findUnique({ where: { slug } });
  if (existing) return NextResponse.json({ error: 'A page with this URL already exists' }, { status: 409 });

  const page = await prisma.cmsPage.create({
    data: {
      title,
      slug,
      status: body.status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT',
      showInNav: !!body.showInNav,
      navLabel: body.navLabel?.trim() || null,
      navOrder: Number(body.navOrder ?? 0) || 0,
      metaDescription: body.metaDescription?.trim() || null,
      sections: {
        create: [{
          type: 'hero',
          sortOrder: 0,
          props: { eyebrow: 'New page', heading: title, subtext: 'Edit this section in the page builder.' },
        }],
      },
    },
    include: { sections: true },
  });
  return NextResponse.json({ page }, { status: 201 });
}

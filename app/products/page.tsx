import { createSupabaseServerClient } from '@/lib/supabase/server';
import { prisma } from '@/lib/db';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import FloatingQuoteCart from '@/components/layout/FloatingQuoteCart';
import QuoteCartDrawer from '@/components/quote/QuoteCartDrawer';
import ProductsClientPage from '@/components/products/ProductsClientPage';
import { Product } from '@/types';
import { mapDbProductToProduct } from '@/lib/mapDbProduct';
import { getSiteContent } from '@/lib/site-content';
import { getNavPages } from '@/lib/cms-pages';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Collections — Sachi Jewellery Co.',
  description: 'Browse our curated wholesale collection of gold, silver and brass jewellery from Jaipur.',
};

export default async function ProductsPage() {
  // Determine access level
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  let isApproved = false;
  let isGuest = true;

  if (user) {
    const account = await prisma.clientAccount.findUnique({
      where: { email: user.email! },
      select: { status: true },
    });
    isGuest = false;
    isApproved = account?.status === 'APPROVED';
  }

  // Fetch products according to access level
  let dbProducts;
  if (isApproved) {
    dbProducts = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  } else {
    // Guest & pending: only 10 featured products
    dbProducts = await prisma.product.findMany({
      where: { featured: true },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
  }

  const products: Product[] = dbProducts.map(mapDbProductToProduct);
  const [content, navLinks] = await Promise.all([getSiteContent().catch(() => null), getNavPages().catch(() => [])]);

  return (
    <div className="bg-ivory min-h-screen pt-20">
      <Navbar content={content?.navbar} customLinks={navLinks} />
      <ProductsClientPage products={products} isApproved={isApproved} isGuest={isGuest} content={content?.products_page} />
      <Footer />
      <FloatingWhatsApp whatsappNumber={content?.company.whatsappNumber} />
      {isApproved && <FloatingQuoteCart />}
      {isApproved && <QuoteCartDrawer />}
    </div>
  );
}

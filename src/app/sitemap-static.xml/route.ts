/**
 * Static URL sitemap — the site's hand-built routes: the home page, the blog
 * index, and the registered static content pages (about, support, legal…).
 *
 * The static content pages ARE registered as CMS Pages (for SEO editing), but
 * they're listed HERE rather than in sitemap-pages.xml so each URL appears in
 * exactly one sub-sitemap. sitemap-pages.xml excludes STATIC_SLUGS to match.
 */
import { buildUrlset, XML_HEADERS } from '@/lib/sitemap';
import { STATIC_ROUTES } from '@/lib/static-routes';

export const revalidate = 60;

export async function GET() {
  const now = new Date().toISOString();

  const xml = buildUrlset([
    { loc: '/',     lastmod: now, changefreq: 'weekly', priority: 1.0 },
    { loc: '/blog', lastmod: now, changefreq: 'daily',  priority: 0.8 },
    // Registered static content pages (about, support, card-terms, …).
    ...STATIC_ROUTES.filter((r) => r.slug !== '/').map((r) => ({
      loc: r.slug,
      lastmod: now,
      changefreq: 'monthly' as const,
      priority: 0.5,
    })),
  ]);

  return new Response(xml, { headers: XML_HEADERS });
}

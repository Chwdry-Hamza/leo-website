/**
 * Pages sitemap — CMS Page rows that are:
 *   - status === 'published'
 *   - seo.noindex !== true
 *
 * The home page and every hand-built static route (about, support, legal…) are
 * excluded here because they live in sitemap-static.xml, so each URL appears in
 * exactly one sub-sitemap. What remains are genuinely CMS-authored pages.
 */
import { cms } from '@/lib/cms';
import { buildUrlset, XML_HEADERS } from '@/lib/sitemap';
import { STATIC_SLUGS } from '@/lib/static-routes';

// Always render fresh so a deleted/unpublished page disappears from the sitemap
// immediately. See sitemap-posts.xml.
export const dynamic = 'force-dynamic';

export async function GET() {
  const data = await cms.getSitemapPages();
  // STATIC_SLUGS already contains '/', so this also drops the home page.
  const items = (data?.items ?? []).filter(
    (p) => !STATIC_SLUGS.has(p.slug.startsWith('/') ? p.slug : `/${p.slug}`),
  );

  const xml = buildUrlset(
    items.map((p) => ({
      loc: p.slug.startsWith('/') ? p.slug : `/${p.slug}`,
      lastmod: p.updatedAt,
      changefreq: 'monthly',
      priority: 0.6,
    })),
  );

  return new Response(xml, { headers: XML_HEADERS });
}

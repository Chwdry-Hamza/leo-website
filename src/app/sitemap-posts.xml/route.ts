/**
 * Posts sitemap — CMS Post rows that are:
 *   - status === 'published'
 *   - seo.noindex !== true
 */
import { cms } from '@/lib/cms';
import { buildUrlset, XML_HEADERS } from '@/lib/sitemap';

// Always render fresh so a deleted/unpublished post disappears from the sitemap
// immediately. Amplify's ISR/Data Cache doesn't reliably revalidate, which would
// otherwise leave deleted posts in the served XML. (getSitemapPosts is no-store.)
export const dynamic = 'force-dynamic';

export async function GET() {
  const data = await cms.getSitemapPosts();
  const items = data?.items ?? [];

  const xml = buildUrlset(
    items.map((p) => ({
      loc: `/blog/${p.slug}`,
      lastmod: p.updatedAt,
      changefreq: 'weekly',
      priority: 0.7,
    })),
  );

  return new Response(xml, { headers: XML_HEADERS });
}

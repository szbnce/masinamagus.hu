// sitemap.xml — minden fontos útvonal, kanonikus domainen (masinamagus.hu).
// A 404 szándékosan nincs benne.
import { services } from '../data/services';

const SITE = 'https://masinamagus.hu';

export function GET() {
  const staticPaths = [
    '/',
    '/szolgaltatasok',
    '/diagnosztika',
    '/szakszotar',
    '/blog',
    '/kapcsolat',
    '/aszf',
    '/gdpr',
  ];
  const servicePaths = services.map((s) => `/szolgaltatasok/${s.slug}`);

  // Blogcikkek slug-jai a tartalmi markdown fájlokból.
  const blogModules = import.meta.glob('../content/blog/*.md');
  const blogPaths = Object.keys(blogModules).map((file) => {
    const slug = file.split('/').pop()!.replace(/\.md$/, '');
    return `/blog/${slug}`;
  });

  const all = [...staticPaths, ...servicePaths, ...blogPaths];
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = all
    .map((path) => `  <url>\n    <loc>${SITE}${path === '/' ? '/' : path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

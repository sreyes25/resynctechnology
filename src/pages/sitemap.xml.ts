import type { APIRoute } from "astro";

const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/start", changefreq: "weekly", priority: "0.9" },
  { path: "/services/nyc-custom-software-development", changefreq: "weekly", priority: "0.95" },
  { path: "/services/brooklyn-software-developer", changefreq: "weekly", priority: "0.9" },
  { path: "/services/websites", changefreq: "weekly", priority: "0.9" },
  { path: "/services/digital-marketing", changefreq: "weekly", priority: "0.9" },
  { path: "/invoiceamericano", changefreq: "monthly", priority: "0.6" },
];

export const GET: APIRoute = ({ url }) => {
  const now = new Date().toISOString();
  const origin = url.origin;

  const urls = routes
    .map(
      (route) => `
  <url>
    <loc>${origin}${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`.trim(),
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

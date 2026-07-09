import { GetServerSideProps } from "next";

import { servicePages } from "@/data/servicePages";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/utils/seo";

function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const urls = [
    {
      loc: siteConfig.siteUrl,
      priority: "1.0"
    },
    ...["/consultorio", "/equipo", "/servicios"].map((path) => ({
      loc: absoluteUrl(siteConfig, path),
      priority: "0.8"
    })),
    ...servicePages.map((servicePage) => ({
      loc: absoluteUrl(siteConfig, `/servicios/${servicePage.slug}`),
      priority: "0.8"
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
};

export default Sitemap;

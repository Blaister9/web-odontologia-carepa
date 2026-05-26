import { GetServerSideProps } from "next";

import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/utils/seo";

function Robots() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robots = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl(siteConfig, "/sitemap.xml")}
`;

  res.setHeader("Content-Type", "text/plain");
  res.write(robots);
  res.end();

  return {
    props: {}
  };
};

export default Robots;

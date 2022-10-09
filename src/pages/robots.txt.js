export async function get() {
  return {
    body: `
    User-agent: MJ12bot
    Disallow: /

    Sitemap: https://www.comvation.com/sitemap-index.xml
    User-agent: *
    Allow: /`,
  };
}

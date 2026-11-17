// `vite build` çıktısını (dist/) arama motorlarına hazır hale getirir:
//
//   - Her dil ve sayfa için hazır HTML: dist/urunler/index.html, dist/en/products/index.html …
//   - Her blog yazısı için hazır HTML: dist/blog/<yazi>/index.html, dist/en/blog/<post>/index.html …
//   - dist/sitemap.xml (hreflang alternatifleriyle), dist/robots.txt, dil başına RSS (…/blog/rss.xml)
//   - dist/404.html, dist/admin/index.html, dist/panel/index.html (içeriği tarayıcıda çizilen boş kabuklar)
//
// Alan adı SITE_URL ile verilir:  SITE_URL=https://alanadiniz.com pnpm build
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = fileURLToPath(new URL("../", import.meta.url));
/** Site bir alt klasörde yayınlanıyorsa (BASE_PATH=/gamb/) sunucu ayarları da ona göre yazılır. */
const BASE = (() => {
  const raw = process.env.BASE_PATH ?? "/";
  const withLead = raw.startsWith("/") ? raw : `/${raw}`;
  return withLead.endsWith("/") ? withLead : `${withLead}/`;
})();
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

await build({
  root,
  logLevel: "warn",
  build: { ssr: "src/entry-server.tsx", outDir: "dist-ssr", emptyOutDir: true },
});
const server = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);

const template = readFileSync(join(dist, "index.html"), "utf8");
if (!template.includes("<!--seo-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("index.html içinde <!--seo--> ya da boş #root bulunamadı.");
}
const page = ({ head, html = "", lang = "en", dir = "ltr" }) =>
  template
    .replace(/<html[^>]*>/, `<html lang="${lang}" dir="${dir}">`)
    .replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
const write = (path, content) => {
  const file = join(dist, path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};
const xml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const routes = await server.routes();
for (const route of routes) {
  const rendered = await server.render(route.path);
  write(route.path ? `${route.path}/index.html` : "index.html", page(rendered));
}

// Tarayıcıda çizilen sayfalar: arama motorlarına kapalı boş kabuklar.
const shell = (title) =>
  page({ head: `<title>${title}</title>\n    <meta name="robots" content="noindex, nofollow">` });
write("404.html", shell("404 — Gamb Gaming"));
write("admin/index.html", shell("Yönetim — Gamb Gaming"));
write("panel/index.html", shell("gamb panel demo — Gamb Gaming"));

const today = new Date().toISOString().slice(0, 10);
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .map(
    (route) => `  <url>
    <loc>${xml(route.url)}</loc>
    <lastmod>${route.lastmod ?? today}</lastmod>
${route.alternates
  .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${xml(alt.href)}"/>`)
  .join("\n")}
  </url>`,
  )
  .join("\n")}
</urlset>
`,
);

write(
  "robots.txt",
  `User-agent: *
Allow: /
Disallow: ${BASE}admin
Disallow: ${BASE}panel

Sitemap: ${server.SITE_URL}/sitemap.xml
`,
);

for (const feed of await server.feeds()) {
  write(
    feed.path,
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${xml(feed.title)}</title>
    <link>${xml(feed.link)}</link>
    <description>${xml(feed.description)}</description>
    <language>${feed.locale}</language>
${feed.items
  .map(
    (item) => `    <item>
      <title>${xml(item.title)}</title>
      <link>${xml(item.link)}</link>
      <guid>${xml(item.link)}</guid>
      <pubDate>${new Date(`${item.date}T09:00:00Z`).toUTCString()}</pubDate>
      <description>${xml(item.description)}</description>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`,
  );
}

// Apache (.htaccess) ve Netlify (_redirects) ayarlarını kök klasöre göre yaz.
write(
  ".htaccess",
  `# Apache / cPanel: her adresin hazır HTML dosyası vardır (ör. ${BASE}en/products/index.html).
# Dosyası olmayan adresler 404 sayfasına düşer.
DirectoryIndex index.html
DirectorySlash Off
ErrorDocument 404 ${BASE}404.html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase ${BASE}
  # Kök: ${BASE.replace(/\/$/, "") || "/"} → index.html
  RewriteRule ^$ index.html [L]
  # ${BASE}en/products → ${BASE}en/products/index.html (yönlendirme yapmadan)
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.+?)/?$ $1/index.html [L]
</IfModule>
`,
);
write("_redirects", `${BASE}*    ${BASE}404.html   404\n`);

rmSync(ssrDir, { recursive: true, force: true });

const pages = routes.filter((route) => route.kind === "page").length;
const posts = routes.length - pages;
console.log(`Hazır HTML: ${pages} sayfa, ${posts} blog yazısı · sitemap.xml · robots.txt · RSS`);
if (server.SITE_URL.includes("example.com")) {
  console.warn(
    "UYARI: Alan adı verilmedi; adresler https://www.example.com ile yazıldı.\n" +
      "       Yayın için: SITE_URL=https://alanadiniz.com pnpm build",
  );
}

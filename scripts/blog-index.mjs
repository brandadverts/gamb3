// Blog yazılarını (content/blog/<dil>/<tarih>-<ad>.md) okur ve özet listesini çıkarır.
// vite.config.ts (virtual:blog-index) ve scripts/prerender.mjs bu dosyayı kullanır.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/** "---" arasındaki başlık bölümünü ve gövdeyi ayırır. */
export function parsePost(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const at = line.indexOf(":");
    if (at < 1) continue;
    const key = line.slice(0, at).trim();
    let value = line.slice(at + 1).trim();
    if (/^(".*"|'.*')$/.test(value)) value = value.slice(1, -1);
    meta[key] = value;
  }
  return { meta, body: match[2].trim() };
}

export function readBlogIndex(dir) {
  const index = {};
  if (!existsSync(dir)) return index;
  for (const locale of readdirSync(dir).sort()) {
    const folder = join(dir, locale);
    if (!statSync(folder).isDirectory()) continue;
    const posts = [];
    for (const name of readdirSync(folder)) {
      if (!name.endsWith(".md")) continue;
      const { meta, body } = parsePost(readFileSync(join(folder, name), "utf8"));
      if (!meta.title || meta.status === "draft") continue;
      const base = name.replace(/\.md$/, "");
      const date = meta.date || base.slice(0, 10);
      const slug = (meta.slug || base.replace(/^\d{4}-\d{2}-\d{2}-/, "")).toLowerCase();
      posts.push({
        slug,
        // Aynı yazının farklı dillerdeki sürümlerini birbirine bağlayan ortak anahtar.
        key: meta.key || `${date}-${slug}`,
        title: meta.title,
        description: meta.description || "",
        date,
        tags: (meta.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean),
        minutes: Math.max(1, Math.round(body.split(/\s+/).length / 200)),
        file: `/content/blog/${locale}/${name}`,
      });
    }
    posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));
    index[locale] = posts;
  }
  return index;
}

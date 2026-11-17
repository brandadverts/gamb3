// Blog yazılarını yayın kurallarına göre denetler (content/blog/<dil>/<tarih>-<ad>.md).
// Günlük görev her çalıştığında bunu çağırır; elle de çalıştırılabilir:
//
//   node scripts/check-posts.mjs
//
// Denetlenenler: baş bilgi alanları, dosya adı ↔ slug/tarih uyumu, açıklama uzunluğu,
// her `key` için sekiz dilin de bulunması, dil içinde tekrarlayan adres, gövde uzunluğu,
// gövdede h1 kullanılmaması ve site içi bağlantıların geçerli sayfalara gitmesi.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { parsePost } from "./blog-index.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const dir = join(root, "content/blog");
const LOCALES = ["tr", "en", "de", "fr", "es", "pt", "ru", "ar"];
const PAGES = ["home", "products", "technology", "cases", "packages", "demo", "blog"];
const REQUIRED = ["title", "description", "date", "slug", "key", "tags"];

// Hatalar derlemeyi/yayını bozar; uyarılar yalnızca kalite sinyalidir ve çıkış kodunu etkilemez.
const problems = [];
const warnings = [];
const byKey = new Map();
let count = 0;

for (const locale of LOCALES) {
  const folder = join(dir, locale);
  if (!existsSync(folder)) {
    problems.push(`${locale}: klasör yok (content/blog/${locale})`);
    continue;
  }
  const slugs = new Set();
  for (const name of readdirSync(folder).sort()) {
    if (!name.endsWith(".md")) continue;
    count++;
    const where = `${locale}/${name}`;
    const { meta, body } = parsePost(readFileSync(join(folder, name), "utf8"));

    for (const field of REQUIRED) {
      if (!meta[field]) problems.push(`${where}: baş bilgide "${field}" yok`);
    }
    if (meta.status === "draft") {
      problems.push(`${where}: status: draft — derlemeye girmez`);
      continue;
    }

    const match = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/.exec(name);
    if (!match) {
      problems.push(`${where}: dosya adı <YYYY-AA-GG>-<adres>.md biçiminde değil`);
    } else {
      if (meta.date && meta.date !== match[1]) {
        problems.push(`${where}: tarih (${meta.date}) dosya adıyla (${match[1]}) uyuşmuyor`);
      }
      if (meta.slug && meta.slug !== match[2]) {
        problems.push(`${where}: slug (${meta.slug}) dosya adıyla (${match[2]}) uyuşmuyor`);
      }
    }

    if (meta.slug) {
      if (!/^[a-z0-9-]+$/.test(meta.slug)) {
        problems.push(`${where}: slug yalnızca küçük harf, rakam ve tire içerebilir`);
      }
      if (slugs.has(meta.slug)) problems.push(`${where}: bu dilde aynı adres iki kez kullanılmış`);
      slugs.add(meta.slug);
    }

    if (meta.description && meta.description.length > 160) {
      problems.push(`${where}: açıklama ${meta.description.length} karakter (en çok 160)`);
    }
    if (meta.tags && meta.tags.split(",").filter((tag) => tag.trim()).length > 3) {
      problems.push(`${where}: üçten fazla etiket`);
    }

    // Kılavuzdaki hedef 450 – 800 kelime. Altında kalmak yayını engellemez ama rapora düşer.
    const words = body.split(/\s+/).filter(Boolean).length;
    if (words < 200) problems.push(`${where}: gövde çok kısa (${words} kelime)`);
    else if (words < 350) warnings.push(`${where}: gövde ince (${words} kelime, hedef 450 – 800)`);
    if (words > 1400) problems.push(`${where}: gövde çok uzun (${words} kelime)`);
    if (/^#\s/m.test(body)) problems.push(`${where}: gövdede h1 (#) var; başlık baş bilgiden gelir`);

    for (const [, target] of body.matchAll(/\]\(page:([a-z]+)\)/g)) {
      if (!PAGES.includes(target)) problems.push(`${where}: geçersiz site içi bağlantı: page:${target}`);
    }
    const internal = [...body.matchAll(/\]\(page:/g)].length;
    if (internal > 2) problems.push(`${where}: ${internal} site içi bağlantı (en fazla 2)`);

    if (meta.key) {
      if (!byKey.has(meta.key)) byKey.set(meta.key, new Map());
      const group = byKey.get(meta.key);
      if (group.has(locale)) problems.push(`${where}: "${meta.key}" anahtarı bu dilde zaten var`);
      group.set(locale, name);
    }
  }
}

for (const [key, group] of byKey) {
  const missing = LOCALES.filter((locale) => !group.has(locale));
  if (missing.length) problems.push(`"${key}": eksik dil(ler): ${missing.join(", ")}`);
}

console.log(`${count} yazı · ${byKey.size} konu · ${LOCALES.length} dil`);
if (warnings.length) {
  console.log(`\n${warnings.length} uyarı:`);
  for (const warning of warnings) console.log(`  - ${warning}`);
}
if (problems.length) {
  console.log(`\n${problems.length} hata:`);
  for (const problem of problems) console.log(`  - ${problem}`);
  process.exitCode = 1;
} else {
  console.log("\nHata yok.");
}

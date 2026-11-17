// Dil dosyalarının yapısını Türkçe ölçüyle karşılaştırır: anahtarlar, dizi uzunlukları,
// süslü parantezli yer tutucular ({modules}, {n}, …) ve karşılaştırma tablosunun
// "Dahil" / "—" hücre sayıları. TypeScript anahtarları zaten denetler; bu betik
// dizi uzunluğu ve yer tutucu gibi tipin yakalayamadığı farkları gösterir.
//
//   node scripts/check-locales.mjs
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = fileURLToPath(new URL("../", import.meta.url));
const codes = ["tr", "en", "de", "fr", "es", "pt", "ru", "ar"];
const work = mkdtempSync(join(tmpdir(), "gg-locales-"));
const entry = join(root, "scripts/.locales-entry.ts");

writeFileSync(
  entry,
  `${codes.map((c) => `import ${c} from "../src/i18n/locales/${c}";`).join("\n")}\nexport const all = { ${codes.join(", ")} };\n`,
);

try {
  await build({
    root,
    logLevel: "error",
    build: {
      ssr: relative(root, entry),
      outDir: work,
      emptyOutDir: true,
      rollupOptions: { output: { codeSplitting: false } },
    },
  });
  const { all } = await import(pathToFileURL(join(work, ".locales-entry.js")).href);

  const shape = (value, path, out) => {
    if (Array.isArray(value)) {
      out.push(`${path}[]=${value.length}`);
      value.forEach((item, i) => shape(item, `${path}[${i}]`, out));
    } else if (value && typeof value === "object") {
      for (const key of Object.keys(value).sort()) shape(value[key], `${path}.${key}`, out);
    } else {
      const holes = String(value).match(/\{[a-z]+\}/g);
      out.push(`${path}=${typeof value}${holes ? `:${holes.sort().join(",")}` : ""}`);
    }
  };

  const base = [];
  shape(all.tr, "", base);
  const expected = new Set(base);
  let problems = 0;

  for (const code of codes) {
    const dict = all[code];
    const lines = [];

    if (code !== "tr") {
      const current = [];
      shape(dict, "", current);
      const seen = new Set(current);
      for (const item of expected) if (!seen.has(item)) lines.push(`eksik/farklı: ${item}`);
      for (const item of seen) if (!expected.has(item)) lines.push(`fazla/farklı: ${item}`);
    }

    // Karşılaştırma tablosu: yeşil gösterilen hücreler t.packages.included ile birebir eşleşmeli.
    const cells = dict.packages.comparison.flatMap((row) => row.cells);
    const included = cells.filter((cell) => cell === dict.packages.included).length;
    const dashes = cells.filter((cell) => cell === "—").length;
    const baseIncluded = all.tr.packages.comparison
      .flatMap((row) => row.cells)
      .filter((cell) => cell === all.tr.packages.included).length;
    if (included !== baseIncluded) lines.push(`"${dict.packages.included}" hücresi ${included}, beklenen ${baseIncluded}`);
    if (dashes !== 3) lines.push(`"—" hücresi ${dashes}, beklenen 3`);

    if (lines.length) {
      problems++;
      console.log(`\n## ${code}`);
      for (const line of lines.slice(0, 40)) console.log(`  ${line}`);
      if (lines.length > 40) console.log(`  … ${lines.length - 40} satır daha`);
    }
  }

  console.log(problems ? `\n${problems} dilde fark var.` : "\nDiller tr ile aynı yapıda.");
  process.exitCode = problems ? 1 : 0;
} finally {
  rmSync(entry, { force: true });
  rmSync(work, { recursive: true, force: true });
}

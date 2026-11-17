// `vite build --mode preview` çıktısını tek dosyalık bir önizlemeye dönüştürür.
//
//   dist-preview/index.html     Çift tıklayınca açılan, CSS ve JS'i içinde taşıyan tam sayfa.
//   dist-preview/artifact.html  Aynı içerik, <html>/<head>/<body> etiketleri olmadan
//                               (sayfayı kendi iskeletine saran önizleme ortamları için).
//   dist-preview/img/           Görseller (sayfa bunlara göreli adresle ulaşır).
import { readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const out = fileURLToPath(new URL("../dist-preview/", import.meta.url));
const assets = join(out, "assets");
const files = readdirSync(assets);
const read = (ext) => {
  const name = files.find((file) => file.endsWith(ext));
  if (!name) throw new Error(`dist-preview/assets içinde ${ext} dosyası yok. Önce derleyin.`);
  return readFileSync(join(assets, name), "utf8");
};

// CSS assets/ klasöründen sayfanın içine taşındığı için görsel adresleri bir üst klasöre göre düzelir.
const css = read(".css").replaceAll("url(../img/", "url(img/");
// Satır içi betikte kapanış etiketi geçerse sayfayı bozmasın.
const js = read(".js").replaceAll("</script", "<\\/script");

const leftover = css.match(/url\((?!data:|img\/)[^)]*\)/g);
if (leftover) throw new Error(`CSS içinde çözülemeyen adres var: ${leftover.join(", ")}`);

const TITLE = "Gamb Gaming Sitesi";
const body = `<style>${css}</style>
<div id="root"></div>
<noscript>Bu siteyi görüntülemek için tarayıcınızda JavaScript'i etkinleştirin.</noscript>
<script type="module">${js}</script>
`;

writeFileSync(
  join(out, "artifact.html"),
  `<title>${TITLE}</title>
<meta name="claude:viewport-fit-sides" content="cover">
${body}`,
);

writeFileSync(
  join(out, "index.html"),
  `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>${TITLE}</title>
<meta name="theme-color" content="#111416">
<link rel="icon" type="image/png" href="favicon.png">
</head>
<body>
${body}</body>
</html>
`,
);

// Tek dosyalık önizlemede bunlara gerek yok.
rmSync(assets, { recursive: true });
for (const file of [".htaccess", "_redirects", "robots.txt"])
  rmSync(join(out, file), { force: true });

console.log("Önizleme hazır: dist-preview/index.html");

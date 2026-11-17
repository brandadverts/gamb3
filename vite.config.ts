import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
// @ts-expect-error — düz JavaScript dosyası; tipleri burada gerekmiyor.
import { readBlogIndex } from "./scripts/blog-index.mjs";

// Vite yapılandırması — https://vite.dev/config/
//
// Üç derleme vardır:
//  - `pnpm build`          → dist/          Gerçek alan adı için. Her dil ve sayfa için hazır HTML,
//                                           site haritası ve RSS üretir (scripts/prerender.mjs).
//  - `pnpm build:preview`  → dist-preview/  Her klasörden açılabilen, #adresli tek dosyalık önizleme.
//  - `vite build --ssr`    → dist-ssr/      Statik HTML üretimi için sunucu tarafı paketi (build içinde çalışır).
//
// Site bir alt klasörde yayınlanacaksa: BASE_PATH=/alt-klasor/ pnpm build
// Alan adı: SITE_URL=https://alanadiniz.com pnpm build

const BLOG_DIR = fileURLToPath(new URL("./content/blog", import.meta.url));
const BLOG_ID = "virtual:blog-index";

/** content/blog içindeki yazıların özet listesini `virtual:blog-index` olarak sunar. */
function blogIndex(): Plugin {
  return {
    name: "gg-blog-index",
    resolveId(source) {
      return source === BLOG_ID ? `\0${BLOG_ID}` : undefined;
    },
    load(id) {
      if (id !== `\0${BLOG_ID}`) return undefined;
      return `export default ${JSON.stringify(readBlogIndex(BLOG_DIR))};`;
    },
    configureServer(server) {
      server.watcher.add(BLOG_DIR);
      const refresh = (file: string) => {
        if (!file.startsWith(BLOG_DIR)) return;
        const module = server.moduleGraph.getModuleById(`\0${BLOG_ID}`);
        if (module) server.moduleGraph.invalidateModule(module);
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", refresh).on("unlink", refresh).on("change", refresh);
    },
  };
}

export default defineConfig(({ mode, isSsrBuild }) => {
  const isPreview = mode === "preview";

  return {
    base: isPreview ? "./" : (process.env.BASE_PATH ?? "/"),
    plugins: [react(), tailwindcss(), blogIndex()],
    define: {
      // Önizleme derlemesinde adresler #urunler biçiminde tutulur; sunucu ayarı gerekmez.
      ...(isPreview ? { "import.meta.env.VITE_ROUTER": JSON.stringify("hash") } : {}),
      "import.meta.env.VITE_SITE_URL": JSON.stringify(process.env.SITE_URL ?? ""),
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: isSsrBuild ? "dist-ssr" : isPreview ? "dist-preview" : "dist",
      // Önizleme derlemesinde yazı tipleri CSS'in içine gömülür.
      assetsInlineLimit: isPreview ? 200_000 : 4096,
      // Önizleme tek dosyadır: sonradan yüklenen parçalar (diller, admin, panel, yazılar) pakete gömülür.
      rollupOptions: isPreview ? { output: { inlineDynamicImports: true } } : undefined,
    },
  };
});

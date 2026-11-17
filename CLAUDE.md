# Gamb Gaming sitesi — devir notu (Cowork oturumundan Claude Code'a)

Bu klasör, `gamb-proje-v2`nin üzerine başlanmış **yarım kalmış** büyük bir işin son halidir.
`gamb-proje-v2` çalışan, tek dilli (Türkçe) son sürümdür ve dokunulmadan duruyor.
Kullanıcı Türkçe yazar; yanıtlar Türkçe olmalı. Kod kuralları için `AGENTS.md` dosyasına bakın
(marka adı tek başına "gamb" yazılmaz → "Gamb Gaming"; ürün adları gambpay, gambcrm, gambaffiliate aynen kalır).

## Kullanıcının isteği (aynen)

> modüllerin detaylı olarak nasıl çalıştığını şifreli bir admin panelde demo yarat detaylı olsun. sitenin diğer
> dillerde çevirisini o dillerin mizacına uygun şekilde humanize ederek yaz 15 yıllık bir altyapı geliştirici gibi.
> ayrıca sitenin tamamını editleyebileceğimiz güzel bir admin ve sadece içerik giren bir moderatör kısmı yap.
> seoya uygun blog yap tüm siteyi seoya uygun hazırla ve blog içerikleri altyapı sağlayıcı arayan kişilere uygun
> hergün 1 tane tüm dillerde blog üretsin.

Sorulan sorulara verdiği yanıtlar:

- **Diller:** Türkçe + EN, RU, ES, PT, DE, FR, AR (Arapça sağdan sola).
- **Arka uç:** Önce çalışan prototip. Admin, moderatör ve demo paneli tüm ekranlarıyla hazırlanır; veriler
  yalnızca tarayıcıda (localStorage) tutulur, şifre gerçek koruma sağlamaz. Arka uç sonra bağlanır.
- **Blog yayını:** Otomatik yayınla (onay beklemeden).
- **Blog üretimi:** Günlük zamanlanmış Claude görevi (her gün her dilde 1 yazı).

## Mimari kararlar

- **Metinler:** `src/i18n/locales/<dil>.ts`. `tr.ts` ölçüdür (`Dictionary = typeof tr`); diğerleri aynı yapıda.
  Türkçe pakettedir, diğer diller dinamik `import()` ile yüklenir. Yer tutucular: `{modules}`, `{groups}`, `{n}`, `{group}`.
- **Yapısal veri** (görseller, çapalar, kataloğun iskeleti, grafik değerleri, API örneği): `src/data.ts`.
  Katalog metinleri `dict.catalog.groups[id]` ve `dict.catalog.modules[id]` içindedir; `useCatalog()` birleştirir.
- **Yönlendirici** (`src/router.tsx`): durum `{locale, route, slug}`. İngilizce (ana dil) öneksiz, diğerleri `/tr/...`, `/de/...`. `tr.ts` yine metinlerin ölçüsüdür.
  Sayfa adresleri dile göre `SLUGS` tablosunda. Önizleme (hash) modunda yalnızca harf, rakam, tire:
  `#products`, `#tr-urunler`, `#blog-<post>`, `#tr-blog-<yazi>`, `#admin`, `#panel`.
- **Blog:** `content/blog/<dil>/<tarih>-<ad>.md`, baş bilgi: `title, description, date, slug, key, tags`
  (`key` aynı yazının dillerdeki sürümlerini bağlar → hreflang). Özet listesi `virtual:blog-index`
  (vite.config.ts eklentisi, `scripts/blog-index.mjs`); gövdeler `import.meta.glob` ile tembel yüklenir.
  Markdown çevirici `src/blog/markdown.tsx`; site içi bağlantı: `[metin](page:products)`.
- **SEO:** `src/seo.ts` → `buildHead()` (başlık, açıklama, kanonik, hreflang, OG, JSON-LD: Organization, WebSite,
  BreadcrumbList, FAQPage, Blog, BlogPosting). `pnpm build` = tsc + vite build + `scripts/prerender.mjs`
  (SSR girişi `src/entry-server.tsx`): her dil/sayfa/yazı için `dist/<yol>/index.html`, `sitemap.xml`, `robots.txt`,
  dil başına RSS, `404.html`, admin/panel için boş kabuk. Alan adı: `SITE_URL=https://… pnpm build`
  (verilmezse `https://www.example.com` yazılır ve uyarı basılır — **gerçek alan adı kullanıcıya sorulmalı**).
- **Admin değişiklikleri:** `src/i18n/overrides.ts` (localStorage `gg.overrides.v1`, yol → metin) ve
  `src/blog/localPosts.ts` (`gg.posts.v1`). `main.tsx`: değişiklik varsa hydrate yerine baştan çizer.
- **Önizleme derlemesi:** `pnpm build:preview` → `dist-preview/index.html` tek dosya
  (`inlineDynamicImports` ile diller, admin, panel ve yazılar pakete gömülür) + `artifact.html`.

## Durum

Sekiz maddelik kalan iş listesi tamamlandı. `pnpm typecheck`, `pnpm build`, `pnpm check:locales`
ve `pnpm check:posts` temiz çalışıyor.

Yapılanlar:

1. **CSS** — Jost (Kiril) ve Tajawal (Arapça) `unicode-range` ile "Alata" ailesine, Plex Mono Kiril
   eklendi. Dil seçici, mobil ve alt bilgi dil listeleri, blog (liste + yazı sayfası),
   `.visually-hidden`, `.tool-loading` yazıldı. Yön bilgisi veren kurallar mantıksal özelliklere
   çevrildi; çevrilemeyenler (oklar, çizim yönü, hero perdesi) dosya sonundaki "Sağdan sola"
   bölümünde `[dir="rtl"]` ve `:lang(ar)` ile düzeltildi. Performans bandı LTR kaldı.
2. **Prerender** — 56 sayfa + 40 yazı = 96 adres; `hreflang`, site haritası, dil başına RSS,
   JSON-LD doğrulandı. Hydrate uyumu tarayıcıda denetlendi (konsol temiz; yalnızca tarayıcının
   otomatik `/favicon.ico` isteği 404 veriyor, `favicon.png` tanımlı).
3. **Çeviriler** — EN, DE, FR, ES, PT, RU, AR elden yazıldı; sayı biçimleri dile göre yerelleştirildi.
   `scripts/check-locales.mjs` dizi uzunluklarını ve yer tutucuları `tr` ile karşılaştırır.
4. **Admin + moderatör** — `src/admin/`: giriş, roller, dil sekmeli düzenleyici (alanlar `tr.ts`
   gezilerek üretilir, her alanın üstünde TR referansı), SEO, blog yönetimi, kullanıcı listesi,
   dışa/içe aktarma ve sıfırlama.
5. **Modül demosu** — `src/panel/`: 7 başlık / 32 modül, tek çizici + `demo-data.ts` yapılandırması;
   her modülde akış, göstergeler, satır işlemleri (onayla/reddet/aç-kapat), kurallar, işlem günlüğü.
6. **Blog** — `content/blog/YAZIM-KILAVUZU.md` ve sekiz dilde yazılar. `scripts/check-posts.mjs`
   eksik dil, bozuk baş bilgi ve dosya adı uyuşmazlığını denetler; ince yazıları uyarı olarak basar.
7. **Günlük görev** — `~/.claude/scheduled-tasks/gamb-gunluk-blog/` (cron `12 7 * * *`, ~07:25).
   Akış ve konu havuzu `content/blog/GUNLUK-GOREV.md` dosyasındadır. Görev yalnızca uygulama
   açıkken çalışır ve yalnızca `content/blog/` altına yazar.
8. **Belgeler** — `README.md` ve `AGENTS.md` yeni yapıya göre yeniden yazıldı.

Yayın:

- Depo: **brandadverts/gamb3** · Canlı: **https://brandadverts.github.io/gamb3/**
- `main` kaynak, `gh-pages` derlenmiş çıktı. Yeniden yayın: `./deploy/publish.sh`
  (BASE_PATH ve SITE_URL `origin`den türetilir).
- GitHub Actions akışı yazıldı ama `deploy/pages.yml` içinde duruyor: token'da `workflow`
  yetkisi olmadığı için `.github/workflows/` altına yazılamadı. Açma adımları README'de.

Bu turda düzeltilenler:

- Telefonda (375 px) başlık yatayda taşıyordu: logonun animasyon payı (8,35em) + dil seçici
  426 px gerektiriyordu. Telefonda pay kaldırıldı.
- Hero istatistiklerinde İngilizce etiket ("32 modules", 122 px) 111 px'lik sütunda
  kırpılıyordu. Sütunlar içeriğe göre genişliyor, gerekirse alt satıra iniyor.

Açık kalan:

- Özel alan adı bağlanmadı; şu an GitHub Pages alt klasöründe yayında.
- Canlıda iki site daha var (brandadverts/gamb kart destesi, brandadverts/gamb2 tek sayfa
  kurumsal). Üçü farklı marka yönü; hangisinde karar kılınacağı belirlenmedi.
- `gamb2` deploy'unda canonical, head hreflang, JSON-LD ve og:image yok; TR/EN tek URL'de
  JS ile değişiyor (arama motoru tek sayfa görüyor).
- `new-game-releases` konusunun DE, RU ve AR sürümleri hedefin altında (300 – 320 kelime).

## Kullanıcıya açıkça söylenmesi gerekenler

- Prototipte şifreler tarayıcıya giden kodun içindedir; gerçek koruma değildir.
- Admin değişiklikleri yalnızca o tarayıcıda görünür.
- Yeni metinler, panel sayıları ve çeviriler taslaktır; yayından önce gözden geçirilmeli.
- Hero videosu yer tutucudur, kullanım hakkı doğrulanmadı. ® işareti tescil gerektirir.

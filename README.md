# Gamb Gaming — B2B iGaming sitesi

React 19 + Vite 8 + Tailwind CSS v4 ile yazılmış çok dilli tanıtım sitesi.

- **Yedi sayfa:** Ana sayfa, Ürünler, Teknoloji, Vaka çalışmaları, Paketler, Demo, Blog
- **Sekiz dil:** İngilizce (ana dil, öneksiz) + TR, DE, FR, ES, PT, RU, AR (Arapça sağdan sola)
- **İki kapalı araç:** `/admin` yönetim paneli ve `/panel` modül demosu (ikisi de prototiptir)
- Her dil ve sayfa için hazır HTML, site haritası, `hreflang` ve dil başına RSS

## Çalıştırma

```bash
pnpm install        # bir kez
pnpm dev            # geliştirme sunucusu (http://localhost:5173)
pnpm build          # tip denetimi + yayın derlemesi → dist/
pnpm preview        # dist/ klasörünü yerelde dene
pnpm typecheck      # yalnızca TypeScript denetimi
pnpm check:locales  # dil dosyaları tr ile aynı yapıda mı
pnpm check:posts    # blog yazıları yayın kurallarına uygun mu
pnpm format         # oxfmt
```

Node 22 ve pnpm 10 kullanılır (`.mise.toml`).

## Yayınlama

```bash
SITE_URL=https://alanadiniz.com pnpm build
```

`SITE_URL` verilmezse adresler `https://www.example.com` ile yazılır ve derleme uyarı basar.
Kanonik adresler, `hreflang` bağlantıları, site haritası ve RSS bu değerden üretilir — **canlıya
çıkmadan önce mutlaka verin.**

Sonra `dist/` klasörünün **içeriğini** barındırma hizmetinize yükleyin.

### GitHub Pages (şu anki yayın)

Site `brandadverts/gamb3` deposundan yayınlanır:
**https://brandadverts.github.io/gamb3/**

- `main` dalı kaynak kodu tutar.
- `gh-pages` dalı derlenmiş `dist/` çıktısını tutar; Pages bu daldan yayın yapar.
- Yeniden yayın tek komuttur:

```bash
./deploy/publish.sh
```

Betik, adres önekini (`BASE_PATH`) ve kanonik adresi (`SITE_URL`) `origin` uzak deposundan
türetir; depo adı değişirse ayrıca bir şey düzenlemek gerekmez.

Yayını GitHub Actions'a devretmek için (her `main` push'unda otomatik derleme):

```bash
gh auth refresh -s workflow
mkdir -p .github/workflows && git mv deploy/pages.yml .github/workflows/pages.yml
git commit -m "ci: Pages yayin akisi" && git push
```

Ardından depo ayarlarında Pages kaynağını **GitHub Actions** yapın. Bu adım token'da
`workflow` yetkisi gerektirdiği için ilk kurulumda atlandı.



Site temiz adresler kullanır (`/products`, `/tr/urunler`, `/blog/post-name` …). Her adres için
hazır bir HTML dosyası üretilir; yine de bilinmeyen adreslerin `index.html`'e düşmesi gerekir.
Gerekli dosyalar hazırdır:

| Barındırma                | Dosya               | Not                               |
| ------------------------- | ------------------- | --------------------------------- |
| Netlify, Cloudflare Pages | `public/_redirects` | `dist/` içine otomatik kopyalanır |
| Apache, cPanel            | `public/.htaccess`  | `dist/` içine otomatik kopyalanır |
| Vercel                    | `vercel.json`       | Proje kökünde kalır               |

Site bir alt klasörde yayınlanacaksa: `BASE_PATH=/alt-klasor/ pnpm build`
(`.htaccess` içindeki `RewriteBase` ve `RewriteRule` satırlarını da aynı klasöre göre güncelleyin).

### Sunucu ayarı gerektirmeyen önizleme

```bash
pnpm build:preview   # → dist-preview/
```

`dist-preview/index.html` tek başına çalışır: çift tıklayarak açabilir ya da klasörü herhangi bir
yere yükleyebilirsiniz. Bu derlemede adresler `#products`, `#tr-urunler`, `#admin` biçimindedir ve
diller, admin, panel ve blog yazıları tek dosyaya gömülür.

## Nerede ne var

| Dosya                          | İçerik                                                           |
| ------------------------------ | ---------------------------------------------------------------- |
| `src/i18n/locales/tr.ts`       | **Türkçe metinlerin tamamı.** Diğer dillerin ölçüsü              |
| `src/i18n/locales/<dil>.ts`    | EN, DE, FR, ES, PT, RU, AR metinleri (tr ile aynı yapıda)        |
| `src/i18n/index.tsx`           | Dil listesi, tembel yükleme, `useT()`, katalog birleştirme       |
| `src/i18n/overrides.ts`        | Admin panelinde yapılan metin değişiklikleri (localStorage)      |
| `src/data.ts`                  | Dile bağlı olmayan veri: görseller, katalog iskeleti, API örneği |
| `src/router.tsx`               | Yönlendirici (`path` ve `hash` modları), dile göre adresler      |
| `src/seo.ts`                   | `<head>` etiketleri: kanonik, hreflang, OG, JSON-LD              |
| `src/entry-server.tsx`         | Statik HTML üretiminin giriş noktası                             |
| `src/pages/*.tsx`              | Sayfalar (`Blog.tsx` hem liste hem yazı sayfası)                 |
| `src/blog/`                    | Yazı listesi, Markdown çevirici, panelde yazılan yazılar         |
| `src/admin/`                   | Yönetim paneli (`/admin`)                                        |
| `src/panel/`                   | gamb PANEL modül demosu (`/panel`)                               |
| `src/components/Layout.tsx`    | Üst başlık, mobil menü, alt bilgi                                |
| `src/components/LangSwitch.tsx`| Dil seçici ve dil bağlantıları                                   |
| `src/components/ui.tsx`        | Hero, bölüm başlığı, sayfa sonu çağrısı                          |
| `src/components/Logo.tsx`      | Hareketli logo (gg → gamb → gg, üzerine gelince tam ad, ®)       |
| `src/components/MorphIcon.tsx` | Ana sayfadaki dönüşen çizgi simge                                |
| `src/components/Console.tsx`   | Ana sayfadaki temsili gamb PANEL görünümü                        |
| `src/components/DataFlow.tsx`  | Performans bandındaki çizim                                      |
| `src/index.css`                | Tasarım belirteçleri ve tüm stiller (admin ve panel dahil)       |
| `src/fonts/`                   | Alata, Jost (Kiril), Tajawal (Arapça), Kumar One, IBM Plex Mono  |
| `content/blog/`                | Blog yazıları, yazım kılavuzu ve günlük görev notu               |
| `scripts/`                     | Blog dizini, statik HTML üretimi, önizleme, denetim betikleri    |
| `public/img/`, `public/video/` | Görseller (WebP) ve hero videosu                                 |

## Metin değiştirme

Bütün site metinleri `src/i18n/locales/` altındadır. Türkçe dosya ölçüdür: `tr.ts` içine bir alan
eklerseniz TypeScript diğer yedi dilde eksik olanı derlemede gösterir.

```bash
pnpm check:locales   # dizi uzunlukları ve {yer tutucular} da tutuyor mu
```

Süslü parantezli yer tutucular çalışma anında doldurulur: `{modules}`, `{groups}`, `{n}`, `{group}`.

Metinleri tarayıcıdan düzenlemek için `/admin` kullanılabilir; oradaki değişiklikler **yalnızca o
tarayıcıda** durur (bkz. "Yönetim paneli").

## Ürün ekleme ve çıkarma

İskelet `src/data.ts` içindeki `catalogStructure` listesindedir (hangi modül hangi başlıkta).
Adlar ve açıklamalar her dilin `catalog.groups` / `catalog.modules` bölümündedir. Ürünler sayfası,
ana sayfa özeti, alt bilgi bağlantıları, demo formundaki seçenekler ve sitedeki "N modül"
ifadeleri bu listeden kendiliğinden güncellenir.

Bir modül eklerken: `data.ts` içine kimliği, sekiz dil dosyasına metinleri, `src/panel/demo-data.ts`
içine de demo yapılandırmasını ekleyin.

## Blog

Yazılar `content/blog/<dil>/<YYYY-AA-GG>-<adres>.md` dosyalarıdır. Baş bilgideki `key` aynı yazının
farklı dillerdeki sürümlerini birbirine bağlar; dil seçici ve `hreflang` bunu kullanır.

- `content/blog/YAZIM-KILAVUZU.md` — hedef kitle, ton, yasaklar, baş bilgi biçimi
- `content/blog/GUNLUK-GOREV.md` — günlük görevin akışı ve konu havuzu
- `pnpm check:posts` — eksik dil, bozuk baş bilgi, dosya adı uyuşmazlığı denetimi

Her gün sekiz dilde bir yazı ekleyen zamanlanmış bir Claude görevi kuruludur
(`~/.claude/scheduled-tasks/gamb-gunluk-blog/`). Görev yalnızca uygulama açıkken çalışır ve
yalnızca `content/blog/` altına dosya ekler; canlıya çıkmak için derleme ve dağıtım gerekir.

## Yönetim paneli (`/admin`)

İki rol vardır: **yönetici** (her şey) ve **moderatör** (yalnızca sayfa metinleri ve blog).
Dil sekmeli metin düzenleyici, her alanın üstünde Türkçe referans metni, SEO alanları, blog
yönetimi, kullanıcı listesi ve dışa/içe aktarma vardır.

> **Prototiptir.** Parolalar tarayıcıya inen kodun içindedir (`src/admin/accounts.ts`) ve gerçek
> koruma sağlamaz. Yapılan değişiklikler yalnızca o tarayıcıda (`localStorage`) durur; ziyaretçiye
> yansımaz. Kalıcı olması için panelden dışa aktarılan metinler dil dosyalarına, yazılar
> `content/blog/` klasörüne işlenmelidir.

## Modül demosu (`/panel`)

Yedi başlık ve 32 modülün nasıl çalıştığını gösteren kapalı demo: her modülde "nasıl çalışır"
akışı, göstergeler, satır işlemleri olan örnek tablo, kurallar ve işlem günlüğü. Ekranı tek bir
çizici üretir; içerik `src/panel/demo-data.ts` dosyasındadır.

> **Temsilidir.** Parola kodun içindedir ve gerçek koruma sağlamaz. Bütün sayılar ve kayıtlar
> uydurmadır; hiçbir gerçek veriye bağlı değildir.

Arama motorlarına kapalıdır (`robots.txt` ve sayfa üstünde `noindex`).

## Demo formu

Form varsayılan olarak **önizleme modundadır**: alanları doğrular ama hiçbir yere veri göndermez
ve bunu ziyaretçiye açıkça söyler.

Gerçek talepleri almak için `.env` dosyasına bir adres yazın (bkz. `.env.example`):

```
VITE_FORM_ENDPOINT=https://ornek.com/api/demo
```

Form bu adrese JSON olarak `POST` eder:
`name, role, email, company, stage, products[], message, consent, source`.
2xx dışındaki her yanıt ziyaretçiye "gönderilemedi" olarak gösterilir.

Canlıya almadan önce formdaki "Gizlilik bildirimi" ifadesini gerçek bir gizlilik / KVKK
sayfasına bağlayın.

## Hero videosu

Ana sayfanın üst bölümünde sessiz, döngülü bir arka plan videosu oynar.

- Dosyalar: `public/video/hero-roulette.mp4` ve `.webm`, bekleme karesi
  `public/img/hero-roulette-poster.webp`.
- Başka bir klip için dosyaları `public/video/` içine koyun ve `src/data.ts` içinde
  `heroMedia.home.video` altındaki adları değiştirin. Videoyu kaldırmak için o `video` alanını silin.
- Saydamlık ve renk `src/index.css` içinde `.hero` altındadır:
  `--hero-video-opacity: 0.5` ve `--hero-video-filter` (renkli video için `none`).
- Önerilen dosya: 1920×1080, 10–15 saniye, sessiz, 2 MB altı. Örnek dönüştürme:
  `ffmpeg -i kaynak.mp4 -an -t 12 -vf scale=1920:-2 -c:v libx264 -crf 28 -movflags +faststart hero.mp4`
- Mevcut klip gambgaming klasörünüzdeki rulet videosundan kırpıldı; çözünürlüğü düşüktür
  (540 piksel) ve kullanım hakkını sizin doğrulamanız gerekir.

## Çizgi ve dolgu ayarları

`src/index.css` başındaki `:root` içinde üç ayar vardır:

- `--border-mix: 30%` çizgilerin opaklığıdır (`100%` tam renk). Düğme ve form alanı çizgileri
  kullanılabilirlik için bunun dışında tutuldu.
- `--tile-alpha: 0` açık kartların zemin opaklığıdır (`0` zemin yok, `0.5` yarı saydam).
- `--btn-h: 46px` bütün düğmelerin yüksekliğidir. Yan boşluk bu değerden hesaplanır ve yazının
  üstünde ve altında kalan boşluğa eşittir; düğmeler yazısı kadar geniştir.

Üzerine gelince görünen dolgular (`:hover`) %50 opaktır.

## Sağdan sola (Arapça)

Yerleşim `[dir="rtl"]` ile aynalanır, tipografi `:lang(ar)` ile ayarlanır — böylece Arapça
sayfadaki İngilizce ürün adları (`lang="en"`) Latin harf aralığını korur. Yön bilgisi veren CSS
kuralları mantıksal özelliklerle (`border-inline-start`, `inset-inline-end`, `text-align: start`)
yazılmıştır; yeni kural eklerken aynısını yapın. İlgili bölüm `src/index.css` sonundadır.

## Yayından önce gözden geçirin

Bu sürümdeki metinler taslaktır. Aşağıdakileri kendi ürününüzle karşılaştırın:

- `SITE_URL` verilerek derlendi mi (yoksa adresler `example.com` olur)
- Ürün kataloğundaki 32 modül ve madde listeleri (sekiz dilde)
- Çeviriler: EN, DE, FR, ES, PT, RU, AR metinleri taslaktır, anadili konuşan biri okumalı
- Teknoloji sayfasındaki temsili API örneği (`src/data.ts` → `apiSample`)
- `/panel` demosundaki bütün sayılar ve kayıtlar (`src/panel/demo-data.ts`) — hepsi uydurmadır
- Uyum ve sorumlu oyun bölümü, vaka senaryoları, risk tablosu ve SSS maddeleri
- Blog yazıları (`content/blog/`) ve günlük görevin ürettikleri
- Hero videosunun kullanım hakkı; logodaki ® işareti tescil gerektirir

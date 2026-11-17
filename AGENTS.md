# gamb-site

Gamb Gaming için React 19 + Vite 8 + Tailwind CSS v4 çok dilli tanıtım sitesi. Marka adı tek başına "gamb" yazılmaz; her yerde "Gamb Gaming" kullanılır (ürün adları gambpay, gambcrm, gambaffiliate hariç). Arayüz dili Türkçe; site sekiz dilde yayınlanır. Ayrıntılar için `README.md`.

## Komutlar

- `pnpm dev` — geliştirme sunucusu
- `pnpm typecheck` — TypeScript denetimi
- `pnpm build` — tip denetimi + hazır HTML, site haritası, RSS → `dist/`
- `pnpm build:preview` — tek dosyalık, `#` adresli önizleme → `dist-preview/`
- `pnpm check:locales` — dil dosyaları `tr` ile aynı yapıda mı (dizi uzunlukları, yer tutucular)
- `pnpm check:posts` — blog yazıları yayın kurallarına uygun mu
- `pnpm format` — oxfmt

Yayın derlemesinde alan adı verilir: `SITE_URL=https://alanadiniz.com pnpm build`.

## Kurallar

- **Metin değişiklikleri `src/i18n/locales/` içinde yapılır.** `tr.ts` ölçüdür; bir alan eklenince sekiz dilin hepsine eklenir. Dile bağlı olmayan veri (görseller, katalog iskeleti, grafik değerleri, API örneği) `src/data.ts` dosyasındadır.
- Sayı biçimleri dile uyar: TR/DE/ES/PT `590.418`, EN `590,418`, FR/RU `590 418`. Yüzde işaretinin yeri de dile göre değişir.
- Sayfa içi gezinme için `src/router.tsx` içindeki `<Link to="…">` kullanılır; `<a href="/…">` yazılmaz. Blog gövdesinde site içi bağlantı `[metin](page:products)` biçimindedir.
- Görsel adresleri `img("ad")` ile üretilir; CSS'te `url("/img/ad.webp")` yazılır.
- Renk, yazı ve boşluk değerleri `src/index.css` başındaki `:root` belirteçlerinden alınır.
- Yazı tipleri `src/fonts/` içindedir; dış sunucudan yazı tipi yüklenmez. Kiril metin Jost, Arapça metin Tajawal ile çizilir (ikisi de "Alata" ailesine `unicode-range` ile bağlıdır).
- **Yön bilgisi veren CSS mantıksal özelliklerle yazılır:** `border-inline-start`, `inset-inline-end`, `padding-inline`, `text-align: start`. Aynalanamayan şeyler (ok işaretleri, çizim yönü) `src/index.css` sonundaki "Sağdan sola" bölümünde düzeltilir.
- Köşe yuvarlatma kullanılmaz; kartlar ince çizgilerle ayrılan düz karolardır.
- `text-transform: uppercase` Türkçe kurallarıyla çalışır (i → İ). İngilizce ürün adlarına `lang="en"` verin.
- Logo `src/components/Logo.tsx` bileşenidir: başlıkta gg → gamb → gg döngüsü, üzerine gelince "gamb gaming"; ® işareti her zaman görünür. Logoyu düz metin olarak yazmayın.
- Tailwind'in sıfırlaması liste işaretlerini kaldırır; düz metin listelerinde (`.post-body`, `.pnl-rules`) `list-style` açıkça verilir.

## Blog

- Yazılar `content/blog/<dil>/<YYYY-AA-GG>-<adres>.md`. Kurallar `content/blog/YAZIM-KILAVUZU.md` dosyasındadır: hedef kitle altyapı sağlayıcısı arayan operatör ekipleridir; uydurma istatistik, uydurma müşteri ve oyunculara dönük teşvik yazılmaz.
- Baş bilgideki `key` aynı yazının bütün dillerdeki sürümlerinde aynıdır (`hreflang` bunu kullanır). Bir konu ya sekiz dilde birden eklenir ya da hiç eklenmez.
- Günlük görevin akışı ve konu havuzu `content/blog/GUNLUK-GOREV.md` dosyasındadır.

## Prototip olan yerler

`/admin` ve `/panel` birer prototiptir: parolalar tarayıcıya inen kodun içindedir ve gerçek koruma sağlamaz. Panelde yapılan değişiklikler yalnızca o tarayıcıda (`localStorage`) durur. `/panel` demosundaki bütün sayılar ve kayıtlar uydurmadır. Bu üç cümle, bu alanlara dokunan her değişiklikte geçerliliğini korumalıdır.

# Blog yazım kılavuzu

Bu klasördeki yazılar Gamb Gaming blogunu besler. Kılavuz, hem elle yazarken hem de günlük
zamanlanmış görev çalışırken geçerlidir.

## Kime yazıyoruz

Altyapı sağlayıcısı arayan ya da mevcut platformundan memnun olmayan **operatör ekipleri**:
platform direktörü, ödeme operasyonu, ticaret (trading), risk/uyum ve müşteri operasyonu
sorumluları. Lisansı olan ya da lisans sürecini yürüten işletmeler.

**Oyunculara yazmıyoruz.** Metinlerde bahis, oyun ya da kazanç teşviki yoktur; bonus, promosyon
ya da "hemen oyna" türü çağrılar kullanılmaz.

## Ton

On beş yıldır bu altyapıyı kuran ve işleten birinin ağzından: sakin, somut, abartısız.
Satış broşürü değil, sahadan not. Okuyucu zaten sektörü biliyor; terimleri açıklamak için
cümle harcanmaz, ama jargonun arkasına da saklanılmaz.

- Kısa cümle. Gereksiz sıfat yok ("devrim niteliğinde", "lider", "en iyi" yazılmaz).
- Soyut vaat yerine işleyiş anlatılır: ne olur, kim onaylar, nerede kaydı tutulur.
- Bir şey bilinmiyorsa "duruma göre değişir" denir ve nelere bağlı olduğu yazılır.

## Kurallar

1. **Uydurma sayı yok.** Müşteri adı, vaka sonucu, pazar payı, "%40 artış" gibi ölçüm
   yazılmaz. Sektör ortalaması verilecekse kaynağı belli olmalı; yoksa hiç verilmez.
2. **Referans müşteri yok.** Gerçek bir operatörün adı, logosu ya da tanınabilir ayrıntısı
   kullanılmaz. Örnekler "üç markalı bir operatör" gibi tipleştirilerek anlatılır.
3. **Yasal vaat yok.** "Lisans alırsınız", "uyumlu olursunuz" denmez; "gereklilikler pazara
   göre değişir, keşifte belirlenir" denir.
4. **Ürün reklamı en sonda ve bir kez.** Yazı, ürünü anlatmak için değil, işi anlatmak için
   yazılır. Site içi bağlantı en fazla iki tanedir.
5. **Her dil kendi diliyle yazılır.** Türkçeden birebir çeviri yapılmaz; aynı konu, o dilin
   okurunun alıştığı cümle yapısıyla yeniden yazılır. Sayı biçimi dile uyar
   (EN `590,418` · DE `590.418` · FR `590 418`).

## Dosya düzeni

```
content/blog/<dil>/<YYYY-AA-GG>-<adres>.md
```

Baş bilgi (front matter) zorunludur:

```markdown
---
title: Yazının başlığı
description: Arama sonucunda görünen tek cümlelik özet (en çok 160 karakter)
date: 2026-11-16
slug: yazinin-adresi
key: ortak-anahtar
tags: ödeme, operasyon
---
```

- `slug`: yalnızca küçük harf, rakam ve tire. Dosya adındaki adresle aynı olmalıdır.
- `key`: **aynı yazının bütün dillerdeki sürümlerinde aynıdır.** Dil seçici ve `hreflang`
  bağlantıları bu anahtarla kurulur. Anahtar İngilizce ve kalıcıdır; başlık değişse bile
  değişmez.
- `tags`: virgülle ayrılır, en fazla üç tane kullanılır (kartta ilk üçü görünür).
- `status: draft` yazılırsa yazı derlemeye girmez.

## Gövde

Desteklenen Markdown: `##` ve `###` başlık, paragraf, `-` ve `1.` listeler, `>` alıntı,
``` kod bloğu, `**kalın**`, `*italik*`, `` `kod` `` ve bağlantılar.

Site içi bağlantı özel biçimdedir ve dili kendiliğinden doğru sayfaya gider:

```markdown
[ürünlere bakın](page:products)
```

Geçerli hedefler: `home`, `products`, `technology`, `cases`, `packages`, `demo`, `blog`.

## Uzunluk ve yapı

- 450 – 800 kelime. Okuma süresi başlıkta değil, kartta otomatik hesaplanır.
  350 kelimenin altı `pnpm check:posts` çıktısında uyarı olarak görünür.
- `#` (h1) kullanılmaz; başlık baş bilgiden gelir. Gövde `##` ile başlar.
- 3 – 5 bölüm. Her bölüm tek bir soruyu yanıtlar.
- Son bölüm "ne yapmalı" ile biter; oradan bir kez demo ya da ürün sayfasına bağlanılır.

## Yayın

Dosya `content/blog/<dil>/` klasörüne konur ve `pnpm build` çalıştırılır. Derleme, yazıyı
listeye, site haritasına ve o dilin RSS akışına ekler. Yönetim panelinden yazılan yazılar
yalnızca o tarayıcıda görünür; kalıcı olması için panelden Markdown olarak indirilip buraya
konmalıdır.

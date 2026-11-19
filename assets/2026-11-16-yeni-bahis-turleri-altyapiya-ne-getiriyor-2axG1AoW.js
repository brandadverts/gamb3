var e=`---
title: Yeni bahis türleri altyapıdan ne istiyor?
description: Bahis oluşturucu, oyuncu bahisleri, mikro bahis. Her yeni bahis türü ön yüzde bir düğme, arkada ise bambaşka bir yük demek.
date: 2026-11-16
slug: yeni-bahis-turleri-altyapiya-ne-getiriyor
key: new-bet-types
tags: sportsbook, bahis türleri, risk
---

Sportsbook'ta son birkaç yılın en büyük değişimi yeni bir spor ya da yeni bir lig değil;
bahsin kendisinin şekil değiştirmesi. Oyuncu artık "maçı kim kazanır" diye değil, "bu
oyuncu 20 sayının üstüne çıkar mı, ilk korneri kim kullanır, sıradaki sayı nasıl gelir"
diye bahis yapıyor.

Ön yüzde bu bir düğme. Arka tarafta ise oran, risk ve sonuçlandırma için yeni bir iş.

## Bahis oluşturucu ve aynı maç kombinesi

Aynı maçtan birden çok seçimi tek kupona koymak artık birçok pazarda beklenen bir özellik.
Zorluğu basit: seçimler birbirinden bağımsız değil. "Takım kazanır" ile "forvet gol atar"
aynı yöne çalışır. Bu ilişkiyi hesaba katmadan çarpılan oran, operatör aleyhine yanlış
fiyattır.

Altyapıdan istenenler:

- **İlişki fiyatlaması.** Ya sağlayıcınız ilişkili oranı hesaplar ya da siz kurallarla
  hangi seçimlerin birleşemeyeceğini tanımlarsınız. İkisi de yoksa ürün açılmamalı.
- **Kupon bazlı limit.** Tek seçime değil, kombinasyonun tamamına bakan risk limiti.
- **Kısmi sonuçlandırma.** Bir seçim erken kesinleşir, diğeri maç sonunu bekler. Ekran ve
  cüzdan bunu doğru göstermeli.

## Oyuncu bahisleri

Oyuncu bazlı pazarlar (sayı, asist, şut, kart) sayıca çok, likiditesi düşük ve bilgiye
açık pazarlardır. Bir sakatlık haberi oranlardan önce sosyal medyada dolaşabilir.

- **Hızlı askıya alma.** Bir oyuncu kadrodan çıktığında ona bağlı bütün pazarların aynı
  anda kapanması.
- **Pazar başına ayrı marj ve limit.** Ana pazarla aynı limit, oyuncu pazarında açık
  kapı demektir.
- **Şüpheli düzen takibi.** Aynı küçük pazara gelen, birbirine benzeyen kuponlar
  inceleme kuyruğuna düşmeli.

## Mikro bahis

Sıradaki sayı, sıradaki atış, sıradaki oyun. Pazar birkaç saniye açık kalır. Burada
belirleyici olan veri gecikmesidir: oran, olayın kendisinden önce ekranda olmalı ve
olaydan sonra kabul edilmemelidir.

- **Gecikme bütçesi.** Veri beslemesinden kupon onayına kadar her adımın milisaniye
  karşılığı yazılı olmalı.
- **Otomatik sonuçlandırma.** Saniyelik pazarı elle sonuçlandırmak mümkün değil.
- **Hacim.** Kupon sayısı katlanır, kupon başı tutar düşer. Raporlama bunu ayrı göstermeli.

## Casino mekaniği sporla buluşuyor

ICE Barcelona 2026'da birkaç sağlayıcı, crash oyunlarının mekaniğini spor bahsine taşıyan
ürünler gösterdi: çarpan yükselir, oyuncu istediği anda çıkar. Bu ürünlerin kalıcı olup
olmayacağı belli değil. Kesin olan, sportsbook ile casinonun aynı cüzdanı, aynı oyuncu
görünümünü ve aynı risk kurallarını paylaşmasının giderek daha önemli hale gelmesi.

## Hangisini açmalı?

Her yeni bahis türünü ilk gün açmak zorunda değilsiniz. Sormanız gereken üç soru:

1. Bu pazarın riskini **gerçek zamanlı** görebiliyor muyum?
2. Yanlış fiyatlanırsa **kaç dakikada** fark ederim?
3. Sonuçlandırma **otomatik** mi, yoksa ekibime yeni bir vardiya mı getiriyor?

Üçüne de net cevap verebildiğiniz ürünü açın. Sportsbook modülünün bu işleri nasıl
yürüttüğüne [ürünler sayfasından](page:products) bakabilirsiniz.
`;export{e as default};
var e=`---
title: Altyapı sağlayıcısı seçerken sorulacak on soru
description: Demo ekranı herkeste güzel görünür. Farkı, ilk yoğun maç gününde ortaya çıkan şeyler yaratır.
date: 2026-11-10
slug: altyapi-saglayicisi-secerken-on-soru
key: provider-selection-questions
tags: platform seçimi, entegrasyon, operasyon
---

Platform araması çoğu ekipte aynı biçimde başlar: üç dört sağlayıcıyla demo toplantısı yapılır,
ekranlar birbirine benzer, sunumlar aynı sırayla ilerler. Demoda hepsi iyi görünür. Fark,
canlıya geçtikten sonraki ilk yoğun maç gününde ortaya çıkar.

Aşağıdakiler, o günü önceden görmeye yarayan sorular. Hiçbirinin "doğru" tek bir yanıtı yok;
önemli olan yanıtın net olması ve sözleşmeye yazılabilmesi.

## Demoda görmediğiniz şey

**1. Bu ekranı kaç kişi aynı anda kullanıyor?** Demo tek kullanıcıyla akıcıdır. Onay kuyruğunda
dört kişi birlikte çalışırken ne oluyor, aynı kaydı iki kişi açtığında ne görünüyor, sorun.

**2. Hata hâlinde ekran ne gösteriyor?** Sağlayıcı yanıt vermediğinde oyuncu ne görüyor, operasyon
ekranında hangi uyarı çıkıyor, kim haberdar oluyor. "Böyle bir şey olmuyor" yanıtı, cevap değildir.

**3. Son altı ayda hangi kesintiler yaşandı?** Tarihleri, sürelerini ve ne yapıldığını isteyin.
Kesinti yaşamamış bir altyapı yoktur; kesintiyi anlatamayan bir sağlayıcı vardır.

## Para nerede duruyor

**4. Bakiye tek yerde mi tutuluyor?** Spor bahis ve casino ayrı cüzdanlarda çalışıyorsa, oyuncu
ürünler arasında geçerken transfer bekler ve gün sonunda iki ayrı mutabakat yaparsınız. Ortak
cüzdan bir pazarlama başlığı değil, muhasebe kararıdır.

**5. Gün sonu mutabakatı kaç dakikada kapanıyor ve fark çıkarsa ne oluyor?** Fark çıkmayacağı
söylenen bir sistem değil, farkı dakikalar içinde gösteren bir sistem istiyorsunuz.

**6. Elle bakiye düzeltmesini kim yapabiliyor?** Yetkiyi kimin verdiği, kaç kişinin onayladığı ve
kaydın nerede durduğu yazılı olsun.

## Kim neyi onaylıyor

**7. Onay akışları yapılandırılabilir mi?** 50.000 liranın üstündeki çekimde ikinci onay isteyip
istemediğinize siz karar verebiliyor musunuz, yoksa eşik sağlayıcıda sabit mi?

**8. Bir kullanıcı kendi açtığı talebi onaylayabiliyor mu?** Yanıt "evet" ise, lisans denetiminde
bunu açıklamak zorunda kalan siz olursunuz.

## Sözleşme değil, sözleşmeler

**9. API dokümanını bugün görebilir miyim?** Satış sürecinin ortasında paylaşılmayan doküman,
imzadan sonra da gecikir. Dokümanda şunlara bakın: uç nokta listesi, hata kodları, tekrar
güvenliği (aynı isteğin iki kez işlenmemesi), webhook imzası ve sürüm politikası.

Entegrasyonun süresini belirleyen şey, kaç uç nokta olduğu değil, bu beş başlığın ne kadar
açık yazıldığıdır. [Teknik yapıya buradan bakabilirsiniz](page:technology).

## Çıkış kapısı

**10. Ayrılırsam verimi nasıl alırım?** Oyuncu kayıtları, işlem defteri ve denetim kayıtları
hangi biçimde, ne kadar sürede, hangi ücretle veriliyor? Bu soruyu ilk görüşmede sormak
garip görünür; sormadan imzalamak ise iki yıl sonra pahalıya mal olur.

## Listeyi nasıl kullanmalı

Bu on soruyu bir puan tablosuna çevirmeyin. Amaç sağlayıcıları sıralamak değil, hangi
konularda net yanıt alamadığınızı görmek. Üç sağlayıcıyla konuşup aynı soruya üç farklı
kaçamak yanıt aldıysanız, sorun sağlayıcılarda değil, sorunun henüz kendi içinizde
yanıtlanmamış olmasındadır: önce siz hangi riski taşımak istediğinize karar verin.

Yanıtları aldıktan sonra, en çok tereddüt ettiğiniz iki başlığı teknik keşif gündeminin
başına koyun. Bizde keşif tam olarak böyle başlıyor; isterseniz
[kendi kurulumunuz üzerinden konuşalım](page:demo).
`;export{e as default};
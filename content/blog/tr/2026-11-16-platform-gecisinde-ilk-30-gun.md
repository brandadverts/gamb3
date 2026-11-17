---
title: Platform geçişinde ilk 30 gün
description: Geçiş projelerinin çoğu teknik nedenlerle değil, sıralamayı yanlış kurduğu için gecikir.
date: 2026-11-16
slug: platform-gecisinde-ilk-30-gun
key: migration-first-30-days
tags: geçiş, veri, operasyon
---

Çalışan bir operasyonu yeni bir altyapıya taşımak, sıfırdan kurmaktan zordur. Sıfırdan kurarken
yalnızca ileriye bakarsınız; geçişte hem ileriye hem de arkanızda bıraktığınız bakiyelere,
açık kuponlara ve yarım kalmış çekim taleplerine bakmak zorundasınız.

Aşağıdaki otuz gün, bir takvim vaadi değil; sıralamanın nasıl kurulduğunu anlatan bir çerçeve.
Gerçek süre entegrasyon sayısına, veri hacmine ve lisans gerekliliklerine göre değişir.

## 1. hafta — Envanter

İlk hafta kod yazılmaz. Neyin taşınacağı yazılır.

- Kaç oyuncu kaydı var, kaçında doğrulama tamam, kaçı kısıtlı?
- Açık kuponlar, bekleyen çekimler, bonus çevrimi devam edenler: geçiş anında bunlar ne olacak?
- Hangi sağlayıcılarla sözleşme var, hangileri yeni platformda da kalacak?
- Hangi raporlar kime gidiyor? Bunların çoğu kimsenin okumadığı raporlardır; geçiş onları
  temizlemek için iyi bir fırsattır.

Envanterin çıktısı tek bir tablo olmalı: taşınacak, yeniden kurulacak, bırakılacak.

## 2. hafta — Veri provası

Veri, canlıya geçmeden önce en az iki kez prova edilir. Prova, "veriyi kopyaladık" demek değil;
kopyalanan veriyi kayıt bazında eski sistemle karşılaştırmak demektir.

Bakılacak üç şey:

1. **Bakiye toplamı.** Eski sistemdeki toplam ile yenideki toplam kuruşu kuruşuna eşit mi?
2. **Kayıt sayısı.** Oyuncu, işlem ve denetim kaydı sayıları tutuyor mu?
3. **Kenar durumlar.** Negatif bakiye, kapalı hesap, çift kayıt, eksik doğrulama: bunlar
   taşındığında ne oluyor?

Prova sonucunda fark çıkması iyi haberdir. Kötü haber, farkı canlıda bulmaktır.

## 3. hafta — Paralel çalışma

Yeni platform, eski sistem çalışmaya devam ederken ayağa kaldırılır. Operasyon ekibi gerçek
senaryoları yeni ekranlarda prova eder: bir çekim onaylar, bir bonus tanımlar, bir vakayı
kapatır. Bu hafta eğitim haftası değildir; eğitim bu provanın yan ürünüdür.

Aynı hafta geri dönüş adımları yazılır. "Sorun çıkarsa geri döneriz" bir plan değildir.
Plan şudur: hangi eşikte, kim karar verir, hangi sırayla ne kapatılır, veriler nereden
geri alınır. Yazılı olmayan geri dönüş planı, olmayan plandır.

## 4. hafta — Trafiği açmak

Trafik tek seferde açılmaz. Önce iç ekip, sonra küçük bir oyuncu kümesi, sonra bir pazar,
sonra tamamı. Her adımda bakılan şey aynıdır: bakiye farkı, hata oranı, destek talebi sayısı,
ödeme onay oranı.

Açılış gününde en sık yapılan hata, aynı anda hem yeni platforma geçip hem de yeni bir sağlayıcı
devreye almaktır. Bir şey bozulduğunda hangisinden kaynaklandığını bilemezsiniz. Sağlayıcı
değişiklikleri geçişten en az iki hafta sonraya bırakılır.

## Otuzuncu gün

Otuzuncu günün sonunda elinizde olması gereken şey canlı bir platformdan ibaret değil:
kapanmış bir mutabakat, eğitilmiş bir ekip, yazılı bir geri dönüş planı ve eski sistemde
ne kaldığının listesi. Eski sistem hemen kapatılmaz; denetim kayıtları ve saklama süresi
nedeniyle bir süre daha okunur durumda tutulur.

Geçişi planlarken en çok işe yarayan soru şudur: *bu adım ters giderse bunu kaç dakikada
fark ederiz?* Yanıtı olmayan her adım, plana geri döner.

Kendi geçişinizin envanterini çıkarmak isterseniz,
[teknik ekiple bir oturum ayarlayalım](page:demo).

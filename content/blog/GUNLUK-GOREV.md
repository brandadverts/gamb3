# Günlük blog görevi

Her gün bir konu seçilir ve o konu **sekiz dilde birer yazı** olarak bu klasöre eklenir.
Yazım kuralları `YAZIM-KILAVUZU.md` dosyasındadır; bu dosya yalnızca günlük işin akışını
ve konu havuzunu tutar.

Zamanlanmış görev: `~/.claude/scheduled-tasks/gamb-gunluk-blog/SKILL.md`
(cron `12 7 * * *`, sabit bir gecikmeyle 07:25 civarında çalışır).
Görev yalnızca uygulama açıkken çalışır; kapalıyken kaçan çalışma, uygulama açıldığında yapılır.
Görevin kendi metni değiştirilecekse SKILL.md düzenlenir; bu dosya yalnızca akışı anlatır.

## Günün akışı

1. `content/blog/YAZIM-KILAVUZU.md` okunur.
2. Bu dosyadaki havuzdan, **henüz kullanılmamış** bir konu seçilir. Kullanılmış konular
   `grep -h "^key:" content/blog/*/*.md | sort -u` ile görülür.
3. Konuya kalıcı bir `key` verilir (İngilizce, kebab-case). Sekiz dosyada da aynıdır.
4. Sekiz dosya yazılır: `content/blog/<dil>/<YYYY-AA-GG>-<adres>.md`
   - `tr, en, de, fr, es, pt, ru, ar`
   - Her dilin başlığı, adresi ve metni o dilde yeniden yazılır; birebir çeviri yapılmaz.
   - `ar` için adres Latin harfle yazılır (sayfa adresleri de öyle).
5. `pnpm check:posts` çalıştırılır; **hata** kalmamalıdır (uyarılar bilgilendirmedir).
6. `pnpm build` çalıştırılır; yazı sayısının sekiz arttığı doğrulanır.
7. Kısa bir özet bırakılır: konu, `key`, sekiz dosyanın yolu, denetim çıktısı.

Bir adım başarısız olursa yarım dosya bırakılmaz: ya sekizi birden tamamlanır ya da
eklenen dosyalar silinip durum raporlanır.

## Konu havuzu

Seçim sırayla değil, günün mantığına göre yapılır; aynı başlık iki kez yazılmaz.

**Platform ve teknik**
- Sandbox ortamı neden üretimle aynı olmalı
- Webhook tasarımı: tekrar, sıra ve imza
- API sürümlemesi: eski entegrasyonu kırmadan alan eklemek
- Yük testini maç gününe göre kurmak
- Ortak cüzdan ile ayrı cüzdan arasındaki gerçek fark

**Ödeme ve finans**
- Çekim onay süresini kısaltan dört karar
- Mutabakat farkı çıktığında izlenecek yol
- Yerel ödeme yöntemi eklerken sorulacaklar
- Kripto ödemede ağ seçimi ve onay sayısı
- Hakediş dönemini kapatmadan önceki kontrol listesi

**Risk, uyum ve oyuncu koruma**
- Çoklu hesap tespitinde yanlış pozitifi azaltmak
- Bonus kötüye kullanımının altı deseni
- Sorumlu oyun araçlarını üründen ayırmamak
- Denetim kaydı neyi kaydetmeli, neyi kaydetmemeli
- Lisans denetimine hazırlık: hangi raporlar, hangi süre

**Operasyon ve ekip**
- Onay akışlarını kim tasarlamalı
- Destek ekranında bir oyuncu kaydı nasıl görünmeli
- Çok markalı yapıda yetki tasarımı
- Açılış günü için geri dönüş planı yazmak
- Rapor çöplüğünü temizlemek: kimse okumayan panolar

**Büyüme**
- Segmentasyonu CRM'den önce veriyle kurmak
- İş ortağı ağında şeffaflık neyi değiştirir
- Yeni pazara girerken ilk otuz günde ölçülecekler

## Kullanılmış konular

| key | eklendi |
| --- | --- |
| `provider-selection-questions` | 2026-11-10 |
| `migration-first-30-days` | 2026-11-16 |
| `new-game-releases` | 2026-11-16 |
| `new-bet-types` | 2026-11-16 |
| `andorra-online-licence` | 2026-11-16 |

Yeni konu eklendiğinde bu tabloya bir satır yazılır ve havuzdaki satır silinir.

## Yayın

Dosyanın klasöre girmesi "yayınlandı" sayılır: bir sonraki `pnpm build` yazıyı listeye,
site haritasına ve o dilin RSS akışına ekler. Canlı siteye çıkması için derlemenin
dağıtılması gerekir; bu adım henüz kurulmadı.

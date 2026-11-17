/**
 * gamb PANEL demosunun verisi.
 *
 * Tamamı temsilidir: sayılar, kayıtlar ve günlük satırları gerçek bir operasyona ait değildir.
 * Ekranı tek bir çizici (PanelApp) üretir; aşağıdaki yapılandırma her modülün neyi nasıl
 * gösterdiğini belirler. Demo yalnızca Türkçedir.
 */

export type RowState = "pending" | "approved" | "rejected" | "on" | "off";

export type DemoRow = {
  id: string;
  cells: string[];
  state: RowState;
  /** Satırın altında görünen tek satırlık gerekçe. */
  note?: string;
};

export type DemoTable = {
  title: string;
  head: string[];
  rows: DemoRow[];
  /** approve: Onayla / Reddet · toggle: Aç / Kapat */
  mode: "approve" | "toggle";
};

export type DemoMetric = { label: string; value: string; hint: string };
export type DemoLog = { time: string; text: string };

export type ModuleDemo = {
  summary: string;
  flow: string[];
  metrics: DemoMetric[];
  table: DemoTable;
  rules: string[];
  log: DemoLog[];
};

export const MODULE_DEMOS: Record<string, ModuleDemo> = {
  /* ───────── Oyun & İçerik ───────── */
  "urun-sportsbook": {
    summary:
      "Oran beslemesi gelir, ticaret ekibi marj ve limiti uygular, kupon cüzdana yazılır. Müsabaka kaldırıldığında açık kuponlar otomatik iade kuyruğuna düşer.",
    flow: [
      "Sağlayıcıdan maç ve oran beslemesi düşer",
      "Marj, limit ve pazar görünürlüğü uygulanır",
      "Oyuncu kuponu oluşturur, bakiye ortak cüzdandan düşer",
      "Sonuç gelir; kazanç, iade ya da iptal işlenir",
    ],
    metrics: [
      { label: "Açık kupon", value: "1.284.730", hint: "son 24 saat" },
      { label: "Ortalama marj", value: "%6,8", hint: "canlı + maç öncesi" },
      { label: "Kaldırılan müsabaka", value: "12", hint: "bugün" },
    ],
    table: {
      title: "Ticaret onayı bekleyen müsabakalar",
      head: ["Müsabaka", "Pazar", "Limit", "Marj"],
      mode: "approve",
      rows: [
        { id: "s1", cells: ["Galatasaray — Beşiktaş", "Maç sonucu", "250.000 ₺", "%6,2"], state: "pending" },
        { id: "s2", cells: ["Lakers — Celtics", "Handikap", "120.000 ₺", "%7,1"], state: "pending" },
        {
          id: "s3",
          cells: ["3. Lig · Kayseri — Niğde", "Toplam gol", "15.000 ₺", "%9,4"],
          state: "pending",
          note: "Düşük likidite: limit otomatik düşürüldü.",
        },
      ],
    },
    rules: [
      "Limit üstü kuponlar ticaret ekibinin onayına düşer.",
      "Aynı oyuncudan 90 saniye içinde gelen tekrar kupon işaretlenir.",
      "Müsabaka kaldırıldığında açık kuponlar iade edilir, kayıt altına alınır.",
    ],
    log: [
      { time: "21:04", text: "Fraud şüphesiyle 12 müsabaka kaldırıldı, 318 kupon iade edildi" },
      { time: "20:51", text: "Canlı marj %6,5 → %6,8 güncellendi (Süper Lig)" },
      { time: "20:33", text: "Limit üstü kupon onaylandı · kullanıcı: ticaret.ekibi" },
    ],
  },
  "urun-game-provider": {
    summary:
      "Sağlayıcılar tek entegrasyonla bağlanır. Katalog eşlemesi yapıldıktan sonra oyunlar pazara göre açılır; mutabakat sağlayıcı bazında yürür.",
    flow: [
      "Sağlayıcı sandbox ortamında bağlanır",
      "Oyun kataloğu eşlenir ve etiketlenir",
      "Pazar kuralına göre görünürlük açılır",
      "Gün sonunda sağlayıcı mutabakatı çalışır",
    ],
    metrics: [
      { label: "Bağlı sağlayıcı", value: "38", hint: "2'si sandbox'ta" },
      { label: "Yayındaki oyun", value: "5.120", hint: "+48 bugün" },
      { label: "Eşleşmeyen kayıt", value: "3", hint: "mutabakat farkı" },
    ],
    table: {
      title: "Lobide görünürlük",
      head: ["Sağlayıcı", "Oyun", "Pazar"],
      mode: "toggle",
      rows: [
        { id: "p1", cells: ["Pragmatic", "412", "TR, DE"], state: "on" },
        { id: "p2", cells: ["Evolution", "186", "TR, DE, BR"], state: "on" },
        {
          id: "p3",
          cells: ["Yeni Sağlayıcı A", "64", "—"],
          state: "off",
          note: "Sandbox doğrulaması tamamlanmadı.",
        },
      ],
    },
    rules: [
      "Bir oyun, pazarın izin listesinde değilse lobide görünmez.",
      "Sağlayıcı yanıt süresi 2 sn'yi aşarsa oyun geçici olarak gizlenir.",
      "Katalog değişiklikleri önce sandbox'ta doğrulanır.",
    ],
    log: [
      { time: "21:02", text: "Yeni oyun sağlayıcısı lobiye eklendi (64 oyun)" },
      { time: "19:40", text: "Pragmatic kataloğu eşlendi: 12 yeni oyun" },
      { time: "18:05", text: "Mutabakat farkı kapatıldı · 3 kayıt" },
    ],
  },
  "urun-canli-casino": {
    summary:
      "Canlı masalar aynı cüzdanla çalışır. Masa limitleri ve görünürlük pazar bazında ayarlanır; oturum geçmişi destek ekranından okunur.",
    flow: [
      "Masa listesi sağlayıcıdan alınır",
      "Limit ve görünürlük pazara göre ayarlanır",
      "Oyuncu ortak cüzdanla masaya oturur",
      "Oturum ve bahis geçmişi kayda geçer",
    ],
    metrics: [
      { label: "Açık masa", value: "412", hint: "anlık" },
      { label: "Ortalama oturum", value: "18 dk", hint: "son 12 saat" },
      { label: "Masa doluluğu", value: "%74", hint: "prime time" },
    ],
    table: {
      title: "Masa görünürlüğü",
      head: ["Masa", "Limit aralığı", "Doluluk"],
      mode: "toggle",
      rows: [
        { id: "c1", cells: ["Türkçe Rulet 1", "10 – 50.000 ₺", "%92"], state: "on" },
        { id: "c2", cells: ["VIP Blackjack", "500 – 250.000 ₺", "%61"], state: "on" },
        { id: "c3", cells: ["Baccarat Speed 4", "10 – 20.000 ₺", "%18"], state: "off" },
      ],
    },
    rules: [
      "VIP masaları yalnızca sadakat seviyesi 4 ve üstüne görünür.",
      "Doluluk %10'un altına düşen masa 30 dakika sonra gizlenir.",
      "Masa limiti değişikliği ikinci bir onay ister.",
    ],
    log: [
      { time: "20:58", text: "VIP Blackjack limiti 150.000 ₺ → 250.000 ₺" },
      { time: "20:12", text: "Baccarat Speed 4 düşük doluluk nedeniyle gizlendi" },
      { time: "19:30", text: "Türkçe Rulet 2 bakımdan döndü" },
    ],
  },
  "urun-sanal-espor": {
    summary:
      "Sanal ligler ve e-spor pazarları takvimden bağımsız içerik üretir. Kupon sportsbook ile ortaktır; limit ve marj profilleri ayrıdır.",
    flow: [
      "Sanal tur takvimi üretilir",
      "E-spor maçları sağlayıcıdan düşer",
      "Ayrı limit ve marj profili uygulanır",
      "Kupon sportsbook kuponuyla birleşir",
    ],
    metrics: [
      { label: "Etkinlik", value: "96", hint: "önümüzdeki 24 saat" },
      { label: "Sanal tur", value: "3 dk", hint: "tur aralığı" },
      { label: "E-spor payı", value: "%8,4", hint: "kupon içinde" },
    ],
    table: {
      title: "Yayın onayı bekleyen içerik",
      head: ["İçerik", "Tür", "Tur / maç"],
      mode: "approve",
      rows: [
        { id: "v1", cells: ["Sanal Lig · Kış Serisi", "Futbol", "480 tur/gün"], state: "pending" },
        { id: "v2", cells: ["CS2 · Bölgesel eleme", "E-spor", "14 maç"], state: "pending" },
        { id: "v3", cells: ["Sanal At Yarışı", "Yarış", "288 tur/gün"], state: "pending" },
      ],
    },
    rules: [
      "Sanal içerikte sonuç üreteci sertifikası zorunludur.",
      "E-spor maçlarında canlı yayın bağlantısı kopunca pazar kapatılır.",
      "Sanal turlarda tek kupon limiti sportsbook'un yarısıdır.",
    ],
    log: [
      { time: "20:44", text: "Sanal At Yarışı takvimi yenilendi" },
      { time: "20:10", text: "CS2 bölgesel eleme pazarları açıldı" },
      { time: "18:55", text: "Sanal Lig marjı %9,0 → %8,6" },
    ],
  },
  "urun-hizli-oyunlar": {
    summary:
      "Kısa turlu oyunlar lobide ayrı bir şeritte durur. Tur sonuçları doğrulanabilir; marj oyun bazında ayarlanır.",
    flow: [
      "Oyun kataloğa eklenir",
      "Tur üreteci ve doğrulama anahtarı bağlanır",
      "Oyun bazında marj ayarlanır",
      "Lobide öne çıkarma sırası belirlenir",
    ],
    metrics: [
      { label: "Tur / saat", value: "18.400", hint: "toplam" },
      { label: "Ortalama tur", value: "11 sn", hint: "crash" },
      { label: "Doğrulama isteği", value: "126", hint: "bugün" },
    ],
    table: {
      title: "Lobide öne çıkarma",
      head: ["Oyun", "Marj", "Tur / saat"],
      mode: "toggle",
      rows: [
        { id: "f1", cells: ["Crash", "%3,0", "6.200"], state: "on" },
        { id: "f2", cells: ["Mines", "%3,5", "4.900"], state: "on" },
        { id: "f3", cells: ["Dice", "%1,8", "7.300"], state: "off" },
      ],
    },
    rules: [
      "Her turun tohumu oyuncuya açıktır ve sonradan doğrulanabilir.",
      "Marj değişikliği yalnızca tur arasında uygulanır.",
      "Aynı anda en fazla dört oyun öne çıkarılır.",
    ],
    log: [
      { time: "21:00", text: "Dice lobiden çıkarıldı (kampanya bitti)" },
      { time: "20:21", text: "Crash marjı %2,8 → %3,0" },
      { time: "19:12", text: "126 tur doğrulama isteği yanıtlandı" },
    ],
  },
  "urun-turnuva-jackpot": {
    summary:
      "Turnuvalar şablondan kurulur, lider tablosu canlı işler. Jackpot havuzu her bahisten pay alır ve kurala göre dağıtılır.",
    flow: [
      "Şablondan turnuva kurulur",
      "Katılım kuralları ve ödül havuzu tanımlanır",
      "Lider tablosu canlı güncellenir",
      "Ödüller kurala göre cüzdana yazılır",
    ],
    metrics: [
      { label: "Açık turnuva", value: "7", hint: "3'ü bugün biter" },
      { label: "Jackpot havuzu", value: "2.418.900 ₺", hint: "aşamalı" },
      { label: "Katılımcı", value: "48.120", hint: "bu hafta" },
    ],
    table: {
      title: "Ödül dağıtımı onayı",
      head: ["Turnuva", "Kazanan", "Ödül"],
      mode: "approve",
      rows: [
        { id: "t1", cells: ["Hafta Sonu Slot Yarışı", "pl_48213", "120.000 ₺"], state: "pending" },
        { id: "t2", cells: ["Canlı Casino Ligi", "pl_31904", "75.000 ₺"], state: "pending" },
        {
          id: "t3",
          cells: ["Mini Jackpot", "pl_22871", "18.400 ₺"],
          state: "pending",
          note: "Oyuncu KYC'si tamam; ödeme engeli yok.",
        },
      ],
    },
    rules: [
      "Ödül dağıtımı öncesi oyuncunun doğrulaması tamam olmalıdır.",
      "Jackpot payı her bahisten otomatik ayrılır.",
      "Beraberlikte önce bahis hacmine, sonra zamana bakılır.",
    ],
    log: [
      { time: "20:47", text: "Hafta Sonu Slot Yarışı lider tablosu kapandı" },
      { time: "20:30", text: "Mini Jackpot düştü · 18.400 ₺" },
      { time: "19:05", text: "Canlı Casino Ligi katılımı 12.000'i geçti" },
    ],
  },

  /* ───────── Oyuncu & Hesap ───────── */
  "urun-oyuncu-hesap": {
    summary:
      "Kayıt, profil, oturum ve hesap durumları tek ekranda. Destek ve risk ekipleri aynı kaydı farklı yetkilerle görür.",
    flow: [
      "Kayıt formu doğrulanır",
      "Hesap açılır, doğrulama kuyruğuna girer",
      "Etiket ve notlar profile işlenir",
      "Durum değişiklikleri kayıt altına alınır",
    ],
    metrics: [
      { label: "Aktif oyuncu", value: "590.418", hint: "son 30 gün" },
      { label: "Bugünkü kayıt", value: "8.940", hint: "+%4" },
      { label: "Kısıtlı hesap", value: "412", hint: "risk kaynaklı" },
    ],
    table: {
      title: "Hesap durumu değişikliği bekleyenler",
      head: ["Oyuncu", "Talep", "Kaynak"],
      mode: "approve",
      rows: [
        { id: "a1", cells: ["pl_48213", "Kısıtlamayı kaldır", "Destek"], state: "pending" },
        { id: "a2", cells: ["pl_51077", "Hesabı dondur", "Risk"], state: "pending" },
        {
          id: "a3",
          cells: ["pl_19844", "Takma ad değişikliği", "Oyuncu"],
          state: "pending",
          note: "Önceki ad 90 gün içinde bir kez değiştirilmiş.",
        },
      ],
    },
    rules: [
      "Hesap dondurma işlemi iki kişi onayı ister.",
      "Kısıtlı hesap yatırım yapamaz, çekim talebi açabilir.",
      "Profil notları silinmez; yalnızca üzerine not eklenir.",
    ],
    log: [
      { time: "20:55", text: "pl_51077 risk incelemesine alındı" },
      { time: "20:18", text: "Toplu etiketleme: 1.240 oyuncuya 'yeni kayıt' etiketi" },
      { time: "19:47", text: "pl_48213 kısıtlaması destek talebiyle açıldı" },
    ],
  },
  "urun-cuzdan": {
    summary:
      "Tek bakiye bütün ürünlerde geçerlidir. Gerçek ve bonus bakiye ayrı tutulur; her hareket işlem defterine yazılır.",
    flow: [
      "Ürün cüzdandan bakiye ister",
      "Gerçek / bonus önceliği uygulanır",
      "Hareket işlem defterine yazılır",
      "Gün sonunda bakiye mutabakatı çalışır",
    ],
    metrics: [
      { label: "Bakiye farkı", value: "0", hint: "son mutabakat" },
      { label: "Günlük hareket", value: "4,2 Mn", hint: "defter satırı" },
      { label: "Bonus bakiye payı", value: "%7,3", hint: "toplam içinde" },
    ],
    table: {
      title: "Elle bakiye düzeltmesi",
      head: ["Oyuncu", "Tutar", "Gerekçe"],
      mode: "approve",
      rows: [
        { id: "w1", cells: ["pl_31904", "+1.250 ₺", "Çift çekilen bahis"], state: "pending" },
        { id: "w2", cells: ["pl_22871", "−840 ₺", "Hatalı bonus kredisi"], state: "pending" },
        { id: "w3", cells: ["pl_77120", "+320 ₺", "Sağlayıcı tur iptali"], state: "pending" },
      ],
    },
    rules: [
      "Elle düzeltme yalnızca gerekçeyle ve onayla yapılır.",
      "Bonus bakiye çevrim tamamlanmadan çekilemez.",
      "Defter satırı silinmez; düzeltme ters kayıtla yapılır.",
    ],
    log: [
      { time: "21:01", text: "Gün içi mutabakat çalıştı · fark yok" },
      { time: "20:26", text: "pl_77120 için ters kayıt oluşturuldu" },
      { time: "19:58", text: "Bonus bakiye önceliği 'önce gerçek' olarak güncellendi" },
    ],
  },
  "urun-kyc": {
    summary:
      "Belge yükleme, sağlayıcı doğrulaması ve inceleme kuyruğu tek akışta. Kurallar pazara göre değişir.",
    flow: [
      "Oyuncu belge yükler",
      "Doğrulama sağlayıcısı otomatik kontrol eder",
      "Sonuç belirsizse inceleme kuyruğuna düşer",
      "Sonuç hesaba ve denetim kaydına işlenir",
    ],
    metrics: [
      { label: "Kuyrukta", value: "1.126", hint: "−180 bugün" },
      { label: "Otomatik onay", value: "%78", hint: "son 7 gün" },
      { label: "Ortalama süre", value: "6 sa", hint: "elle inceleme" },
    ],
    table: {
      title: "İnceleme kuyruğu",
      head: ["Oyuncu", "Belge", "Sağlayıcı sonucu"],
      mode: "approve",
      rows: [
        { id: "k1", cells: ["pl_48213", "Kimlik ön yüz", "Okunamadı"], state: "pending" },
        { id: "k2", cells: ["pl_60112", "Adres belgesi", "Tarih eski"], state: "pending" },
        {
          id: "k3",
          cells: ["pl_71234", "Kimlik + selfie", "Eşleşme %71"],
          state: "pending",
          note: "Eşik %80; elle inceleme gerekiyor.",
        },
      ],
    },
    rules: [
      "Doğrulama tamamlanmadan çekim onaylanmaz.",
      "Adres belgesi 3 aydan eski olamaz.",
      "Reddedilen belge gerekçesiyle birlikte oyuncuya bildirilir.",
    ],
    log: [
      { time: "20:49", text: "1.380 çekim talebi doğrulama kontrolünden geçti" },
      { time: "20:11", text: "pl_60112 adres belgesi reddedildi" },
      { time: "19:35", text: "TR pazarı için yaş kontrolü 18 olarak doğrulandı" },
    ],
  },
  "urun-sorumlu-oyun": {
    summary:
      "Limitler, molalar ve kendini dışlama hesabın parçasıdır. Riskli davranış işaretleri CRM kampanyalarını da kısıtlar.",
    flow: [
      "Oyuncu limit ya da mola tanımlar",
      "Limit anında bütün ürünlerde geçerli olur",
      "Davranış işaretleri risk ekranına düşer",
      "Kendini dışlama hesabı ve iletişimi kapatır",
    ],
    metrics: [
      { label: "Aktif limit", value: "3.480", hint: "oyuncu" },
      { label: "Kendini dışlama", value: "214", hint: "yürürlükte" },
      { label: "İşaretli davranış", value: "57", hint: "bu hafta" },
    ],
    table: {
      title: "Limit azaltma / artırma talepleri",
      head: ["Oyuncu", "Limit", "Talep"],
      mode: "approve",
      rows: [
        { id: "r1", cells: ["pl_19844", "Günlük yatırım", "5.000 → 1.000 ₺"], state: "pending" },
        {
          id: "r2",
          cells: ["pl_33015", "Haftalık kayıp", "2.000 → 8.000 ₺"],
          state: "pending",
          note: "Artış talebi 24 saat bekleme süresine tabidir.",
        },
        { id: "r3", cells: ["pl_41200", "Oturum süresi", "Mola: 7 gün"], state: "pending" },
      ],
    },
    rules: [
      "Limit azaltma anında geçerlidir; artırma 24 saat bekler.",
      "Kendini dışlayan oyuncuya pazarlama iletisi gönderilmez.",
      "Mola süresince hesap girişe kapalıdır.",
    ],
    log: [
      { time: "20:52", text: "pl_41200 için 7 günlük mola başlatıldı" },
      { time: "20:05", text: "pl_19844 günlük yatırım limiti düşürüldü" },
      { time: "18:44", text: "12 oyuncuya oturum süresi hatırlatması gönderildi" },
    ],
  },

  /* ───────── Ödeme & Finans ───────── */
  "urun-gambpay": {
    summary:
      "Yatırma ve çekim akışları, yönteme göre limit ve yönlendirme, onay adımları ve işlem durumu takibi tek ekranda.",
    flow: [
      "Oyuncu yöntem seçer, işlem açılır",
      "Limit, risk ve yönlendirme kuralları uygulanır",
      "Gerekirse onay kuyruğuna düşer",
      "Sonuç cüzdana ve işlem defterine yazılır",
    ],
    metrics: [
      { label: "Yatırım onayı", value: "%97,2", hint: "+0,4 puan" },
      { label: "Bekleyen çekim", value: "1.380", hint: "−96" },
      { label: "Ortalama çekim", value: "28 dk", hint: "onaydan ödemeye" },
    ],
    table: {
      title: "Çekim onay kuyruğu",
      head: ["Oyuncu", "Tutar", "Yöntem", "Risk"],
      mode: "approve",
      rows: [
        { id: "m1", cells: ["pl_48213", "12.400 ₺", "Havale", "Düşük"], state: "pending" },
        {
          id: "m2",
          cells: ["pl_51077", "86.000 ₺", "Havale", "Yüksek"],
          state: "pending",
          note: "Son 24 saatte üç farklı IBAN denendi.",
        },
        { id: "m3", cells: ["pl_60112", "3.150 ₺", "Kripto (USDT)", "Orta"], state: "pending" },
      ],
    },
    rules: [
      "50.000 ₺ üstü çekimler ikinci onay ister.",
      "IBAN oyuncu adıyla eşleşmiyorsa işlem reddedilir.",
      "Aynı karttan 24 saatte en çok üç yatırım denemesi yapılabilir.",
    ],
    log: [
      { time: "20:49", text: "1.380 çekim talebi onay kuyruğuna alındı" },
      { time: "20:22", text: "Havale sağlayıcısı B yanıt süresi 8 sn → yönlendirme değişti" },
      { time: "19:58", text: "pl_51077 çekimi risk ekibine yönlendirildi" },
    ],
  },
  "urun-finans": {
    summary:
      "Gün sonu ve dönem mutabakatı, GGR/NGR raporları, sağlayıcı ve iş ortağı hakedişleri aynı tabloda kapanır.",
    flow: [
      "Gün sonunda hareketler toplanır",
      "Sağlayıcı ve ödeme kayıtlarıyla karşılaştırılır",
      "Fark varsa inceleme kaydı açılır",
      "Hakedişler onaylanır ve dışa aktarılır",
    ],
    metrics: [
      { label: "Mutabakat", value: "%99,98", hint: "son 30 gün" },
      { label: "Açık hakediş", value: "14", hint: "sağlayıcı + ortak" },
      { label: "NGR (gün)", value: "1.842.600 ₺", hint: "temsilî" },
    ],
    table: {
      title: "Hakediş onayı",
      head: ["Taraf", "Dönem", "Tutar"],
      mode: "approve",
      rows: [
        { id: "fi1", cells: ["Pragmatic", "Ekim 2026", "412.800 ₺"], state: "pending" },
        { id: "fi2", cells: ["Affiliate · ortak-118", "Ekim 2026", "96.300 ₺"], state: "pending" },
        {
          id: "fi3",
          cells: ["Ödeme sağlayıcısı B", "Ekim 2026", "58.140 ₺"],
          state: "pending",
          note: "3 kayıt eşleşmedi; fark 1.120 ₺.",
        },
      ],
    },
    rules: [
      "Fark kapanmadan hakediş onaylanmaz.",
      "Rapor dışa aktarımı muhasebe formatında yapılır.",
      "Kapatılan dönem yeniden açılmaz; düzeltme sonraki döneme yazılır.",
    ],
    log: [
      { time: "21:00", text: "Gün sonu mutabakatı çalıştı · 3 kayıt incelemede" },
      { time: "20:14", text: "Ekim dönemi GGR raporu dışa aktarıldı" },
      { time: "18:30", text: "ortak-118 hakedişi hesaplandı" },
    ],
  },
  "urun-kripto": {
    summary:
      "Kripto yatırma ve çekim aynı cüzdana bağlanır. Ağ ve varlık seçimi, kur çevrimi ve adres izleme kurallarla yürür.",
    flow: [
      "Oyuncuya ağa özel adres üretilir",
      "Zincir üstü onay sayısı beklenir",
      "Kur çevrimi uygulanır, cüzdan güncellenir",
      "Çekimde adres ve risk kontrolü yapılır",
    ],
    metrics: [
      { label: "Kripto payı", value: "%12", hint: "toplam yatırım" },
      { label: "Ortalama onay", value: "4 blok", hint: "USDT · TRC20" },
      { label: "İzlenen adres", value: "86", hint: "risk listesi" },
    ],
    table: {
      title: "Kripto çekim onayı",
      head: ["Oyuncu", "Varlık", "Tutar", "Adres durumu"],
      mode: "approve",
      rows: [
        { id: "kr1", cells: ["pl_60112", "USDT (TRC20)", "3.150 ₺", "Temiz"], state: "pending" },
        {
          id: "kr2",
          cells: ["pl_71234", "BTC", "41.200 ₺", "Karışım şüphesi"],
          state: "pending",
          note: "Adres, karıştırıcı servisle ilişkili kümede.",
        },
        { id: "kr3", cells: ["pl_33015", "USDT (ERC20)", "9.800 ₺", "Temiz"], state: "pending" },
      ],
    },
    rules: [
      "Çekim adresi yalnızca yatırım yapılan ağda olabilir.",
      "Risk listesindeki adrese çekim yapılmaz.",
      "Kur, işlem anındaki orana sabitlenir.",
    ],
    log: [
      { time: "20:40", text: "pl_71234 çekimi AML incelemesine gönderildi" },
      { time: "20:03", text: "TRC20 ağı onay süresi normale döndü" },
      { time: "19:19", text: "Risk listesine 4 yeni adres eklendi" },
    ],
  },

  /* ───────── Büyüme & Pazarlama ───────── */
  "urun-gambcrm": {
    summary:
      "Segmentler oyuncu hareketinden beslenir; tetikleyiciler kampanyayı doğru anda çalıştırır. Sonuç aynı ekranda ölçülür.",
    flow: [
      "Segment kuralı tanımlanır",
      "Oyuncu hareketi segmenti günceller",
      "Tetikleyici kampanyayı başlatır",
      "Sonuç kampanya raporuna düşer",
    ],
    metrics: [
      { label: "Aktif segment", value: "126", hint: "18'i otomatik" },
      { label: "Çalışan kampanya", value: "17", hint: "+2" },
      { label: "Geri dönen oyuncu", value: "31.240", hint: "+%18" },
    ],
    table: {
      title: "Yayın onayı bekleyen kampanyalar",
      head: ["Kampanya", "Segment", "Kitle"],
      mode: "approve",
      rows: [
        { id: "cr1", cells: ["Hafta sonu geri dönüş", "30 gün pasif", "18.400"], state: "pending" },
        {
          id: "cr2",
          cells: ["VIP özel masa daveti", "Sadakat 4+", "1.120"],
          state: "pending",
          note: "Kendini dışlayan oyuncular kitleden çıkarıldı.",
        },
        { id: "cr3", cells: ["İlk yatırım hatırlatması", "Kayıt · yatırım yok", "6.980"], state: "pending" },
      ],
    },
    rules: [
      "Kendini dışlayan ve limitli oyuncular kitleye eklenmez.",
      "Aynı oyuncuya 24 saatte en fazla bir kampanya gönderilir.",
      "Kampanya yayın öncesi örnek kitlede test edilir.",
    ],
    log: [
      { time: "20:57", text: "Hafta sonu kampanyası başladı · 18.400 oyuncu" },
      { time: "20:08", text: "'30 gün pasif' segmenti yenilendi" },
      { time: "19:22", text: "VIP daveti kitlesinden 44 oyuncu çıkarıldı" },
    ],
  },
  "urun-bonus": {
    summary:
      "Bonuslar kural, bütçe ve çevrim şartıyla birlikte kurulur. Kötüye kullanım kontrolü dağıtımdan önce çalışır.",
    flow: [
      "Bonus kuralı ve bütçesi tanımlanır",
      "Hedef kitle ve çevrim şartı bağlanır",
      "Kötüye kullanım kontrolü çalışır",
      "Bonus cüzdana ayrı bakiye olarak düşer",
    ],
    metrics: [
      { label: "Aktif bonus", value: "42", hint: "8'i otomatik" },
      { label: "Dağıtılan", value: "18.930", hint: "+%12" },
      { label: "Çevrim tamamlama", value: "%34", hint: "son 30 gün" },
    ],
    table: {
      title: "Bütçe aşımı onayı",
      head: ["Bonus", "Bütçe", "Kullanım"],
      mode: "approve",
      rows: [
        { id: "b1", cells: ["Hoş geldin %100", "400.000 ₺", "%96"], state: "pending" },
        { id: "b2", cells: ["Kayıp iadesi (haftalık)", "180.000 ₺", "%88"], state: "pending" },
        {
          id: "b3",
          cells: ["50 bedava dönüş", "60.000 ₺", "%112"],
          state: "pending",
          note: "Bütçe aşıldı; dağıtım durduruldu.",
        },
      ],
    },
    rules: [
      "Bütçesi dolan bonus otomatik durur.",
      "Çevrim şartı tamamlanmadan bonus bakiye çekilemez.",
      "Aynı cihazdan ikinci hoş geldin bonusu verilmez.",
    ],
    log: [
      { time: "20:46", text: "50 bedava dönüş bütçe aşımıyla durduruldu" },
      { time: "20:02", text: "Kayıp iadesi 2.310 oyuncuya işlendi" },
      { time: "19:10", text: "Kötüye kullanım kontrolü 38 talebi reddetti" },
    ],
  },
  "urun-pazarlama": {
    summary:
      "Kampanya takvimi, kanal gönderimleri ve site içi yerleşimler tek yerden planlanır; getiri kanal bazında ölçülür.",
    flow: [
      "Kampanya takvime eklenir",
      "Kanallar ve içerik hazırlanır",
      "Gönderim zamanlanır",
      "Kanal getirisi raporlanır",
    ],
    metrics: [
      { label: "Planlı gönderim", value: "9", hint: "önümüzdeki 48 saat" },
      { label: "Açılma oranı", value: "%31,4", hint: "e-posta" },
      { label: "Banner tıklaması", value: "%4,2", hint: "ana sayfa" },
    ],
    table: {
      title: "Zamanlanmış gönderimler",
      head: ["Gönderim", "Kanal", "Zaman"],
      mode: "toggle",
      rows: [
        { id: "pz1", cells: ["Hafta sonu bülteni", "E-posta", "Cmt 11:00"], state: "on" },
        { id: "pz2", cells: ["Canlı maç hatırlatması", "Anlık bildirim", "Bugün 21:30"], state: "on" },
        { id: "pz3", cells: ["Yeni oyun duyurusu", "SMS", "Paz 13:00"], state: "off" },
      ],
    },
    rules: [
      "SMS gönderimleri 09:00 – 21:00 arası yapılır.",
      "İzin vermemiş oyuncuya ileti gönderilmez.",
      "Aynı kampanya aynı kanaldan iki kez gönderilmez.",
    ],
    log: [
      { time: "20:35", text: "Canlı maç hatırlatması 42.000 kişiye zamanlandı" },
      { time: "19:48", text: "Yeni oyun SMS'i izin listesi nedeniyle beklemede" },
      { time: "18:20", text: "Ana sayfa banner'ı güncellendi" },
    ],
  },
  "urun-gambaffiliate": {
    summary:
      "İş ortağı ağı, komisyon modelleri ve hakediş dönemleri şeffaf biçimde yürür. Trafik ve dönüşüm ortak bazında izlenir.",
    flow: [
      "İş ortağı kaydolur ve onaylanır",
      "Komisyon modeli ve izleme bağlantısı tanımlanır",
      "Trafik ve dönüşüm kaydedilir",
      "Dönem sonunda hakediş hesaplanır",
    ],
    metrics: [
      { label: "Aktif ortak", value: "1.240", hint: "86'sı yeni" },
      { label: "Dönüşüm", value: "%3,9", hint: "tıklama → kayıt" },
      { label: "Açık hakediş", value: "96.300 ₺", hint: "Ekim" },
    ],
    table: {
      title: "Ortak başvuruları",
      head: ["Ortak", "Kaynak", "Model"],
      mode: "approve",
      rows: [
        { id: "af1", cells: ["ortak-311", "İçerik sitesi", "Gelir paylaşımı %30"], state: "pending" },
        {
          id: "af2",
          cells: ["ortak-312", "Sosyal medya", "CPA 400 ₺"],
          state: "pending",
          note: "Hesap yaşı 2 ay; izleme dönemi öneriliyor.",
        },
        { id: "af3", cells: ["ortak-313", "Karşılaştırma sitesi", "Karma"], state: "pending" },
      ],
    },
    rules: [
      "Marka adıyla reklam verilmesi yasaktır.",
      "Hakediş, iade ve iptal düşüldükten sonra hesaplanır.",
      "Alt ortak zinciri en fazla iki seviye olabilir.",
    ],
    log: [
      { time: "20:30", text: "ortak-118 Ekim hakedişi hesaplandı" },
      { time: "19:55", text: "ortak-207 marka adıyla reklam nedeniyle askıya alındı" },
      { time: "18:40", text: "86 yeni ortak başvurusu alındı" },
    ],
  },
  "urun-sadakat": {
    summary:
      "Seviye ve puan sistemi oyuncu hareketinden beslenir. VIP hesap yöneticileri kendi portföylerini bu ekrandan yönetir.",
    flow: [
      "Oyuncu hareketi puana çevrilir",
      "Seviye eşiği aşılınca yükselir",
      "Ayrıcalıklar ve teklifler açılır",
      "Kayıp iadesi kurala göre işlenir",
    ],
    metrics: [
      { label: "VIP oyuncu", value: "2.310", hint: "seviye 4+" },
      { label: "Ortalama seviye", value: "2,4", hint: "aktif oyuncu" },
      { label: "Kayıp iadesi", value: "214.800 ₺", hint: "bu hafta" },
    ],
    table: {
      title: "Seviye yükseltme onayı",
      head: ["Oyuncu", "Seviye", "Hacim (30 gün)"],
      mode: "approve",
      rows: [
        { id: "sd1", cells: ["pl_22871", "3 → 4", "486.000 ₺"], state: "pending" },
        { id: "sd2", cells: ["pl_33015", "4 → 5", "1.240.000 ₺"], state: "pending" },
        {
          id: "sd3",
          cells: ["pl_41200", "2 → 3", "118.000 ₺"],
          state: "pending",
          note: "Oyuncuda aktif mola var; yükseltme ertelenebilir.",
        },
      ],
    },
    rules: [
      "Seviye düşüşü 90 gün hareketsizlikten sonra uygulanır.",
      "Molada olan oyuncuya VIP teklifi gönderilmez.",
      "Kayıp iadesi bonus değil, gerçek bakiye olarak yazılır.",
    ],
    log: [
      { time: "20:38", text: "pl_33015 seviye 5 portföyüne alındı" },
      { time: "19:50", text: "Haftalık kayıp iadesi 2.310 oyuncuya işlendi" },
      { time: "18:12", text: "Seviye eşikleri Ekim dönemine göre güncellendi" },
    ],
  },
  "urun-is-gelistirme": {
    summary:
      "Pazar çalışmaları, sağlayıcı görüşmeleri ve lansman planı aynı takvimde yürür; dönemsel değerlendirme bu ekrandan yapılır.",
    flow: [
      "Pazar ve rakip analizi yapılır",
      "Sağlayıcı ve ödeme ortakları seçilir",
      "Lansman planı ve hedefler yazılır",
      "Dönem sonunda performans değerlendirilir",
    ],
    metrics: [
      { label: "Açık pazar çalışması", value: "3", hint: "DE, BR, KZ" },
      { label: "Görüşülen sağlayıcı", value: "11", hint: "bu çeyrek" },
      { label: "Planlanan lansman", value: "2", hint: "Q1" },
    ],
    table: {
      title: "Karar bekleyen başlıklar",
      head: ["Başlık", "Pazar", "Durum"],
      mode: "approve",
      rows: [
        { id: "bd1", cells: ["Yerel ödeme ortağı seçimi", "BR", "İki aday"], state: "pending" },
        { id: "bd2", cells: ["Sağlayıcı sözleşme yenileme", "Genel", "Fiyat teklifi"], state: "pending" },
        {
          id: "bd3",
          cells: ["Lansman tarihi", "DE", "Lisans bekliyor",],
          state: "pending",
          note: "Lisans çıkmadan tarih sabitlenmez.",
        },
      ],
    },
    rules: [
      "Lisans çıkmadan pazara giriş tarihi duyurulmaz.",
      "Sağlayıcı seçiminde teknik uygunluk ticari koşuldan önce gelir.",
      "Her pazar çalışması yazılı bir özetle kapanır.",
    ],
    log: [
      { time: "19:30", text: "BR pazarı için iki ödeme ortağı kısa listeye alındı" },
      { time: "18:15", text: "DE lisans başvurusu ikinci aşamaya geçti" },
      { time: "17:40", text: "Q3 performans değerlendirmesi paylaşıldı" },
    ],
  },

  /* ───────── Risk & Uyum ───────── */
  "urun-risk-fraud": {
    summary:
      "Çoklu hesap, cihaz eşleştirme ve bonus kötüye kullanımı aynı kural motorunda değerlendirilir; vakalar kuyrukta izlenir.",
    flow: [
      "Hesap, cihaz ve ödeme izleri toplanır",
      "Kural motoru risk skoru üretir",
      "Eşik aşılırsa vaka açılır",
      "Karar ve gerekçe kaydedilir",
    ],
    metrics: [
      { label: "Açık uyarı", value: "57", hint: "+12" },
      { label: "İncelemede hesap", value: "311", hint: "+46" },
      { label: "İptal kupon", value: "4.218", hint: "bugün" },
    ],
    table: {
      title: "Vaka kuyruğu",
      head: ["Vaka", "Oyuncu", "Sinyal"],
      mode: "approve",
      rows: [
        { id: "rf1", cells: ["#4412", "pl_51077", "4 hesap · aynı cihaz"], state: "pending" },
        {
          id: "rf2",
          cells: ["#4413", "pl_71234", "Bonus çevrimi · düşük riskli bahis"],
          state: "pending",
          note: "Çevrim hacminin %92'si iade oranı yüksek pazarda.",
        },
        { id: "rf3", cells: ["#4414", "pl_60112", "Kupon · şüpheli müsabaka"], state: "pending" },
      ],
    },
    rules: [
      "Aynı cihazdan üçten fazla hesap otomatik işaretlenir.",
      "Vaka kapatılırken gerekçe yazmak zorunludur.",
      "İptal edilen kuponun bakiyesi aynı gün iade edilir.",
    ],
    log: [
      { time: "21:04", text: "12 müsabaka kaldırıldı, 318 kupon iptal edildi" },
      { time: "20:27", text: "Vaka #4410 kapatıldı · bonus kötüye kullanımı" },
      { time: "19:44", text: "Cihaz eşleştirme kuralı eşiği 3'e düşürüldü" },
    ],
  },
  "urun-aml": {
    summary:
      "Eşik ve desen kuralları olağan dışı para hareketini işaretler; fon kaynağı sorgusu ve kayıtlar denetime hazır durur.",
    flow: [
      "İşlem kurallara göre değerlendirilir",
      "Eşik ya da desen aşılırsa vaka açılır",
      "Fon kaynağı sorgusu gönderilir",
      "Karar ve belgeler saklanır",
    ],
    metrics: [
      { label: "Açık vaka", value: "23", hint: "7'si 48 saati aştı" },
      { label: "Fon kaynağı sorgusu", value: "9", hint: "yanıt bekliyor" },
      { label: "Saklama süresi", value: "5 yıl", hint: "pazar kuralı" },
    ],
    table: {
      title: "İnceleme bekleyen hareketler",
      head: ["Oyuncu", "Hareket", "Kural"],
      mode: "approve",
      rows: [
        { id: "am1", cells: ["pl_71234", "41.200 ₺ kripto çekim", "Karışım şüphesi"], state: "pending" },
        {
          id: "am2",
          cells: ["pl_33015", "6 × 9.800 ₺ yatırım", "Eşik altı tekrar"],
          state: "pending",
          note: "24 saatte eşik altı altı işlem.",
        },
        { id: "am3", cells: ["pl_19844", "Hızlı giriş-çıkış", "Düşük oyun hacmi"], state: "pending" },
      ],
    },
    rules: [
      "Eşik altı tekrarlayan işlemler toplamda değerlendirilir.",
      "Fon kaynağı yanıtı gelmeden çekim onaylanmaz.",
      "Vaka kayıtları değiştirilemez; yalnızca üzerine not eklenir.",
    ],
    log: [
      { time: "20:40", text: "pl_71234 için vaka açıldı · kripto çekim" },
      { time: "20:00", text: "pl_33015 fon kaynağı sorgusu gönderildi" },
      { time: "18:50", text: "Eşik altı tekrar kuralı 24 saate çekildi" },
    ],
  },
  "urun-uyum": {
    summary:
      "Pazara göre rapor şablonları, değiştirilemez denetim kayıtları ve erişim raporları panelden üretilir.",
    flow: [
      "Dönem ve pazar seçilir",
      "Şablona göre veri toplanır",
      "Rapor önizlenir ve onaylanır",
      "Gönderim kaydı saklanır",
    ],
    metrics: [
      { label: "Hazır rapor", value: "2", hint: "gönderim bekliyor" },
      { label: "Denetim kaydı", value: "1,2 Mn", hint: "son 30 gün" },
      { label: "Erişim raporu", value: "aylık", hint: "otomatik" },
    ],
    table: {
      title: "Gönderim onayı bekleyen raporlar",
      head: ["Rapor", "Pazar", "Dönem"],
      mode: "approve",
      rows: [
        { id: "uy1", cells: ["Oyuncu koruma özeti", "TR", "Ekim 2026"], state: "pending" },
        { id: "uy2", cells: ["İşlem hacmi bildirimi", "DE", "Q3 2026"], state: "pending" },
        {
          id: "uy3",
          cells: ["Erişim ve yetki raporu", "Genel", "Ekim 2026"],
          state: "pending",
          note: "Üç kullanıcıda kullanılmayan yetki tespit edildi.",
        },
      ],
    },
    rules: [
      "Rapor gönderimi iki kişi onayı ister.",
      "Denetim kayıtları silinemez, dışa aktarılabilir.",
      "Veri saklama süresi pazar mevzuatına göre ayarlanır.",
    ],
    log: [
      { time: "20:20", text: "Ekim oyuncu koruma özeti hazırlandı" },
      { time: "19:05", text: "Erişim raporu üç kullanılmayan yetki buldu" },
      { time: "17:55", text: "Q3 işlem hacmi bildirimi önizlendi" },
    ],
  },

  /* ───────── Veri & Yapay Zekâ ───────── */
  "urun-ai": {
    summary:
      "Öneri, ayrılma riski ve fraud skorlama modelleri operasyonun günlük kararlarına bağlanır. Her model ayrı sürümle yayına alınır.",
    flow: [
      "Model eğitim verisiyle hazırlanır",
      "Gölge modda gerçek trafikle karşılaştırılır",
      "Eşik ve etki alanı belirlenir",
      "Yayına alınır ve izlenir",
    ],
    metrics: [
      { label: "Yayındaki model", value: "4", hint: "1'i gölge modda" },
      { label: "Öneri tıklanma", value: "%18,4", hint: "+1,1 puan" },
      { label: "Model çağrısı", value: "2,1 Mn/saat", hint: "tepe" },
    ],
    table: {
      title: "Yayın onayı bekleyen modeller",
      head: ["Model", "Sürüm", "Gölge sonucu"],
      mode: "approve",
      rows: [
        { id: "ai1", cells: ["Oyun önerisi", "v4.2", "+%1,4 tıklanma"], state: "pending" },
        {
          id: "ai2",
          cells: ["Ayrılma riski", "v2.0", "+%6 isabet"],
          state: "pending",
          note: "Yanlış pozitif oranı %3'ten %4,2'ye çıkıyor.",
        },
        { id: "ai3", cells: ["Fraud skorlama", "v6.1", "−%12 yanlış alarm"], state: "pending" },
      ],
    },
    rules: [
      "Hiçbir model tek başına hesap kapatamaz; karar insana bağlıdır.",
      "Yeni sürüm en az 7 gün gölge modda çalışır.",
      "Model çıktısı denetim kaydına yazılır.",
    ],
    log: [
      { time: "20:44", text: "Fraud skorlama v6.1 gölge modda 7. günü tamamladı" },
      { time: "19:36", text: "Oyun önerisi v4.1 yayında · %18,4 tıklanma" },
      { time: "18:02", text: "Ayrılma riski modeli 12.480 oyuncuyu işaretledi" },
    ],
  },
  "urun-bi": {
    summary:
      "Panolar ortak tanımlarla çalışır; özel rapor üreticisi ve zamanlanmış gönderim aynı ekrandan yönetilir.",
    flow: [
      "Metrik tanımı ortak sözlükten alınır",
      "Pano ya da rapor kurulur",
      "Erişim rolü belirlenir",
      "Zamanlanmış gönderim açılır",
    ],
    metrics: [
      { label: "Pano", value: "36", hint: "12'si paylaşılan" },
      { label: "Zamanlı rapor", value: "18", hint: "günlük + haftalık" },
      { label: "Sorgu süresi", value: "1,8 sn", hint: "ortalama" },
    ],
    table: {
      title: "Paylaşım onayı bekleyen panolar",
      head: ["Pano", "Sahibi", "Erişim"],
      mode: "approve",
      rows: [
        { id: "bi1", cells: ["Günlük operasyon özeti", "Operasyon", "Tüm ekip"], state: "pending" },
        {
          id: "bi2",
          cells: ["Oyuncu kârlılığı", "Finans", "Yönetim",],
          state: "pending",
          note: "Kişisel veri içeren üç sütun maskelendi.",
        },
        { id: "bi3", cells: ["Kampanya getirisi", "Pazarlama", "Pazarlama + Yönetim"], state: "pending" },
      ],
    },
    rules: [
      "Kişisel veri içeren sütunlar varsayılan olarak maskelenir.",
      "Metrik tanımı değişirse eski raporlar işaretlenir.",
      "Pano paylaşımı rol bazında yapılır, kişiye özel değil.",
    ],
    log: [
      { time: "20:15", text: "Günlük operasyon özeti panosu yenilendi" },
      { time: "19:00", text: "GGR tanımı sözlükte güncellendi · 4 pano işaretlendi" },
      { time: "18:25", text: "Haftalık rapor gönderimi 12 kişiye yapıldı" },
    ],
  },
  "urun-veri-akisi": {
    summary:
      "Oyuncu ve işlem olayları anında dışarı taşınır. Webhook hedefleri, yeniden deneme ve gecikme bu ekrandan izlenir.",
    flow: [
      "Olay türü ve hedef tanımlanır",
      "İmzalı webhook gönderilir",
      "Hata durumunda yeniden denenir",
      "Gecikme ve başarı oranı izlenir",
    ],
    metrics: [
      { label: "Olay / saat", value: "2,1 Mn", hint: "tepe" },
      { label: "Teslim oranı", value: "%99,94", hint: "son 24 saat" },
      { label: "Ortalama gecikme", value: "180 ms", hint: "uçtan uca" },
    ],
    table: {
      title: "Webhook hedefleri",
      head: ["Hedef", "Olay", "Başarı"],
      mode: "toggle",
      rows: [
        { id: "ds1", cells: ["Veri ambarı", "tüm olaylar", "%99,99"], state: "on" },
        { id: "ds2", cells: ["CRM (dış)", "oyuncu olayları", "%99,2"], state: "on" },
        {
          id: "ds3",
          cells: ["Test ortamı", "işlem olayları", "%86,4"],
          state: "off",
          note: "Hata oranı yüksek olduğu için kapatıldı.",
        },
      ],
    },
    rules: [
      "Her webhook imzalanır; imzasız istek kabul edilmez.",
      "Başarısız teslim 5 kez, artan aralıkla yeniden denenir.",
      "Hata oranı %10'u geçen hedef otomatik kapatılır.",
    ],
    log: [
      { time: "20:50", text: "Test ortamı hedefi yüksek hata oranıyla kapatıldı" },
      { time: "20:05", text: "Veri ambarı hedefi 2,1 Mn olay/saat işledi" },
      { time: "19:12", text: "CRM hedefi için yeniden deneme aralığı güncellendi" },
    ],
  },

  /* ───────── Operasyon & Altyapı ───────── */
  "urun-arka-ofis": {
    summary:
      "Roller, onay akışları ve işlem geçmişi burada tanımlanır. Çoklu marka görünümü aynı ekrandan değiştirilir.",
    flow: [
      "Rol ve yetkiler tanımlanır",
      "Kritik işlemler onay akışına bağlanır",
      "Kullanıcı işlemleri kayda geçer",
      "Marka bazlı görünüm uygulanır",
    ],
    metrics: [
      { label: "Onay bekleyen", value: "214", hint: "tüm kuyruklar" },
      { label: "Tanımlı rol", value: "18", hint: "6 ekip" },
      { label: "Günlük işlem", value: "12.400", hint: "panel kullanıcıları" },
    ],
    table: {
      title: "Yetki değişikliği talepleri",
      head: ["Kullanıcı", "Talep", "Talep eden"],
      mode: "approve",
      rows: [
        { id: "ao1", cells: ["elif.yucel", "Bonus bütçesi onayı", "Pazarlama"], state: "pending" },
        {
          id: "ao2",
          cells: ["murat.k", "Çekim onayı (50k+)", "Finans"],
          state: "pending",
          note: "Aynı kişide hem talep hem onay yetkisi oluşur.",
        },
        { id: "ao3", cells: ["destek.ekibi", "Oyuncu notu silme", "Destek"], state: "pending" },
      ],
    },
    rules: [
      "Bir kullanıcı kendi açtığı talebi onaylayamaz.",
      "Yetki değişiklikleri denetim kaydına yazılır.",
      "Kullanılmayan yetkiler 90 gün sonra işaretlenir.",
    ],
    log: [
      { time: "20:55", text: "214 işlem onay kuyruğunda bekliyor" },
      { time: "20:10", text: "'Oyuncu notu silme' yetkisi reddedildi" },
      { time: "19:05", text: "Aylık erişim raporu üretildi" },
    ],
  },
  "urun-cms": {
    summary:
      "Sayfalar, banner'lar, menüler ve marka temaları kod yazmadan yönetilir. Yayın öncesi önizleme zorunludur.",
    flow: [
      "İçerik taslak olarak hazırlanır",
      "Dil sürümleri eşlenir",
      "Önizlemede kontrol edilir",
      "Yayına alınır, sürüm saklanır",
    ],
    metrics: [
      { label: "Bugünkü yayın", value: "12", hint: "3 marka" },
      { label: "Taslak", value: "27", hint: "8 dil" },
      { label: "Eksik çeviri", value: "14", hint: "sayfa" },
    ],
    table: {
      title: "Yayın onayı bekleyen içerik",
      head: ["İçerik", "Marka", "Dil"],
      mode: "approve",
      rows: [
        { id: "cm1", cells: ["Ana sayfa banner'ı", "Marka A", "TR, EN"], state: "pending" },
        {
          id: "cm2",
          cells: ["Promosyon şartları", "Marka B", "TR",],
          state: "pending",
          note: "EN ve DE çevirisi eksik.",
        },
        { id: "cm3", cells: ["Yardım merkezi · ödeme", "Tüm markalar", "8 dil"], state: "pending" },
      ],
    },
    rules: [
      "Promosyon şartları olmadan kampanya banner'ı yayınlanmaz.",
      "Yayınlanan her sürüm saklanır ve geri alınabilir.",
      "Ana dildeki değişiklik diğer dilleri 'gözden geçir' olarak işaretler.",
    ],
    log: [
      { time: "20:33", text: "Yardım merkezi ödeme sayfası 8 dilde güncellendi" },
      { time: "19:40", text: "Marka B promosyon şartları çeviri bekliyor" },
      { time: "18:28", text: "Ana sayfa banner'ı önizlemeye alındı" },
    ],
  },
  "urun-destek": {
    summary:
      "Destek ekibi oyuncuyu, işlemi ve geçmişi aynı ekranda görür. Talepler etiketlenir, yanıt süreleri izlenir.",
    flow: [
      "Talep kanaldan düşer",
      "Oyuncu kaydıyla eşleşir",
      "Etiket ve öncelik atanır",
      "Çözüm ve süre kaydedilir",
    ],
    metrics: [
      { label: "Açık talep", value: "148", hint: "−21" },
      { label: "İlk yanıt", value: "4 dk", hint: "canlı destek" },
      { label: "Çözüm oranı", value: "%92", hint: "ilk temasta" },
    ],
    table: {
      title: "Üst sorumluya aktarım talepleri",
      head: ["Talep", "Oyuncu", "Konu"],
      mode: "approve",
      rows: [
        { id: "de1", cells: ["#9912", "pl_48213", "Çekim gecikmesi"], state: "pending" },
        {
          id: "de2",
          cells: ["#9915", "pl_51077", "Hesap kısıtlaması"],
          state: "pending",
          note: "Risk ekibinin açık vakası var; yanıt şablonu kilitli.",
        },
        { id: "de3", cells: ["#9921", "pl_60112", "Bonus çevrimi itirazı"], state: "pending" },
      ],
    },
    rules: [
      "Açık risk vakası olan oyuncuya kısıtlama gerekçesi açıklanmaz.",
      "Çekim gecikmesi taleplerinde finans kuyruğu kontrol edilir.",
      "Hazır yanıtlar dil ve pazara göre ayrılır.",
    ],
    log: [
      { time: "20:48", text: "#9915 risk ekibine aktarıldı" },
      { time: "20:02", text: "Çekim gecikmesi talepleri 21 azaldı" },
      { time: "19:15", text: "Hazır yanıt kümesi 8 dilde güncellendi" },
    ],
  },
  "urun-bayi": {
    summary:
      "Saha ağı hiyerarşi, limit ve komisyonla yönetilir. Bayi bakiyesi merkezden dağıtılır, hareketler izlenir.",
    flow: [
      "Bayi hiyerarşiye eklenir",
      "Limit ve komisyon tanımlanır",
      "Bakiye yukarıdan aşağı dağıtılır",
      "Hareketler ve hakediş raporlanır",
    ],
    metrics: [
      { label: "Aktif bayi", value: "860", hint: "3 seviye" },
      { label: "Dağıtılan limit", value: "4,8 Mn ₺", hint: "bu hafta" },
      { label: "Ortalama komisyon", value: "%4,2", hint: "ciro üzerinden" },
    ],
    table: {
      title: "Limit artırma talepleri",
      head: ["Bayi", "Seviye", "Talep"],
      mode: "approve",
      rows: [
        { id: "by1", cells: ["bayi-204", "2", "120.000 → 200.000 ₺"], state: "pending" },
        {
          id: "by2",
          cells: ["bayi-318", "3", "40.000 → 90.000 ₺"],
          state: "pending",
          note: "Üst bayinin kalan limiti 60.000 ₺.",
        },
        { id: "by3", cells: ["bayi-011", "1", "900.000 → 1.400.000 ₺"], state: "pending" },
      ],
    },
    rules: [
      "Alt bayi limiti üst bayinin kalan limitini aşamaz.",
      "Komisyon, iade ve iptal düşüldükten sonra hesaplanır.",
      "Bakiye aktarımı geri alınamaz; düzeltme ters kayıtla yapılır.",
    ],
    log: [
      { time: "20:25", text: "bayi-011 haftalık limiti yenilendi" },
      { time: "19:33", text: "bayi-318 talebi üst limit nedeniyle beklemede" },
      { time: "18:10", text: "Haftalık komisyon raporu üretildi" },
    ],
  },
  "urun-api": {
    summary:
      "Dış sistemler tanımlı sözleşmelerle bağlanır. Anahtarlar, hız sınırları ve sürüm geçişleri bu ekrandan yönetilir.",
    flow: [
      "Anahtar üretilir ve kapsamı belirlenir",
      "Sandbox'ta doğrulanır",
      "Hız sınırı ve IP kısıtı uygulanır",
      "Sürüm geçişi planlanır",
    ],
    metrics: [
      { label: "Yanıt süresi", value: "64 ms", hint: "p95" },
      { label: "İstek / dakika", value: "148.000", hint: "tepe" },
      { label: "Hata oranı", value: "%0,04", hint: "son 24 saat" },
    ],
    table: {
      title: "API anahtarları",
      head: ["Anahtar", "Sahip", "Kapsam"],
      mode: "toggle",
      rows: [
        { id: "ap1", cells: ["key_prod_a1", "Marka A · üretim", "cüzdan, oyun"], state: "on" },
        { id: "ap2", cells: ["key_sbx_b7", "Sağlayıcı B · sandbox", "oyun"], state: "on" },
        {
          id: "ap3",
          cells: ["key_prod_c2", "Ortak C · üretim", "raporlama"],
          state: "off",
          note: "Sözleşme yenilenene kadar kapalı.",
        },
      ],
    },
    rules: [
      "Üretim anahtarı sandbox'a, sandbox anahtarı üretime geçemez.",
      "Hız sınırı aşılırsa istek 429 ile reddedilir.",
      "Eski sürüm en az 6 ay desteklenir.",
    ],
    log: [
      { time: "20:30", text: "key_prod_c2 sözleşme nedeniyle kapatıldı" },
      { time: "19:48", text: "v1 → v2 geçiş duyurusu entegratörlere gönderildi" },
      { time: "18:35", text: "Hız sınırı Marka A için 2.000 ist/dk'ya çıkarıldı" },
    ],
  },
  "urun-coklu-marka": {
    summary:
      "Markalar aynı altyapıda ayrı kurallar ve yetkilerle çalışır. Oyuncu ve cüzdan katmanı ortaktır, raporlar hem ayrı hem birlikte okunur.",
    flow: [
      "Marka ve pazar kuralları tanımlanır",
      "Tema, içerik ve dil ayarlanır",
      "Yetkiler marka bazında verilir",
      "Raporlar marka kırılımıyla üretilir",
    ],
    metrics: [
      { label: "Aktif marka", value: "6", hint: "+1" },
      { label: "Pazar", value: "9", hint: "4 dil ailesi" },
      { label: "Ortak oyuncu katmanı", value: "evet", hint: "tek cüzdan" },
    ],
    table: {
      title: "Marka yapılandırması",
      head: ["Marka", "Pazar", "Durum"],
      mode: "toggle",
      rows: [
        { id: "mb1", cells: ["Marka A", "TR", "Yayında"], state: "on" },
        { id: "mb2", cells: ["Marka B", "DE", "Yayında"], state: "on" },
        {
          id: "mb3",
          cells: ["Marka C", "BR", "Hazırlık"],
          state: "off",
          note: "Lisans ve ödeme ortağı bekleniyor.",
        },
      ],
    },
    rules: [
      "Bir markanın kuralı diğerini etkilemez.",
      "Marka bazlı yetkisi olmayan kullanıcı o markanın verisini göremez.",
      "Ortak cüzdan katmanı marka ayrımını korur.",
    ],
    log: [
      { time: "20:18", text: "Marka C hazırlık ortamı kuruldu" },
      { time: "19:26", text: "Marka B için DE pazar kısıtları güncellendi" },
      { time: "18:00", text: "Marka kırılımlı günlük rapor üretildi" },
    ],
  },
  "urun-altyapi": {
    summary:
      "Barındırma, ölçekleme, izleme ve yedekleme yönetilir. Alarm eşikleri ve bakım pencereleri bu ekrandan ayarlanır.",
    flow: [
      "Servisler izlenir ve ölçeklenir",
      "Eşik aşılırsa alarm üretilir",
      "Olay müdahale akışı başlar",
      "Yedekleme ve geri dönüş denenir",
    ],
    metrics: [
      { label: "Çalışma süresi", value: "%99,97", hint: "30 gün" },
      { label: "Açık alarm", value: "0", hint: "anlık" },
      { label: "Son geri dönüş provası", value: "9 gün önce", hint: "başarılı" },
    ],
    table: {
      title: "Bakım penceresi onayı",
      head: ["Servis", "Pencere", "Etki"],
      mode: "approve",
      rows: [
        { id: "in1", cells: ["Ödeme servisi", "Çar 03:00 – 03:40", "Kısa kesinti"], state: "pending" },
        {
          id: "in2",
          cells: ["Oran beslemesi", "Per 04:00 – 04:20", "Kesintisiz",],
          state: "pending",
          note: "Maç takvimi yoğun; ertelenmesi öneriliyor.",
        },
        { id: "in3", cells: ["Raporlama", "Cmt 02:00 – 05:00", "Rapor gecikmesi"], state: "pending" },
      ],
    },
    rules: [
      "Bakım penceresi yoğun maç saatlerine konmaz.",
      "Her bakım öncesi geri dönüş adımları yazılır.",
      "Alarm eşiği değişikliği ikinci bir onay ister.",
    ],
    log: [
      { time: "21:00", text: "Otomatik ölçekleme 6 → 9 düğüm" },
      { time: "20:14", text: "Oran beslemesi bakımı için erteleme önerildi" },
      { time: "17:30", text: "Günlük yedekleme doğrulandı" },
    ],
  },
};

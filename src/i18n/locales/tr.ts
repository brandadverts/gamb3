/**
 * Türkçe metinler: sitenin ana dili ve diğer dil dosyalarının ölçüsü.
 * Diğer diller (en, de, fr, es, pt, ru, ar) bu dosyayla aynı yapıdadır; bir alan eklerseniz
 * TypeScript eksik çevirileri derlemede gösterir.
 *
 * Süslü parantezli yer tutucular ({modules}, {groups}, {n}, {group}) çalışma anında doldurulur.
 */
const tr = {
  site: {
    name: "Gamb Gaming",
    tagline: "B2B / iGAMING",
  },

  /* Arama motorları ve paylaşım kartları için sayfa başlıkları ve açıklamaları. */
  meta: {
    home: {
      title: "Gamb Gaming — iGaming için teknoloji ortağınız",
      description:
        "Lisanslı operatörler için sportsbook, casino, ödeme, bonus, CRM, risk ve yapay zekâ çözümleri. Kurulum ve operasyon desteği tek ekipte.",
    },
    products: {
      title: "iGaming ürünleri ve modülleri — Gamb Gaming",
      description:
        "Sportsbook, casino entegrasyonu, ortak cüzdan, ödeme, CRM, bonus, affiliate, risk ve yapay zekâ: bir iGaming operasyonunun ihtiyaç duyduğu 32 modül tek altyapıda.",
    },
    technology: {
      title: "iGaming platform mimarisi ve API — Gamb Gaming",
      description:
        "API odaklı entegrasyon, modüler servisler, ortak veri katmanı ve yerleşik güvenlik. Yoğun maç günlerinde de aynı şekilde çalışan bir altyapı.",
    },
    cases: {
      title: "Vaka çalışmaları: kurulum, geçiş, çoklu marka — Gamb Gaming",
      description:
        "Sıfırdan açılış, kesintisiz platform geçişi ve ikinci marka: üç temsili senaryo, riskler ve her birine karşı alınan önlemler.",
    },
    packages: {
      title: "Paketler ve kapsam: Launch, Scale, Enterprise — Gamb Gaming",
      description:
        "Yeni operasyonlar, büyüyen operatörler ve çok markalı yapılar için başlangıç kapsamları. Fiyat keşif sonrasında özel teklif olarak verilir.",
    },
    demo: {
      title: "Demo planla — Gamb Gaming",
      description:
        "Teknik ekiple bir platform turu planlayın: hedefleriniz, modüller ve başlangıç planı tek görüşmede.",
    },
    blog: {
      title: "Blog: iGaming altyapısı üzerine notlar — Gamb Gaming",
      description:
        "Platform seçimi, entegrasyon, ödeme, risk ve operasyon üzerine; altyapı sağlayıcısı arayan ekipler için sahadan yazılar.",
    },
    notfound: {
      title: "Sayfa bulunamadı — Gamb Gaming",
      description: "Aradığınız sayfa taşınmış ya da adres yanlış yazılmış olabilir.",
    },
  },

  nav: {
    home: "Ana sayfa",
    products: "Ürünler",
    technology: "Teknoloji",
    cases: "Vaka çalışmaları",
    packages: "Paketler",
    blog: "Blog",
    demo: "Demo planla",
    menu: "Menü",
    close: "Kapat",
    mainNav: "Ana menü",
    mobileNav: "Mobil menü",
    skip: "İçeriğe geç",
    language: "Dil",
    logoLabel: "Gamb Gaming ana sayfa",
    menuNote: ["Yalnızca lisanslı operatörler için B2B teknoloji.", "Son kullanıcı ve oyuncu desteği verilmez."],
  },

  footer: {
    headline: ["Oyunun arkasındaki", "güçlü teknoloji."],
    copy: "Lisanslı iGaming operatörleri için uçtan uca teknoloji ve operasyon ortağı.",
    explore: "Keşfet",
    products: "Ürünler",
    pagesLabel: "Sayfalar",
    cardTitle: "Platformu birlikte gezelim.",
    cardCopy: "Hedeflerinizi anlatın; ürün turunu operasyonunuza göre hazırlayalım.",
    legal:
      "Gamb Gaming yalnızca lisanslı operatörlere teknoloji ve operasyon hizmeti sağlar. Son kullanıcılara oyun, bahis ya da hesap desteği sunmaz. Hizmetlerin kapsamı, operatörün faaliyet gösterdiği pazarın mevzuatına göre belirlenir.",
    rights: "Tüm hakları saklıdır.",
    top: "Yukarı dön",
  },

  heroes: {
    home: {
      title: ["iGaming için", "teknoloji ortağınız."],
      description:
        "Lisanslı operatörler için sportsbook, casino, ödeme, bonus, CRM, risk ve yapay zekâ çözümleri. Kurulum ve operasyon desteği tek ekipte.",
    },
    products: {
      title: ["Operasyonun tamamı,", "tek altyapıda."],
      description:
        "{groups} başlık altında {modules} modül: oyundan ödemeye, bonustan riske bir iGaming operasyonunun ihtiyaç duyduğu her şey. İhtiyacınız olanla başlayın; diğerleri hazır olduğunuzda devreye girer.",
    },
    technology: {
      title: ["Trafik yükselir.", "Oyun devam eder."],
      description:
        "API odaklı entegrasyon, modüler servisler ve ortak veri katmanı. Yoğun maç günlerinde de aynı şekilde çalışacak biçimde tasarlanır.",
      bullets: ["API odaklı", "Modüler yapı", "Ortak cüzdan", "Rol bazlı erişim"],
    },
    cases: {
      title: ["Yeni bir oyun", "kurmak mümkün."],
      description:
        "Yeni başlangıçlar, kontrollü geçişler ve çok markalı büyüme. Üç temsili operasyon senaryosu.",
    },
    packages: {
      title: ["Bugünü kurun.", "Yarını açık bırakın."],
      description:
        "Hazır kalıplar değil. Operasyonunuza göre bir başlangıç ve büyüdükçe genişleyen bir kapsam.",
    },
  },

  home: {
    stats: [
      { value: "%100", label: "MÜŞTERİ ODAKLI" },
      { value: "14 gün", label: "HEDEF AÇILIŞ PLANI" },
      { value: "{modules} modül", label: "TEK PLATFORM" },
    ],
    heroPrimary: "Platformu keşfet",
    heroSecondary: "Servislerimizi incele",
    servicesTitle: "Öne çıkan hizmetler",
    servicesCopy: "Kurulumdan günlük operasyona, ihtiyacınıza uygun uzmanlık.",
    services: [
      { title: "Platform & Entegrasyon", copy: "Ürünler, veri ve iş akışlarını tek omurgada birleştirin." },
      { title: "Ödeme Operasyonları", copy: "Ödeme bağlantıları, işlem takibi ve mutabakat akışları." },
      { title: "CRM & Oyuncu Yönetimi", copy: "Oyuncu segmentasyonu, kampanya ve yaşam döngüsü yönetimi." },
      { title: "Risk & Güvenlik", copy: "Kimlik, erişim, limit ve risk kurallarını merkezileştirin." },
      { title: "Affiliate Yönetimi", copy: "İş ortaklığı, komisyon ve performans takibi." },
    ],
    tileSlogan: "Tek Altyapı hepsine yeter.",
    tileLink: "Tüm modülleri görüntüle",
    consoleTitle: "Ekibiniz güne tek ekranla başlar.",
    consoleCopy:
      "Ticaret, ödeme, CRM ve risk ekipleri aynı veriye bakar. Kim neyi onayladı, hangi kampanya çalışıyor, hangi işlem bekliyor; hepsi aynı yerde.",
    consolePoints: [
      "Rolünüze göre düzenlenen görünümler",
      "Onay bekleyen işler için ortak kuyruk",
      "Marka ve pazar bazında filtreleme",
    ],
    consoleCta: "Ürünleri incele",
    platformTitle: "Operasyonun tamamı aynı dili konuşur.",
    platformCopy:
      "Ayrı araçlar ve kopuk raporlar yerine, oyuncu hareketinden ödemeye kadar tüm operasyon ortak bir veri katmanında buluşur.",
    platformFeatures: [
      { title: "Tek oyuncu görünümü", copy: "Hesap, cüzdan, oyun ve kampanya hareketlerini birlikte değerlendirin." },
      { title: "Ortak operasyon", copy: "Ürün ekipleri aynı kurallar, yetkiler ve onay akışlarıyla çalışsın." },
      { title: "Ölçülebilir büyüme", copy: "Kanal, ürün ve segment performansını tek raporlama düzeninde izleyin." },
    ],
    audienceTitle: "Nerede olursanız olun, oradan başlarız.",
    audienceCopy:
      "İlk markasını açan ekipten çok markalı gruplara, başlangıç noktası farklıdır; hedef aynıdır.",
    audiences: [
      {
        title: "İlk markasını kuranlar",
        copy: "Lisans ve ekip hazır; şimdi sıra ürünleri, ödemeleri ve arka ofisi tek seferde ayağa kaldırmakta.",
        points: ["Temel ürün kapsamı", "Açılış kontrol listesi", "Ekip eğitimi"],
      },
      {
        title: "Kopuk araçlardan yorulanlar",
        copy: "Ayrı paneller ve elle birleştirilen raporlar yerine, oyuncuyu ve geliri tek yerden görmek isteyen ekipler.",
        points: ["Ortak cüzdan ve veri", "CRM ve segmentasyon", "Kademeli geçiş"],
      },
      {
        title: "Yeni pazarlara açılanlar",
        copy: "Birden fazla markayı ve pazarı aynı altyapıda, ayrı kurallar ve yetkilerle yönetmek isteyen gruplar.",
        points: ["Marka bazlı yapılandırma", "Pazar kısıtları", "Merkezi raporlama"],
      },
    ],
    bandTitle: "Trafik artarken performans aynı kalır.",
    bandCta: "Mimariyi keşfet",
    bandFacts: [
      { title: "API odaklı", copy: "Ürünler ve dış servisler tanımlı sözleşmelerle konuşur." },
      { title: "Modüler", copy: "Bir ürün güncellenirken diğerleri çalışmaya devam eder." },
      { title: "İzlenebilir", copy: "Servis sağlığı ve işlem akışı tek yerden takip edilir." },
    ],
    processTitle: "Keşiften canlıya, net bir yol.",
    processCopy: "Her adımda kapsamı, sorumluları ve kabul kriterlerini birlikte netleştiririz.",
    processSteps: [
      { title: "Keşif", copy: "Pazar, lisans, ürün ve entegrasyon ihtiyaçlarının belirlenmesi." },
      { title: "Plan", copy: "Teknik kapsam, marka yapısı ve canlıya geçiş takviminin oluşturulması." },
      { title: "Kurulum", copy: "Ortamların, ürünlerin, sağlayıcıların ve operasyon rollerinin hazırlanması." },
      { title: "Doğrulama", copy: "Uçtan uca test, ekip eğitimi ve açılış kontrol listesinin tamamlanması." },
    ],
    awardsTitle: "Dünya çapında tanınan teknoloji.",
    awardsCopy: "Sağlayıcımız EGR B2B, SBC ve SiGMA ödüllerini kazandı, MiGEA'da üç ayrı yıl birinci oldu ve bu ödüllerde defalarca finale kaldı.",
    awardsLabel: "Sağlayıcımızın ödülleri",
    ctaTitle: "Operasyonunuz için doğru başlangıcı bulalım.",
    ctaCopy: "İhtiyaçlarınızı anlatın; ürün, entegrasyon ve geçiş kapsamını birlikte çıkaralım.",
  },

  /* gamb PANEL: tamamen temsili, örnek verilerle çizilen arayüz. Sayılar gerçek bir operasyona ait değildir. */
  panel: {
    tabsLabel: "Panel görünümleri",
    general: "Genel",
    last12: "Son 12 saat",
    note: "Daha fazlasını incelemek için hemen",
    noteLink: "Demo Planla",
    modulesLabel: "{group} modülleri",
    overview: {
      kpis: [
        { label: "Aktif oyuncu", value: "590.418", delta: "+6%" },
        { label: "Açık kupon", value: "1.284.730", delta: "+11%" },
        { label: "Bekleyen onay", value: "214", delta: "−37" },
      ],
      chartLabel: "Saatlik oturum",
      rows: [
        { time: "21:04", text: "Fraud şüphesiyle 12 müsabaka kaldırıldı, kuponlar iptal edildi", tag: "Risk" },
        { time: "21:02", text: "Yeni oyun sağlayıcısı lobiye eklendi", tag: "Casino" },
        { time: "20:57", text: "Hafta sonu kampanyası başladı", tag: "CRM" },
        { time: "20:49", text: "1.380 çekim talebi onay kuyruğuna alındı", tag: "Finans" },
      ],
    },
    groups: {
      "oyun-icerik": {
        kpis: [
          { label: "Canlı müsabaka", value: "1.846", delta: "−12" },
          { label: "Casino oturumu", value: "212.640", delta: "+9%" },
          { label: "Yayındaki oyun", value: "5.120", delta: "+48" },
        ],
        chartLabel: "Saatlik kupon ve tur",
        stats: {
          "urun-sportsbook": "1.284.730 açık kupon",
          "urun-game-provider": "38 sağlayıcı",
          "urun-canli-casino": "412 açık masa",
          "urun-sanal-espor": "96 etkinlik",
          "urun-hizli-oyunlar": "18.400 tur / saat",
          "urun-turnuva-jackpot": "7 turnuva",
        },
      },
      "oyuncu-hesap": {
        kpis: [
          { label: "Aktif oyuncu", value: "590.418", delta: "+6%" },
          { label: "Bugünkü kayıt", value: "8.940", delta: "+4%" },
          { label: "Doğrulama bekleyen", value: "1.126", delta: "−180" },
        ],
        chartLabel: "Saatlik giriş",
        stats: {
          "urun-oyuncu-hesap": "590.418 aktif",
          "urun-cuzdan": "0 bakiye farkı",
          "urun-kyc": "1.126 kuyrukta",
          "urun-sorumlu-oyun": "3.480 aktif limit",
        },
      },
      "odeme-finans": {
        kpis: [
          { label: "Yatırım onayı", value: "%97,2", delta: "+0,4" },
          { label: "Bekleyen çekim", value: "1.380", delta: "−96" },
          { label: "Mutabakat", value: "%99,98", delta: "+0,01" },
        ],
        chartLabel: "Saatlik işlem",
        stats: {
          "urun-gambpay": "842.300 işlem",
          "urun-finans": "14 açık hakediş",
          "urun-kripto": "%12 pay",
        },
      },
      "buyume-pazarlama": {
        kpis: [
          { label: "Çalışan kampanya", value: "17", delta: "+2" },
          { label: "Dağıtılan bonus", value: "18.930", delta: "+12%" },
          { label: "Geri dönen oyuncu", value: "31.240", delta: "+18%" },
        ],
        chartLabel: "Kampanya etkileşimi",
        stats: {
          "urun-gambcrm": "126 segment",
          "urun-bonus": "42 aktif bonus",
          "urun-pazarlama": "9 planlı gönderim",
          "urun-gambaffiliate": "1.240 iş ortağı",
          "urun-sadakat": "2.310 VIP oyuncu",
          "urun-is-gelistirme": "3 pazar çalışması",
        },
      },
      "risk-uyum": {
        kpis: [
          { label: "Açık uyarı", value: "57", delta: "+12" },
          { label: "İncelemede hesap", value: "311", delta: "+46" },
          { label: "İptal edilen kupon", value: "4.218", delta: "bugün" },
        ],
        chartLabel: "İşaretlenen hareket",
        stats: {
          "urun-risk-fraud": "12 müsabaka kaldırıldı",
          "urun-aml": "23 açık vaka",
          "urun-uyum": "2 rapor hazır",
        },
      },
      "veri-yapay-zeka": {
        kpis: [
          { label: "Ayrılma riski yüksek", value: "12.480", delta: "oyuncu" },
          { label: "Öneri tıklanma", value: "%18,4", delta: "+1,1" },
          { label: "Yüksek fraud skoru", value: "64", delta: "işlem" },
        ],
        chartLabel: "Model çağrısı",
        stats: {
          "urun-ai": "4 model yayında",
          "urun-bi": "36 pano",
          "urun-veri-akisi": "2,1 Mn olay / saat",
        },
      },
      "operasyon-altyapi": {
        kpis: [
          { label: "Çalışma süresi", value: "%99,97", delta: "30 gün" },
          { label: "Açık destek talebi", value: "148", delta: "−21" },
          { label: "Aktif marka", value: "6", delta: "+1" },
        ],
        chartLabel: "Saatlik istek",
        stats: {
          "urun-arka-ofis": "214 onay bekliyor",
          "urun-cms": "12 yayın bugün",
          "urun-destek": "148 açık talep",
          "urun-bayi": "860 bayi",
          "urun-api": "64 ms yanıt",
          "urun-coklu-marka": "6 marka",
          "urun-altyapi": "0 açık alarm",
        },
      },
    },
  },

  /* Ürün kataloğu: yedi başlık, 32 modül. İskelet (hangi modül hangi başlıkta) src/data.ts içindedir. */
  catalog: {
    groups: {
      "oyun-icerik": {
        name: "Oyun & İçerik",
        summary: "Oyuncunun gördüğü her şey: bahis, casino ve aradaki tüm oyunlar.",
      },
      "oyuncu-hesap": {
        name: "Oyuncu & Hesap",
        summary: "Kayıttan çekime, oyuncunun hesabıyla ilgili her adım.",
      },
      "odeme-finans": {
        name: "Ödeme & Finans",
        summary: "Paranın platforma girişi, çıkışı ve gün sonunda hesabın kapanması.",
      },
      "buyume-pazarlama": {
        name: "Büyüme & Pazarlama",
        summary: "Oyuncuyu getiren, tutan ve geri çağıran araçlar.",
      },
      "risk-uyum": { name: "Risk & Uyum", summary: "Kasayı, lisansı ve oyuncuyu koruyan kurallar." },
      "veri-yapay-zeka": {
        name: "Veri & Yapay Zekâ",
        summary: "Kararları tahminle değil, veriyle ve modellerle verin.",
      },
      "operasyon-altyapi": {
        name: "Operasyon & Altyapı",
        summary: "Ekibin her gün kullandığı araçlar ve hepsinin üzerinde durduğu zemin.",
      },
    },
    modules: {
      "urun-sportsbook": {
        name: "Sportsbook",
        tag: "",
        description: "Maç öncesi ve canlı bahis süreçlerini tek noktadan yönetin.",
        items: [
          "Maç öncesi ve canlı bahis akışları",
          "Oran, limit ve marj yapılandırması",
          "Bahis oluşturucu ve erken ödeme",
          "Kupon, iade ve iptal iş akışları",
        ],
      },
      "urun-game-provider": {
        name: "Oyun sağlayıcı entegrasyonu",
        tag: "",
        description: "Casino sağlayıcılarını tek entegrasyonla bağlayın; kataloğu ve lobiyi yönetin.",
        items: [
          "Tek API ile çoklu sağlayıcı",
          "Oyun kataloğu ve lobi düzeni",
          "Pazara göre oyun görünürlüğü",
          "Sağlayıcı bazlı rapor ve mutabakat",
        ],
      },
      "urun-canli-casino": {
        name: "Canlı casino",
        tag: "",
        description: "Canlı masaları ve krupiyeli oyunları aynı cüzdanla sunun.",
        items: [
          "Canlı masa lobisi",
          "Masa limitleri ve görünürlük",
          "Ortak cüzdanla kesintisiz geçiş",
          "Oturum ve bahis geçmişi",
        ],
      },
      "urun-sanal-espor": {
        name: "Sanal sporlar & e-spor",
        tag: "",
        description: "Takvimden bağımsız, günün her saatinde bahis içeriği.",
        items: [
          "Sanal lig ve yarış içerikleri",
          "E-spor pazarları",
          "Ayrı limit ve marj profilleri",
          "Sportsbook ile ortak kupon",
        ],
      },
      "urun-hizli-oyunlar": {
        name: "Hızlı oyunlar",
        tag: "",
        description: "Crash, zar ve mayın gibi kısa turlu oyunlar için hazır katalog.",
        items: [
          "Kısa turlu oyun kataloğu",
          "Doğrulanabilir tur sonuçları",
          "Oyun bazlı marj ayarı",
          "Lobide öne çıkarma",
        ],
      },
      "urun-turnuva-jackpot": {
        name: "Turnuva & jackpot",
        tag: "",
        description: "Lider tabloları ve ödül havuzlarıyla oyunu yarışa dönüştürün.",
        items: [
          "Turnuva şablonları ve takvimi",
          "Canlı lider tabloları",
          "Aşamalı jackpot havuzları",
          "Ödül dağıtım kuralları",
        ],
      },
      "urun-oyuncu-hesap": {
        name: "Oyuncu hesap yönetimi",
        tag: "",
        description: "Kayıt, profil, oturum ve hesap durumlarını tek yerden yönetin.",
        items: [
          "Kayıt ve giriş akışları",
          "Profil, etiket ve notlar",
          "Hesap durumu ve kısıtlamalar",
          "Oyuncunun tüm hareketleri tek ekranda",
        ],
      },
      "urun-cuzdan": {
        name: "Ortak cüzdan",
        tag: "",
        description: "Tüm ürünlerde aynı bakiye; her hareket kayıt altında.",
        items: [
          "Gerçek ve bonus bakiye ayrımı",
          "Çoklu para birimi",
          "İşlem defteri",
          "Bakiye düzeltme ve onay akışı",
        ],
      },
      "urun-kyc": {
        name: "KYC & kimlik doğrulama",
        tag: "",
        description: "Doğrulama sağlayıcılarını kayıt ve çekim akışlarına bağlayın.",
        items: [
          "Belge yükleme ve inceleme kuyruğu",
          "Doğrulama sağlayıcısı entegrasyonları",
          "Pazara göre doğrulama kuralları",
          "Yaş ve adres kontrolü",
        ],
      },
      "urun-sorumlu-oyun": {
        name: "Sorumlu oyun",
        tag: "",
        description: "Limitler, molalar ve kendini dışlama oyuncu hesabının parçasıdır.",
        items: [
          "Yatırım, kayıp ve süre limitleri",
          "Mola ve kendini dışlama",
          "Oturum süresi hatırlatmaları",
          "Riskli davranış işaretleri",
        ],
      },
      "urun-gambpay": {
        name: "gambpay",
        tag: "Ödeme",
        description: "Ödeme süreçlerini, işlem durumlarını ve onay adımlarını takip edin.",
        items: [
          "Yatırma ve çekim iş akışları",
          "Yönteme göre limit ve yönlendirme",
          "Yetki ve onay adımları",
          "İşlem durumu takibi",
        ],
      },
      "urun-finans": {
        name: "Finans & mutabakat",
        tag: "",
        description: "Kasayı, hakedişleri ve gün sonunu aynı tabloda kapatın.",
        items: [
          "Gün sonu ve dönem mutabakatı",
          "GGR / NGR ve gelir raporları",
          "Sağlayıcı ve iş ortağı hakedişleri",
          "Muhasebe için dışa aktarım",
        ],
      },
      "urun-kripto": {
        name: "Kripto ödemeler",
        tag: "",
        description: "Kripto varlıklarla yatırma ve çekim; aynı cüzdan, aynı kurallar.",
        items: [
          "Çoklu ağ ve varlık desteği",
          "Otomatik kur çevrimi",
          "Adres ve işlem izleme",
          "Çekim onay kuralları",
        ],
      },
      "urun-gambcrm": {
        name: "gambcrm",
        tag: "CRM",
        description: "Oyuncu verisini anlamlı, ölçülebilir aksiyonlara dönüştürün.",
        items: [
          "Segment ve kampanya kurguları",
          "Oyuncu yaşam döngüsü",
          "Gerçek zamanlı tetikleyiciler",
          "Kampanya sonuç ölçümü",
        ],
      },
      "urun-bonus": {
        name: "Bonus yönetimi",
        tag: "",
        description: "Bonusları kural, bütçe ve çevrim şartlarıyla birlikte tasarlayın.",
        items: [
          "Hoş geldin, yatırım ve kayıp bonusları",
          "Bedava bahis ve bedava dönüş",
          "Çevrim ve geçerlilik kuralları",
          "Bonus bütçesi ve kötüye kullanım kontrolü",
        ],
      },
      "urun-pazarlama": {
        name: "Pazarlama otomasyonu",
        tag: "",
        description: "Kampanyaları planlayın, kanallara dağıtın, sonucunu ölçün.",
        items: [
          "Kampanya takvimi ve promosyon kodları",
          "E-posta, SMS ve anlık bildirim",
          "Site içi banner ve açılış sayfaları",
          "Kanal ve kampanya getirisi",
        ],
      },
      "urun-gambaffiliate": {
        name: "gambaffiliate",
        tag: "Affiliate",
        description: "Ortaklık ağınızı şeffaf verilerle büyütün.",
        items: [
          "Komisyon modelleri",
          "Kampanya ve trafik takibi",
          "İş ortağı paneli ve hakediş dönemleri",
          "Alt ortak yapıları",
        ],
      },
      "urun-sadakat": {
        name: "Sadakat & VIP",
        tag: "",
        description: "Seviye, puan ve ayrıcalıklarla oyuncu bağlılığını yönetin.",
        items: [
          "Seviye ve puan sistemi",
          "VIP hesap yöneticisi araçları",
          "Kişiye özel teklifler",
          "Kayıp iadesi kuralları",
        ],
      },
      "urun-is-gelistirme": {
        name: "İş geliştirme",
        tag: "Hizmet",
        description: "Pazara girişten sağlayıcı anlaşmalarına, büyüme planını birlikte kurarız.",
        items: [
          "Pazar ve rakip analizi",
          "Sağlayıcı ve ödeme ortağı seçimi",
          "Lansman ve büyüme planı",
          "Dönemsel performans değerlendirmesi",
        ],
      },
      "urun-risk-fraud": {
        name: "Risk & fraud yönetimi",
        tag: "",
        description: "Şüpheli hesap, bonus ve bahis davranışlarını erken yakalayın.",
        items: [
          "Çoklu hesap ve cihaz eşleştirme",
          "Bonus kötüye kullanım kuralları",
          "Bahis ve limit risk profilleri",
          "İnceleme kuyruğu ve vaka kayıtları",
        ],
      },
      "urun-aml": {
        name: "AML & işlem izleme",
        tag: "",
        description: "Olağan dışı para hareketlerini kurallarla izleyin ve belgeleyin.",
        items: [
          "Eşik ve desen kuralları",
          "Fon kaynağı sorgulama akışı",
          "Şüpheli işlem kayıtları",
          "Denetime hazır geçmiş",
        ],
      },
      "urun-uyum": {
        name: "Uyum & regülasyon raporları",
        tag: "",
        description: "Lisans otoritesinin istediği raporları panelden üretin.",
        items: [
          "Pazara göre rapor şablonları",
          "Değiştirilemez denetim kayıtları",
          "Veri saklama kuralları",
          "Yetki ve erişim raporları",
        ],
      },
      "urun-ai": {
        name: "Yapay zekâ modülleri",
        tag: "AI",
        description: "Tahmin ve öneri modellerini operasyonun günlük kararlarına bağlayın.",
        items: [
          "Oyun ve bahis önerileri",
          "Ayrılma riski tahmini",
          "Fraud ve risk skorlama",
          "Operasyon ekibi için AI asistan",
        ],
      },
      "urun-bi": {
        name: "BI & raporlama",
        tag: "",
        description: "Ürün, kanal ve segment performansı ortak tanımlarla tek panelde.",
        items: [
          "Hazır panolar",
          "Özel rapor oluşturucu",
          "Zamanlanmış rapor gönderimi",
          "Veri ambarına aktarım",
        ],
      },
      "urun-veri-akisi": {
        name: "Gerçek zamanlı veri akışı",
        tag: "",
        description: "Oyuncu ve işlem olaylarını anında kendi sistemlerinize taşıyın.",
        items: [
          "Olay akışı ve webhook bildirimleri",
          "Segment tetikleyicileri",
          "Canlı metrik panelleri",
          "Dış araç entegrasyonları",
        ],
      },
      "urun-arka-ofis": {
        name: "Arka ofis",
        tag: "",
        description: "Tüm ekiplerin aynı kurallarla çalıştığı yönetim paneli.",
        items: ["Rol ve yetki yönetimi", "Onay akışları", "İşlem geçmişi", "Çoklu marka görünümü"],
      },
      "urun-cms": {
        name: "CMS & ön yüz",
        tag: "",
        description: "Web ve mobil arayüzü, içerikleri ve temaları kod yazmadan yönetin.",
        items: [
          "Hazır web ve mobil arayüz",
          "Sayfa, banner ve menü yönetimi",
          "Marka temaları",
          "Çoklu dil",
        ],
      },
      "urun-destek": {
        name: "Müşteri destek araçları",
        tag: "",
        description: "Destek ekibi oyuncuyu, işlemi ve geçmişi aynı ekranda görür.",
        items: [
          "Talep ve vaka yönetimi",
          "Canlı destek entegrasyonu",
          "Hazır yanıtlar ve etiketler",
          "Oyuncu geçmişine tek tıkla erişim",
        ],
      },
      "urun-bayi": {
        name: "Bayi & agent yönetimi",
        tag: "",
        description: "Saha ağınızı hiyerarşi, limit ve komisyonlarla yönetin.",
        items: [
          "Çok seviyeli bayi yapısı",
          "Bakiye ve limit dağıtımı",
          "Komisyon hesapları",
          "Bayi bazlı raporlar",
        ],
      },
      "urun-api": {
        name: "API & entegrasyon katmanı",
        tag: "",
        description: "Dış sistemler tanımlı sözleşmelerle platforma bağlanır.",
        items: [
          "REST ve WebSocket uçları",
          "Sandbox ortamı",
          "Webhook bildirimleri",
          "Sürümlü dokümantasyon",
        ],
      },
      "urun-coklu-marka": {
        name: "Çoklu marka",
        tag: "",
        description: "Yeni marka ve pazarları aynı altyapıda açın.",
        items: [
          "Marka bazlı yapılandırma",
          "Pazar ve dil kuralları",
          "Ayrı yetki ve raporlar",
          "Ortak oyuncu ve cüzdan katmanı",
        ],
      },
      "urun-altyapi": {
        name: "Altyapı & izleme",
        tag: "Hizmet",
        description: "Barındırma, ölçekleme ve izleme operasyonunu biz yürütürüz.",
        items: [
          "Yönetilen bulut altyapısı",
          "Otomatik ölçekleme",
          "İzleme ve alarm",
          "Yedekleme ve geri dönüş planı",
        ],
      },
    },
  },

  products: {
    indexLabel: "Ürün başlıkları",
    flowTitle: "{modules} modül, tek oyuncu kaydı.",
    flowCopy:
      "Bir oyuncunun kayıttan sonraki her adımı ilgili modüle düşer; hepsi aynı hesaba ve aynı cüzdana yazılır.",
    playerFlow: [
      { step: "Kayıt", module: "Oyuncu hesap yönetimi · KYC", copy: "Hesap açılır, kimlik doğrulama başlar." },
      { step: "Yatırım", module: "gambpay", copy: "Ödeme onaylanır, ortak cüzdan güncellenir." },
      { step: "Oyun", module: "Sportsbook · Casino", copy: "Aynı bakiye iki üründe de kullanılır." },
      { step: "İletişim", module: "gambcrm · Bonus", copy: "Hareket segmenti ve tetikleyicileri besler." },
      { step: "Kaynak", module: "gambaffiliate", copy: "Oyuncunun geldiği iş ortağına işlenir." },
    ],
    capsTitle: "Her modülün arkasında aynı operasyon disiplini.",
    capsCopy:
      "Modüller ayrı ayrı kullanılabilir; birlikte çalıştıklarında veri, yetki ve raporlama kesintisiz ilerler.",
    capabilities: [
      { title: "Rol ve yetki", copy: "Ekiplerin yalnızca sorumlu oldukları alanlara erişmesini sağlayan ayrıntılı roller." },
      { title: "Kural yönetimi", copy: "Limit, onay, görünürlük ve operasyon kurallarını merkezi olarak yönetin." },
      { title: "İşlem geçmişi", copy: "Kritik değişiklikleri kullanıcı, zaman ve sonuç bilgisiyle geriye dönük izleyin." },
      { title: "Raporlama", copy: "Ürün ve operasyon metriklerini ortak tanımlar üzerinden karşılaştırın." },
      { title: "Bildirimler", copy: "Önemli işlem ve eşiklerde ilgili ekipleri gerçek zamanlı bilgilendirin." },
      { title: "Çoklu marka", copy: "Farklı marka ve pazarları aynı altyapıda kontrollü biçimde yönetin." },
    ],
    integrationTitle: "Mevcut iş ortaklarınızla çalışmaya devam edin.",
    integrationCopy:
      "Sağlayıcı, ödeme, kimlik ve veri servisleri API katmanı üzerinden kontrollü biçimde platforma bağlanır.",
    integrationCta: "Teknik yapıyı incele",
    integrationLabel: "Bağlanabilen servis türleri",
    integrationTypes: [
      "Oyun sağlayıcıları",
      "Oran ve veri beslemeleri",
      "Ödeme yöntemleri",
      "Kimlik doğrulama",
      "Mesajlaşma kanalları",
      "Veri ambarı ve BI",
    ],
    ctaTitle: "Modülleri gerçek operasyon akışlarıyla görün.",
    ctaCopy: "Ekibinizin önceliklerine göre hazırlanmış bir ürün turu planlayalım.",
  },

  technology: {
    layersTitle: "Dışarıda oyun. İçeride mühendislik.",
    layersCopy: "Dört katman, her biri kendi sorumluluğuyla. Ayrıntısını görmek için bir katman seçin.",
    layersLabel: "Platform katmanları",
    layersCaption:
      "Kavramsal platform şeması. Dağıtım modeli ve entegrasyon kapsamı teknik keşifle belirlenir.",
    layers: [
      {
        title: "Deneyim",
        summary: "Web arayüzü · Mobil uyum · Operatör yönetimi",
        detail:
          "Oyuncunun gördüğü yüz ile ekibinizin kullandığı arka ofis aynı servisleri kullanır. Marka başına tema ve içerik ayrı yönetilir.",
        parts: ["Oyuncu arayüzü", "Arka ofis", "Marka temaları", "İçerik yönetimi"],
      },
      {
        title: "Erişim",
        summary: "API katmanı · Kimlik doğrulama · Yetkilendirme",
        detail:
          "Tüm istekler tek bir kapıdan geçer. Kimlik, yetki ve hız sınırları burada uygulanır; iç servisler doğrudan dışarı açılmaz.",
        parts: ["API geçidi", "Oturum ve kimlik", "Rol kontrolü", "Hız sınırı"],
      },
      {
        title: "İş servisleri",
        summary: "Spor bahis · Casino · Ödemeler · CRM",
        detail:
          "Her ürün kendi servisinde çalışır ve tanımlı sözleşmelerle konuşur. Biri güncellenirken diğerleri çalışmaya devam eder.",
        parts: ["Spor bahis", "Casino", "Ödemeler", "CRM", "Affiliate"],
      },
      {
        title: "Veri & kontrol",
        summary: "Ortak veri · İşlem kayıtları · İzleme",
        detail:
          "Cüzdan, oyuncu ve işlem verisi ortak katmanda tutulur. Her değişiklik kayıt altındadır; servis sağlığı merkezi olarak izlenir.",
        parts: ["Ortak cüzdan", "Oyuncu verisi", "Denetim kaydı", "İzleme ve alarm"],
      },
    ],
    principlesTitle: "Büyümeye hazır, değişime açık.",
    principlesCopy:
      "Platform; ürünleri bağımsız geliştirmeyi, kritik servisleri korumayı ve yeni bağlantıları hızla devreye almayı hedefleyen bir yapı üzerine kurulur.",
    principles: [
      { title: "API odaklı", copy: "Ürünler ve dış servisler tanımlı sözleşmeler üzerinden haberleşir." },
      { title: "Modüler servisler", copy: "Yeni ihtiyaçlar tüm sistemi yeniden kurmadan kapsama eklenebilir." },
      { title: "Gözlemlenebilirlik", copy: "Servis sağlığı, işlem akışı ve hata sinyalleri merkezi olarak izlenir." },
      { title: "Dayanıklılık", copy: "Kritik akışlar kontrollü tekrar, kuyruk ve izolasyon yaklaşımlarıyla korunur." },
    ],
    securityTitle: "Güvenlik sonradan eklenen bir katman değildir.",
    securityCopy:
      "Erişim, kayıt, veri koruma ve operasyon onayları platformun temel işleyişine dahil edilir.",
    securityPoints: [
      "Rol bazlı erişim ve en az yetki yaklaşımı",
      "Kritik işlemlerde onay ve denetim kayıtları",
      "Ortam, marka ve operasyon verisi ayrımı",
      "İzleme, alarm ve olay müdahale akışları",
    ],
    apiTitle: "Okunabilir sözleşmeler, öngörülebilir yanıtlar.",
    apiCopy:
      "Teknik ekibiniz entegrasyona başladığında neyle karşılaşacağını bilir. Aşağıdaki örnek, bir cüzdan işleminin nasıl göründüğünü anlatmak için hazırlanmıştır.",
    request: "İstek",
    response: "Yanıt",
    sample: "Temsili örnek",
    apiNotes: [
      {
        title: "Tekrar güvenli",
        copy: "Aynı anahtarla gelen istek ikinci kez işlenmez; bağlantı koptuğunda yeniden denemek güvenlidir.",
      },
      {
        title: "Durum odaklı",
        copy: "Her işlem açık bir durum taşır. Değişiklikler webhook ile sisteminize bildirilir.",
      },
      {
        title: "Sürümlü",
        copy: "Sözleşmeler sürümlenir; yeni alanlar mevcut entegrasyonları bozmadan eklenir.",
      },
    ],
    apiCaption: "Gerçek uç noktalar ve alanlar, teknik keşifte paylaşılan API dokümanında yer alır.",
    stepsTitle: "Bağlantıdan canlı trafiğe kontrollü geçiş.",
    integrationSteps: [
      { title: "Sözleşme", copy: "API kapsamı ve veri modeli" },
      { title: "Sandbox", copy: "Güvenli geliştirme ve test" },
      { title: "Doğrulama", copy: "Uçtan uca senaryolar" },
      { title: "Canlı", copy: "İzlenen ve kontrollü açılış" },
    ],
    ctaTitle: "Mevcut mimarinizi birlikte değerlendirelim.",
    ctaCopy:
      "Entegrasyon noktalarını, geçiş risklerini ve önerilen dağıtım modelini teknik ekibimizle konuşun.",
  },

  cases: {
    listLabel: "Senaryolar",
    need: "İhtiyaç",
    approach: "Yaklaşım",
    result: "Hedeflenen çıktı",
    phasesLabel: "Aşamalar",
    caseStudies: [
      {
        title: "Sıfırdan ilk canlı güne.",
        need: "Lisans ve operasyon hazırlıklarını tamamlamış bir ekibin, ürünleri tek merkezden yöneterek pazara hazırlanması.",
        approach:
          "Önce temel ürün kapsamı belirlenir. Marka ve ortam kurulumu, entegrasyon çalışmalarıyla paralel yürütülür.",
        result:
          "Doğrulanmış temel iş akışları, eğitilmiş operasyon ekibi ve ortak açılış kontrol listesi.",
        phases: ["Kapsam", "Kurulum", "Entegrasyon", "Prova", "Açılış"],
      },
      {
        title: "Mevcut iş, yeni temel.",
        need: "Çalışan operasyonu kesintiye uğratmadan teknik altyapıyı yenilemek.",
        approach:
          "Veri, cüzdan ve ürün akışları kontrollü fazlara ayrılır. Her faz, geri dönüş planıyla birlikte ilerler.",
        result: "Ölçülebilir geçiş planı ve sürdürülebilir yeni platform.",
        phases: ["Envanter", "Veri provası", "Paralel çalışma", "Kademeli trafik", "Kapanış"],
      },
      {
        title: "İkinci marka, aynı omurga.",
        need: "Tek markayla çalışan bir operatörün, yeni bir pazar için ikinci markayı ayrı ekip ve kurallarla açması.",
        approach:
          "Ortak cüzdan ve veri katmanı korunur. Marka, pazar kısıtları ve yetkiler ayrı yapılandırılır.",
        result: "Paylaşılan altyapı, ayrı marka kimliği ve iki markayı birlikte gösteren raporlama.",
        phases: ["Pazar kuralları", "Marka yapısı", "İçerik", "Yetkiler", "Açılış"],
      },
    ],
    caption: "Senaryolar temsilidir; gerçek bir müşteriye ya da sonuca işaret etmez.",
    methodTitle: "Her proje aynı dört soruyla başlar.",
    methodCopy:
      "Başarı ölçütleri baştan tanımlanır; ilerleme varsayımlarla değil, tamamlanan çıktılarla takip edilir.",
    methodQuestions: [
      { title: "Nereye gidiyoruz?", copy: "Hedef pazar, ürün kapsamı ve ticari öncelikler." },
      { title: "Neyi koruyoruz?", copy: "Mevcut oyuncu deneyimi, veri ve kritik operasyon akışları." },
      { title: "Neyi değiştiriyoruz?", copy: "Platform, sağlayıcı, süreç ve ekip sorumlulukları." },
      { title: "Nasıl doğruluyoruz?", copy: "Test senaryoları, kabul kriterleri ve canlılık ölçümleri." },
    ],
    riskTitle: "Ters gidebilecek şeyleri baştan konuşuruz.",
    riskCopy:
      "Bir geçiş projesinde en sık karşılaşılan dört risk ve her birine karşı planın neresinde durduğumuz.",
    riskHead: ["Risk", "Önlem"],
    riskTable: [
      {
        risk: "Veri geçişinde kayıp ya da tutarsızlık",
        measure: "Canlıdan önce tekrarlanan veri provaları ve kayıt bazında karşılaştırma.",
      },
      {
        risk: "Cüzdan bakiyelerinde fark",
        measure: "Geçiş anında bakiye mutabakatı; fark kapanmadan trafik açılmaz.",
      },
      {
        risk: "Açılış gününde kesinti",
        measure: "Kademeli trafik, izleme panelleri ve önceden yazılmış geri dönüş adımları.",
      },
      {
        risk: "Ekibin yeni araçlara alışamaması",
        measure: "Rol bazlı eğitim ve açılıştan önce gerçek senaryolarla prova.",
      },
    ],
    outcomesTitle: "Plan görünür. Sorumluluklar net. Canlıya geçiş kontrollü.",
    outcomes: [
      { title: "Tek kapsam", copy: "Ürün ve entegrasyon gereksinimleri" },
      { title: "Ortak takvim", copy: "Ekipler arası bağımlılıklar" },
      { title: "Kabul planı", copy: "Test ve açılış kriterleri" },
    ],
    ctaTitle: "Bir sonraki vaka çalışması sizinki olabilir.",
    ctaCopy: "Yeni operasyon veya platform geçişi için önceliklerinizi birlikte değerlendirelim.",
  },

  packages: {
    listLabel: "Paketler",
    price: "Özel teklif",
    planCta: "Kapsamı konuşalım",
    plans: [
      {
        audience: "Yeni operasyonlar için",
        summary: "İlk markanızı açmak için gereken temel kapsam.",
        items: [
          "Temel ürün kurulumu",
          "Marka yapılandırması",
          "Canlıya geçiş planı",
          "Arka ofis ve rol tanımları",
          "Açılış eğitimi",
        ],
      },
      {
        audience: "Büyüyen operatörler için",
        summary: "Tüm ürünler birlikte, oyuncu verisi tek yerde.",
        items: [
          "Birleşik ürün ekosistemi",
          "CRM ve segmentasyon",
          "Genişletilmiş entegrasyon",
          "Affiliate yönetimi",
          "Gelişmiş raporlama",
        ],
      },
      {
        audience: "Özel kapsamlı projeler için",
        summary: "Çok markalı yapılar ve platform geçişleri.",
        items: [
          "Özelleştirme çalışmaları",
          "Geçiş planlaması",
          "Özel operasyon modeli",
          "Çoklu marka ve pazar",
          "Adanmış proje ekibi",
        ],
      },
    ],
    includedTitle: "Hangisini seçerseniz seçin.",
    includedCopy: "Kapsam değişir; çalışma biçimi değişmez. Bu dört adım her projenin parçasıdır.",
    includedInAll: [
      { title: "Keşif çalışması", copy: "Kapsam, takvim ve sorumluluklar yazılı hale gelir." },
      { title: "Sandbox ortamı", copy: "Entegrasyonlar canlıdan önce güvenle denenir." },
      { title: "Ekip eğitimi", copy: "Her rol kendi ekranlarını gerçek senaryolarla öğrenir." },
      { title: "Açılış kontrol listesi", copy: "Canlıya geçiş, üzerinde anlaşılmış adımlarla yapılır." },
    ],
    compareTitle: "Aynı temel. Farklı hızlar.",
    compareCopy:
      "Paketler sabit bir ürün listesi değil, doğru başlangıç kapsamını belirlemek için kullanılan çerçevelerdir.",
    capability: "Yetenek",
    /* Karşılaştırma tablosundaki hücre değerleri: "included" yeşil gösterilir, "none" tire olarak okunur. */
    included: "Dahil",
    notIncluded: "Dahil değil",
    comparison: [
      { label: "Temel platform ve yönetim", cells: ["Dahil", "Dahil", "Dahil"] },
      { label: "Sportsbook / Casino", cells: ["Seçimli", "Dahil", "Dahil"] },
      { label: "Ödeme operasyonları", cells: ["Temel", "Gelişmiş", "Özel kapsam"] },
      { label: "CRM ve segmentasyon", cells: ["Başlangıç", "Gelişmiş", "Özel kapsam"] },
      { label: "Bonus ve pazarlama", cells: ["Temel", "Gelişmiş", "Özel kapsam"] },
      { label: "Affiliate yönetimi", cells: ["Opsiyonel", "Dahil", "Özel kapsam"] },
      { label: "Risk ve fraud", cells: ["Temel", "Gelişmiş", "Özel kapsam"] },
      { label: "Yapay zekâ modülleri", cells: ["—", "Opsiyonel", "Dahil"] },
      { label: "Çoklu marka", cells: ["—", "Opsiyonel", "Dahil"] },
      { label: "Geçiş ve özelleştirme", cells: ["—", "Opsiyonel", "Dahil"] },
    ],
    faqTitle: "Karar vermeden önce.",
    faqs: [
      {
        question: "Paketler sabit mi?",
        answer:
          "Hayır. Paketler başlangıç çerçevesidir; nihai kapsam keşif sonrasında ürün, pazar ve entegrasyon ihtiyaçlarına göre belirlenir.",
      },
      {
        question: "Canlıya geçiş süresi ne kadar?",
        answer:
          "Takvim; lisans hazırlığına, entegrasyon sayısına, veri geçişine ve kabul süreçlerine bağlıdır. Keşif sonunda gerçekçi bir plan sunulur.",
      },
      {
        question: "Mevcut sağlayıcılarımızı kullanabilir miyiz?",
        answer:
          "Teknik uygunluk ve ticari sözleşmeler doğrulandıktan sonra mevcut sağlayıcıların entegrasyonu kapsam içine alınabilir.",
      },
      {
        question: "Operasyon desteği dahil mi?",
        answer:
          "Eğitim, canlıya geçiş ve devam eden operasyon desteği seçilen hizmet modeline göre planlanır.",
      },
      {
        question: "Tek bir ürünle başlayabilir miyiz?",
        answer:
          "Evet. Modüller ayrı ayrı kullanılabilir. Örneğin yalnızca ödeme ya da CRM ile başlayıp diğer ürünleri sonradan ekleyebilirsiniz.",
      },
      {
        question: "Lisansı siz mi sağlıyorsunuz?",
        answer:
          "Hayır. Gamb Gaming teknoloji ve operasyon ortağıdır; yalnızca kendi lisansına sahip ya da lisans sürecini yürüten operatörlerle çalışır.",
      },
      {
        question: "Fiyatlandırma nasıl belirleniyor?",
        answer:
          "Her operasyonun ürün, pazar ve entegrasyon kapsamı farklı olduğu için fiyat keşif sonrasında özel teklif olarak verilir.",
      },
      {
        question: "Oyunculara doğrudan hizmet veriyor musunuz?",
        answer:
          "Hayır. Gamb Gaming yalnızca işletmelere hizmet verir; son kullanıcılara oyun, bahis ya da hesap desteği sunmaz.",
      },
    ],
    ctaTitle: "İhtiyacınız kadar başlayın, hazır olduğunuzda büyütün.",
    ctaCopy: "Doğru paketi değil, doğru kapsamı birlikte belirleyelim.",
  },

  demo: {
    title: ["Platformu", "birlikte keşfedelim."],
    lead: "Gerçek akışlar. Doğrudan teknik ekiple bir platform turu.",
    stepsLabel: "Görüşmede neler olur",
    steps: [
      { title: "Keşif", copy: "Hedefleriniz ve öncelikleriniz." },
      { title: "Ürün turu", copy: "Modüller ve iş akışları." },
      { title: "Sonraki adımlar", copy: "Kapsam ve başlangıç planı." },
    ],
    fineprint: ["Yalnızca B2B operatör başvuruları içindir.", "Son kullanıcı ve oyuncu desteği verilmez."],
    formTitle: "Operasyonunuzu tanıyalım.",
    required: "* işaretli alanlar zorunludur.",
    fields: {
      name: "Ad soyad",
      namePh: "Adınız ve soyadınız",
      role: "Göreviniz",
      rolePh: "Örn. Operasyon direktörü",
      email: "İş e-postası",
      emailPh: "siz@operasyonunuz.com",
      company: "Şirket / operasyon adı",
      companyPh: "Operasyon adını girin",
      stage: "Proje aşaması",
      stageChoose: "Seçin",
      products: "İlgilendiğiniz ürünler",
      message: "Kısaca ihtiyacınız",
      messagePh: "Hedef pazar, ürün kapsamı ve planlanan başlangıç...",
      website: "Web sitesi",
      consent:
        "Gizlilik bildirimini okudum. Başvurumla ilgili iletişim kurulması için bilgilerimin işlenmesini kabul ediyorum.",
    },
    stages: ["Yeni operasyon", "Platform geçişi", "Büyüme"],
    errors: {
      name: "Adınızı ve soyadınızı yazın.",
      email: "İş e-postanızı yazın.",
      emailFormat: "E-posta adresi ad@sirket.com biçiminde olmalı.",
      company: "Şirket ya da operasyon adını yazın.",
      consent: "Devam etmek için gizlilik bildirimini onaylayın.",
      send: "Talebiniz gönderilemedi. Bağlantınızı kontrol edip yeniden deneyin.",
    },
    submit: "Demo talebi gönder",
    sending: "Gönderiliyor…",
    previewHint: "Önizleme modu: form çalışır, ancak gerçek talep gönderilmez.",
    thanks: "Teşekkürler",
    sentCopy: "Ekibimiz kapsamınızı değerlendirmek için sizinle iletişime geçecek.",
    previewFlag:
      "Bu bir önizlemedir: form doğrulandı ancak talebiniz bir sunucuya gönderilmedi ve hiçbir bilgi kaydedilmedi.",
    summary: { company: "Şirket", email: "E-posta", stage: "Proje aşaması", products: "Ürünler" },
    again: "Yeni talep oluştur",
  },

  notfound: {
    title: ["Bu sayfa", "yerinde değil."],
    copy: "Adres değişmiş ya da yanlış yazılmış olabilir.",
    cta: "Ana sayfaya dön",
  },

  blog: {
    title: ["Sahadan notlar.", "Altyapı arayanlar için."],
    lead: "Platform seçimi, entegrasyon, ödeme, risk ve operasyon üzerine; satış broşürü değil, işin içinden yazılar.",
    latest: "Son yazılar",
    readMore: "Yazıyı oku",
    minutes: "{n} dk okuma",
    back: "Tüm yazılar",
    related: "Bunlar da ilginizi çekebilir",
    empty: "Bu dilde henüz yazı yok.",
    author: "Gamb Gaming ekibi",
    updated: "Yayın tarihi",
    notFound: "Bu yazı bulunamadı ya da kaldırıldı.",
    ctaTitle: "Okuduklarınızı kendi operasyonunuz üzerinden konuşalım.",
    ctaCopy: "Bir platform turunda sorularınızı doğrudan teknik ekibe sorun.",
  },
};

export default tr;
export type Dictionary = typeof tr;

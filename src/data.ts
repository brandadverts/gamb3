import type { HeroVideoSource } from "./components/HeroVideo";

/**
 * Dile bağlı olmayan yapısal veriler: görseller, çapalar, kataloğun iskeleti, grafik değerleri.
 * Metinlerin tamamı src/i18n/locales içindeki dil dosyalarındadır.
 */

const BASE = import.meta.env.BASE_URL;
export const img = (name: string) => `${BASE}img/${name}.webp`;
const video = (name: string) => `${BASE}video/${name}`;

/**
 * Spor bahsi sağlayıcımız BETBY'nin aldığı ödüller (logolar betby.com'dan, site renklerine boyandı).
 * Ödüller BETBY'ye aittir; sayfadaki metin bunu açıkça söyler. Ödül adları özel ad olduğu için çevrilmez.
 */
export const awards: { src: string; alt: string; width: number; height: number }[] = [
  { src: `${BASE}img/awards/01.svg`, alt: "EiGE Awards 2024 – Best Customer Service of 2023, winner", width: 172, height: 72 },
  { src: `${BASE}img/awards/02.svg`, alt: "LoginCasino 2020 – Best Betting, second place", width: 192, height: 72 },
  { src: `${BASE}img/awards/03.svg`, alt: "MiGEA 2024 – Best Online Sportsbetting Supplier, winner", width: 179, height: 72 },
  { src: `${BASE}img/awards/04.svg`, alt: "MiGEA 2024 – Best Workplace of the Year, winner", width: 136, height: 72 },
  { src: `${BASE}img/awards/05.svg`, alt: "SBC Awards 2023 – Esports Supplier of the Year, shortlisted", width: 194, height: 64 },
  { src: `${BASE}img/awards/06.svg`, alt: "SBC Awards 2024 – Esports Supplier of the Year, winner", width: 194, height: 72 },
  { src: `${BASE}img/awards/07.svg`, alt: "WiG Diversity 2023 – Excellence in Customer Service (Supplier), shortlisted", width: 158, height: 57 },
  { src: `${BASE}img/awards/08.svg`, alt: "EGR B2B 2024 – Innovation in Sportsbetting Software, winner", width: 185, height: 72 },
  { src: `${BASE}img/awards/09.svg`, alt: "EGR B2B 2023 – Esports Betting Supplier, shortlisted", width: 155, height: 40 },
  { src: `${BASE}img/awards/10.svg`, alt: "SBC Awards Latinoamérica 2021 – Sportsbook Supplier of the Year, shortlisted", width: 227, height: 72 },
  { src: `${BASE}img/awards/11.svg`, alt: "WiG Diversity 2023 – Employee Wellbeing Award, shortlisted", width: 158, height: 40 },
  { src: `${BASE}img/awards/12.svg`, alt: "SBC Awards 2021 – Sportsbook Supplier of the Year, shortlisted", width: 192, height: 72 },
  { src: `${BASE}img/awards/13.svg`, alt: "MiGEA 2024 – Most Innovative AI-based Sportsbook Product, winner", width: 187, height: 72 },
  { src: `${BASE}img/awards/14.svg`, alt: "MiGEA 2021 – Best Online Sport-betting Supplier, winner", width: 163, height: 72 },
  { src: `${BASE}img/awards/15.svg`, alt: "MiGEA 2022 – Best Online Sportsbetting Suppliers of the Year, winner", width: 172, height: 72 },
  { src: `${BASE}img/awards/16.svg`, alt: "EGR B2B 2021 – Sports Betting Supplier, shortlisted", width: 143, height: 72 },
  { src: `${BASE}img/awards/17.svg`, alt: "EGR B2B 2021 – Best Customer Service, shortlisted", width: 143, height: 72 },
  { src: `${BASE}img/awards/18.svg`, alt: "EGR B2B 2022 – Best Customer Service, shortlisted", width: 143, height: 72 },
  { src: `${BASE}img/awards/19.svg`, alt: "EGR B2B 2022 – In-play Betting Software, shortlisted", width: 143, height: 72 },
  { src: `${BASE}img/awards/20.svg`, alt: "EGR B2B 2022 – Innovation in Sports Betting Software, shortlisted", width: 143, height: 72 },
  { src: `${BASE}img/awards/21.svg`, alt: "EGR B2B 2022 – Esports Betting Supplier, shortlisted", width: 143, height: 72 },
  { src: `${BASE}img/awards/22.svg`, alt: "EGR B2B 2021 – Sportsbook Platform Supplier, shortlisted", width: 143, height: 72 },
  { src: `${BASE}img/awards/23.svg`, alt: "SiGMA Europe 2023 – The Best Mobile Sportsbook Provider, winner", width: 177, height: 62 },
  { src: `${BASE}img/awards/24.svg`, alt: "EGR B2B 2020 – Innovation in Sports Betting Software, shortlisted", width: 143, height: 72 },
  { src: `${BASE}img/awards/25.svg`, alt: "SiGMA Europe 2024 – Best Esport Product, winner", width: 177, height: 64 },
];

export type HeroPage = "home" | "products" | "technology" | "cases" | "packages";

export const heroMedia: Record<
  HeroPage,
  { image?: string; visual?: "morph"; video?: HeroVideoSource }
> = {
  home: {
    visual: "morph",
    // Arka plan videosu: başka bir klip kullanmak için dosyaları public/video içine koyup adları değiştirin.
    video: {
      sources: [
        { src: video("hero-roulette.mp4"), type: "video/mp4" },
        { src: video("hero-roulette.webm"), type: "video/webm" },
      ],
      poster: img("hero-roulette-poster"),
    },
  },
  products: { image: img("obj-modules") },
  technology: { image: img("obj-towers") },
  cases: { image: img("obj-bridge") },
  packages: { image: img("obj-steps") },
};

/** Ana sayfadaki beş hizmet kartının ürünler sayfasında gittiği bölümler (dil dosyasındaki sırayla). */
export const serviceAnchors = [
  "operasyon-altyapi",
  "odeme-finans",
  "buyume-pazarlama",
  "risk-uyum",
  "urun-gambaffiliate",
];

/** Ürün kataloğunun iskeleti: başlık kimliği → modül kimlikleri. Adlar ve metinler dil dosyalarındadır. */
export const catalogStructure: { id: string; modules: string[] }[] = [
  {
    id: "oyun-icerik",
    modules: [
      "urun-sportsbook",
      "urun-game-provider",
      "urun-canli-casino",
      "urun-sanal-espor",
      "urun-hizli-oyunlar",
      "urun-turnuva-jackpot",
    ],
  },
  { id: "oyuncu-hesap", modules: ["urun-oyuncu-hesap", "urun-cuzdan", "urun-kyc", "urun-sorumlu-oyun"] },
  { id: "odeme-finans", modules: ["urun-gambpay", "urun-finans", "urun-kripto"] },
  {
    id: "buyume-pazarlama",
    modules: [
      "urun-gambcrm",
      "urun-bonus",
      "urun-pazarlama",
      "urun-gambaffiliate",
      "urun-sadakat",
      "urun-is-gelistirme",
    ],
  },
  { id: "risk-uyum", modules: ["urun-risk-fraud", "urun-aml", "urun-uyum"] },
  { id: "veri-yapay-zeka", modules: ["urun-ai", "urun-bi", "urun-veri-akisi"] },
  {
    id: "operasyon-altyapi",
    modules: [
      "urun-arka-ofis",
      "urun-cms",
      "urun-destek",
      "urun-bayi",
      "urun-api",
      "urun-coklu-marka",
      "urun-altyapi",
    ],
  },
];

export const MODULE_COUNT = catalogStructure.reduce((n, group) => n + group.modules.length, 0);
export const GROUP_COUNT = catalogStructure.length;

/** gamb PANEL grafikleri: "genel" ve yedi başlık için son 12 saatin temsili değerleri. */
export const panelBars: Record<string, number[]> = {
  genel: [34, 41, 38, 52, 61, 58, 72, 80, 76, 88, 94, 83],
  "oyun-icerik": [28, 33, 30, 42, 55, 61, 70, 86, 92, 97, 90, 78],
  "oyuncu-hesap": [34, 41, 38, 52, 61, 58, 72, 80, 76, 88, 94, 83],
  "odeme-finans": [22, 28, 31, 30, 44, 49, 57, 63, 60, 71, 78, 69],
  "buyume-pazarlama": [18, 24, 29, 35, 33, 46, 52, 49, 63, 68, 74, 81],
  "risk-uyum": [12, 9, 14, 11, 19, 16, 13, 22, 18, 15, 48, 31],
  "veri-yapay-zeka": [44, 48, 46, 53, 57, 62, 66, 71, 75, 83, 96, 88],
  "operasyon-altyapi": [38, 42, 45, 51, 56, 60, 67, 73, 79, 86, 93, 89],
};

/** Paketler: öne çıkan sütun (0 = Launch, 1 = Scale, 2 = Enterprise). */
export const FEATURED_PLAN = 1;
/** Paket adları marka adıdır, çevrilmez. */
export const PLAN_NAMES = ["Launch", "Scale", "Enterprise"];

/* Temsili API örneği: gerçek uç noktalar teknik keşifte paylaşılan dokümandadır. */
export const apiSample = {
  request: `POST /v1/wallet/transactions
Authorization: Bearer <operator-token>
Idempotency-Key: 7f3c9a2e

{
  "player_id": "pl_48213",
  "type": "deposit",
  "amount": "250.00",
  "currency": "EUR",
  "method": "bank_transfer"
}`,
  response: `201 Created

{
  "id": "tx_90417",
  "status": "pending_approval",
  "balance_after": null,
  "created_at": "2026-03-14T21:05:12Z"
}`,
};

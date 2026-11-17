import type { Dictionary } from "../i18n";
import { readPath } from "../i18n/overrides";

/**
 * Düzenlenebilir metin alanlarının listesi.
 *
 * Alanlar elle yazılmaz: Türkçe dil dosyası gezilir ve bütün metin (string) yaprakları toplanır.
 * Böylece dil dosyasına eklenen her alan panelde kendiliğinden görünür.
 * Yol biçimi overrides.ts ile aynıdır: "home.services.0.title".
 */
export type Field = {
  path: string;
  label: string;
  /** Uzun metinler çok satırlı kutuda düzenlenir. */
  multiline: boolean;
};

export type FieldGroup = { key: string; label: string; fields: Field[] };

export type SectionId = "pages" | "seo" | "catalog" | "panel";

export type Section = {
  id: SectionId;
  label: string;
  note: string;
  /** Grupların hangi derinlikte ayrıldığı: 2 → "home.services", 3 → "catalog.modules.urun-sportsbook". */
  depth: number;
  roots: string[];
};

export const SECTIONS: Section[] = [
  {
    id: "pages",
    label: "Sayfa metinleri",
    note: "Ziyaretçinin gördüğü bütün başlıklar, paragraflar ve düğme yazıları.",
    depth: 2,
    roots: [
      "site",
      "nav",
      "heroes",
      "home",
      "products",
      "technology",
      "cases",
      "packages",
      "demo",
      "blog",
      "notfound",
      "footer",
    ],
  },
  {
    id: "seo",
    label: "SEO",
    note: "Arama sonuçlarında ve paylaşım kartlarında görünen başlık ve açıklamalar.",
    depth: 2,
    roots: ["meta"],
  },
  {
    id: "catalog",
    label: "Ürün kataloğu",
    note: "Yedi başlık ve 32 modülün adları, açıklamaları ve madde listeleri.",
    depth: 3,
    roots: ["catalog"],
  },
  {
    id: "panel",
    label: "Panel demosu",
    note: "gamb panel ekranındaki temsili etiketler ve değerler.",
    depth: 3,
    roots: ["panel"],
  },
];

/** Sık geçen anahtarların Türkçe karşılıkları; listede olmayanlar olduğu gibi gösterilir. */
const LABELS: Record<string, string> = {
  answer: "Yanıt",
  approach: "Yaklaşım",
  audience: "Kime",
  audiences: "Hedef kitleler",
  audienceCopy: "Hedef kitle metni",
  audienceTitle: "Hedef kitle başlığı",
  author: "Yazar",
  back: "Geri bağlantısı",
  bandCta: "Bant düğmesi",
  bandFacts: "Bant maddeleri",
  bandTitle: "Bant başlığı",
  bullets: "Maddeler",
  capabilities: "Yetenekler",
  capability: "Yetenek",
  caption: "Alt not",
  caseStudies: "Vaka çalışmaları",
  cardCopy: "Kart metni",
  cardTitle: "Kart başlığı",
  cells: "Hücreler",
  chartLabel: "Grafik etiketi",
  comparison: "Karşılaştırma tablosu",
  compareCopy: "Karşılaştırma metni",
  compareTitle: "Karşılaştırma başlığı",
  awardsCopy: "Ödül metni",
  awardsLabel: "Ödül listesi etiketi (ekran okuyucu)",
  awardsTitle: "Ödül başlığı",
  consent: "Onay metni",
  consoleCopy: "Konsol metni",
  consoleCta: "Konsol düğmesi",
  consolePoints: "Konsol maddeleri",
  consoleTitle: "Konsol başlığı",
  copy: "Metin",
  cta: "Düğme",
  ctaCopy: "Çağrı metni",
  ctaTitle: "Çağrı başlığı",
  delta: "Değişim",
  description: "Açıklama",
  empty: "Boş liste metni",
  errors: "Hata mesajları",
  explore: "Keşfet",
  faqs: "Sık sorulanlar",
  faqTitle: "SSS başlığı",
  fields: "Form alanları",
  fineprint: "Küçük not",
  flowCopy: "Akış metni",
  flowTitle: "Akış başlığı",
  formTitle: "Form başlığı",
  general: "Genel",
  groups: "Başlıklar",
  headline: "Üst başlık",
  heroPrimary: "Birincil düğme",
  heroSecondary: "İkincil düğme",
  included: "Dahil yazısı",
  includedCopy: "Her pakette metni",
  includedInAll: "Her pakette maddeleri",
  includedTitle: "Her pakette başlığı",
  integrationCopy: "Entegrasyon metni",
  integrationCta: "Entegrasyon düğmesi",
  integrationLabel: "Entegrasyon etiketi",
  integrationSteps: "Entegrasyon adımları",
  integrationTitle: "Entegrasyon başlığı",
  integrationTypes: "Servis türleri",
  items: "Maddeler",
  kpis: "Göstergeler",
  label: "Etiket",
  last12: "Zaman etiketi",
  latest: "Son yazılar",
  layers: "Katmanlar",
  layersCaption: "Katman alt notu",
  layersCopy: "Katman metni",
  layersLabel: "Katman listesi etiketi",
  layersTitle: "Katman başlığı",
  lead: "Giriş metni",
  legal: "Yasal not",
  listLabel: "Liste etiketi",
  logoLabel: "Logo etiketi",
  mainNav: "Ana menü etiketi",
  menuNote: "Menü notu",
  message: "Mesaj alanı",
  methodCopy: "Yöntem metni",
  methodQuestions: "Yöntem soruları",
  methodTitle: "Yöntem başlığı",
  minutes: "Okuma süresi",
  mobileNav: "Mobil menü etiketi",
  modules: "Modüller",
  modulesLabel: "Modül listesi etiketi",
  name: "Ad",
  need: "İhtiyaç",
  notFound: "Bulunamadı metni",
  note: "Not",
  noteLink: "Not bağlantısı",
  notIncluded: "Dahil değil yazısı",
  outcomes: "Çıktılar",
  outcomesTitle: "Çıktı başlığı",
  pagesLabel: "Sayfa listesi etiketi",
  phases: "Aşamalar",
  phasesLabel: "Aşama etiketi",
  planCta: "Paket düğmesi",
  plans: "Paketler",
  platformCopy: "Platform metni",
  platformFeatures: "Platform özellikleri",
  platformTitle: "Platform başlığı",
  playerFlow: "Oyuncu akışı",
  points: "Maddeler",
  previewFlag: "Önizleme uyarısı",
  previewHint: "Önizleme notu",
  price: "Fiyat yazısı",
  principles: "İlkeler",
  principlesCopy: "İlke metni",
  principlesTitle: "İlke başlığı",
  processCopy: "Süreç metni",
  processSteps: "Süreç adımları",
  processTitle: "Süreç başlığı",
  products: "Ürünler",
  question: "Soru",
  readMore: "Devamını oku",
  related: "İlgili yazılar",
  request: "İstek",
  required: "Zorunlu alan notu",
  response: "Yanıt",
  result: "Sonuç",
  rights: "Haklar",
  risk: "Risk",
  riskCopy: "Risk metni",
  riskHead: "Tablo başlıkları",
  riskTable: "Risk tablosu",
  riskTitle: "Risk başlığı",
  measure: "Önlem",
  rows: "Satırlar",
  sample: "Örnek etiketi",
  securityCopy: "Güvenlik metni",
  securityPoints: "Güvenlik maddeleri",
  securityTitle: "Güvenlik başlığı",
  sending: "Gönderiliyor",
  sentCopy: "Gönderildi metni",
  services: "Hizmetler",
  servicesCopy: "Hizmet metni",
  servicesTitle: "Hizmet başlığı",
  skip: "İçeriğe geç",
  stages: "Proje aşamaları",
  stats: "Sayılar",
  stepsLabel: "Adım etiketi",
  stepsTitle: "Adım başlığı",
  steps: "Adımlar",
  submit: "Gönder düğmesi",
  summary: "Özet",
  tabsLabel: "Sekme etiketi",
  tag: "Etiket",
  tagline: "Slogan",
  thanks: "Teşekkür",
  tileLink: "Karo bağlantısı",
  tileSlogan: "Karo sloganı",
  time: "Saat",
  title: "Başlık",
  top: "Yukarı dön",
  updated: "Tarih etiketi",
  value: "Değer",
  again: "Yeniden",
  overview: "Genel bakış",
  detail: "Ayrıntı",
  parts: "Parçalar",
  step: "Adım",
  module: "Modül",
  text: "Metin",
  apiCaption: "API alt notu",
  apiCopy: "API metni",
  apiNotes: "API notları",
  apiTitle: "API başlığı",
  indexLabel: "Dizin etiketi",
  capsCopy: "Yetenek metni",
  capsTitle: "Yetenek başlığı",
  home: "Ana sayfa",
  cases: "Vaka çalışmaları",
  technology: "Teknoloji",
  packages: "Paketler",
  blog: "Blog",
  demo: "Demo",
  notfound: "404",
  site: "Site",
  nav: "Menü",
  footer: "Alt bilgi",
  heroes: "Hero bölümleri",
  meta: "SEO",
  panel: "Panel",
  catalog: "Katalog",
  company: "Şirket",
  email: "E-posta",
  stage: "Aşama",
  role: "Görev",
  consentError: "Onay hatası",
  emailFormat: "E-posta biçimi",
  send: "Gönderim hatası",
  namePh: "Ad ipucu",
  rolePh: "Görev ipucu",
  emailPh: "E-posta ipucu",
  companyPh: "Şirket ipucu",
  messagePh: "Mesaj ipucu",
  stageChoose: "Seçim yazısı",
  website: "Web sitesi alanı",
  menu: "Menü",
  close: "Kapat",
  language: "Dil",
};

const human = (key: string) => LABELS[key] ?? key;

/** "0" → "1."  ·  "services" → "Hizmetler" */
const segmentLabel = (segment: string) =>
  /^\d+$/.test(segment) ? `${Number(segment) + 1}.` : human(segment);

/** Sıra numarasını önceki parçaya yapıştırır: ["title","0"] → "Başlık 1", ["services","1","copy"] → "Hizmetler 2 · Metin". */
function joinLabel(parts: string[]) {
  const out: string[] = [];
  for (const part of parts) {
    if (/^\d+$/.test(part) && out.length) out[out.length - 1] += ` ${Number(part) + 1}`;
    else out.push(segmentLabel(part));
  }
  return out.join(" · ");
}

function walk(node: unknown, path: string, out: string[]) {
  if (typeof node === "string") {
    out.push(path);
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, index) => walk(item, `${path}.${index}`, out));
    return;
  }
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) walk(value, path ? `${path}.${key}` : key, out);
  }
}

const groupKeyOf = (path: string, depth: number) => {
  const parts = path.split(".");
  return parts.slice(0, Math.min(depth, parts.length - 1)).join(".");
};

/** Bir bölümün gruplarını ve alanlarını Türkçe dil dosyasından çıkarır. */
export function sectionGroups(section: Section, tr: Dictionary): FieldGroup[] {
  const paths: string[] = [];
  for (const root of section.roots) walk(readPath(tr, root), root, paths);

  const groups = new Map<string, FieldGroup>();
  for (const path of paths) {
    const key = groupKeyOf(path, section.depth);
    let group = groups.get(key);
    if (!group) {
      // Katalog ve panel gibi derin gruplarda başlık olarak kaydın kendi adını kullan
      // ("urun-sportsbook" yerine "Sportsbook"). Sığ gruplarda ad alanı başlık değildir.
      const parts = key.split(".");
      const own = parts.length >= 3 ? readPath(tr, `${key}.name`) : undefined;
      const label = typeof own === "string" ? own : parts.map(segmentLabel).join(" · ");
      group = { key, label, fields: [] };
      groups.set(key, group);
    }
    const rest = path.slice(key.length + 1).split(".");
    const value = readPath(tr, path);
    const text = typeof value === "string" ? value : "";
    group.fields.push({
      path,
      label: joinLabel(rest),
      multiline: text.length > 90 || text.includes("\n"),
    });
  }
  return [...groups.values()];
}

/** Moderatörün erişebildiği bölümler. */
export const MODERATOR_SECTIONS: SectionId[] = ["pages"];

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* "Trafik artarken performans aynı kalır" bandının çizimi.
   Soldan giren veri hatları işlemcide toplanır; işlemciden çıkan hatlar sağdaki üç satıra,
   yani tünellere (stilleri index.css içinde, .band-facts) bağlanır. Altta işlemci yükünü
   gösteren çubuklar çalışır. Tamamen dekoratiftir; sayı ya da iddia taşımaz.

   Çizim, işlemcinin merkezini (0, 0) kabul eden piksel koordinatlarıyla yapılır ve
   bandın o anki ölçülerine göre yeniden hesaplanır. Böylece hatlar her genişlikte
   tünel ağızlarına tam oturur. */

/** Tekrarlanabilir sözde rastgele sayı: her yüklemede aynı çizim çıksın. */
const noise = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

type Geometry = {
  /** Bandın kenarları, işlemci merkezine göre. */
  left: number;
  top: number;
  bottom: number;
  /** İşlemci sütununun yarı yüksekliği. */
  half: number;
  /** İşlemcinin kenar uzunluğu. */
  chip: number;
  /** Tünel ağızları: satırın sol kenarı ve dikey ortası. */
  rows: { x: number; y: number }[];
  /** Telefonda satırlar işlemcinin altındadır. */
  stacked: boolean;
  listTop: number;
};

const STREAM_COUNT = 14;
const PIN_COUNT = 6;
const PIN = 12;

export function DataFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<Geometry | null>(null);

  useLayoutEffect(() => {
    const core = ref.current;
    const band = core?.closest<HTMLElement>(".tech-band");
    if (!core || !band) return;
    let last = "";
    const measure = () => {
      const c = core.getBoundingClientRect();
      const b = band.getBoundingClientRect();
      const cx = c.left + c.width / 2;
      const cy = c.top + c.height / 2;
      const items = [...band.querySelectorAll<HTMLElement>(".band-facts li")].map((li) =>
        li.getBoundingClientRect(),
      );
      if (!items.length) return;
      const next: Geometry = {
        left: Math.round(b.left - cx),
        top: Math.round(b.top - cy),
        bottom: Math.round(b.bottom - cy),
        half: Math.round(c.height / 2),
        chip: c.width < 200 ? 92 : 116,
        rows: items.map((r) => ({
          x: Math.round(r.left - cx),
          y: Math.round(r.top + r.height / 2 - cy),
        })),
        stacked: items[0].top >= c.bottom - 1,
        listTop: Math.round(items[0].top - cy),
      };
      const key = JSON.stringify(next);
      if (key !== last) {
        last = key;
        setGeo(next);
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(band);
    void document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, []);

  // Bant ekranda değilken canlandırma durur.
  useEffect(() => {
    const band = ref.current?.closest<HTMLElement>(".tech-band");
    if (!band || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => band.classList.toggle("is-paused", !entry.isIntersecting),
      { rootMargin: "120px" },
    );
    observer.observe(band);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="df-core" ref={ref} aria-hidden="true">
      {geo && <Drawing geo={geo} />}
    </div>
  );
}

function Drawing({ geo }: { geo: Geometry }) {
  const h = geo.chip / 2;
  const edge = h + PIN;
  const pins = Array.from(
    { length: PIN_COUNT },
    (_, k) => -h + 14 + (k * (geo.chip - 28)) / (PIN_COUNT - 1),
  );

  /* Giriş hatları: sol kenardan yelpaze gibi gelir, işlemcinin sol bacaklarına bağlanır. */
  const from = geo.left - 20;
  const spanTop = geo.stacked ? -geo.half + 6 : geo.top + 14;
  const spanBottom = geo.stacked ? geo.half - 6 : geo.bottom - 14;
  const reach = -edge - from;
  const streams = Array.from({ length: STREAM_COUNT }, (_, i) => {
    const y = spanTop + (i * (spanBottom - spanTop)) / (STREAM_COUNT - 1);
    const pin = pins[Math.floor((i * PIN_COUNT) / STREAM_COUNT)];
    return {
      d: `M ${from} ${y} C ${from + reach * 0.55} ${y}, ${-edge - reach * 0.22} ${pin}, ${-edge} ${pin}`,
      // Girişte veri hızlı akar: işlemciye gelene kadar yığılmaz.
      duration: 0.9 + noise(i) * 0.8,
      delay: -noise(i + 40) * 2,
    };
  });

  /* Çıkış hatları: masaüstünde her tünel ağzına iki hat girer; telefonda hatlar aşağı, tünellere iner. */
  const feeds = geo.stacked
    ? [-0.5, -0.17, 0.17, 0.5].map((k) => {
        const x = k * (geo.chip - 28);
        return `M ${x} ${edge} V ${geo.listTop - 4}`;
      })
    : geo.rows.flatMap((row, i) =>
        [0, 1].map((k) => {
          const pin = pins[Math.min(PIN_COUNT - 1, i * 2 + k)];
          const y = row.y + (k ? 5 : -5);
          const x = row.x - 6;
          const run = x - edge;
          return `M ${edge} ${pin} C ${edge + run * 0.5} ${pin}, ${x - run * 0.5} ${y}, ${x} ${y}`;
        }),
      );

  const cell = (geo.chip - 44) / 4;
  const cells = Array.from({ length: 16 }, (_, i) => ({
    x: -h + 16 + (i % 4) * (cell + 4),
    y: -h + 16 + Math.floor(i / 4) * (cell + 4),
    duration: 0.9 + noise(i + 200) * 1.6,
    delay: -noise(i + 230) * 2,
  }));

  return (
    <svg className="df-flow" fill="none" focusable="false">
      <g>
        {streams.map((stream, i) => (
          <g key={i}>
            <path className="df-rail" d={stream.d} />
            <path
              className="df-pulse"
              d={stream.d}
              pathLength={100}
              style={{
                animationDuration: `${stream.duration}s`,
                animationDelay: `${stream.delay}s`,
              }}
            />
          </g>
        ))}
      </g>
      <g>
        {feeds.map((d, i) => (
          <g key={i}>
            <path className="df-rail df-feed" d={d} />
            <path
              className="df-pulse"
              d={d}
              pathLength={100}
              // Çıkışta akış yavaşlar: istekler tünellere sakin ve düzenli girer.
              style={{ animationDuration: "3.6s", animationDelay: `${-i * 0.6}s` }}
            />
          </g>
        ))}
      </g>
      <g className="df-chip">
        {pins.map((p) => (
          <path
            key={p}
            d={`M ${-edge} ${p} H ${-h} M ${h} ${p} H ${edge} M ${p} ${-edge} V ${-h} M ${p} ${h} V ${edge}`}
          />
        ))}
        <rect className="df-body" x={-h} y={-h} width={geo.chip} height={geo.chip} rx={9} />
        <rect x={-h + 9} y={-h + 9} width={geo.chip - 18} height={geo.chip - 18} rx={4} />
        {cells.map((c, i) => (
          <rect
            key={i}
            className="df-cell"
            x={c.x}
            y={c.y}
            width={cell}
            height={cell}
            style={{ animationDuration: `${c.duration}s`, animationDelay: `${c.delay}s` }}
          />
        ))}
      </g>
    </svg>
  );
}

/* İşlemci yükü çubukları: bandın altı boyunca. */
const BARS = Array.from({ length: 72 }, (_, i) => ({
  x: i * 20 + 4,
  h: 34 + noise(i + 7) * 78,
  duration: 1.1 + noise(i + 90) * 1.9,
  delay: -noise(i + 150) * 3,
}));

export function LoadBars() {
  return (
    <svg
      className="df-bars"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {BARS.map((bar) => (
        <rect
          key={bar.x}
          x={bar.x}
          y={120 - bar.h}
          width={12}
          height={bar.h}
          style={{ animationDuration: `${bar.duration}s`, animationDelay: `${bar.delay}s` }}
        />
      ))}
    </svg>
  );
}

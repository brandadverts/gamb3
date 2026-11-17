import type { CSSProperties } from "react";

/**
 * Çizgilerle çizilen, sırayla birbirine dönüşen simge: futbol topu → basketbol topu → rulet → kart → zar.
 * Dış çerçeve tek bir şekildir; daireden karta, karttan zara biçim değiştirir. İç çizgiler her adımda
 * yeniden çizilir. Tüm zamanlama index.css içindeki "Dönüşen simge" bölümündedir.
 */
export function MorphIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`morph-icon ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none">
        <rect className="mi-frame" x={14} y={14} width={92} height={92} rx={46} />
        <g className="mi-g" style={{ "--i": 0 } as CSSProperties}>
          <path
            pathLength={1}
            d="M60.0 45.0 L74.27 55.36 L68.82 72.14 L51.18 72.14 L45.73 55.36 Z"
          />
          <path pathLength={1} d="M60.0 45.0 L60.0 30.0" />
          <path pathLength={1} d="M43.52 17.06 L60.0 30.0 L76.48 17.06" />
          <path pathLength={1} d="M74.27 55.36 L88.53 50.73" />
          <path pathLength={1} d="M95.75 31.05 L88.53 50.73 L105.94 62.41" />
          <path pathLength={1} d="M68.82 72.14 L77.63 84.27" />
          <path pathLength={1} d="M98.58 85.05 L77.63 84.27 L71.91 104.43" />
          <path pathLength={1} d="M51.18 72.14 L42.37 84.27" />
          <path pathLength={1} d="M48.09 104.43 L42.37 84.27 L21.42 85.05" />
          <path pathLength={1} d="M45.73 55.36 L31.47 50.73" />
          <path pathLength={1} d="M14.06 62.41 L31.47 50.73 L24.25 31.05" />
        </g>
        <g className="mi-g" style={{ "--i": 1 } as CSSProperties}>
          <path pathLength={1} d="M60 14 L60 106" />
          <path pathLength={1} d="M14 60 L106 60" />
          <path pathLength={1} d="M27.5 27.5 Q47 60 27.5 92.5" />
          <path pathLength={1} d="M92.5 27.5 Q73 60 92.5 92.5" />
        </g>
        <g className="mi-g" style={{ "--i": 2 } as CSSProperties}>
          <path pathLength={1} d="M30 60a30 30 0 1 0 60 0a30 30 0 1 0 -60 0" />
          <path pathLength={1} d="M53 60a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path pathLength={1} d="M88.98 67.76 L104.43 71.91" />
          <path pathLength={1} d="M81.21 81.21 L92.53 92.53" />
          <path pathLength={1} d="M67.76 88.98 L71.91 104.43" />
          <path pathLength={1} d="M52.24 88.98 L48.09 104.43" />
          <path pathLength={1} d="M38.79 81.21 L27.47 92.53" />
          <path pathLength={1} d="M31.02 67.76 L15.57 71.91" />
          <path pathLength={1} d="M31.02 52.24 L15.57 48.09" />
          <path pathLength={1} d="M38.79 38.79 L27.47 27.47" />
          <path pathLength={1} d="M52.24 31.02 L48.09 15.57" />
          <path pathLength={1} d="M67.76 31.02 L71.91 15.57" />
          <path pathLength={1} d="M81.21 38.79 L92.53 27.47" />
          <path pathLength={1} d="M88.98 52.24 L104.43 48.09" />
          <path pathLength={1} d="M67.0 60.0 L79.0 60.0" />
          <path pathLength={1} d="M60.0 67.0 L60.0 79.0" />
          <path pathLength={1} d="M53.0 60.0 L41.0 60.0" />
          <path pathLength={1} d="M60.0 53.0 L60.0 41.0" />
          <path pathLength={1} d="M75.8 27.09a3.2 3.2 0 1 0 6.4 0a3.2 3.2 0 1 0 -6.4 0" />
        </g>
        <g className="mi-g" style={{ "--i": 3 } as CSSProperties}>
          <path pathLength={1} d="M60 36 L79 60 L60 84 L41 60 Z" />
          <path pathLength={1} d="M35 19 L40 26 L35 33 L30 26 Z" />
          <path pathLength={1} d="M85 87 L90 94 L85 101 L80 94 Z" />
          <path pathLength={1} d="M60 50 L67 60 L60 70 L53 60 Z" />
        </g>
        <g className="mi-g" style={{ "--i": 4 } as CSSProperties}>
          <path pathLength={1} d="M33 38a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <path pathLength={1} d="M77 38a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <path pathLength={1} d="M55 60a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <path pathLength={1} d="M33 82a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <path pathLength={1} d="M77 82a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
        </g>
      </svg>
    </span>
  );
}

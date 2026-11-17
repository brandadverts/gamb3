import { useEffect, useState } from "react";
import { useT } from "../i18n";
import { Link } from "../router";

type LogoState = "gg" | "gamb" | "full";

/** Her durumun ekranda kalma süresi (ms). */
const HOLD: Record<Exclude<LogoState, "full">, number> = { gg: 2600, gamb: 2400 };

/**
 * Gamb Gaming logosu. Sağ üstünde her zaman ® işareti bulunur.
 *
 * - `animated`: önce "gg" yazar, efektle "gamb" olur, sonra yeniden "gg"ye döner; bu döngü sürer.
 *   Üzerine gelindiğinde (ya da klavyeyle odaklanıldığında) "gamb gaming" açılır.
 * - `animated` verilmezse logo sabit olarak "gamb gaming" yazar (alt bilgi, mobil menü).
 * - Hareket azaltma açıksa döngü çalışmaz; logo sabit "gamb gaming" görünür.
 */
export function Logo({ animated = false, onClick }: { animated?: boolean; onClick?: () => void }) {
  const label = useT().nav.logoLabel;
  const [state, setState] = useState<LogoState>(animated ? "gg" : "full");
  const [looping, setLooping] = useState(false);

  // Döngü yalnızca tarayıcıda ve hareket azaltma kapalıyken başlar.
  useEffect(() => {
    if (!animated) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setLooping(!reduce);
    if (reduce) setState("full");
  }, [animated]);

  // gg → gamb → gg … Üzerine gelinmişken ("full") döngü bekler.
  useEffect(() => {
    if (!looping || state === "full") return;
    const timer = window.setTimeout(() => setState(state === "gg" ? "gamb" : "gg"), HOLD[state]);
    return () => window.clearTimeout(timer);
  }, [looping, state]);

  const open = () => looping && setState("full");
  const close = () => looping && setState("gg");

  return (
    <Link
      to="home"
      className={`logo${animated ? " is-animated" : ""}`}
      data-state={state}
      aria-label={label}
      dir="ltr"
      onClick={onClick}
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={close}
    >
      <span className="logo-word" aria-hidden="true">
        <span className="lg-seg lg-g1">g</span>
        <span className="lg-seg lg-amb">amb</span>
        <span className="lg-seg lg-sp"> </span>
        <span className="lg-seg lg-g2">g</span>
        <span className="lg-seg lg-aming">aming</span>
      </span>
      <span className="logo-reg" aria-hidden="true">
        ®
      </span>
    </Link>
  );
}

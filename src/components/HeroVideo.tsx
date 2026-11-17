import { useEffect, useRef } from "react";

export type HeroVideoSource = {
  /** Tarayıcı ilk oynatabildiğini seçer; MP4 her yerde, WebM daha küçük dosyayla çalışır. */
  sources: { src: string; type: string }[];
  /** Video yüklenene kadar ve hareket azaltma açıkken gösterilen kare. */
  poster: string;
};

/**
 * Hero bölümünün arkasında sessiz, döngülü, yarı saydam video.
 * Saydamlık ve renk index.css içindeki --hero-video-opacity ve --hero-video-filter ile ayarlanır.
 */
export function HeroVideo({ video }: { video: HeroVideoSource }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Hareket azaltma açıksa video oynatılmaz; yalnızca poster karesi görünür.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.removeAttribute("autoplay");
      element.pause();
      return;
    }

    // Bazı tarayıcılar otomatik oynatma için muted özelliğinin betikle de ayarlanmasını ister.
    element.muted = true;
    const play = () => {
      element.play().catch(() => {
        /* otomatik oynatma engellendiyse poster kalır */
      });
    };

    // Ekranda değilken oynatma: pil ve işlemci harcamasın.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else element.pause();
      },
      { threshold: 0.05 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      <video
        ref={ref}
        className="hero-video"
        poster={video.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        disablePictureInPicture
      >
        {video.sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </video>
    </div>
  );
}

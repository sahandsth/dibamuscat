"use client";

import { useLanguage } from "./LanguageProvider";

export function Marquee() {
  const { t } = useLanguage();
  const items = t.marquee;

  const row = items.map((item) => (
    <span key={item} className="mx-6 flex items-center gap-6">
      <span
        className={`font-display text-3xl tracking-[0.15em] md:text-5xl ${
          item === "DIBA" || item === "GRAND MILLENNIUM"
            ? "animate-shimmer bg-gradient-to-r from-wine via-rose to-gold bg-clip-text text-transparent"
            : "text-wine/80"
        }`}
      >
        {item}
      </span>
      <span className="h-2 w-2 rounded-full bg-gold animate-pulse-glow" />
    </span>
  ));

  return (
    <div className="group overflow-hidden border-y border-wine/10 bg-blush/40 py-5" dir="ltr">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </div>
  );
}

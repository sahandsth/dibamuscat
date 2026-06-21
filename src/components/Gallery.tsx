"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { site } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

const portfolioImages = [
  "https://images.unsplash.com/photo-1639629509821-c54cdd984227?w=700&q=80",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=700&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&q=80",
  "https://images.unsplash.com/photo-1519419451778-14599a49ec41?w=700&q=80",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=700&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80",
  "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=700&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80",
];

function PortfolioImage({
  src,
  alt,
  tag,
}: {
  src: string;
  alt: string;
  tag: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blush via-rose-light/20 to-gold-light/20">
        <span className="font-display text-3xl text-wine/25">{tag}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      sizes="(max-width: 768px) 50vw, 280px"
      onError={() => setFailed(true)}
    />
  );
}

function PortfolioCard({
  item,
  index,
  className = "",
}: {
  item: { src: string; alt: string; tag: string; caption: string };
  index: number;
  className?: string;
}) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl md:rounded-3xl ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ delay: (index % 4) * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-blush">
        <PortfolioImage src={item.src} alt={item.alt} tag={item.tag} />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/85 via-wine/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p dir="ltr" className="font-display text-lg text-cream md:text-xl [unicode-bidi:isolate]">
            {item.tag}
          </p>
          <p dir="ltr" className="mt-0.5 text-xs text-cream/75 md:text-sm [unicode-bidi:isolate]">
            {item.caption}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function Gallery() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  const portfolio = t.gallery.portfolio.map((item, index) => ({
    ...item,
    src: portfolioImages[index],
  }));

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <AnimatedSection className="mb-6 md:mb-8">
          <p className="mb-3 text-xs tracking-[0.3em] text-rose uppercase">
            {t.gallery.eyebrow}
          </p>
          <h2 className="font-display text-4xl text-wine md:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 max-w-lg text-muted">{t.gallery.subtitle}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {t.gallery.categories.map((cat) => (
              <span
                key={cat}
                dir="ltr"
                className="inline-block rounded-full border border-wine/10 bg-white/60 px-3 py-1 text-[11px] tracking-wide text-wine/80 uppercase [unicode-bidi:isolate]"
              >
                {cat}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-2 gap-3 px-5 md:hidden">
        {portfolio.map((item, i) => (
          <PortfolioCard key={item.tag} item={item} index={i} />
        ))}
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar mt-8 hidden gap-5 overflow-x-auto px-5 pb-2 md:flex md:px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]"
      >
        {portfolio.map((item, i) => (
          <motion.div
            key={`scroll-${item.tag}`}
            className="relative w-64 shrink-0 md:w-72"
            style={{ rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
          >
            <PortfolioCard item={item} index={i} className="h-full" />
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-6 hidden h-1 max-w-xs overflow-hidden rounded-full bg-wine/10 md:block">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-rose via-gold to-rose"
          style={{ width: progressWidth }}
        />
      </div>

      <AnimatedSection className="mx-auto mt-8 max-w-6xl px-5">
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-rose transition-colors hover:text-wine"
        >
          {t.gallery.seeMore} @{site.instagram.handle} →
        </a>
      </AnimatedSection>
    </section>
  );
}

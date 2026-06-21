"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Scissors,
  Sparkles,
  Flower2,
  Hand,
  Palette,
  Wind,
  Star,
} from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { TiltCard } from "./TiltCard";
import { useLanguage } from "./LanguageProvider";

const serviceMeta = [
  { icon: Eye, accent: "from-rose/20 to-rose-light/10", span: "col-span-1 md:col-span-2 md:row-span-2" },
  { icon: Hand, accent: "from-gold-light/30 to-gold/10", span: "col-span-1" },
  { icon: Flower2, accent: "from-blush to-rose-light/20", span: "col-span-1" },
  { icon: Scissors, accent: "from-wine/10 to-rose/10", span: "col-span-1" },
  { icon: Palette, accent: "from-gold/10 to-gold-light/20", span: "col-span-1" },
  { icon: Sparkles, accent: "from-rose-light/20 to-blush", span: "col-span-1 md:col-span-2" },
  { icon: Wind, accent: "from-wine/5 to-gold-light/15", span: "col-span-1" },
  { icon: Star, accent: "from-rose/15 to-gold/10", span: "col-span-1" },
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs tracking-[0.3em] text-rose uppercase">
            {t.services.eyebrow}
          </p>
          <h2 className="font-display text-4xl text-wine md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            {t.services.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection
          stagger
          className="grid grid-cols-2 gap-3 auto-rows-fr md:grid-cols-4 md:gap-4 md:auto-rows-[minmax(10rem,auto)]"
        >
          {t.services.items.map((service, i) => {
            const meta = serviceMeta[i];
            const Icon = meta.icon;

            return (
              <AnimatedItem key={service.title} className="h-full min-h-0">
                <TiltCard
                  className={`group relative h-full min-h-[7.5rem] overflow-hidden rounded-2xl bg-gradient-to-br md:min-h-0 md:rounded-3xl ${meta.accent} ${meta.span}`}
                  intensity={meta.span.includes("row-span-2") ? 8 : 10}
                >
                  <motion.div
                    className="relative flex h-full flex-col p-4 md:p-6"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <Icon
                      size={20}
                      className="mb-2 shrink-0 text-rose md:mb-3"
                      strokeWidth={1.5}
                    />
                    <h3 dir="ltr" className="font-display text-base leading-snug text-wine md:text-xl [unicode-bidi:isolate]">
                      {service.title}
                    </h3>
                    <p className="mt-1 flex-1 text-[11px] leading-relaxed text-muted md:text-sm">
                      {service.desc}
                    </p>
                    <span className="mt-2 hidden text-[10px] tracking-widest text-wine/25 md:block">
                      0{i + 1}
                    </span>
                  </motion.div>
                </TiltCard>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}

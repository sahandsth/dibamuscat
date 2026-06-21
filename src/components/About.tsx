"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "./LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="overflow-hidden px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <AnimatedSection className="relative">
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt={t.about.imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/50 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-rose/20"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 rounded-2xl glass px-5 py-4 shadow-lg md:-bottom-8 md:-right-8"
              initial={{ opacity: 0, x: 20, y: 20, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              whileHover={{ y: -4, rotate: -2 }}
            >
              <p className="font-display text-3xl text-wine">{t.about.cardTitle}</p>
              <p className="text-sm text-muted">{t.about.cardSubtitle}</p>
            </motion.div>
            <motion.div
              className="absolute -top-4 -left-4 h-20 w-20 rounded-full border border-gold/30 bg-gold-light/20 backdrop-blur-sm"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mb-3 text-xs tracking-[0.3em] text-rose uppercase">
              {t.about.eyebrow}
            </p>
            <h2 className="font-display text-4xl leading-tight text-wine md:text-5xl">
              {t.about.titleLine1}
              <br />
              <span className="italic text-rose">{t.about.titleLine2}</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted">{t.about.paragraph1}</p>
            <p className="mt-4 leading-relaxed text-muted">{t.about.paragraph2}</p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {t.about.highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-wine/8 bg-white/50 px-4 py-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.03, borderColor: "rgba(183, 110, 121, 0.3)" }}
                >
                  <p className="text-xs text-muted">{item.label}</p>
                  <p className="font-display text-base leading-tight text-wine sm:text-lg">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

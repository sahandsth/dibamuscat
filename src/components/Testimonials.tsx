"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { useLanguage } from "./LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-wine px-5 py-20 text-cream md:py-28">
      <motion.div
        className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-rose/20 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <div className="relative mx-auto max-w-6xl">
        <AnimatedSection className="mb-12 text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-rose-light uppercase">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            {t.testimonials.title}
          </h2>
        </AnimatedSection>

        <AnimatedSection stagger className="grid gap-4 md:grid-cols-3 md:gap-6">
          {t.testimonials.reviews.map((review, i) => (
            <AnimatedItem key={review.name}>
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-sm"
                whileHover={{ y: -8, borderColor: "rgba(201, 169, 98, 0.4)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/10 blur-2xl"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }}
                />
                <motion.div
                  initial={{ rotate: -10, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <Quote size={24} className="mb-4 text-gold/60" strokeWidth={1.5} />
                </motion.div>
                <p className="relative leading-relaxed text-cream/85">{review.text}</p>
                <div className="relative mt-6 border-t border-cream/10 pt-4">
                  <p dir="ltr" className="font-display text-lg [unicode-bidi:isolate]">
                    {review.name}
                  </p>
                  <p dir="ltr" className="text-xs tracking-wider text-rose-light uppercase [unicode-bidi:isolate]">
                    {review.service}
                  </p>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

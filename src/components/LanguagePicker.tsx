"use client";

import { motion } from "framer-motion";
import { FloatingParticles } from "./FloatingParticles";
import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

const localeDescriptions: Record<Locale, string> = {
  en: "English",
  fa: "Persian · فارسی",
  ar: "Arabic · العربية",
};

export function LanguagePicker() {
  const { setLocale, t } = useLanguage();

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex items-center justify-center overflow-hidden bg-wine px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FloatingParticles className="opacity-40" />

      <motion.div
        className="relative w-full max-w-md text-center"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p dir="ltr" className="font-display text-4xl text-cream md:text-5xl [unicode-bidi:isolate]">
          Diba
        </p>
        <p dir="ltr" className="mt-2 text-xs tracking-[0.35em] text-rose-light uppercase [unicode-bidi:isolate]">
          Beauty Lounge
        </p>

        <h1 className="mt-10 font-display text-2xl text-cream md:text-3xl">
          {t.languagePicker.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-cream/70">
          {t.languagePicker.subtitle}
        </p>

        <div className="mt-10 flex flex-col gap-3">
          {locales.map((locale, i) => (
            <motion.button
              key={locale}
              type="button"
              onClick={() => setLocale(locale)}
              className="rounded-2xl border border-cream/15 bg-cream/5 px-6 py-4 text-cream backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-cream/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="block font-display text-xl">{localeLabels[locale]}</span>
              <span className="mt-1 block text-xs tracking-wide text-cream/55">
                {localeDescriptions[locale]}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

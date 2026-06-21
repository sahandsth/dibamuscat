"use client";

import { Globe } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { localeLabels, locales } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center gap-1.5 rounded-full border border-wine/10 bg-white/50 text-wine backdrop-blur-sm transition-colors hover:border-rose/30 ${
          compact ? "h-9 px-3 text-xs" : "px-3 py-2 text-sm"
        }`}
        aria-expanded={open}
        aria-label="Change language"
      >
        <Globe size={compact ? 14 : 16} />
        <span className="font-medium uppercase">{locale}</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40"
              aria-label="Close language menu"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute end-0 top-[calc(100%+0.5rem)] z-50 min-w-36 overflow-hidden rounded-2xl border border-wine/10 bg-cream shadow-xl shadow-wine/10"
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              {locales.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setLocale(item);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-blush/60 ${
                    locale === item ? "font-medium text-wine" : "text-charcoal/80"
                  }`}
                >
                  <span>{localeLabels[item]}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted">
                    {item}
                  </span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

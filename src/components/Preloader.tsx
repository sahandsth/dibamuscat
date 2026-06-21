"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingParticles } from "./FloatingParticles";
import { useLanguage } from "./LanguageProvider";

export function Preloader() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-wine"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <FloatingParticles className="opacity-60" />

          <motion.div
            initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center"
            dir="ltr"
          >
            {"DIBA".split("").map((letter, i) => (
              <motion.span
                key={letter + i}
                className="font-display inline-block text-6xl tracking-[0.2em] text-cream md:text-7xl"
                initial={{ opacity: 0, y: 80, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.2 + i * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.p
              className="mt-4 text-xs tracking-[0.4em] text-rose-light uppercase"
              initial={{ opacity: 0, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {t.preloader.tagline}
            </motion.p>
          </motion.div>

          <motion.div className="absolute bottom-16 h-0.5 w-40 overflow-hidden rounded-full bg-cream/20">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-rose via-gold to-rose"
              initial={{ width: "0%", x: "-100%" }}
              animate={{ width: "100%", x: "0%" }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

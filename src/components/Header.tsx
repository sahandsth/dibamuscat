"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#book", label: t.nav.book },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-sm py-3" : "py-5 bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5">
          <a href="#home" className="group flex flex-col">
            <span dir="ltr" className="font-display inline-block text-2xl font-semibold tracking-[0.2em] text-wine [unicode-bidi:isolate]">
              DIBA
            </span>
            <span dir="ltr" className="inline-block text-[10px] tracking-[0.35em] text-muted uppercase [unicode-bidi:isolate]">
              Grand Millennium
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-charcoal/80 transition-colors hover:text-rose"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher compact />
            <a
              href="#book"
              className="rounded-full bg-wine px-5 py-2.5 text-sm font-medium text-cream transition-transform hover:scale-105 active:scale-95"
            >
              {t.nav.bookNow}
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher compact />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-wine/5 text-wine"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-cream md:hidden"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            exit={{ clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl text-wine"
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-wine px-10 py-4 text-lg font-medium text-cream"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
              >
                {t.nav.bookAppointment}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

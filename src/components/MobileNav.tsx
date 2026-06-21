"use client";

import { motion } from "framer-motion";
import { Calendar, Home, ImageIcon, Sparkles } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const TAB_HREFS = ["#home", "#services", "#gallery", "#book"] as const;

export function MobileNav() {
  const { t } = useLanguage();
  const tabs = [
    { href: "#home", icon: Home, label: t.nav.home },
    { href: "#services", icon: Sparkles, label: t.nav.services },
    { href: "#gallery", icon: ImageIcon, label: t.nav.gallery },
    { href: "#book", icon: Calendar, label: t.nav.book },
  ] as const;

  const [active, setActive] = useState<string>(TAB_HREFS[0]);

  const syncActiveFromScroll = useCallback(() => {
    const marker = window.scrollY + window.innerHeight * 0.32;
    let current: string = TAB_HREFS[0];

    for (const href of TAB_HREFS) {
      const el = document.querySelector(href);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (marker >= top - 96) current = href;
    }

    setActive(current);
  }, []);

  useEffect(() => {
    const onScroll = () => syncActiveFromScroll();
    const onHashChange = () => {
      const hash = window.location.hash;
      if (TAB_HREFS.some((href) => href === hash)) setActive(hash);
    };

    const frame = requestAnimationFrame(onScroll);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [syncActiveFromScroll]);

  const handleClick = (href: string) => {
    setActive(href);
    window.history.replaceState(null, "", href);
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="mx-3 mb-3 rounded-2xl glass-dark px-2 py-2 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const isActive = active === tab.href;
            return (
              <a
                key={tab.href}
                href={tab.href}
                onClick={() => handleClick(tab.href)}
                className="relative flex flex-1 flex-col items-center gap-0.5 py-2"
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-indicator"
                    className="absolute -top-0.5 h-0.5 w-8 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <tab.icon
                  size={20}
                  className={isActive ? "text-gold" : "text-cream/50"}
                  strokeWidth={isActive ? 2 : 1.5}
                />
                <span
                  className={`text-[10px] tracking-wide ${
                    isActive ? "text-gold" : "text-cream/40"
                  }`}
                >
                  {tab.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

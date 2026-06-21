"use client";

import { motion } from "framer-motion";
import { Calendar, Home, ImageIcon, Sparkles } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const tabs = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#services", icon: Sparkles, label: "Services" },
  { href: "#gallery", icon: ImageIcon, label: "Gallery" },
  { href: "#book", icon: Calendar, label: "Book" },
] as const;

export function MobileNav() {
  const [active, setActive] = useState<string>(tabs[0].href);

  const syncActiveFromScroll = useCallback(() => {
    const marker = window.scrollY + window.innerHeight * 0.32;
    let current: string = tabs[0].href;

    for (const tab of tabs) {
      const el = document.querySelector(tab.href);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (marker >= top - 96) current = tab.href;
    }

    setActive(current);
  }, []);

  useEffect(() => {
    syncActiveFromScroll();

    const onScroll = () => syncActiveFromScroll();
    const onHashChange = () => {
      const hash = window.location.hash;
      if (tabs.some((t) => t.href === hash)) setActive(hash);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);

    return () => {
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

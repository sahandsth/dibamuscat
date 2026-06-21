"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  STORAGE_KEY,
  getDictionary,
  isRtl,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";
import { withRtlBidi } from "@/lib/bidi";

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
  rtl: boolean;
  ready: boolean;
  hasChosenLocale: boolean;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "fa" || stored === "ar") return stored;
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);
  const [hasChosenLocale, setHasChosenLocale] = useState(false);

  useEffect(() => {
    const stored = readStoredLocale();
    const frame = requestAnimationFrame(() => {
      if (stored) {
        setLocaleState(stored);
        setHasChosenLocale(true);
      }
      setReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const root = document.documentElement;
    root.lang = locale;
    root.dir = isRtl(locale) ? "rtl" : "ltr";
    root.dataset.locale = locale;
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setLocaleState(next);
    setHasChosenLocale(true);
  }, []);

  const value = useMemo(() => {
    const rtl = isRtl(locale);
    return {
      locale,
      t: withRtlBidi(getDictionary(locale), rtl),
      rtl,
      ready,
      hasChosenLocale,
      setLocale,
    };
  }, [locale, ready, hasChosenLocale, setLocale]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

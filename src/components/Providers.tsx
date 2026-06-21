"use client";

import { AnimatePresence } from "framer-motion";
import { LanguagePicker } from "./LanguagePicker";
import { LanguageProvider, useLanguage } from "./LanguageProvider";

function LanguageGate({ children }: { children: React.ReactNode }) {
  const { ready, hasChosenLocale } = useLanguage();

  if (!ready) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {!hasChosenLocale && <LanguagePicker key="language-picker" />}
      </AnimatePresence>
      {hasChosenLocale ? children : null}
    </>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LanguageGate>{children}</LanguageGate>
    </LanguageProvider>
  );
}

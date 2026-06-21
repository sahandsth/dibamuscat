import type { Locale } from "./types";
import { ar } from "./locales/ar";
import { en } from "./locales/en";
import { fa } from "./locales/fa";

export type { Dictionary, Locale } from "./types";

export const locales: Locale[] = ["en", "fa", "ar"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
};

export const dictionaries = { en, fa, ar } as const;

export const STORAGE_KEY = "diba-locale";

export function isRtl(locale: Locale) {
  return locale === "fa" || locale === "ar";
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

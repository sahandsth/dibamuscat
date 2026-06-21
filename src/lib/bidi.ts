const LRI = "\u2066";
const PDI = "\u2069";

/** Keeps Latin brand names readable inside RTL paragraphs. */
const LATIN_RUN =
  /[A-Za-z0-9@][A-Za-z0-9@.'+\-/&]*(?:\s+[A-Za-z0-9@][A-Za-z0-9@.'+\-/&]*)*/g;

export function isolateLatinText(text: string): string {
  return text.replace(LATIN_RUN, (match) => `${LRI}${match}${PDI}`);
}

function localizeBidi<T>(value: T): T {
  if (typeof value === "string") return isolateLatinText(value) as T;
  if (Array.isArray(value)) return value.map((item) => localizeBidi(item)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localizeBidi(item)]),
    ) as T;
  }
  return value;
}

export function withRtlBidi<T>(dictionary: T, rtl: boolean): T {
  if (!rtl) return dictionary;
  return localizeBidi(dictionary);
}

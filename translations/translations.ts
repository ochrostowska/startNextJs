import pl_strings from "./strings/pl.json";

export type TranslationKeys = keyof typeof pl_strings;

type SupportedLanguages = "pl";

const strings: Record<SupportedLanguages, Record<TranslationKeys, string>> = {
  pl: pl_strings,
};

const findAppTranslations = () => {
  const lang = "pl"; // hardcode for now
  return strings[lang as SupportedLanguages] || strings.pl;
};

export const translations = findAppTranslations();
export const fallbackTranslations = strings.pl;

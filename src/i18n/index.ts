import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ptBR from "./translations/pt-br";
import enUS from "./translations/en-us";

declare global {
  interface String {
    capitalize(): string;
  }
}

String.prototype.capitalize = function (): string {
  return Object.values(this)
    .map((char, i) => (i === 0 ? char.toUpperCase() : char))
    .join("");
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ...enUS,
      ...ptBR,
    },
  });

export default i18n;

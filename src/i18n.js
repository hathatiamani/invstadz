import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to our website",
          "description": "This is a sample description"
        }
      },
      fr: {
        translation: {
          "welcome": "Bienvenue sur notre site Web",
          "description": "Ceci est un exemple de description"
        }
      },
      ar: { translation: require("./locales/ar.json") }
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

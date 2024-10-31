import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from "./locales/en/translation.json"
import esTranslation from "./locales/es/translation.json"

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true,
    lng: localStorage.getItem("language") || "en",
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
  });
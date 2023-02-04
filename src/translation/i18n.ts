import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pl from "../locales/pl.json"
import en from '../locales/en.json'

const resources = {
  en: {
      translation: en
  },
  pl: {
      translation: pl
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  debug: true,
  keySeparator: ".",
  interpolation: {
    escapeValue: false
  },
});

export default i18n;

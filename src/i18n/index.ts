import en from "./en";
import es from "./es";
import fr from "./fr";
import { config } from "../config";

const i18n = { en, es, fr };

export const getI18nText = (key: string) => {
  const lang = config.lang;
  const text = i18n[lang][key];
  if (!text) {
    throw new Error(`Text not found for key: ${key}`);
  }
  return text;
};

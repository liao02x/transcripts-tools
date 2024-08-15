import "dotenv/config";

export const openaiBaseUrl = process.env.OPENAI_BASE_URL!;
export const openaiApiKey = process.env.OPENAI_API_KEY!;
export const openaiModel = process.env.OPENAI_MODEL!;
export const transcriptOutputPath =
  process.env.TRANSCRIPT_OUTPUT_PATH || "transcripts";
export const mongoDBUri = process.env.MONGODB_URI;

export enum Lang {
  en = "en",
  es = "es",
  fr = "fr",
}

export const defaultLang = Lang.en;

export const supportedLangs = Object.values(Lang);

export const config: {
  lang: Lang;
} = { lang: defaultLang };

export const setLang = (lang?: Lang) => {
  if (lang) config.lang = lang;
}

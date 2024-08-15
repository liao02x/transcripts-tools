import type { Lang } from "./config";

export type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type CommonActionOptions = {
  file?: string;
  lang?: Lang;
};

export type AskActionOptions = CommonActionOptions & {
  question?: string;
};

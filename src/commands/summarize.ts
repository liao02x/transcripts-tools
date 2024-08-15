import { completion } from "../openai";
import { createOra, readTranscript, systemLog, assistantLog } from "../utils";
import { setLang } from "../config";
import { getI18nText } from "../i18n";
import type { CommonActionOptions } from "../types";

export const summarizeTranscript = async (transcript: string) => {
  const spinner = createOra().start();

  await completion(
    [
      { role: "system", content: getI18nText("summarizeTranscript") },
      { role: "user", content: transcript },
    ],
    {
      onStreamStart: () => {
        spinner.stop();
        assistantLog("Below is the summary of the transcript:\n");
      },
    }
  );
};

export default async function summarize({ file, lang }: CommonActionOptions) {
  try {
    setLang(lang);
    const transcript = await readTranscript({ init: file });
    await summarizeTranscript(transcript);
  } catch (error) {
    systemLog("An error occurred.");
    console.error(error);
  }
}

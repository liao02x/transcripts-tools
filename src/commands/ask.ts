import { completion } from "../openai";
import { createOra, readTranscript, userInput, systemLog } from "../utils";
import { setLang } from "../config";
import { getI18nText } from "../i18n";
import { persistChat } from "../db";
import type { AskActionOptions, Message } from "../types";

export const askTranscript = async ({
  transcript,
  initQuestion,
}: {
  transcript: string;
  initQuestion?: string;
}) => {
  const messages: Message[] = [
    {
      role: "system",
      content: `${getI18nText("askSystemMessage")}${transcript}`,
    },
  ];

  let question = initQuestion || (await userInput("Enter your question:"));
  while (question) {
    messages.push({ role: "user", content: question });
    const spinner = createOra().start();
    const response = await completion(messages, {
      onStreamStart: () => {
        spinner.stop();
      },
    });
    messages.push({ role: "assistant", content: response ?? "" });
    question = await userInput("Enter your question:");
  }
  await persistChat({ messages, transcript });
};

export default async function ask({ file, lang, question }: AskActionOptions) {
  try {
    setLang(lang);
    const transcript = await readTranscript({ init: file });
    await askTranscript({ transcript, initQuestion: question });
  } catch (error) {
    systemLog("An error occurred.");
    console.error(error);
  }
}

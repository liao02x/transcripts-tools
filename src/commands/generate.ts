import { completion } from "../openai";
import {
  createOra,
  saveTranscript,
  userInput,
  systemLog,
  assistantLog,
} from "../utils";
import { setLang } from "../config";
import { getI18nText } from "../i18n";
import type { CommonActionOptions } from "../types";

// the generated result might have empty lines in between and might start with things like
// **Call Transcript:** or **New Conversation:** from the beginning and **End of Transcript.** at the end.
// we need to process the result before saving it to a file.
export const postProcess = (response: string) => {
  let lines = response.split("\n").map((line) => line.trim());

  // remove the empty lines
  lines = lines.filter((line) => line !== "");

  // remove the lines that looks like **something** or (something)
  lines = lines.filter((line, i, lines) => {
    const mightBeTitle =
      (line[0] === line[line.length - 1] ||
        (line[0] === "(" && line[line.length - 1] === ")") ||
        (line[0] === "[" && line[line.length - 1] === "]")) &&
      line.length < 30;
    if (i === 0) {
      return !(
        mightBeTitle &&
        ["Transcript", "Conversation", "New", "Call", "Script"].some((title) =>
          line.includes(title)
        )
      );
    }
    if (i === lines.length - 1) {
      return !(mightBeTitle && line.includes("End"));
    }
    return true;
  });

  return lines.join("\n");
};

export const generateTranscript = async () => {
  const spinner = createOra().start();

  const response = await completion(
    [
      { role: "system", content: getI18nText("genereteSystemMessage") },
      { role: "user", content: getI18nText("generateSampleTranscript") },
    ],
    {
      onStreamStart: () => {
        spinner.stop();
        assistantLog("Below is the preview of the transcript:\n");
      },
    }
  );

  return postProcess(response || "");
};

export default async function generate({ file, lang }: CommonActionOptions) {
  try {
    setLang(lang);
    const transcript = await generateTranscript();
    console.log("\n");
    assistantLog("Above is the generated transcript.");
    if (!file) {
      const confirm = await userInput(
        "Do you want to save the transcript? Type 'no' to skip:"
      );
      if (confirm !== "no") {
        await saveTranscript({ content: transcript });
      }
    } else {
      await saveTranscript({ content: transcript, init: file });
    }
  } catch (error) {
    systemLog("An error occurred.");
    console.error(error);
  }
}

import "dotenv/config";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import readline from "node:readline";
import { outputFile, pathExists } from "fs-extra";
import ora from "ora";

import { transcriptOutputPath } from "./config";

export const userInput = (prompt: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(getSystemLogDisplay(`${prompt}\n`), (answer) => {
      rl.close();
      resolve(answer);
    })
  );
};

export const readTranscript = async ({
  msg,
  init,
}: { msg?: string; init?: string } = {}): Promise<string> => {
  const path = init || (await userInput(msg || "Enter the path to the file:"));
  const isFileExists = await pathExists(path);
  if (!isFileExists) {
    return readTranscript({
      msg: "File not found. Please check the input and try again:",
    });
  }

  const spinner = createOra("Reading the file...").start();
  try {
    const content = await readFile(path, "utf-8");
    return content;
  } catch (error) {
    return readTranscript({
      msg: "Can't read the file. Please try another one:",
    });
  } finally {
    spinner.stop();
  }
};

export const saveTranscript = async ({
  msg,
  init,
  content,
}: {
  content: string;
  msg?: string;
  init?: string;
}) => {
  const filename =
    init ||
    (await userInput(msg || "Enter the filename to save the transcript:"));
  if (!filename) {
    return false;
  }
  const path = join(transcriptOutputPath, filename);
  const isFileExists = await pathExists(path);
  if (isFileExists) {
    const confirm = await userInput(
      "File already exists. Type 'yes' to overwrite:"
    );
    if (confirm !== "yes") {
      return saveTranscript({ content });
    }
  }

  const spinner = createOra("Saving the file...").start();
  try {
    await outputFile(path, content);
    spinner.stop();
    systemLog(`Transcript saved to ${path}`);
  } catch (error) {
    return saveTranscript({
      content,
      msg: "Can't save the file. Please try another name:",
    });
  } finally {
    spinner.stop();
  }
};

export const createOra = (text: string = "Generating") => {
  return ora({
    text,
    hideCursor: false,
    discardStdin: false,
  });
};

export const getSystemLogDisplay = (content?: string) => {
  const isNull = content == null;
  return `[SYSTEM]${isNull ? "" : ` ${content}`}`;
};

export const systemLog: typeof console.log = (...args: unknown[]) => {
  console.log(getSystemLogDisplay(), ...args);
};

export const getAssistantLogDisplay = (content?: string) => {
  const isNull = content == null;
  return `[ASSISTANT]${isNull ? "" : ` ${content}`}`;
};

export const assistantLog: typeof console.log = (...args: unknown[]) => {
  console.log(getAssistantLogDisplay(), ...args);
};

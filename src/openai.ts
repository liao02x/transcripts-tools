import openAI from "openai";
import { openaiBaseUrl, openaiApiKey, openaiModel } from "./config";
import type { Message } from "./types";

const openai = new openAI({
  baseURL: openaiBaseUrl,
  apiKey: openaiApiKey,
});

export async function completion(
  messages: Message[],
  {
    onStreamStart,
  }: {
    onStreamStart?: (content?: string) => void;
  } = {}
): Promise<string | null> {
  const stream = await openai.beta.chat.completions.stream({
    model: openaiModel,
    messages,
    stream: true,
  });

  let addNewLine = false,
    streamStart = false;
  for await (const chunk of stream) {
    let content = "";
    if (chunk.choices[0]?.delta?.content) {
      content = chunk.choices[0].delta.content;
      addNewLine = true;
    }
    if (!streamStart) {
      streamStart = true;
      onStreamStart?.(content);
    }
    process.stdout.write(content);
  }
  // seems like the end of the response doesn't have a newline, add one if needed
  if (addNewLine) process.stdout.write("\n");

  const completion = await stream.finalChatCompletion();
  const message = completion.choices[0].message.content;

  return message;
}

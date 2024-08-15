import mongoose from "mongoose";
import { mongoDBUri } from "./config";
import { createOra, systemLog } from "./utils";
import type { Message } from "./types";

const chatSchema = new mongoose.Schema({
  createdAt: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
  messages: [
    {
      role: mongoose.Schema.Types.String,
      content: mongoose.Schema.Types.String,
    },
  ],
  transcript: mongoose.Schema.Types.String,
});

const Chat = mongoose.model("Chat", chatSchema);

export const persistChat = async (chat: {
  messages: Message[];
  transcript: string;
}) => {
  if (!mongoDBUri) {
    systemLog("DB config is not set, chat will not be persisted.");
    return;
  }

  const spinner = createOra("Persisting chat to DB").start();
  try {
    await mongoose.connect(mongoDBUri);
    await new Chat(chat).save();
    spinner.succeed("Chat persisted successfully.");
    await mongoose.disconnect();
  } catch (error) {
    spinner.fail("An error occurred while persisting the chat.");
    console.error(error);
  }
};
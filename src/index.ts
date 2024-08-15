import { Command, Option } from "@commander-js/extra-typings";
import generate from "./commands/generate";
import summarize from "./commands/summarize";
import ask from "./commands/ask";
import { supportedLangs, defaultLang } from "./config";

const program = new Command();

program
  .name("transcripts-tools")
  .description("CLI to sales transcripts utilities")
  .version("1.0.0");

program
  .command("generate")
  .description("Generate a sales call transcript")
  .option("-f, --file <string>", "save transcript to the file", "")
  .addOption(
    new Option("-l, --lang <string>", "language in use")
      .choices(supportedLangs)
      .default(defaultLang)
  )
  .action((options) => {
    generate(options);
  });

program
  .command("summarize")
  .description("Summarize a sales call transcript")
  .option("-f, --file <string>", "read transcript from the file", "")
  .addOption(
    new Option("-l, --lang <string>", "language in use")
      .choices(supportedLangs)
      .default(defaultLang)
  )
  .action((options) => {
    summarize(options);
  });

program
  .command("ask")
  .description("Ask questions about a sales call transcript")
  .option("-f, --file <string>", "read transcript from the file", "")
  .option("-q, --question <string>", "question about the transcript", "")
  .addOption(
    new Option("-l, --lang <string>", "language in use")
      .choices(supportedLangs)
      .default(defaultLang)
  )
  .action((options) => {
    ask(options);
  });

program.parse();

import { expect } from "chai";
import { postProcess } from "../src/commands/generate";

describe("Generate postProcess", () => {
  const sampleTestTranscript = [
    "00:00:00 Sam (openai.com): Hey there Staya.",
    "00:00:02 Satya (microsoft.com): Hi Sam, how are you?",
  ];
  it("should remove title from the beginning", () => {
    expect(
      postProcess(`**Call Transcript:**\n${sampleTestTranscript.join("\n")}`)
    ).to.equal(sampleTestTranscript.join("\n"));
    expect(
      postProcess(`(New Transcript)\n${sampleTestTranscript.join("\n")}`)
    ).to.equal(sampleTestTranscript.join("\n"));
    expect(
      postProcess(`[New Conversation]\n${sampleTestTranscript.join("\n")}`)
    ).to.equal(sampleTestTranscript.join("\n"));
  });
  it("should remove ending from the end", () => {
    expect(
      postProcess(`${sampleTestTranscript.join("\n")}\n**End of Transcript**`)
    ).to.equal(sampleTestTranscript.join("\n"));
    expect(
      postProcess(`${sampleTestTranscript.join("\n")}\n(End of Call)`)
    ).to.equal(sampleTestTranscript.join("\n"));
  });
  it("should remove empty lines from the transcript", () => {
    expect(
      postProcess(`${["", ...sampleTestTranscript, ""].join("\n")}`)
    ).to.equal(sampleTestTranscript.join("\n"));
    expect(
      postProcess(
        `${[
          "",
          sampleTestTranscript[0],
          "",
          "",
          sampleTestTranscript[1],
          "",
        ].join("\n")}`
      )
    ).to.equal(sampleTestTranscript.join("\n"));
  });
});

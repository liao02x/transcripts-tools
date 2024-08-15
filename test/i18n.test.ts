import { expect } from "chai";
import { getI18nText } from "../src/i18n";
import { setLang, Lang } from "../src/config";
import en from "../src/i18n/en";
import fr from "../src/i18n/fr";
import es from "../src/i18n/es";

describe("GetI18nText", () => {
  it("should return the text in translation file if lang is en", () => {
    setLang(Lang.en);
    expect(getI18nText("generateSampleTranscript")).to.equal(
      en.generateSampleTranscript
    );
  });
  it("should return the text in translation file if lang is fr", () => {
    setLang(Lang.fr);
    expect(getI18nText("genereteSystemMessage")).to.equal(
      fr.genereteSystemMessage
    );
  });
  it("should return the text in translation file if lang is es", () => {
    setLang(Lang.es);
    expect(getI18nText("summarizeTranscript")).to.equal(es.summarizeTranscript);
  });
  it("should throw if key does not exist", () => {
    expect(() => getI18nText("Not Exist")).to.throw(
      "Text not found for key: Not Exist"
    );
  });
});

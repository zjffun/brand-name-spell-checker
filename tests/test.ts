import { expect } from "chai";
import { describe } from "mocha";
import NameSpellChecker from "../src/index";

const nameSpellChecker = new NameSpellChecker();

describe("NameSpellChecker", () => {
  it("suggest", () => {
    expect(nameSpellChecker.suggest("vue")).to.include("Vue.js");
    expect(nameSpellChecker.suggest("react")).to.include("React");
    expect(nameSpellChecker.suggest("anguler")).to.include("Angular");
    expect(nameSpellChecker.suggest("query")).to.include("jQuery");
    expect(nameSpellChecker.suggest("Mocha.js")).to.include("Mocha");
  });
});

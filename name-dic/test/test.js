const expect = require("chai").expect;

const frontEnd = require("../umd/front-end.js");
const programmingLanguage = require("../umd/programming-language.js");

describe("brand name", () => {
  it("frontEnd", () => {
    expect(frontEnd).to.have.property("aff");
    expect(frontEnd).to.have.property("dic");
  });

  it("programmingLanguage", () => {
    expect(programmingLanguage).to.have.property("aff");
    expect(programmingLanguage).to.have.property("dic");
  });
});

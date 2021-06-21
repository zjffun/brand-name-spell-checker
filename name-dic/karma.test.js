const frontEnd = nameDic.frontEnd;
const programmingLanguage = nameDic.programmingLanguage;

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

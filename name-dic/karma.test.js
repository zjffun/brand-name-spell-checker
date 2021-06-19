const frontEnd = brandName.frontEnd;
const programmingLanguage = brandName.programmingLanguage;

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

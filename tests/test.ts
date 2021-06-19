import NameSpellChecker from "../src/index";

const nameSpellChecker = new NameSpellChecker();

console.log(nameSpellChecker.suggest("vue"));
console.log(nameSpellChecker.suggest("react"));
console.log(nameSpellChecker.suggest("anguler"));
console.log(nameSpellChecker.suggest("ext"));
console.log(nameSpellChecker.suggest("query"));
console.log(nameSpellChecker.suggest("Mocha.js"));

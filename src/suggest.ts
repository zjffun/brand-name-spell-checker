import nspell from "nspell";
import getBrandNames from "./get-brand-names";
import preprocess from "./preprocess";
import seam from "./seam";

export default (str) => {
  const names = [...getBrandNames().keys()];

  const aff = `SET UTF-8`;

  const spell = nspell(aff, names.join("\n"));

  const pstr = preprocess(str);

  const substrs = names.filter((name: string) => {
    for (let i = 0; i < name.length; i++) {
      if (name.substring(i).startsWith(pstr)) {
        return true;
      }
    }
  });

  const spellSuggests = spell.suggest(pstr);

  return substrs
    .concat(spellSuggests)
    .map((d) => [seam(pstr, d), d])
    .sort((a, b) => b[0] - a[0])
    .map((d) => d[1]);
};

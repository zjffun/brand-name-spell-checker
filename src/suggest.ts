import BrandNameSpellChecker from "./index";
import preprocess from "./preprocess";
import seam from "./seam";

export default (context: BrandNameSpellChecker, str: string): string[] => {
  const names = [...context.innerBrandNameMap.keys()];

  const pstr = preprocess(str);

  const substrs = names.filter((name: string) => {
    for (let i = 0; i < name.length; i++) {
      if (name.substring(i).startsWith(pstr)) {
        return true;
      }
      return false;
    }
    return false;
  });

  const nspellSuggests = context.nspellInstance.suggest(pstr);

  return substrs
    .concat(nspellSuggests)
    .map<[number, string]>((d) => [seam(pstr, d), d])
    .sort((a, b) => b[0] - a[0])
    .map((d) => d[1]);
};

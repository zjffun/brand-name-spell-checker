import BrandNameSpellChecker from "./index";
import preprocess from "./preprocess";
import seam from "./seam";

export default (context: BrandNameSpellChecker, str: string): string[] => {
  const names = [...context.nameMap.keys()];

  const pstr = preprocess(str);

  const substrs = names.filter((name: string) => {
    for (let i = 0; i < name.length; i++) {
      if (name.length > pstr.length) {
        if (name.substring(i).startsWith(pstr)) {
          return true;
        }
      } else {
        if (pstr.substring(i).startsWith(name)) {
          return true;
        }
      }

      return false;
    }
    return false;
  });

  const nspellSuggests = context.nspellInstance.suggest(pstr);
  return [
    ...new Set(
      substrs.concat(nspellSuggests).reduce<string[]>((prev, cur) => {
        prev = prev.concat(context.nameMap.get(cur) || []);
        return prev;
      }, [])
    ),
  ]
    .map<[number, string]>((d) => [seam(pstr, d), d])
    .sort((a, b) => b[0] - a[0])
    .map((d) => d[1]);
};

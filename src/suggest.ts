import BrandNameSpellChecker from "./index";
import getInnerName from "./getInnerName";
import similarity from "./similarity";

export default (context: BrandNameSpellChecker, str: string): string[] => {
  const names = [...context.innerNameMap.keys()];

  const pstr = getInnerName(str);

  const substringSuggests = names.filter((name: string) => {
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

  const suggests = [...new Set(substringSuggests.concat(nspellSuggests))];

  return suggests
    .reduce<string[]>((prev, cur) => {
      prev = prev.concat(context.innerNameMap.get(cur) || []);
      return prev;
    }, [])
    .map<[number, string]>((d) => [similarity(pstr, d), d])
    .sort((a, b) => b[0] - a[0])
    .map((d) => d[1]);
};

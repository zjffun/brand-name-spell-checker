import BrandNameSpellChecker from "./index";
import getInnerName from "./getInnerName";

export default (context: BrandNameSpellChecker, str: string): boolean => {
  const innerStr = getInnerName(str);

  const names = context.innerNameMap.get(innerStr);
  if (names) {
    return names.includes(str);
  }

  return false;
};

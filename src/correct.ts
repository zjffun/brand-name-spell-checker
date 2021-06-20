import getInnerName from "./getInnerName";
import NameSpellChecker from "./index";

export default (context: NameSpellChecker, str: string): boolean => {
  const innerStr = getInnerName(str);

  const names = context.innerNameMap.get(innerStr);
  if (names) {
    return names.includes(str);
  }

  return false;
};

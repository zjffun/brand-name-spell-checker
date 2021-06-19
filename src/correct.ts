import BrandNameSpellChecker from "./index";
import preprocess from "./preprocess";

export default (context: BrandNameSpellChecker, str: string): boolean => {
  const pstr = preprocess(str);

  return context.innerBrandNameMap.has(pstr);
};

import BrandNameSpellChecker from "./index";
import preprocess from "./preprocess";

export default (context: BrandNameSpellChecker, brandName: string): void => {
  const innerBrandName = preprocess(brandName);

  let arr = context.innerBrandNameMap.get(innerBrandName);
  if (!arr) {
    arr = [brandName];
    context.innerBrandNameMap.set(innerBrandName, arr);
  }
  arr.push(brandName);
  context.nspellInstance.add(innerBrandName);
};

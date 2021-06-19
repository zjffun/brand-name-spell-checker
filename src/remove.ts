import BrandNameSpellChecker from "./index";
import preprocess from "./preprocess";

export default (context: BrandNameSpellChecker, brandName: string): void => {
  const innerBrandName = preprocess(brandName);

  context.innerBrandNameMap.delete(innerBrandName);
  context.nspellInstance.remove(innerBrandName);
};

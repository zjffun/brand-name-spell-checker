import BrandNameSpellChecker from "./index";
import getInnerName from "./getInnerName";

export default (context: BrandNameSpellChecker, name: string): void => {
  const innerName = getInnerName(name);

  let names = context.innerNameMap.get(innerName);

  if (!names) {
    return;
  }

  const index = names.indexOf(name);

  if (~index) {
    names.splice(index, 1);
  }

  if (names.length === 0) {
    context.innerNameMap.delete(innerName);
    context.nspellInstance.remove(innerName);
  }
};

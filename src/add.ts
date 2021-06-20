import BrandNameSpellChecker from "./index";
import getInnerName from "./getInnerName";

export default (context: BrandNameSpellChecker, name: string): void => {
  const innerName = getInnerName(name);

  let names = context.innerNameMap.get(innerName);

  if (!names) {
    names = [name];
    context.innerNameMap.set(innerName, names);
    context.nspellInstance.add(innerName);
    return;
  }

  if (names.includes(name)) {
    return;
  }

  names.push(name);
};

import getInnerName from "./getInnerName";
import NameSpellChecker from "./index";

export default (context: NameSpellChecker, name: string): void => {
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

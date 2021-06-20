import getInnerName from "./getInnerName";
import NameSpellChecker from "./index";

export default (context: NameSpellChecker, name: string): void => {
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

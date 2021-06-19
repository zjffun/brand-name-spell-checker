import { BuiltInDictionary, Dictionary } from "./index";
import frontEnd from "./brand-names/front-end";
import programmingLanguages from "./brand-names/programming-languages";

export default (arr: string[]): Dictionary[] => {
  return arr.reduce<Dictionary[]>((prev, cur) => {
    switch (cur) {
      case BuiltInDictionary.frontEnd:
        prev.push(frontEnd);
        break;
      case BuiltInDictionary.programmingLanguages:
        prev.push(programmingLanguages);
        break;
    }
    return prev;
  }, []);
};

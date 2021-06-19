import frontEnd from "name-dic/dist/front-end.js";
import { BuiltInDictionary, Dictionary } from "./index";

export default (arr: string[]): Dictionary[] => {
  return arr.reduce<Dictionary[]>((prev, cur) => {
    switch (cur) {
      case BuiltInDictionary.frontEnd:
        prev.push(frontEnd);
        break;
    }
    return prev;
  }, []);
};

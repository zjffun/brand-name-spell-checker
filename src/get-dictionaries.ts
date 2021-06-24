import { frontEnd } from "name-dic";
import { BuiltInDictionary, Dictionary } from "./types";

export default (arr: Array<Dictionary | BuiltInDictionary>): Dictionary[] => {
  return arr.reduce<Dictionary[]>((prev, cur) => {
    if (typeof cur === "string") {
      switch (cur) {
        case BuiltInDictionary.frontEnd:
          prev.push(frontEnd);
          break;
      }
    } else {
      prev.push(cur);
    }

    return prev;
  }, []);
};

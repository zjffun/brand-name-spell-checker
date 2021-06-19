import frontEnd from "name-dic/dist/front-end.js";
import BrandNameSpellChecker from "./index";
import preprocess from "./preprocess";

export default (context: BrandNameSpellChecker) => {
  const map = new Map();
  frontEnd.dic
    .trim()
    .split("\n")
    .slice(1)
    .map((name: string) => name.trim())
    .forEach((name: string) => {
      const innerName = preprocess(name);

      let arr = map.get(innerName);
      if (!arr) {
        arr = [name];
        map.set(innerName, arr);
      }
      arr.push(name);
    });

  return map;
};

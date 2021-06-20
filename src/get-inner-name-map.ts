import BrandNameSpellChecker from "./index";

export default function (context: BrandNameSpellChecker) {
  const map = new Map();

  context.dictionaries.forEach(({ dic }, i) => {
    const innerDic = context.innerDictionaries[i].dic.trim().split("\n");

    dic
      .trim()
      .split("\n")
      .forEach((name: string, i) => {
        if (i === 0) {
          return;
        }

        const innerName = innerDic[i];
        let arr = map.get(innerName);
        if (!arr) {
          arr = [name];
          map.set(innerName, arr);
        }
        arr.push(name);
      });
  });

  return map;
}

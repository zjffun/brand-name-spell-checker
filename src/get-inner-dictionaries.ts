import { Dictionary } from "./index";
import preprocess from "./preprocess";

export default (dictionaries: Dictionary[]): Dictionary[] => {
  const innerDictionaries: Dictionary[] = [];

  dictionaries.forEach((dictionary) => {
    const dic = dictionary.dic
      .trim()
      .split("\n")
      .map((name: string, i) => {
        if (i === 0) {
          return name;
        }
        return preprocess(name);
      })
      .join("\n");

    innerDictionaries.push({
      ...dictionary,
      dic,
    });
  });

  return innerDictionaries;
};

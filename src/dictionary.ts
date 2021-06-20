import BrandNameSpellChecker from "./index";
import add from "./add";

export default (context: BrandNameSpellChecker, dic: string): void => {
  dic
    .split("\n")
    .slice(1)
    .forEach((name) => {
      add(context, name);
    });
};

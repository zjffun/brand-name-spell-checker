import BrandNameSpellChecker from "./index";
import add from "./add";
import remove from "./remove";

export default (context: BrandNameSpellChecker, dic: string): void => {
  dic
    .split("\n")
    .slice(1)
    .forEach((name) => {
      if (name.startsWith("*")) {
        remove(context, name.substring(1));
        return;
      }

      add(context, name);
    });
};

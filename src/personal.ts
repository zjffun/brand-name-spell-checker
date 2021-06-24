import add from "./add";
import NameSpellChecker from "./index";
import remove from "./remove";

export default (context: NameSpellChecker, dic: string): void => {
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

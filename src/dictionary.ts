import add from "./add";
import NameSpellChecker from "./index";

export default (context: NameSpellChecker, dic: string): void => {
  dic
    .split("\n")
    .slice(1)
    .forEach((name) => {
      add(context, name);
    });
};

import nspell from "nspell";
import add from "./add";
import correct from "./correct";
import getDictionaries from "./get-dictionaries";
import getInnerBrandNameMap from "./get-inner-brand-name-map";
import remove from "./remove";
import suggest from "./suggest";

export interface Dictionary {
  aff: string;
  dic: string;
}

export enum BuiltInDictionary {
  frontEnd = "frontEnd",
  programmingLanguages = "programmingLanguages",
}

class BrandNameSpellChecker {
  static defaultDictionaries = [
    BuiltInDictionary.frontEnd,
    BuiltInDictionary.programmingLanguages,
  ];

  constructor(dictionaries?: Array<Dictionary>) {
    if (!dictionaries) {
      this.dictionaries = getDictionaries(
        BrandNameSpellChecker.defaultDictionaries
      );
    } else {
      this.dictionaries = dictionaries;
    }
    this.nspellInstance = nspell(this.dictionaries);
    this.innerBrandNameMap = getInnerBrandNameMap(this);
  }

  nspellInstance: nspell;
  dictionaries: Array<Dictionary>;
  innerBrandNameMap: Map<string, string[]>;

  suggest(str: string): string[] {
    return suggest(this, str);
  }

  correct(str: string): boolean {
    return correct(this, str);
  }

  add(brandName: string): BrandNameSpellChecker {
    add(this, brandName);
    return this;
  }

  remove(brandName: string): BrandNameSpellChecker {
    remove(this, brandName);
    return this;
  }

  // dictionary(): BrandNameSpellChecker {
  //   addDictionary(this);
  //   return this;
  // }

  // personal(): BrandNameSpellChecker {
  //   addPersonalDictionary(this);
  //   return this;
  // }
}

export default BrandNameSpellChecker;

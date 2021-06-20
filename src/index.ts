import nspell from "nspell";
import add from "./add";
import correct from "./correct";
import dictionary from "./dictionary";
import getDictionaries from "./get-dictionaries";
import getInnerDictionaries from "./get-inner-dictionaries";
import getInnerNameMap from "./get-inner-name-map";
import personal from "./personal";
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

  constructor(dictionaries?: Array<Dictionary | BuiltInDictionary>) {
    if (!dictionaries) {
      this.dictionaries = getDictionaries(
        BrandNameSpellChecker.defaultDictionaries
      );
    } else {
      this.dictionaries = getDictionaries(dictionaries);
    }

    this.innerDictionaries = getInnerDictionaries(this.dictionaries);
    this.innerNameMap = getInnerNameMap(this);
    this.nspellInstance = nspell(this.innerDictionaries);
  }

  nspellInstance: nspell;
  dictionaries: Array<Dictionary>;
  innerDictionaries: Dictionary[];
  innerNameMap: Map<string, string[]>;

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

  dictionary(dic: string): BrandNameSpellChecker {
    dictionary(this, dic);
    return this;
  }

  personal(personalDic: string): BrandNameSpellChecker {
    personal(this, personalDic);
    return this;
  }
}

export default BrandNameSpellChecker;

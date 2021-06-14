import suggest from "./suggest";
import getDictionaries from "./get-dictionaries";
import nspell from "nspell";
import getInnerBrandNameMap from "./get-inner-brand-name-map";

export interface Dictionary {
  aff: string;
  dic: string;
}

class BrandNameSpellChecker {
  static defaultDictionaries = "";
  constructor(dictionaries: Array<Dictionary>) {
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
    add(this, str);
    return this;
  }
  remove(brandName: string): BrandNameSpellChecker {
    remove(this, str);
    return this;
  }
  dictionary(): BrandNameSpellChecker {
    addDictionary(this);
    return this;
  }
  personal(): BrandNameSpellChecker {
    addPersonalDictionary(this);
    return this;
  }
}

export default BrandNameSpellChecker;

# name-spell-checker

✓ name-spell-checker  
✗ NameSpellChecker  
✗ name-spell-checker.js

## Installation

[npm][]:

```sh
npm install name-spell-checker

# Install peerDependencies

npm install nspell
```

You probably also want to install some [dictionaries][]:

```sh
npm install name-dic
```

## Usage

```js
import dictionary from "name-dic/esm/front-end.js";
import NameSpellChecker from "name-spell-checker";

const nameSpellChecker = new NameSpellChecker();

console.log(nameSpellChecker.correct("vue")); // => false
console.log(nameSpellChecker.suggest("react")); // => ['color']
console.log(nameSpellChecker.correct("React")); // => true
spell.add("npm");
console.log(nameSpellChecker.correct("npm")); // => true
```

## API

### `NameSpellChecker(dictionaries)`

Create a new name spell checker.

If no dictionaries passed, `NameSpellChecker.defaultDictionaries` will be used.

#### Parameters

- `dictionaries` (`Array<Dictionary>`) — List of `dictionary` objects. The first must have an `aff` key, other `aff` keys are ignored

#### Returns

New instance of `NameSpellChecker`.

### `NameSpellChecker#suggest(str)`

Suggest names close to given string.

#### Example

```js
spell.suggest("colour"); // => ['color']
spell.suggest("color"); // => []
spell.suggest("html"); // => ['HTML']
spell.suggest("alot"); // => ['allot', 'slot', 'clot', …]
```

#### Parameters

- `str` (`string`) — string to suggest names for

#### Returns

`Array<string>` — List with zero or more suggestions.

### `NameSpellChecker#correct(str)`

Check if given string is correct name.

#### Example

```js
spell.correct("vue"); // => true
spell.correct("react"); // => false
spell.correct("angular"); // => false
```

#### Parameters

- `str` (`string`) — string to check for correct spelling

#### Returns

`boolean` — Whether `str` is correct name.

### `NameSpellChecker#add(brandName)`

Add `brandName` to known names.

#### Example

```js
spell.correct("npm"); // => false
spell.suggest("nnpm"); // => ['ppm', 'bpm', …]

spell.add("npm");

spell.correct("npm"); // => true
spell.suggest("nnpm"); // => ['npm']
```

#### Parameters

- `brandName` (`string`) — name to add

#### Returns

`NameSpellChecker` — Operated on instance.

### `NameSpellChecker#remove(word)`

### `NSpell#remove(brandName)`

Remove `brandName` from the known words.

#### Example

```js
spell.correct("color"); // => true

spell.remove("color");

spell.correct("color"); // => false
```

#### Parameters

- `brandName` (`string`) — name to remove

#### Returns

`NameSpellChecker` — Operated on instance.

### `NameSpellChecker#dictionary(dic)`

Add an extra dictionary to the NameSpellChecker.

#### Example

```js
spell.dictionary(
  ["5", "npm", "nullish", "rebase", "SHA", "stringification"].join("\n")
);
```

#### Parameters

- `dic` (`string`) — Dictionary document to use

#### Returns

`NameSpellChecker` — Operated on instance.

### `NameSpellChecker#personal(dic)`

Add a personal dictionary.

#### Example

```js
spell.personal(["foo", "*baz"].join("\n"));
```

#### Parameters

- `dic` (`string`) — Personal dictionary document to use

#### Note

Lines starting with a `*` mark a word as forbidden, which results in them being
seen as incorrect, and prevents them from showing up in suggestions.
Splitting a line in two with a slash, adds the left side and models it after the
already known right word.

#### Returns

`NameSpellChecker` — Operated on instance.

### `NameSpellChecker.defaultDictionaries`

## Dictionaries

**nspell** supports many parts of Hunspell-style dictionaries.
Essentially, the concept of a dictionary consists of one “affix” document, and
one or more “dictionary” documents.
The documents are tightly linked, so it’s not possible to use a Dutch affix with
an English dictionary document.

Below is a short introduction, see [hunspell(5)][hunspell-5] for more
information.

### Affix documents

Affix documents define the language, keyboard, flags, and much more.
For example, a paraphrased [Dutch][nl] affix document looks as follows:

```text
SET UTF-8

KEY qwertyuiop|asdfghjkl|zxcvbnm|qawsedrftgyhujikolp|azsxdcfvgbhnjmk|aze|qsd|lm|wx|aqz|qws|

WORDCHARS '’0123456789ĳ.-\/

REP 487
REP e en
REP ji ĳ
REP u oe
# …

SFX An Y 11
SFX An 0 de d
SFX An 0 fe f
SFX An 0 ge g
# …
```

Not every option is supported in **nspell**.
See [Affix options][affix-options] for a list of all options and which ones are
supported.

### Dictionary documents

Dictionary documents contain words and flags applying to those words.
For example:

```text
3
foo
bar/a
baz/ab
```

The above document contains three words, as the count on the first line shows.
Further lines each start with a word.
Some lines contain flags, as denoted by the slashes.
What those flags do, and the size of flags, is defined by affix documents.

### Personal dictionary documents

Personal dictionaries are not intertwined with affix document.
They define new words and words to forbid.
For example:

```text
foo
bar/baz
*qux
```

In the above example, `foo` is added as a known word; `bar` is added as well,
but modelled after the existing word `baz`; finally, `qux` is marked as a
forbidden word.

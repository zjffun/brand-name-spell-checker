# name-spell-checker

✓ name-spell-checker  
✗ NameSpellChecker  
✗ name-spell-checker.js

## Installation

npm

```sh
# Install with peerDependencies nspell
npm install name-spell-checker nspell
```

You probably also want to install some dictionaries:

```sh
npm install name-dic
```

## Usage

ESM:

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

CJS:

CDN:

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

**name-spell-checker** only supports small parts of Hunspell-style dictionaries.
Essentially, the concept of a dictionary consists of one “affix” document, and
one or more “dictionary” documents.

See [hunspell(5)][hunspell-5] for more information.

### Affix documents

Affix documents define the language, keyboard, flags, and much more.
The default affix document, only have one line, looks as follows:

```text
SET UTF-8
```

Not every option is supported in **name-spell-checker**.
We just pass it to **nspell**.
See **nspell** [Affix options][affix-options] for a list of all options and which ones are
supported.

### Dictionary documents

**name-spell-checker** does not support flags applying to those words.
Because it rarely used for name detection

Dictionary documents contain words.
For example:

```text
3
foo
bar
baz
```

The above document contains three words, as the count on the first line shows.
Further lines each start with a word.

### Personal dictionary documents

**name-spell-checker** does not support flags applying to those words.
Because it rarely used for name detection

Personal dictionaries are not intertwined with affix document.
They define new words and words to forbid.
For example:

```text
foo
*qux
```

In the above example, `foo` is added as a known word and `qux` is marked as a
forbidden word.

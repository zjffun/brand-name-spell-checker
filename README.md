[![jsdelivr][jsdelivr-badge]][jsdelivr-link]
[![npm version][fury-badge]][fury-link]
[![test CI][test-badge]][test-link]
[![codecov][codecov-badge]][codecov-link]

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
import NameSpellChecker from "name-spell-checker";

const nameSpellChecker = new NameSpellChecker();

console.log(nameSpellChecker.correct("vue")); // => false
console.log(nameSpellChecker.suggest("vue")); // => [ 'Vuex', 'Vue.js', 'vue-cli', 'Vue.js devtools' ]
console.log(nameSpellChecker.correct("React")); // => true
console.log(nameSpellChecker.correct("angular")); // => false

nameSpellChecker.add("name-spell-checker");

console.log(nameSpellChecker.suggest("NameSpellChecker")); // => [ 'name-spell-checker' ]
console.log(nameSpellChecker.correct("name-spell-checker")); // => true
```

CJS:

```js
const NameSpellChecker = require("name-spell-checker");

const nameSpellChecker = new NameSpellChecker();

console.log(nameSpellChecker.correct("vue")); // => false
console.log(nameSpellChecker.suggest("vue")); // => [ 'Vuex', 'Vue.js', 'vue-cli', 'Vue.js devtools' ]
console.log(nameSpellChecker.correct("React")); // => true
console.log(nameSpellChecker.correct("angular")); // => false

nameSpellChecker.add("name-spell-checker");

console.log(nameSpellChecker.suggest("NameSpellChecker")); // => [ 'name-spell-checker' ]
console.log(nameSpellChecker.correct("name-spell-checker")); // => true
```

CDN:

```html
<script src="./dist/nnameSpellChecker.min.js"></script>
<script src="./node_modules/name-dic/dist/front-end.js"></script>
<script src="./dist/index.js"></script>
<script>
  const nameSpellChecker = new NameSpellChecker();

  console.log(nameSpellChecker.correct("vue")); // => false
  console.log(nameSpellChecker.suggest("vue")); // => [ 'Vuex', 'Vue.js', 'vue-cli', 'Vue.js devtools' ]
  console.log(nameSpellChecker.correct("React")); // => true
  console.log(nameSpellChecker.correct("angular")); // => false

  nameSpellChecker.add("name-spell-checker");

  console.log(nameSpellChecker.suggest("NameSpellChecker")); // => [ 'name-spell-checker' ]
  console.log(nameSpellChecker.correct("name-spell-checker")); // => true
</script>
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

Suggest names close to the given string.

#### Example

```js
nameSpellChecker.suggest("macha"); // => [ 'Mocha' ]
nameSpellChecker.suggest("chai"); // => [ 'Chai' ]
```

#### Parameters

- `str` (`string`) — string to suggest names for

#### Returns

`Array<string>` — List with zero or more suggestions.

### `NameSpellChecker#correct(str)`

Check if the given string is correct name.

#### Example

```js
nameSpellChecker.correct("jquery"); // => false
nameSpellChecker.correct("jQuery"); // => true
```

#### Parameters

- `str` (`string`) — string to check for correct spelling

#### Returns

`boolean` — Whether `str` is correct name.

### `NameSpellChecker#add(name)`

Add the given name to known names.

#### Example

```js
nameSpellChecker.correct("name-spell-checker"); // => false
nameSpellChecker.suggest("name-spell-checker"); // => []

nameSpellChecker.add("name-spell-checker");

nameSpellChecker.correct("name-spell-checker"); // => true
nameSpellChecker.suggest("NameSpellCheck"); // => [ 'name-spell-checker' ]
```

#### Parameters

- `name` (`string`) — name to add

#### Returns

`NameSpellChecker` — Operated on instance.

### `NameSpellChecker#remove(word)`

### `NSpell#remove(name)`

Remove the given name from known words.

#### Example

```js
nameSpellChecker.correct("Vue.js"); // => true

nameSpellChecker.remove("Vue.js");

nameSpellChecker.correct("Vue.js"); // => false
```

#### Parameters

- `name` (`string`) — name to remove

#### Returns

`NameSpellChecker` — Operated on instance.

### `NameSpellChecker#dictionary(dic)`

Add an extra dictionary to the NameSpellChecker.

#### Example

```js
nameSpellChecker.dictionary(
  [
    "5",
    "name-spell-checker",
    "my-lib-foo",
    "jQuery.bar.js",
    "a.js",
    "b.lib.js",
  ].join("\n")
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
nameSpellChecker.personal(["foo", "*baz"].join("\n"));
```

#### Parameters

- `dic` (`string`) — Personal dictionary document to use

#### Note

Lines starting with a `*` mark a word as forbidden, which results in them being
seen as incorrect, and prevents them from showing up in suggestions.

#### Returns

`NameSpellChecker` — Operated on instance.

### `NameSpellChecker.defaultDictionaries`

An object of default dictionaries.

Dictionaries:

- frontEnd

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

Not every option is supported in **name-spell-checker**. We just pass it to [**nspell**][nspell].

### Dictionary documents

**name-spell-checker** does not support flags applying to those words.
Because it rarely used for check name.

Dictionary documents contain words. For example:

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
Because it rarely used for check name.

Personal dictionaries are not intertwined with affix document.
They define new words and words to forbid.
For example:

```text
foo
*qux
```

In the above example, `foo` is added as a known word and `qux` is marked as a
forbidden word.

<!-- Definitions -->

[hunspell-5]: https://linux.die.net/man/4/hunspell
[nspell]: https://github.com/wooorm/nspell
[fury-link]: https://badge.fury.io/js/name-spell-checker
[fury-badge]: https://badge.fury.io/js/name-spell-checker.svg
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/name-spell-checker
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/name-spell-checker/badge
[test-badge]: https://github.com/zjffun/name-spell-checker/workflows/test%20CI/badge.svg
[test-link]: https://github.com/zjffun/name-spell-checker/actions
[codecov-badge]: https://codecov.io/gh/zjffun/name-spell-checker/branch/master/graph/badge.svg
[codecov-link]: https://codecov.io/gh/zjffun/name-spell-checker

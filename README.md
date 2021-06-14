# brand-name-spell-checker

✓ brand-name-spell-checker  
✗ BrandNameSpellChecker  
✗ brand-name-spell-checker.js

## Installation

npm:

```bash
npm install brand-name-spell-checker
```

CDN:

```html
<script src="//cdn.jsdelivr.net/npm/brand-name-spell-checker/lib/index.js"></script>
```

## Usage

ES6:

```js
import brandNameSpellChecker from "brand-name-spell-checker";
const spellChecker = new BrandNameSpellChecker();
```

CDN:

```html
<script src="//cdn.jsdelivr.net/npm/brand-name-spell-checker/lib/index.js"></script>
<script>
  const spellChecker = new BrandNameSpellChecker();
</script>
```

## API

### `BrandNameSpellChecker(dictionaries)`

Create a new brand name spell checker.

If no dictionaries passed, `BrandNameSpellChecker.defaultDictionaries` will be used.
Passing an affix document is required, through any of the below mentioned

###### Parameters

- `dictionaries` (`Array<Dictionary>`)
  — List of `dictionary` objects. The first must have an `aff` key,
  other `aff` keys are ignored

###### Returns

New instance of `BrandNameSpellChecker`.

### `BrandNameSpellChecker#suggest(str)`

Suggest brand names close to `str`.

###### Example

```js
spell.suggest("colour"); // => ['color']
spell.suggest("color"); // => []
spell.suggest("html"); // => ['HTML']
spell.suggest("alot"); // => ['allot', 'slot', 'clot', …]
```

###### Parameters

- `str` (`string`) — string to suggest brand names for

###### Returns

`Array<string>` — List with zero or more suggestions.

### `BrandNameSpellChecker#correct(str)`

Check if `str` is correct brand name.

###### Example

```js
spell.correct("vue"); // => true
spell.correct("react"); // => false
spell.correct("angular"); // => false
```

###### Parameters

- `str` (`string`) — string to check for correct spelling

###### Returns

`boolean` — Whether `str` is correct brand name.

### `BrandNameSpellChecker#add(brandName)`

Add `brandName` to known brand names.

###### Example

```js
spell.correct("npm"); // => false
spell.suggest("nnpm"); // => ['ppm', 'bpm', …]

spell.add("npm");

spell.correct("npm"); // => true
spell.suggest("nnpm"); // => ['npm']
```

###### Parameters

- `brandName` (`string`) — brand name to add

###### Returns

`BrandNameSpellChecker` — Operated on instance.

### `BrandNameSpellChecker#remove(word)`

### `NSpell#remove(brandName)`

Remove `brandName` from the known words.

###### Example

```js
spell.correct("color"); // => true

spell.remove("color");

spell.correct("color"); // => false
```

###### Parameters

- `brandName` (`string`) — brand name to remove

###### Returns

`BrandNameSpellChecker` — Operated on instance.

### `BrandNameSpellChecker#dictionary(dic)`

Add an extra dictionary to the BrandNameSpellChecker.

###### Example

```js
spell.dictionary(
  ["5", "npm", "nullish", "rebase", "SHA", "stringification"].join("\n")
);
```

###### Parameters

- `dic` (`Buffer` or `string`)
  — Dictionary document to use; must be in UTF-8 when buffer

###### Returns

`BrandNameSpellChecker` — Operated on instance.

### `BrandNameSpellChecker#personal(dic)`

Add a personal dictionary.

###### Example

```js
spell.personal(["foo", "bar/color", "*baz"].join("\n"));
```

###### Parameters

- `dic` (`Buffer` or `string`)
  — Personal dictionary document to use; must be in UTF-8 when buffer

###### Returns

`BrandNameSpellChecker` — Operated on instance.

### `BrandNameSpellChecker.defaultDictionaries`

[![jsdelivr][jsdelivr-badge]][jsdelivr-link]
[![npm version][fury-badge]][fury-link]

# name-dic

- [x] Front-end related name dictionary
- [ ] Programming language name dictionary
- [ ] GIS related name dictionary
- [ ] Back-end related name dictionary
- [ ] Computer science related name dictionary

## Installation

### npm

```bash
npm install name-dic
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/name-dic/dist/front-end.js"></script>
```

## Usage

ES modules:

```js
import frontEndDic from "name-dic/esm/front-end.js";

console.log(frontEndDic);
```

CommonJS:

```js
const frontEndDic = require("name-dic/dist/front-end.js");

console.log(frontEndDic);
```

CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/name-dic/dist/front-end.js"></script>
<script>
  console.log(nameDic.frontEndDic);
</script>
```

[fury-link]: https://badge.fury.io/js/name-dic
[fury-badge]: https://badge.fury.io/js/name-dic.svg
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/name-dic
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/name-dic/badge

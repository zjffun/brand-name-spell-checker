[![jsdelivr][jsdelivr-badge]][jsdelivr-link]
[![npm version][fury-badge]][fury-link]
[![test CI][test-badge]][test-link]

# brand-name-dic

## Installation

### npm

```bash
npm install brand-name-dic
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/brand-name-dic/index.min.js"></script>
```

## Usage

`Stopwatch2` exposes a class simply call `start`, `pause`, `stop` and etc. methods on it's instance or itself to measure the runtime of code.

ES6 Modules:

```js
import Stopwatch2 from "stopwatch2";

Stopwatch2.start("tag1");
Stopwatch2.pause("tag1");
Stopwatch2.stop("tag1");

// or

const sw = new Stopwatch2("tag2");
sw.start();
sw.pause();
sw.stop();

// show result
console.table(sw);
console.table(Stopwatch2.get());
```

CMD:

```js
const Stopwatch2 = require("stopwatch2");

Stopwatch2.start("tag1");
Stopwatch2.pause("tag1");
Stopwatch2.stop("tag1");

// or

const sw = new Stopwatch2("tag2");
sw.start();
sw.pause();
sw.stop();

// show result
console.table(sw);
console.table(Stopwatch2.get());
```

CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/stopwatch2@latest/index.min.js"></script>
<script>
  Stopwatch2.start("tag1");
  Stopwatch2.pause("tag1");
  Stopwatch2.stop("tag1");

  // or

  const sw = new Stopwatch2("tag2");
  sw.start();
  sw.pause();
  sw.stop();

  // show result
  console.table(sw);
  console.table(Stopwatch2.get());
</script>
```

[fury-link]: https://badge.fury.io/js/brand-name-dic
[fury-badge]: https://badge.fury.io/js/brand-name-dic.svg
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/brand-name-dic
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/brand-name-dic/badge
[test-badge]: https://github.com/zjffun/brand-name-dic/workflows/test%20CI/badge.svg
[test-link]: https://github.com/zjffun/brand-name-dic/actions

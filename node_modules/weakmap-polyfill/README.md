weakmap-polyfill
================

[![NPM Version](https://img.shields.io/npm/v/weakmap-polyfill.svg)](https://www.npmjs.com/package/weakmap-polyfill)
[![Build Status](https://travis-ci.com/polygonplanet/weakmap-polyfill.svg?branch=master)](https://travis-ci.com/polygonplanet/weakmap-polyfill)
[![Bundle Size (minified)](https://img.shields.io/github/size/polygonplanet/weakmap-polyfill/weakmap-polyfill.min.js.svg)](https://github.com/polygonplanet/weakmap-polyfill/blob/master/weakmap-polyfill.min.js)
[![GitHub License](https://img.shields.io/github/license/polygonplanet/weakmap-polyfill.svg)](https://github.com/polygonplanet/weakmap-polyfill/blob/master/LICENSE)

[ECMAScript6 WeakMap](http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects) polyfill.

## Installation

### npm

```bash
$ npm install --save weakmap-polyfill
```

### Usage

Import or require `weakmap-polyfill`, then **WeakMap** will be defined in the global scope if native WeakMap is not supported in running environment.

#### using `import`

```javascript
import 'weakmap-polyfill';
const weakMap = new WeakMap();
```

#### using `require`

```javascript
require('weakmap-polyfill');
var weakMap = new WeakMap();
```

#### browser (standalone)

```html
<script src="weakmap-polyfill.min.js"></script>
<script>
var weakMap = new WeakMap();
</script>
```

## Compatibility

* Chrome 15
* Firefox 3
* IE 7
* Safari 4
* Opera 11.5
* Edge

### Browser Tests

* [Browser Test](http://polygonplanet.github.io/weakmap-polyfill/browser-tests/index.html)
* [Browser Test for Legacy](https://polygonplanet.github.io/weakmap-polyfill/browser-tests/legacy.html)

## Limitations

This polyfill has following few limitations.

* WeakMap `iterable` argument is not supported. ([23.3.1.1 WeakMap ( \[ iterable \] )](https://www.ecma-international.org/ecma-262/6.0/index.html#sec-weakmap-iterable))
* Frozen and sealed objects are not supported.
* The values held by a WeakMap can't be collected once the map itself is GCed, since the values here are tied to the keys. [#4](https://github.com/polygonplanet/weakmap-polyfill/issues/4)

## License

MIT

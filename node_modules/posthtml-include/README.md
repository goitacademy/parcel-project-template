[![Actions Status][action]][action-url]
[![NPM][npm]][npm-url]
[![Coverage][cover]][cover-url]

<div align="center">
  <img width="220" height="150" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
  <h1>Include Plugin</h1>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-include
```

<h2 align="center">Usage</h2>

```js
const { readFileSync } = require('fs')

const posthtml = require('posthtml')
const include = require('posthtml-include')

const html = readFileSync('index.html')

posthtml([ include({ encoding: 'utf8' }) ])
    .process(html)
    .then((result) => console.log(result.html))
```

### Options

__root__: Root folder path for include. Default `./`

__encoding__: Default `utf-8`

__posthtmlExpressionsOptions__: Array to pass options posthtml-expression

### Component options
__locals__: Object containing any local variables that you want to be accessible inside the include component

<h2 align="center">Usage</h2>

__index.html__

```html
<html>
<head>
    <title>index.html</title>
</head>
<body>
    <include src="components/button.html" locals='{
        "text": "Button"
    }'></include>
</body>
</html>
```

__components/button.html__
```html
<button class="button"><div class="button__text">{{ text }}</div></button>
```

```js
const { readFileSync } = require('fs')

const posthtml = require('posthtml')
const include = require('posthtml-include')

const html = readFileSync('index.html')

posthtml([ include({ encoding: 'utf8' }) ])
    .process(html)
    .then((result) => console.log(result.html))
```

```html
<html>
<head>
  <title>index.html</title>
</head>
<body>
  <button class="button">
    <div class="button__text">Button</div>
  </button>
</body>
</html>
```

You can also pass your locals directly on the \<include> content, just drop a JSON there. When doing it, all the "\n" chars will be removed from your data.
If you need "\n" chars on your data, you can still use the "locals" attribute.

```html
<include src="components/button.html">
  {
    "text": "Button"
  }
</include>
```

> **Note:** Also supports multi nesting.

<h2 align="center">LICENSE</h2>

> MIT License (MIT)

> Copyright (c) PostHTML Ivan Voischev

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[action]: https://github.com/posthtml/posthtml-include/workflows/Actions%20Status/badge.svg?style=flat-square
[action-url]: https://github.com/posthtml/posthtml-include/actions?query=workflow%3A%22CI+tests%22

[npm]: https://img.shields.io/npm/v/posthtml-include.svg
[npm-url]: https://npmjs.com/package/posthtml-include

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-include/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-include?branch=master

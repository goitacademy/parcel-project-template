# posthtml-match-helper

> A helper to expand CSS selectors into [PostHTML](https://github.com/posthtml/posthtml) matcher objects

Using the helper function supplied by this module you can turn simple CSS selectors into match objects that [posthtml match](https://github.com/posthtml/posthtml/blob/master/README.md#match) accepts.

Supported features:

* Tags: `"div"` returns `{tag: "div"}`.
* Ids: `"#bar"` returns `{attrs: {id: "bar"}}`.
* Classes: `.foo` returns `{attrs: { class: /(?:^|\s)foo(?:\\s|$)/ }}`. Any number of classnames supported.
* Attribute selectors: Any number of the standard [attribute selectors](https://developer.mozilla.org/en/docs/Web/CSS/Attribute_selectors) can be used<sup><a href="#attribute_selectors_footnote">1</a></sup> including the following non-standard:
   * `[attr!=value]`: Matches if the `attr` attribute value does not contain the `value`.
* Multiple node selectors: `"div, section"` returns `[{tag: "div"}, {tag: "span"}]`.

**<sup><a name="attribute_selectors_footnote">1</a></sup>** Multiple attribute selectors for the same attribute are not supported (this includes mixing classnames and attribute selectors matching `class`).

The basic template for selectors (and order of features) looks like this:

```js
"tag#id.class.name[attr*=value][otherattr^='start']"
```

## Basic usage

```js
var matchHelper = require("posthtml-match-helper");

tree.match(matchHelper("div.class"), function (node) {
	// do stuff with matched node...
});
```

## Advanced usage

```js
var matchHelper = require("posthtml-match-helper");

tree.match(matchHelper("input.my-control[type!='radio'][checked], input[value^='foo'][checked]"), function (node) {
	// do stuff with node that matched either of the selectors...
});
```

## The helper function

#### Arguments

* `matcher` (string) - A CSS selector that describes the node you want to match in PostHTML.

#### Returns

A matcher object - or array of matcher objects.

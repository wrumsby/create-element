# create-element

[![Build Status](https://travis-ci.org/wrumsby/create-element.svg?branch=master)](https://travis-ci.org/wrumsby/create-element)

## Installation

### Bower

```bash
bower install create-element
```

You can use the [resolve-bower-module](https://www.npmjs.com/package/babel-plugin-resolve-bower-module) Babel plugin to resolve modules that are imported with Bower.

## Usage

```js
import createElement from 'create-element';

const frag = document.createDocumentFragment();

frag.appendChild(createElement('div#container')
    .appendChild(createElement('div.grid')));

document.body.appendChild(frag);

console.log(document.body.innerHTML); // <div id="container"><div class="grid"></div></div>
```

## Related Projects

[dom-builder](https://github.com/wrumsby/dom-builder)

# create-element

[![Build Status](https://travis-ci.org/wrumsby/create-element.svg?branch=master)](https://travis-ci.org/wrumsby/create-element)

## Usage

```js
import createElement from 'create-element';

const frag = document.createDocumentFragment();

frag.appendChild(createElement('div#container')
    .appendChild(createElement('div.grid')));

document.body.appendChild(frag);

console.log(document.body.innerHTML); // <div id="container"><div class="grid"></div></div>
```

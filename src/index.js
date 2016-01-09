import doc from 'get-doc';

const RE = /^(\w+)(\#?\w+)?((\.\w+)*)$/;

export default function (selector='') {
  const matches = selector.match(RE);
  const n = matches.length;

  const tagName = n > 1 ? matches[1] : undefined;

  if (tagName === undefined) {
    return;
  }

  // TODO: does id order matter? i.e. must id come before classes?
  const id = n > 2 && matches[2] ? matches[2].substring(1) : undefined;
  const classNames = (n > 3 ? matches[3] || '' : '').split('.');

  const element = doc().createElement(tagName);

  if (id != null) {
    element.id = id;
  }

  element.setAttribute('class', classNames.join(' ').trim());

  return element;
}

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var selector = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  var matches = selector.match(RE);
  var n = matches.length;

  var tagName = n > 1 ? matches[1] : undefined;

  if (tagName === undefined) {
    return;
  }

  // TODO: does id order matter? i.e. must id come before classes?
  var id = n > 2 && matches[2] ? matches[2].substring(1) : undefined;
  var classNames = (n > 3 ? matches[3] || '' : '').split('.');

  var element = (0, _index2.default)().createElement(tagName);

  if (id != null) {
    element.id = id;
  }

  element.setAttribute('class', classNames.join(' ').trim());

  return element;
};

var _index = require('/Users/wrumsby/dev/create-element/bower_components/get-doc/src/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RE = /^(\w+)(\#?\w+)?((\.\w+)*)$/;
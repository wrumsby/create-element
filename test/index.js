import createElement from '../src/index';
import { assert } from 'chai';

describe('createElement', function () {
  it('should create an element with the given tagName', function () {
    const selector = 'div';
    const actual = createElement(selector).tagName;
    const expected = selector.toUpperCase();

    assert.strictEqual(actual, expected);
  });

  it('should create an element with the given tagName and id', function () {
    const selector = 'span#foo';
    const actual = createElement(selector);
    const expected = {
      tagName: 'SPAN',
      id: 'foo'
    };

    assert.propertyVal(actual, 'tagName', expected.tagName);
    assert.propertyVal(actual, 'id', expected.id);
  });

  it('should create an element with the given tagName and class', function () {
    const selector = 'h1.heading';
    const actual = createElement(selector);
    const expected = {
      tagName: 'H1',
      className: 'heading'
    };

    assert.propertyVal(actual, 'tagName', expected.tagName);
    assert.propertyVal(actual, 'className', expected.className);
  });

  it('should create an element with the given tagName and classes', function () {
    const selector = 'div.c1.c2';
    const actual = createElement(selector);
    const expected = {
      tagName: 'DIV',
      className: 'c1 c2'
    };

    assert.propertyVal(actual, 'tagName', expected.tagName);
    assert.propertyVal(actual, 'className', expected.className);
  });

  it('should create an element with the given tagName, id and classes', function () {
    const selector = 'div#i0.c1.c2';
    const actual = createElement(selector);
    const expected = {
      tagName: 'DIV',
      id: 'i0',
      className: 'c1 c2'
    };

    assert.propertyVal(actual, 'tagName', expected.tagName);
    assert.propertyVal(actual, 'id', expected.id);
    assert.propertyVal(actual, 'className', expected.className);
  });
});

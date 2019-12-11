'use strict';

let getIndex = require('./get-index');

let test = require('tape');

test('one match', t => {
    let list = [2, 5, 8, 4, 6, 3, 9];
    let value = 4;

    let actual = getIndex(list, value);
    let expected = 3;

    t.equal(actual, expected);
    t.end();
});

test('zero match', t => {
    let list = [2, 5, 8, 4, 6, 3, 9];
    let value = 7;

    let actual = getIndex(list, value);
    let expected = -1;

    t.equal(actual, expected);
    t.end();
});

test('multiple matches', function (t) {
    let list = [2, 5, 8, 4, 6, 3, 9, 6];
    let value = 6;

    let actual = getIndex(list, value);
    let expected = [4, 7];

    t.deepEqual(actual, expected);
    t.end();
});
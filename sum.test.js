// const { default: expect } = require('expect');
// const { test } = require('picomatch');
const sum = require('./sum');

test('adds 1 + 2',()=>{

    expect(sum(1,2)).toBe(3);
})
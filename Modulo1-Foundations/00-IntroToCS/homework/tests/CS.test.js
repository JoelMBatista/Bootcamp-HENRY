/* eslint-disable no-undef */
const {
  binarioAdecimal,
  decimalAbinario,
} = require('../homework.js');

describe('binarioAdecimal(num)', function() {
  it('should return 2', function() {
    expect(binarioAdecimal('10')).toBe(2);
  });
  it('should return 7', function() {
    expect(binarioAdecimal('111')).toBe(7);
  });
});

describe('decimalAbinario(num)', function() {
  it('should return "100"', function() {
    expect(decimalAbinario(4)).toBe('100');
  });
  it('should return "111"', function() {
    expect(decimalAbinario(7)).toBe('111');
  });
});

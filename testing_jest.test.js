import {describe, expect, it, test} from 'vitest';
import {sum, pow} from './testing_jest.js';

test('adds 1 + 2 to eeuqal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('pow', () => {
  it("2 raised to power 3 is 8", () => {
    expect(pow(2, 3)).toBe(8);
  });

  it("3 raised to power 4 is 81", () => {
    expect(pow(3, 4)).toBe(81);
  });
});
  

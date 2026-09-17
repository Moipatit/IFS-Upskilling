import { describe, test, expect } from 'vitest';
import multiply from './multiply';

describe('multiply function', () => {
  test('correctly multiplies three numbers: 2 x 3 x 4 = 24', () => {
    expect(multiply(2, 3, 4)).toBe(24);
  });

  test('returns NaN when invalid input is passed', () => {
    expect(multiply(2, 3, 'three')).toBeNaN();
  });
});

import { describe, expect, test } from 'vitest';
import MethodValidateCase from './validate.js';

describe('Methods Decorators - The Validate case', () => {
  test('Value lower than zero throw error', () => {
    const newExample = new MethodValidateCase();

    expect(() => newExample.add(-5)).toThrowError(/Negative/);
  });

  test('Add any value more than 0 works', () => {
    const newExample = new MethodValidateCase();
    newExample.add(5);

    expect(newExample.getSum()).toEqual(5);
  });
});

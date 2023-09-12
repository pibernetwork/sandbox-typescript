import { describe, expect, test } from 'vitest';
import Calculator from './method.js';

describe('Decorators +5.2 -> Method', () => {
  test('Round a default parameter', () => {
    const calculator = new Calculator();

    expect(calculator.add(2, 3)).toEqual(5);
  });
});

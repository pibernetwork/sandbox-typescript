import { describe, expect, test } from 'vitest';
import Calculator from './method.js';

describe('Method Decorator', () => {
  test('Run', () => {
    const calculator = new Calculator();

    expect(calculator.add(2, 3)).toEqual(5);
  });
});

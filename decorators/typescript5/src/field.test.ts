import { describe, expect, test } from 'vitest';
import MyClass from './field.js';

describe('Decorators +5.2 -> Field', () => {
  test('Round a default parameter', () => {
    expect(new MyClass().x).toEqual(1);
  });
});

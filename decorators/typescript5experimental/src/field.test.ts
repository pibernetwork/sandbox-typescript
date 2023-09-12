import { describe, expect, test } from 'vitest';
import MyClass from './field.js';

describe('Field decorator', () => {
  test('Run', () => {
    expect(new MyClass().x).toEqual(1);
  });
});

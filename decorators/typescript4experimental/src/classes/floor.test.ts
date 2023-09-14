import { describe, expect, test } from 'vitest';
import { ClassFloorCase } from './floor.js';

describe('Class Decorators - The Uppercase case', () => {
  test('It will return uppercase', () => {
    const newExample = new ClassFloorCase('My name', 'my city', 24.59, 185.512);

    expect(newExample.getRatio()).toEqual(24);
    expect(newExample.getAmount()).toEqual(185);
  });
});

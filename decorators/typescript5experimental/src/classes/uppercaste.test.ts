import { describe, expect, test } from 'vitest';
import { ClassUppercaseCase } from './uppercase.js';

describe('Class Decorators - The Uppercase case', () => {
  test('It will return uppercase', () => {
    const newExample = new ClassUppercaseCase('My name', 'my city');

    expect(newExample.displayInfo()).toEqual('Name: MY NAME, City: MY CITY');
  });
});

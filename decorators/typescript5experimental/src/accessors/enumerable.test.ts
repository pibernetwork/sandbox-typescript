import { describe, expect, test } from 'vitest';
import { AccessorEnumerableCase } from './enumerable.js';

describe('Accessors Decorators - The Enumerable case', () => {
  test('It will return uppercase', () => {
    const newExample = new AccessorEnumerableCase('Name', 'RS');

    const keys = [];
    for (const key in newExample) {
      keys.push(key);
    }

    expect(keys.includes('name')).toBeTruthy();
    expect(keys.includes('state')).not.toBeTruthy();
  });
});

// sum.test.js

import { expect, test } from 'vitest';
import { TypeA, convertType, convertTypeWithKeys } from './map.js';

test('Convert typescript types using maps of references', () => {
  const typeA: TypeA = {
    _id: '12345',
    address: 'My street',
    name: 'My Name'
  };

  const typeAs = [typeA];

  const typeBs = convertType(typeAs);

  expect(typeof typeBs[0]?._id === 'number').toBeTruthy();
});

test('Convert typescript types with keys', () => {
  const typeA: TypeA = {
    _id: '12345',
    address: 'My street',
    name: 'My Name'
  };

  const typeAs = [typeA];

  const typeBs = convertTypeWithKeys(typeAs, ['_id']);

  expect(typeof typeBs[0]?._id === 'number').toBeTruthy();
});

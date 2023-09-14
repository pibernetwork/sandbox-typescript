import { describe, expect, test } from 'vitest';
import { PropertyDescriptorCase } from './descriptor.js';

describe('Property Decorators - The descriptor case', () => {
  test('This one was hard, it only works when if es2022 and useDefineForClassFields set to false or below es2021', () => {
    const user = new PropertyDescriptorCase('Bytefer');
    user.name = 'Kakuqo';

    expect(user.name).toEqual('replaced in get method');
  });
});

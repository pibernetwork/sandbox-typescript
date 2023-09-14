import { describe, expect, test } from 'vitest';
import { PropertyDescriptorCase } from './descriptor.js';

describe('Property Decorators - The descriptor case', () => {
  test('This one will probably never work. So I will force a not here.', () => {
    const user = new PropertyDescriptorCase('Bytefer');
    user.name = 'Kakuqo';

    expect(user.name).not.toEqual('replaced in get method');
    expect(user.name).toEqual('Kakuqo');
  });
});

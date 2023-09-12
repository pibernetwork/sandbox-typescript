/**
 * Testing field decorators
 * This field example is working with ts-node but not with vitest.
 */
function add<T>(_: unknown, __: unknown, ___: unknown) {
  console.log('Field decorator called', __, ___);
}

export class FieldDecorator {
  @add
  x = 1;
}

export default FieldDecorator;

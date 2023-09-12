/**
 * Testing field decorators
 * This field example is working with ts-node but not with vitest.
 */
function add<T>(_: unknown, __: unknown) {
  return function (this: T, value: number) {
    console.log('addOne: ', value); // 3
    return value + 5;
  };
}

export class MyClass {
  @add
  x = 1;
}

export default MyClass;

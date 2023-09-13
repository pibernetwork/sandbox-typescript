/* eslint-disable @typescript-eslint/no-explicit-any */
function loggedMethod(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  function replacementMethod(this: any, ...args: any[]) {
    console.log('LOG: Entering method.'); // extracted
    const result = originalMethod.call(this, ...args);
    console.log('LOG: Exiting method.'); // extracted
    return result;
  }

  descriptor.value = replacementMethod;
  return descriptor;
}
/* eslint-enabled @typescript-eslint/no-explicit-any */

export class MethodLoggerCase {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

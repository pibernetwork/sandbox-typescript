/* eslint-disable @typescript-eslint/no-explicit-any */
function validate(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    if (args.some((arg) => arg < 0)) {
      throw new Error('Negative number not allowed');
    }

    originalMethod.apply(this, args);
  };
  return descriptor;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

class MethodValidateCase {
  public _sum: number = 0;

  @validate
  add(value: number) {
    this._sum += value;
  }

  getSum() {
    return this._sum;
  }

  get sum() {
    return this._sum;
  }
}

export default MethodValidateCase;

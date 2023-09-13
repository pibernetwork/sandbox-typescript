/* eslint-disable @typescript-eslint/no-explicit-any */
function floorConstructor<T extends new (...args: any[]) => any>(target: T): T {
  const originalConstructor = target;

  function modifiedConstructor(...args: any[]) {
    const instance = new originalConstructor(...args);

    Object.keys(instance).forEach((key) => {
      if (typeof instance[key] === 'number') {
        instance[key] = Math.floor(instance[key]);
      }
    });

    return instance;
  }

  modifiedConstructor.prototype = originalConstructor.prototype;

  return modifiedConstructor as unknown as T;
  // This type assertion bypasses TypeScript's allows us to assume that the returned value will match type T,
  // even if there is no direct type relationship.
}
/* eslint-enable @typescript-eslint/no-explicit-any */

@floorConstructor
export class ClassFloorCase {
  constructor(
    private name: string,
    private city: string,
    private ratio: number,
    private amount: number
  ) {}

  displayInfo() {
    return `Name: ${this.name}, City: ${this.city}`;
  }

  getRatio() {
    return this.ratio;
  }

  getAmount() {
    return this.amount;
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function uppercaseConstructor<T extends new (...args: any[]) => any>(
  target: T
): T {
  const originalConstructor = target;

  function modifiedConstructor(...args: any[]) {
    const instance = new originalConstructor(...args);

    Object.keys(instance).forEach((key) => {
      if (typeof instance[key] === 'string') {
        instance[key] = instance[key].toUpperCase();
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

@uppercaseConstructor
export class ExampleClass {
  constructor(
    private name: string,
    private city: string
  ) {}

  displayInfo() {
    return `Name: ${this.name}, City: ${this.city}`;
  }
}

const example = new ExampleClass('John Doe', 'New York');
console.log(example.displayInfo());

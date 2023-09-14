function logProperty(target: any, key: string) {
  let value = target[key];

  const getter = function () {
    console.log(`Getter for ${key} returned ${value}`);
    return value;
  };

  const setter = function (newVal: any) {
    console.log(`Set ${key} to ${newVal}`);
    value = newVal;
  };

  // Replace the property
  if (delete target[key]) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}

class User {
  @logProperty
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User('Bytefer');
user.name = 'Kakuqo';
console.log(user.name);

function logProperty(target: any, key: string) {
  let value = target[key];

  const getter = function () {
    value = 'replaced in get method';
    return value;
  };

  const setter = function (newVal: any) {
    value = newVal;
  };

  // Replace the property
  if (delete target[key]) {
    Reflect.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}

export class PropertyDescriptorCase {
  @logProperty
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

function Enumerable(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  //make the method enumerable
  descriptor.enumerable = true;
}

export class AccessorEnumerableCase {
  _name: string;
  _state: string;

  constructor(name: string, state: string) {
    this._name = name;
    this._state = state;
  }

  @Enumerable
  get name() {
    return this._name;
  }

  get state() {
    return this._state;
  }
}

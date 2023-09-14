function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
/* eslint-disable @typescript-eslint/no-explicit-any */
function observable(target: any, key: string): any {
  // prop -> onPropChange
  const targetKey = 'on' + capitalizeFirstLetter(key) + 'Change';

  target[targetKey] = function (fn: (prev: any, next: any) => void) {
    let prev = this[key];
    Reflect.defineProperty(this, key, {
      set(next) {
        fn(prev, next);
        prev = next;
      }
    });
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export class PropertyObservableCase {
  @observable
  foo = -1;

  @observable
  bar = 'bar';
}

import { beforeEach, describe, expect, test } from 'vitest';
import { mock, mockReset } from 'vitest-mock-extended';
import { PropertyObservableCase } from './observable.js';

describe('Property Decorators - The observable case', () => {
  global.console = mock<typeof global.console>({});
  beforeEach(() => {
    mockReset(global.console);
  });

  test('Happy path', () => {
    const propertyObservable = new PropertyObservableCase();

    /** @ts-expect-error Field do not exists */
    propertyObservable.onFooChange((prev, next) =>
      global.console.log(`prev: ${prev}, next: ${next}`)
    );
    /** @ts-expect-error Field do not exists */
    propertyObservable.onBarChange((prev, next) =>
      global.console.log(`prev: ${prev}, next: ${next}`)
    );

    propertyObservable.foo = 100; // -> prev: -1, next: 100
    propertyObservable.foo = -3.14; // -> prev: 100, next: -3.14
    propertyObservable.bar = 'baz'; // -> prev: bar, next: baz
    propertyObservable.bar = 'sing'; // -> prev: baz, next: sing
    propertyObservable.bar = 'lets see';

    expect(global.console.log).toHaveBeenCalledTimes(5);
    expect(global.console.log).toHaveBeenCalledWith('prev: -1, next: 100');
    expect(global.console.log).toHaveBeenCalledWith('prev: 100, next: -3.14');
    expect(global.console.log).toHaveBeenCalledWith('prev: bar, next: baz');
    expect(global.console.log).toHaveBeenCalledWith('prev: baz, next: sing');
    expect(global.console.log).toHaveBeenCalledWith(
      'prev: sing, next: lets see'
    );

    expect(global.console.log).not.toHaveBeenCalledWith('error');
  });
});

import { describe, expect, test } from 'vitest';
import { ClassDecorator } from './class.js';

class MyChildClass extends ClassDecorator {}

describe('Class decorator - Effective', () => {
  test('Run', () => {
    const classDecorator = new MyChildClass('t');

    expect(classDecorator).toBeDefined();
    expect(
      /** @ts-expect-error Missing prototype */
      () => (classDecorator.prototype.myEmail = function () {})
    ).toThrowError();
  });
});

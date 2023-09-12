import { describe, expect, test } from 'vitest';
import ClassDecorator from './class.js';

describe('Class decorator', () => {
  test('Run', () => {
    const classDecorator = new ClassDecorator('t');

    expect(classDecorator).toBeDefined();
  });
});

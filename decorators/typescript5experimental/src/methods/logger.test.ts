import { beforeEach, describe, expect, test } from 'vitest';
import { mock, mockReset } from 'vitest-mock-extended';
import { MethodLoggerCase } from './logger.js';

describe('Methods Decorators - The logger case', () => {
  global.console = mock<typeof global.console>({});
  beforeEach(() => {
    mockReset(global.console);
  });

  test('Happy path', () => {
    const newExample = new MethodLoggerCase('My Name');

    newExample.greet();

    expect(global.console.log).toHaveBeenCalledTimes(3);
    expect(global.console.log).toBeCalledWith('LOG: Entering method.');
    expect(global.console.log).toBeCalledWith('Hello, my name is My Name.');
    expect(global.console.log).toBeCalledWith('LOG: Exiting method.');
  });
});

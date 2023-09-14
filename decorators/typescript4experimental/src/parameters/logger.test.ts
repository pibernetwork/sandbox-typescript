import { beforeEach, describe, expect, test } from 'vitest';
import { mock, mockReset } from 'vitest-mock-extended';

describe('Parameters Decorators - The Logger case', () => {
  global.console = mock<typeof global.console>({});
  beforeEach(() => {
    mockReset(global.console);
  });

  test('Happy path', async () => {
    // The parameters decorators run exactly when the class is imported.
    const ParametersLoggerCase = (await import('./logger.js'))
      .ParametersLoggerCase;

    const newExample = new ParametersLoggerCase();

    newExample.exampleMethod('My param 1', 50);

    expect(global.console.log).toHaveBeenCalledTimes(3);
    expect(global.console.log).toBeCalledWith(
      'Inside exampleMethod - My param 1 - 50'
    );

    expect(global.console.log).toBeCalledWith(
      'Parameter 2 of exampleMethod has been accessed.'
    );

    expect(global.console.log).toBeCalledWith(
      'Parameter 1 of exampleMethod has been accessed.'
    );
  });
});

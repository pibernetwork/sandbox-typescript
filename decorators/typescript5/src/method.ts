function log<This, Args extends number[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const methodName = String(context.name);

  function replacementMethod(this: This, ...args: Args): number {
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = target.call(this, ...args) as number;
    console.log(`LOG: Exiting method '${methodName}'.`);

    return result + 5;
  }

  return replacementMethod;
}

export default class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

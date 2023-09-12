function log(_: unknown, __: unknown, ___: unknown) {
  console.log('Method decorator called');
}

export default class MethodDecorator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

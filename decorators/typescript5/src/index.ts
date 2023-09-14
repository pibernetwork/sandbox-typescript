interface Context {
  name: string;
  metadata: Record<string, unknown>;
}

/** @ts-expect-error metadata not found */
Symbol.metadata ??= Symbol('Symbol.metadata');

function setMetadata(_target: any, context: Context) {
  context.metadata[context.name] = true;
}

class SomeClass {
  @setMetadata
  foo = 123;

  @setMetadata
  accessor bar = 'hello!';

  @setMetadata
  baz() {}
}

const ourMetadata = SomeClass[Symbol.metadata];

console.log(JSON.stringify(ourMetadata));
// { "bar": true, "baz": true, "foo": true }

const user = {};

Object.defineProperty(user, 'name', {
  value: 'John',
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});

try {
  /** @ts-expect-error Field not declared on type */
  user.name = 'Pete';
} catch (e) {
  console.error(e.message);
}

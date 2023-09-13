const user = {
  name: 'John',
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, 'toString', {
  enumerable: false
});

// Now our toString disappears:
for (const key in user) console.log(key); // name

const user = {
  name: 'John',
  state: 'RS'
};

Object.defineProperty(user, 'name', {
  writable: false
});

Object.defineProperty(user, 'state', {
  writable: true
});

user.state = 'RS';

try {
  user.name = 'Pete';
} catch (e) {
  console.error(e.message);
}

console.log(user);

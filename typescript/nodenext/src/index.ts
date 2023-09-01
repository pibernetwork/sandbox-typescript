import External from './imported.js';

interface App {
  name: string;
}
// test
const app: App = {
  name: 'NodeNext'
};

console.log(app, External);

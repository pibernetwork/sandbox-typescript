import External from './imported.js';

interface App {
  name: string;
}
// test
const app: App = {
  name: 'Node16'
};

console.log(app, External);

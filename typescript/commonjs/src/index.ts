import ExternalApp from './imported';

interface App {
  name: string;
}
// test
const app: App = {
  name: 'Node16'
};

console.log(app, ExternalApp);

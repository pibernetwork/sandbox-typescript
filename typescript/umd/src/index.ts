import ExternalApp from './imported';

interface App {
  name: string;
}
// test
const app: App = {
  name: 'UMD'
};

console.log(ExternalApp, app);

exports.myApp = [app, ExternalApp];

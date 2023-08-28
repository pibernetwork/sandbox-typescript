const getESModulePackageCommonJsFileDirName = require('./index.cjs');

async function getESModule() {
  return (await import('./index.js')).default;
}

module.exports = {
  getESModulePackageCommonJsFileDirName,
  getESModulePackageESModuleFileDirName: getESModule
};

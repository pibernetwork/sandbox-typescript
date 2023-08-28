const getCommonJsPackageCommonJsFileDirName = require('./index');

async function getESModule() {
  return (await import('./index.mjs')).default;
}

module.exports = {
  getCommonJsPackageCommonJsFileDirName,
  getCommonJsPackageESModuleFileDirName: getESModule
};

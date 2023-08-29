/**
 * CommonJS does not have top-level `await`, so we can wrap
 * everything in an `async` IIFE to make our lives a little easier.
 */
(async function () {
  const {
    getCommonJsPackageCommonJsFileDirName,
    getCommonJsPackageESModuleFileDirName
  } = require('commonjs-1');

  const {
    getESModulePackageCommonJsFileDirName,
    getESModulePackageESModuleFileDirName
  } = require('esmodule-1');

  console.log(getCommonJsPackageCommonJsFileDirName());
  getCommonJsPackageESModuleFileDirName().then((method) => {
    console.log(method());
  });

  console.log(getESModulePackageCommonJsFileDirName());
  getESModulePackageESModuleFileDirName().then((method) => {
    console.log(method());
  });
})();

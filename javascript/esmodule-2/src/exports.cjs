/**
 * CommonJS does not have top-level `await`, so we can wrap
 * everything in an `async` IIFE to make our lives a little easier.
 */

const {
  getCommonJsPackageCommonJsFileDirName,
  getCommonJsPackageESModuleFileDirName
} = require('commonjs-1');

const {
  getESModulePackageCommonJsFileDirName,
  getESModulePackageESModuleFileDirName
} = require('esmodule-1');

module.exports = {
  getCommonJsPackageCommonJsFileDirName,
  getCommonJsPackageESModuleFileDirName,
  getESModulePackageCommonJsFileDirName,
  getESModulePackageESModuleFileDirName
};

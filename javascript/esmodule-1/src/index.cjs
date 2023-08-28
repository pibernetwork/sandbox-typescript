const path = require("path");

module.exports = function getESModulePackageCommonJsFileDirName() {
  return path.resolve(__dirname);
};

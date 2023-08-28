const path = require('path');

module.exports = function getCommonJsPackageCommonJsFileDirName() {
  return path.resolve(__dirname);
};

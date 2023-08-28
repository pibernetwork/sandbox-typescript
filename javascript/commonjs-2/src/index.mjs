import {
  getCommonJsPackagESModuleFileDirName,
  getCommonJsPackageCommonJsFileDirName
} from 'commonjs-1/src/export.mjs';

import {
  getESModulePackagESModuleFileDirName,
  getESModulePackageCommonJsFileDirName
} from 'esmodule-1/src/export.mjs';

console.log(getCommonJsPackagESModuleFileDirName());
console.log(getESModulePackagESModuleFileDirName());
console.log(getCommonJsPackageCommonJsFileDirName());
console.log(getESModulePackageCommonJsFileDirName());

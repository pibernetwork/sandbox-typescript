import {
  getCommonJsPackagESModuleFileDirName,
  getCommonJsPackageCommonJsFileDirName
} from 'commonjs-1';

import {
  getESModulePackagESModuleFileDirName,
  getESModulePackageCommonJsFileDirName
} from 'esmodule-1';

console.log(getCommonJsPackagESModuleFileDirName());
console.log(getESModulePackagESModuleFileDirName());
console.log(getCommonJsPackageCommonJsFileDirName());
console.log(getESModulePackageCommonJsFileDirName());

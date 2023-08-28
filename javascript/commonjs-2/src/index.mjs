import getDirCommonJS1 from "commonjs-1/src/index.js";
import getESModuleDirName1 from "commonjs-1/src/index.mjs";
import getDirCommonJS2 from "esmodule-1/src/index.cjs";
import getESModuleDirName2 from "esmodule-1/src/index.js";

console.log(getESModuleDirName1());
console.log(getESModuleDirName2());
console.log(getDirCommonJS1());
console.log(getDirCommonJS2());

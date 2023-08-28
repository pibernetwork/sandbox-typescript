/**
 * CommonJS does not have top-level `await`, so we can wrap
 * everything in an `async` IIFE to make our lives a little easier.
 */
(async function () {
  const getDirCommonJS1 = require("commonjs-1/src/index.js");
  const getDirCommonJS2 = require("esmodule-1/src/index.cjs");

  const getESModuleDirName1 = (await import("commonjs-1/src/index.mjs"))
    .default;

  const getESModuleDirName2 = (await import("esmodule-1/src/index.js")).default;

  console.log(getDirCommonJS1());
  console.log(getDirCommonJS2());
  console.log(getESModuleDirName1());
  console.log(getESModuleDirName2());
})();

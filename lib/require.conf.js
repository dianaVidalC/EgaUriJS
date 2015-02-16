var amdSupport = typeof define === "function" && define.amd,
  exportsSupport = typeof exports !== "undefined";
if (!amdSupport && !exportsSupport && window) {
  window.exports = window;
}
requirejs.config({
  baseUrl: "/base/src/build/modules"
});
"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}require("ref");var ffi=_interopDefault(require("ffi"));function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,r){return e(r={exports:{}},r.exports),r.exports}var fn=createCommonjsModule(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.user=function(e){return{name:e}}});unwrapExports(fn);var fn_1=fn.user,myLib=ffi.Library("./native/target/release/libnative.dylib",{bigger_than:["bool",["int32","int32"]]});console.log(myLib.bigger_than(1,2)),console.log((0,fn.user)("masters"));var main={};module.exports=main;
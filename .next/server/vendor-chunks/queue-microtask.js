/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/queue-microtask";
exports.ids = ["vendor-chunks/queue-microtask"];
exports.modules = {

/***/ "(rsc)/./node_modules/queue-microtask/index.js":
/*!***********************************************!*\
  !*** ./node_modules/queue-microtask/index.js ***!
  \***********************************************/
/***/ ((module) => {

eval("/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ let promise;\nmodule.exports = typeof queueMicrotask === \"function\" ? queueMicrotask.bind( false ? 0 : global) : (cb)=>(promise || (promise = Promise.resolve())).then(cb).catch((err)=>setTimeout(()=>{\n            throw err;\n        }, 0));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcXVldWUtbWljcm90YXNrL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLHNGQUFzRixHQUN0RixJQUFJQTtBQUVKQyxPQUFPQyxPQUFPLEdBQUcsT0FBT0MsbUJBQW1CLGFBQ3ZDQSxlQUFlQyxJQUFJLENBQUMsTUFBa0IsR0FBY0MsQ0FBTUEsR0FBR0MsVUFFN0RDLENBQUFBLEtBQU0sQ0FBQ1AsV0FBWUEsQ0FBQUEsVUFBVVEsUUFBUUMsT0FBTyxFQUFDLENBQUMsRUFDN0NDLElBQUksQ0FBQ0gsSUFDTEksS0FBSyxDQUFDQyxDQUFBQSxNQUFPQyxXQUFXO1lBQVEsTUFBTUQ7UUFBSSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmR1aS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9xdWV1ZS1taWNyb3Rhc2svaW5kZXguanM/OWMzOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgcXVldWUtbWljcm90YXNrLiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5sZXQgcHJvbWlzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBxdWV1ZU1pY3JvdGFzayA9PT0gJ2Z1bmN0aW9uJ1xuICA/IHF1ZXVlTWljcm90YXNrLmJpbmQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpXG4gIC8vIHJldXNlIHJlc29sdmVkIHByb21pc2UsIGFuZCBhbGxvY2F0ZSBpdCBsYXppbHlcbiAgOiBjYiA9PiAocHJvbWlzZSB8fCAocHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpKSlcbiAgICAudGhlbihjYilcbiAgICAuY2F0Y2goZXJyID0+IHNldFRpbWVvdXQoKCkgPT4geyB0aHJvdyBlcnIgfSwgMCkpXG4iXSwibmFtZXMiOlsicHJvbWlzZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJxdWV1ZU1pY3JvdGFzayIsImJpbmQiLCJ3aW5kb3ciLCJnbG9iYWwiLCJjYiIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImNhdGNoIiwiZXJyIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/queue-microtask/index.js\n");

/***/ })

};
;
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-extglob";
exports.ids = ["vendor-chunks/is-extglob"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-extglob/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-extglob/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("/*!\n * is-extglob <https://github.com/jonschlinkert/is-extglob>\n *\n * Copyright (c) 2014-2016, Jon Schlinkert.\n * Licensed under the MIT License.\n */ module.exports = function isExtglob(str) {\n    if (typeof str !== \"string\" || str === \"\") {\n        return false;\n    }\n    var match;\n    while(match = /(\\\\).|([@?!+*]\\(.*\\))/g.exec(str)){\n        if (match[2]) return true;\n        str = str.slice(match.index + match[0].length);\n    }\n    return false;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXktZHQvLi9ub2RlX21vZHVsZXMvaXMtZXh0Z2xvYi9pbmRleC5qcz8wZmJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogaXMtZXh0Z2xvYiA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtZXh0Z2xvYj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNiwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0V4dGdsb2Ioc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBzdHIgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG1hdGNoO1xuICB3aGlsZSAoKG1hdGNoID0gLyhcXFxcKS58KFtAPyErKl1cXCguKlxcKSkvZy5leGVjKHN0cikpKSB7XG4gICAgaWYgKG1hdGNoWzJdKSByZXR1cm4gdHJ1ZTtcbiAgICBzdHIgPSBzdHIuc2xpY2UobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXNFeHRnbG9iIiwic3RyIiwibWF0Y2giLCJleGVjIiwic2xpY2UiLCJpbmRleCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0MsR0FFREEsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLFVBQVVDLEdBQUc7SUFDckMsSUFBSSxPQUFPQSxRQUFRLFlBQVlBLFFBQVEsSUFBSTtRQUN6QyxPQUFPO0lBQ1Q7SUFFQSxJQUFJQztJQUNKLE1BQVFBLFFBQVEseUJBQXlCQyxJQUFJLENBQUNGLEtBQU87UUFDbkQsSUFBSUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxPQUFPO1FBQ3JCRCxNQUFNQSxJQUFJRyxLQUFLLENBQUNGLE1BQU1HLEtBQUssR0FBR0gsS0FBSyxDQUFDLEVBQUUsQ0FBQ0ksTUFBTTtJQUMvQztJQUVBLE9BQU87QUFDVCIsImZpbGUiOiIocnNjKS8uL25vZGVfbW9kdWxlcy9pcy1leHRnbG9iL2luZGV4LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-extglob/index.js\n");

/***/ })

};
;
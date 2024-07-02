"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/reusify";
exports.ids = ["vendor-chunks/reusify"];
exports.modules = {

/***/ "(rsc)/./node_modules/reusify/reusify.js":
/*!*****************************************!*\
  !*** ./node_modules/reusify/reusify.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nfunction reusify(Constructor) {\n    var head = new Constructor();\n    var tail = head;\n    function get() {\n        var current = head;\n        if (current.next) {\n            head = current.next;\n        } else {\n            head = new Constructor();\n            tail = head;\n        }\n        current.next = null;\n        return current;\n    }\n    function release(obj) {\n        tail.next = obj;\n        tail = obj;\n    }\n    return {\n        get: get,\n        release: release\n    };\n}\nmodule.exports = reusify;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmV1c2lmeS9yZXVzaWZ5LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsU0FBU0EsUUFBU0MsV0FBVztJQUMzQixJQUFJQyxPQUFPLElBQUlEO0lBQ2YsSUFBSUUsT0FBT0Q7SUFFWCxTQUFTRTtRQUNQLElBQUlDLFVBQVVIO1FBRWQsSUFBSUcsUUFBUUMsSUFBSSxFQUFFO1lBQ2hCSixPQUFPRyxRQUFRQyxJQUFJO1FBQ3JCLE9BQU87WUFDTEosT0FBTyxJQUFJRDtZQUNYRSxPQUFPRDtRQUNUO1FBRUFHLFFBQVFDLElBQUksR0FBRztRQUVmLE9BQU9EO0lBQ1Q7SUFFQSxTQUFTRSxRQUFTQyxHQUFHO1FBQ25CTCxLQUFLRyxJQUFJLEdBQUdFO1FBQ1pMLE9BQU9LO0lBQ1Q7SUFFQSxPQUFPO1FBQ0xKLEtBQUtBO1FBQ0xHLFNBQVNBO0lBQ1g7QUFDRjtBQUVBRSxPQUFPQyxPQUFPLEdBQUdWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmR1aS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9yZXVzaWZ5L3JldXNpZnkuanM/YjJlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gcmV1c2lmeSAoQ29uc3RydWN0b3IpIHtcbiAgdmFyIGhlYWQgPSBuZXcgQ29uc3RydWN0b3IoKVxuICB2YXIgdGFpbCA9IGhlYWRcblxuICBmdW5jdGlvbiBnZXQgKCkge1xuICAgIHZhciBjdXJyZW50ID0gaGVhZFxuXG4gICAgaWYgKGN1cnJlbnQubmV4dCkge1xuICAgICAgaGVhZCA9IGN1cnJlbnQubmV4dFxuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkID0gbmV3IENvbnN0cnVjdG9yKClcbiAgICAgIHRhaWwgPSBoZWFkXG4gICAgfVxuXG4gICAgY3VycmVudC5uZXh0ID0gbnVsbFxuXG4gICAgcmV0dXJuIGN1cnJlbnRcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbGVhc2UgKG9iaikge1xuICAgIHRhaWwubmV4dCA9IG9ialxuICAgIHRhaWwgPSBvYmpcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0OiBnZXQsXG4gICAgcmVsZWFzZTogcmVsZWFzZVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmV1c2lmeVxuIl0sIm5hbWVzIjpbInJldXNpZnkiLCJDb25zdHJ1Y3RvciIsImhlYWQiLCJ0YWlsIiwiZ2V0IiwiY3VycmVudCIsIm5leHQiLCJyZWxlYXNlIiwib2JqIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/reusify/reusify.js\n");

/***/ })

};
;
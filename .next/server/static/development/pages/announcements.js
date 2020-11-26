module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/utility.js":
/*!************************!*\
  !*** ./lib/utility.js ***!
  \************************/
/*! exports provided: createUUID, fetchAPI, mail_send */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUUID", function() { return createUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAPI", function() { return fetchAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mail_send", function() { return mail_send; });
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_0__);


function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
async function fetchAPI(id) {
  try {
    const response = await fetch('https://community-app-strapi-backend.herokuapp.com' + id, {
      method: 'GET',
      credentials: 'same-origin'
    });
    const exam = await response.json();
    return exam;
  } catch (error) {
    console.error(error);
  }
}
function mail_send(senderAddress, Message, Name, Phone) {
  Object(emailjs_com__WEBPACK_IMPORTED_MODULE_0__["init"])("user_e8bFH0mEDjcCO88W01cua");
  var templateParams = {
    from_name: Name,
    to_name: "Quantumniac Community Creator",
    phone: Phone,
    message: Message,
    reply_to: senderAddress
  };
  emailjs_com__WEBPACK_IMPORTED_MODULE_0___default.a.send('service_b3payk2', 'template_3zbohqj', templateParams).then(function (response) {
    console.log('SUCCESS!', response.status, response.text);
  }, function (err) {
    console.log('FAILED...', err);
  });
}

/***/ }),

/***/ "./pages/announcements.js":
/*!********************************!*\
  !*** ./pages/announcements.js ***!
  \********************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utility */ "./lib/utility.js");
var _jsxFileName = "/home/ajay/Desktop/webdev/community-app/frontend/pages/announcements.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  allEventData
}) => {
  const table_data = __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 22
    }
  }, allEventData.map(e => {
    return __jsx("tr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 22
      }
    }, __jsx("td", {
      width: "15%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 19
      }
    }, e.username, ":"), __jsx("td", {
      width: "65%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 19
      }
    }, e.message), __jsx("td", {
      width: "20%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 19
      }
    }, new Date(e.date).toLocaleDateString()));
  }));

  return __jsx("div", {
    className: "jsx-1093627656" + " " + 'chats',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "jsx-1093627656" + " " + "masthead",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1093627656" + " " + "overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-1093627656" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1093627656" + " " + "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1093627656" + " " + "col-lg-8 col-md-10 mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1093627656" + " " + "page-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }, "Quantumniac's Community Notices "), __jsx("span", {
    className: "jsx-1093627656" + " " + "subheading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }, "Keep in touch with our Internal team discussion\uD83D\uDE80\uD83D\uDE80\uD83D\uDD25\uD83D\uDE80\uD83D\uDD25\uD83D\uDD25!!!")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    striped: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("thead", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("tr", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("th", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "User"), __jsx("th", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Notice"), __jsx("th", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "DateTime"))), table_data), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1093627656",
    __self: undefined
  }, ".masthead.jsx-1093627656{background-image:url('/full-bg.jpeg');}.chats.jsx-1093627656{background-color:#e6faf9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FqYXkvRGVza3RvcC93ZWJkZXYvY29tbXVuaXR5LWFwcC9mcm9udGVuZC9wYWdlcy9hbm5vdW5jZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDVyxBQUd5RCxBQUlaLHlCQUM5QixhQUhBIiwiZmlsZSI6Ii9ob21lL2FqYXkvRGVza3RvcC93ZWJkZXYvY29tbXVuaXR5LWFwcC9mcm9udGVuZC9wYWdlcy9hbm5vdW5jZW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQge2ZldGNoQVBJfSBmcm9tICcuLi9saWIvdXRpbGl0eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHthbGxFdmVudERhdGF9KSA9PiB7ICBcbiAgIFxuICBjb25zdCB0YWJsZV9kYXRhID0gPHRib2R5PlxuICAgICAge1xuICAgICAgICAgIGFsbEV2ZW50RGF0YS5tYXAoKGUpPT57XG4gICAgICAgICAgICAgIHJldHVybig8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxNSVcIj57ZS51c2VybmFtZX06PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjY1JVwiPntlLm1lc3NhZ2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjIwJVwiPntuZXcgRGF0ZShlLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgICB9KVxuICAgICAgfVxuICA8L3Rib2R5PlxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0cyc+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1hc3RoZWFkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC0xMCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+UXVhbnR1bW5pYWMncyBDb21tdW5pdHkgTm90aWNlcyA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPktlZXAgaW4gdG91Y2ggd2l0aCBvdXIgSW50ZXJuYWwgdGVhbSBkaXNjdXNzaW9u8J+agPCfmoDwn5Sl8J+agPCflKXwn5SlISEhPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxUYWJsZSBzdHJpcGVkPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5Ob3RpY2U8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5EYXRlVGltZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICB7dGFibGVfZGF0YX1cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICAgLm1hc3RoZWFke1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvZnVsbC1iZy5qcGVnJyk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2hhdHN7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2U2ZmFmOTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGxldCBhbGxFdmVudERhdGEgPSBhd2FpdCBmZXRjaEFQSSgnL2NvbnZlcnN0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKGFsbEV2ZW50RGF0YSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFsbEV2ZW50RGF0YVxuICAgIH0sXG4gICAgfVxuICB9XG4gICJdfQ== */\n/*@ sourceURL=/home/ajay/Desktop/webdev/community-app/frontend/pages/announcements.js */"));
});
async function getStaticProps() {
  let allEventData = await Object(_lib_utility__WEBPACK_IMPORTED_MODULE_3__["fetchAPI"])('/converstions');
  console.log(allEventData);
  return {
    props: {
      allEventData
    }
  };
}

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/announcements.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ajay/Desktop/webdev/community-app/frontend/pages/announcements.js */"./pages/announcements.js");


/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYW5ub3VuY2VtZW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJjcmVhdGVVVUlEIiwicmVwbGFjZSIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsInYiLCJ0b1N0cmluZyIsImZldGNoQVBJIiwiaWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJleGFtIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1haWxfc2VuZCIsInNlbmRlckFkZHJlc3MiLCJNZXNzYWdlIiwiTmFtZSIsIlBob25lIiwiaW5pdCIsInRlbXBsYXRlUGFyYW1zIiwiZnJvbV9uYW1lIiwidG9fbmFtZSIsInBob25lIiwibWVzc2FnZSIsInJlcGx5X3RvIiwiZW1haWxqcyIsInNlbmQiLCJ0aGVuIiwibG9nIiwic3RhdHVzIiwidGV4dCIsImVyciIsImFsbEV2ZW50RGF0YSIsInRhYmxlX2RhdGEiLCJtYXAiLCJlIiwidXNlcm5hbWUiLCJEYXRlIiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFF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QUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosQ0FESixDQURGLEVBUUdOLFVBUkgsQ0FkRjtBQUFBO0FBQUE7QUFBQSxnL0ZBREY7QUFzQ0QsQ0FuREQ7QUFzRE8sZUFBZU8sY0FBZixHQUFnQztBQUNuQyxNQUFJUixZQUFZLEdBQUcsTUFBTTdCLDZEQUFRLENBQUMsZUFBRCxDQUFqQztBQUNBUyxTQUFPLENBQUNnQixHQUFSLENBQVlJLFlBQVo7QUFDQSxTQUFPO0FBQ0xTLFNBQUssRUFBRTtBQUNMVDtBQURLO0FBREYsR0FBUDtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVILHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9hbm5vdW5jZW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IHtpbml0fSBmcm9tICdlbWFpbGpzLWNvbSc7XG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVVUlEKCkge1xuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcbiAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xuIH1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShpZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY29tbXVuaXR5LWFwcC1zdHJhcGktYmFja2VuZC5oZXJva3VhcHAuY29tJytpZCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBleGFtID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZXhhbTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCAgZnVuY3Rpb24gbWFpbF9zZW5kKHNlbmRlckFkZHJlc3MsIE1lc3NhZ2UsIE5hbWUsIFBob25lKXtcbiAgICBpbml0KFwidXNlcl9lOGJGSDBtRURqY0NPODhXMDFjdWFcIik7XG4gICAgIHZhciB0ZW1wbGF0ZVBhcmFtcyA9IHtcbiAgICAgICAgZnJvbV9uYW1lOiBOYW1lLFxuICAgICAgICB0b19uYW1lOlwiUXVhbnR1bW5pYWMgQ29tbXVuaXR5IENyZWF0b3JcIixcbiAgICAgICAgcGhvbmU6IFBob25lLFxuICAgICAgICBtZXNzYWdlOiBNZXNzYWdlLFxuICAgICAgICByZXBseV90bzogc2VuZGVyQWRkcmVzc1xuICAgIH07XG4gICAgIFxuICAgIGVtYWlsanMuc2VuZCgnc2VydmljZV9iM3BheWsyJywndGVtcGxhdGVfM3pib2hxaicsIHRlbXBsYXRlUGFyYW1zKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTUyEnLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBSUxFRC4uLicsIGVycik7XG4gICAgICAgIH0pO1xufVxuIiwiXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQge2ZldGNoQVBJfSBmcm9tICcuLi9saWIvdXRpbGl0eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHthbGxFdmVudERhdGF9KSA9PiB7ICBcbiAgIFxuICBjb25zdCB0YWJsZV9kYXRhID0gPHRib2R5PlxuICAgICAge1xuICAgICAgICAgIGFsbEV2ZW50RGF0YS5tYXAoKGUpPT57XG4gICAgICAgICAgICAgIHJldHVybig8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxNSVcIj57ZS51c2VybmFtZX06PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjY1JVwiPntlLm1lc3NhZ2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjIwJVwiPntuZXcgRGF0ZShlLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgICB9KVxuICAgICAgfVxuICA8L3Rib2R5PlxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0cyc+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1hc3RoZWFkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC0xMCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+UXVhbnR1bW5pYWMncyBDb21tdW5pdHkgTm90aWNlcyA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPktlZXAgaW4gdG91Y2ggd2l0aCBvdXIgSW50ZXJuYWwgdGVhbSBkaXNjdXNzaW9u8J+agPCfmoDwn5Sl8J+agPCflKXwn5SlISEhPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxUYWJsZSBzdHJpcGVkPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5Ob3RpY2U8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5EYXRlVGltZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICB7dGFibGVfZGF0YX1cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICAgLm1hc3RoZWFke1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvZnVsbC1iZy5qcGVnJyk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2hhdHN7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2U2ZmFmOTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGxldCBhbGxFdmVudERhdGEgPSBhd2FpdCBmZXRjaEFQSSgnL2NvbnZlcnN0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKGFsbEV2ZW50RGF0YSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFsbEV2ZW50RGF0YVxuICAgIH0sXG4gICAgfVxuICB9XG4gICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsanMtY29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
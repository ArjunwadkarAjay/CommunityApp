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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/AppContext.js":
/*!*******************************!*\
  !*** ./context/AppContext.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // create auth context with default value
// set backup default for isAuthenticated if none is provided in Provider 

const AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  isAuthenticated: false
});
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

/***/ }),

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

/***/ "./pages/chats.js":
/*!************************!*\
  !*** ./pages/chats.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utility */ "./lib/utility.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AppContext */ "./context/AppContext.js");
var _jsxFileName = "/home/ajay/Desktop/webdev/community-app/frontend/pages/chats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
//Fututre Scope





/* harmony default export */ __webpack_exports__["default"] = (({
  allEventData
}) => {
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  var d = new Date();
  var t = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

  const handleChangeMsg = e => {
    setMsg(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    var temp = Object(_lib_utility__WEBPACK_IMPORTED_MODULE_2__["createUUID"])();
    var data = {
      "_id": temp,
      "message": msg,
      "username": t.displayName,
      "date": d.getUTCFullYear() + '-' + d.getUTCMonth() + '-' + d.getDay() + d.getUTCMilliseconds(),
      "published_at": "2020-11-26T06:20:07.567Z",
      "createdAt": "2020-11-26T06:19:58.242Z",
      "updatedAt": "2020-11-26T08:43:27.325Z",
      "__v": 0,
      "_id": temp
    };
    fetch('https://community-app-strapi-backend.herokuapp.com/converstions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
      console.log('Success:', data);
    }).catch(error => {
      console.error('Error:', error);
    });
  };

  const table_data = __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 22
    }
  }, allEventData.map(e => {
    return __jsx("tr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 22
      }
    }, __jsx("td", {
      width: "15%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, e.username, ":"), __jsx("td", {
      width: "65%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }, e.message), __jsx("td", {
      width: "20%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }, new Date(e.date).toLocaleDateString()));
  }));

  return __jsx("div", {
    className: "jsx-1093627656" + " " + 'chats',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "jsx-1093627656" + " " + "masthead",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1093627656" + " " + "overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-1093627656" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1093627656" + " " + "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1093627656" + " " + "col-lg-8 col-md-10 mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1093627656" + " " + "page-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, "Quantumniac's Community Discussion Forumn"), __jsx("span", {
    className: "jsx-1093627656" + " " + "subheading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, "Group and Grow your Knowledge\uD83D\uDE80\uD83D\uDE80\uD83D\uDD25\uD83D\uDE80\uD83D\uDD25\uD83D\uDD25!!!")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("thead", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("tr", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("th", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "User"), __jsx("th", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx("th", {
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "DateTime"))), table_data), __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("label", {
    for: "message",
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Message:"), __jsx("input", {
    type: "text",
    onChange: handleChangeMsg,
    id: "message",
    name: "message",
    required: true,
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx("button", {
    color: "primary",
    type: "submit",
    className: "jsx-1093627656",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Send ", __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-1093627656" + " " + "fa fa-arrow-circle-right fa-fw fa-1x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 54
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1093627656",
    __self: undefined
  }, ".masthead.jsx-1093627656{background-image:url('/full-bg.jpeg');}.chats.jsx-1093627656{background-color:#e6faf9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FqYXkvRGVza3RvcC93ZWJkZXYvY29tbXVuaXR5LWFwcC9mcm9udGVuZC9wYWdlcy9jaGF0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RlcsQUFHeUQsQUFJWix5QkFDOUIsYUFIQSIsImZpbGUiOiIvaG9tZS9hamF5L0Rlc2t0b3Avd2ViZGV2L2NvbW11bml0eS1hcHAvZnJvbnRlbmQvcGFnZXMvY2hhdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0Z1dHV0cmUgU2NvcGVcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7ZmV0Y2hBUEl9IGZyb20gJy4uL2xpYi91dGlsaXR5JztcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQXBwQ29udGV4dCc7XG5pbXBvcnQge2NyZWF0ZVVVSUR9IGZyb20gJy4uL2xpYi91dGlsaXR5JztcbmV4cG9ydCBkZWZhdWx0ICh7YWxsRXZlbnREYXRhfSkgPT4geyAgXG4gICAgY29uc3QgW21zZywgc2V0TXNnXT0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICB2YXIgZCA9bmV3IERhdGUoKTtcbiAgICB2YXIgdD0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VNc2cgPSBlPT57XG4gICAgICAgIHNldE1zZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGU9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdGVtcCA9IGNyZWF0ZVVVSUQoKTtcbiAgICAgICAgdmFyIGRhdGE9e1xuICAgICAgICAgICAgXCJfaWRcIjogdGVtcCxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOm1zZyxcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIFwiZGF0ZVwiOiBkLmdldFVUQ0Z1bGxZZWFyKCkrJy0nK2QuZ2V0VVRDTW9udGgoKSsnLScrZC5nZXREYXkoKStkLmdldFVUQ01pbGxpc2Vjb25kcygpLFxuICAgICAgICAgICAgXCJwdWJsaXNoZWRfYXRcIjogXCIyMDIwLTExLTI2VDA2OjIwOjA3LjU2N1pcIixcbiAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyMC0xMS0yNlQwNjoxOTo1OC4yNDJaXCIsXG4gICAgICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjAtMTEtMjZUMDg6NDM6MjcuMzI1WlwiLFxuICAgICAgICAgICAgXCJfX3ZcIjogMCxcbiAgICAgICAgICAgIFwiX2lkXCI6IHRlbXAsXG5cbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vY29tbXVuaXR5LWFwcC1zdHJhcGktYmFja2VuZC5oZXJva3VhcHAuY29tL2NvbnZlcnN0aW9ucycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gIGNvbnN0IHRhYmxlX2RhdGEgPSA8dGJvZHk+XG4gICAgICB7XG4gICAgICAgICAgYWxsRXZlbnREYXRhLm1hcCgoZSk9PntcbiAgICAgICAgICAgICAgcmV0dXJuKDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjE1JVwiPntlLnVzZXJuYW1lfTo8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiNjUlXCI+e2UubWVzc2FnZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMjAlXCI+e25ldyBEYXRlKGUuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj4pO1xuICAgICAgICAgIH0pXG4gICAgICB9XG4gIDwvdGJvZHk+XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NoYXRzJz5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFzdGhlYWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEwIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5RdWFudHVtbmlhYydzIENvbW11bml0eSBEaXNjdXNzaW9uIEZvcnVtbjwvaDM+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nXCI+R3JvdXAgYW5kIEdyb3cgeW91ciBLbm93bGVkZ2Xwn5qA8J+agPCflKXwn5qA8J+UpfCflKUhISE8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPFRhYmxlIHN0cmlwZWQ+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkRhdGVUaW1lPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIHt0YWJsZV9kYXRhfVxuICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTXNnfSBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgICA8YnV0dG9uIGNvbG9yPSdwcmltYXJ5JyB0eXBlPVwic3VibWl0XCI+U2VuZCA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1jaXJjbGUtcmlnaHQgZmEtZncgZmEtMXhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT4gXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICAgLm1hc3RoZWFke1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvZnVsbC1iZy5qcGVnJyk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2hhdHN7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2U2ZmFmOTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGxldCBhbGxFdmVudERhdGEgPSBhd2FpdCBmZXRjaEFQSSgnL2NvbnZlcnN0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKGFsbEV2ZW50RGF0YSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFsbEV2ZW50RGF0YVxuICAgIH0sXG4gICAgfVxuICB9XG4gICJdfQ== */\n/*@ sourceURL=/home/ajay/Desktop/webdev/community-app/frontend/pages/chats.js */"));
});
async function getStaticProps() {
  let allEventData = await Object(_lib_utility__WEBPACK_IMPORTED_MODULE_2__["fetchAPI"])('/converstions');
  console.log(allEventData);
  return {
    props: {
      allEventData
    }
  };
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/chats.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ajay/Desktop/webdev/community-app/frontend/pages/chats.js */"./pages/chats.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9BcHBDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2xpYi91dGlsaXR5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYXRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjcmVhdGVVVUlEIiwicmVwbGFjZSIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsInYiLCJ0b1N0cmluZyIsImZldGNoQVBJIiwiaWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJleGFtIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1haWxfc2VuZCIsInNlbmRlckFkZHJlc3MiLCJNZXNzYWdlIiwiTmFtZSIsIlBob25lIiwiaW5pdCIsInRlbXBsYXRlUGFyYW1zIiwiZnJvbV9uYW1lIiwidG9fbmFtZSIsInBob25lIiwibWVzc2FnZSIsInJlcGx5X3RvIiwiZW1haWxqcyIsInNlbmQiLCJ0aGVuIiwibG9nIiwic3RhdHVzIiwidGV4dCIsImVyciIsImFsbEV2ZW50RGF0YSIsIm1zZyIsInNldE1zZyIsInVzZVN0YXRlIiwiZCIsIkRhdGUiLCJ0IiwidXNlQ29udGV4dCIsImhhbmRsZUNoYW5nZU1zZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidGVtcCIsImRhdGEiLCJkaXNwbGF5TmFtZSIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXREYXkiLCJnZXRVVENNaWxsaXNlY29uZHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRjaCIsInRhYmxlX2RhdGEiLCJtYXAiLCJ1c2VybmFtZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtDQUNBO0FBRUE7O0FBQ0EsTUFBTUEsVUFBVSxHQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CO0FBQUVDLGlCQUFlLEVBQUU7QUFBbkIsQ0FBcEIsQ0FBbkI7QUFDZUgseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLFNBQVNJLFVBQVQsR0FBc0I7QUFDekIsU0FBTyx1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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLE9BQUcsRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBUSxFQUFFSixlQUE3QjtBQUE4QyxNQUFFLEVBQUMsU0FBakQ7QUFBMkQsUUFBSSxFQUFDLFNBQWhFO0FBQTBFLFlBQVEsTUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQXdCLFFBQUksRUFBQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBMkM7QUFBb0QsbUJBQVksTUFBaEU7QUFBQSx3Q0FBYSxzQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTNDLENBSEYsQ0F4Qko7QUFBQTtBQUFBO0FBQUEsb3RLQURGO0FBMENELENBN0ZEO0FBZ0dPLGVBQWV1QixjQUFmLEdBQWdDO0FBQ25DLE1BQUkvQixZQUFZLEdBQUcsTUFBTTdCLDZEQUFRLENBQUMsZUFBRCxDQUFqQztBQUNBUyxTQUFPLENBQUNnQixHQUFSLENBQVlJLFlBQVo7QUFDQSxTQUFPO0FBQ0xnQyxTQUFLLEVBQUU7QUFDTGhDO0FBREs7QUFERixHQUFQO0FBS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0gsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2NoYXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gY3JlYXRlIGF1dGggY29udGV4dCB3aXRoIGRlZmF1bHQgdmFsdWVcblxuLy8gc2V0IGJhY2t1cCBkZWZhdWx0IGZvciBpc0F1dGhlbnRpY2F0ZWQgaWYgbm9uZSBpcyBwcm92aWRlZCBpbiBQcm92aWRlciBcbmNvbnN0IEFwcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHsgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSB9KTtcbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRleHQ7IiwiaW1wb3J0IHtpbml0fSBmcm9tICdlbWFpbGpzLWNvbSc7XG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVVUlEKCkge1xuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcbiAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xuIH1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShpZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY29tbXVuaXR5LWFwcC1zdHJhcGktYmFja2VuZC5oZXJva3VhcHAuY29tJytpZCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBleGFtID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZXhhbTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCAgZnVuY3Rpb24gbWFpbF9zZW5kKHNlbmRlckFkZHJlc3MsIE1lc3NhZ2UsIE5hbWUsIFBob25lKXtcbiAgICBpbml0KFwidXNlcl9lOGJGSDBtRURqY0NPODhXMDFjdWFcIik7XG4gICAgIHZhciB0ZW1wbGF0ZVBhcmFtcyA9IHtcbiAgICAgICAgZnJvbV9uYW1lOiBOYW1lLFxuICAgICAgICB0b19uYW1lOlwiUXVhbnR1bW5pYWMgQ29tbXVuaXR5IENyZWF0b3JcIixcbiAgICAgICAgcGhvbmU6IFBob25lLFxuICAgICAgICBtZXNzYWdlOiBNZXNzYWdlLFxuICAgICAgICByZXBseV90bzogc2VuZGVyQWRkcmVzc1xuICAgIH07XG4gICAgIFxuICAgIGVtYWlsanMuc2VuZCgnc2VydmljZV9iM3BheWsyJywndGVtcGxhdGVfM3pib2hxaicsIHRlbXBsYXRlUGFyYW1zKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTUyEnLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBSUxFRC4uLicsIGVycik7XG4gICAgICAgIH0pO1xufVxuIiwiLy9GdXR1dHJlIFNjb3BlXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQge2ZldGNoQVBJfSBmcm9tICcuLi9saWIvdXRpbGl0eSc7XG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0FwcENvbnRleHQnO1xuaW1wb3J0IHtjcmVhdGVVVUlEfSBmcm9tICcuLi9saWIvdXRpbGl0eSc7XG5leHBvcnQgZGVmYXVsdCAoe2FsbEV2ZW50RGF0YX0pID0+IHsgIFxuICAgIGNvbnN0IFttc2csIHNldE1zZ109IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdmFyIGQgPW5ldyBEYXRlKCk7XG4gICAgdmFyIHQ9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTXNnID0gZT0+e1xuICAgICAgICBzZXRNc2coZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHRlbXAgPSBjcmVhdGVVVUlEKCk7XG4gICAgICAgIHZhciBkYXRhPXtcbiAgICAgICAgICAgIFwiX2lkXCI6IHRlbXAsXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjptc2csXG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IHQuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBcImRhdGVcIjogZC5nZXRVVENGdWxsWWVhcigpKyctJytkLmdldFVUQ01vbnRoKCkrJy0nK2QuZ2V0RGF5KCkrZC5nZXRVVENNaWxsaXNlY29uZHMoKSxcbiAgICAgICAgICAgIFwicHVibGlzaGVkX2F0XCI6IFwiMjAyMC0xMS0yNlQwNjoyMDowNy41NjdaXCIsXG4gICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjAtMTEtMjZUMDY6MTk6NTguMjQyWlwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDIwLTExLTI2VDA4OjQzOjI3LjMyNVpcIixcbiAgICAgICAgICAgIFwiX192XCI6IDAsXG4gICAgICAgICAgICBcIl9pZFwiOiB0ZW1wLFxuXG4gICAgICAgIH07XG4gICAgICAgIGZldGNoKCdodHRwczovL2NvbW11bml0eS1hcHAtc3RyYXBpLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9jb252ZXJzdGlvbnMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICBjb25zdCB0YWJsZV9kYXRhID0gPHRib2R5PlxuICAgICAge1xuICAgICAgICAgIGFsbEV2ZW50RGF0YS5tYXAoKGUpPT57XG4gICAgICAgICAgICAgIHJldHVybig8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxNSVcIj57ZS51c2VybmFtZX06PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjY1JVwiPntlLm1lc3NhZ2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjIwJVwiPntuZXcgRGF0ZShlLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgICB9KVxuICAgICAgfVxuICA8L3Rib2R5PlxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0cyc+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1hc3RoZWFkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC0xMCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+UXVhbnR1bW5pYWMncyBDb21tdW5pdHkgRGlzY3Vzc2lvbiBGb3J1bW48L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPkdyb3VwIGFuZCBHcm93IHlvdXIgS25vd2xlZGdl8J+agPCfmoDwn5Sl8J+agPCflKXwn5SlISEhPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxUYWJsZSBzdHJpcGVkPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5EYXRlVGltZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICB7dGFibGVfZGF0YX1cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU1zZ30gaWQ9XCJtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiByZXF1aXJlZC8+XG4gICAgICAgICAgPGJ1dHRvbiBjb2xvcj0ncHJpbWFyeScgdHlwZT1cInN1Ym1pdFwiPlNlbmQgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0IGZhLWZ3IGZhLTF4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+IFxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5tYXN0aGVhZHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Z1bGwtYmcuanBlZycpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNoYXRze1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICNlNmZhZjk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBsZXQgYWxsRXZlbnREYXRhID0gYXdhaXQgZmV0Y2hBUEkoJy9jb252ZXJzdGlvbnMnKTtcbiAgICBjb25zb2xlLmxvZyhhbGxFdmVudERhdGEpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhbGxFdmVudERhdGFcbiAgICB9LFxuICAgIH1cbiAgfVxuICAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
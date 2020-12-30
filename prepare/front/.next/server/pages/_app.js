module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/jinho/JS/NodeBird/prepare/front/pages/_app.jsx\";\n\n\n\n\n\n // 페이지별로 공통적인 것 처리\n\nconst App = ({\n  Component\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\nApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_6___default()(App)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD82MGQzIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFDM0Isc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBLGtCQURKO0FBU0gsQ0FWRDs7QUFZQUQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCO0FBQ1pELFdBQVMsRUFBRUUsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkM7QUFEckIsQ0FBaEI7QUFJZUMsNEhBQU8sQ0FBQ0MsU0FBUixDQUFrQkMsc0RBQWEsQ0FBQ1IsR0FBRCxDQUEvQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSBcIm5leHQtcmVkdXgtc2FnYVwiO1xuXG4vLyDtjpjsnbTsp4Drs4TroZwg6rO17Ya17KCB7J24IOqygyDsspjrpqxcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxDb21wb25lbnQ+PC9Db21wb25lbnQ+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5BcHAucHJvcFR5cGVzID0ge1xuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKEFwcCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  // next에서 ssr하기 위해 필요\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log(\"HYDRATE\", action);\n        return action.payload;\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNoQztBQUNBQyxPQUFLLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHLEVBQVQsRUFBYUMsTUFBYixLQUF3QjtBQUMzQixZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxXQUFLQywwREFBTDtBQUNJQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixNQUF2QjtBQUNBLGVBQU9BLE1BQU0sQ0FBQ0ssT0FBZDs7QUFDSjtBQUNJLGVBQU9OLEtBQVA7QUFMUjtBQU9ILEdBVitCO0FBV2hDTyxxREFYZ0M7QUFZaENDLHFEQUFJQTtBQVo0QixDQUFELENBQW5DO0FBZWVYLDBFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAvLyBuZXh07JeQ7IScIHNzcu2VmOq4sCDsnITtlbQg7ZWE7JqUXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSFlEUkFURVwiLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1c2VyLFxuICAgIHBvc3QsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, addPostRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPostRequestAction\", function() { return addPostRequestAction; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // initial state\n\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    },\n    content: \"첫 번째 게시글 #해시태그 #키키 #ㄴㄴㄴ ##adf\",\n    Images: [{\n      src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n    }, {\n      src: \"https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg\"\n    }, {\n      src: \"https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"nero\"\n      },\n      content: \"우와 개정판이 나왔군요~\"\n    }, {\n      User: {\n        nickname: \"hero\"\n      },\n      content: \"얼른 사고싶어요~\"\n    }]\n  }, {\n    id: 2,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    },\n    content: \"첫 번째 게시글\",\n    Images: [{\n      src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"nero\"\n      },\n      content: \"우와 개정판이 나왔군요~\"\n    }, {\n      User: {\n        nickname: \"hero\"\n      },\n      content: \"얼른 사고싶어요~\"\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n}; // dummy data\n\nconst dummyPost = {\n  id: 3,\n  content: \"더미데이터임\",\n  User: {\n    id: 1,\n    nickname: \"제로초\"\n  },\n  Images: [],\n  Comments: []\n}; // action type\n\nconst ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nconst ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nconst ADD_POST_FAILURE = \"ADD_POST_FAILURE\"; // action creator\n\nconst addPostRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(ADD_POST_REQUEST); // reducer\n\nconst reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"handleActions\"])({\n  // [ADD_POST_REQUEST]: (state, action) => ({\n  //     ...state,\n  //     // 잎에 추가를 해야 위에서 부터 추가됨\n  //     mainPosts: state.mainPosts.concat(dummyPost),\n  //     //[dummyPost, ...state.mainPosts],\n  // }),\n  [ADD_POST_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n    // 잎에 추가를 해야 위에서 부터 추가됨\n    mainPosts: state.mainPosts.concat(dummyPost) //[dummyPost, ...state.mainPosts],\n\n  }),\n  [ADD_POST_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n    // 잎에 추가를 해야 위에서 부터 추가됨\n    mainPosts: state.mainPosts.concat(dummyPost) //[dummyPost, ...state.mainPosts],\n\n  })\n}, initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiZHVtbXlQb3N0IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJjcmVhdGVBY3Rpb24iLCJyZWR1Y2VyIiwiaGFuZGxlQWN0aW9ucyIsInN0YXRlIiwiYWN0aW9uIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0NBRUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxXQUFTLEVBQUUsQ0FDUDtBQUNJQyxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGVjtBQU1JQyxXQUFPLEVBQUUsK0JBTmI7QUFPSUMsVUFBTSxFQUFFLENBQ0o7QUFDSUMsU0FBRyxFQUNDO0FBRlIsS0FESSxFQUtKO0FBQ0lBLFNBQUcsRUFDQztBQUZSLEtBTEksRUFTSjtBQUNJQSxTQUFHLEVBQ0M7QUFGUixLQVRJLENBUFo7QUFxQklDLFlBQVEsRUFBRSxDQUNOO0FBQ0lMLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEVjtBQUlJQyxhQUFPLEVBQUU7QUFKYixLQURNLEVBT047QUFDSUYsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBUE07QUFyQmQsR0FETyxFQXFDUDtBQUNJSCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGVjtBQU1JQyxXQUFPLEVBQUUsVUFOYjtBQU9JQyxVQUFNLEVBQUUsQ0FDSjtBQUNJQyxTQUFHLEVBQ0M7QUFGUixLQURJLENBUFo7QUFhSUMsWUFBUSxFQUFFLENBQ047QUFDSUwsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBRE0sRUFPTjtBQUNJRixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFY7QUFJSUMsYUFBTyxFQUFFO0FBSmIsS0FQTTtBQWJkLEdBckNPLENBRE07QUFtRWpCSSxZQUFVLEVBQUUsRUFuRUs7QUFvRWpCQyxXQUFTLEVBQUU7QUFwRU0sQ0FBckIsQyxDQXVFQTs7QUFFQSxNQUFNQyxTQUFTLEdBQUc7QUFDZFQsSUFBRSxFQUFFLENBRFU7QUFFZEcsU0FBTyxFQUFFLFFBRks7QUFHZEYsTUFBSSxFQUFFO0FBQ0ZELE1BQUUsRUFBRSxDQURGO0FBRUZFLFlBQVEsRUFBRTtBQUZSLEdBSFE7QUFPZEUsUUFBTSxFQUFFLEVBUE07QUFRZEUsVUFBUSxFQUFFO0FBUkksQ0FBbEIsQyxDQVdBOztBQUVPLE1BQU1JLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QixDLENBRVA7O0FBRU8sTUFBTUMsb0JBQW9CLEdBQUdDLGtFQUFZLENBQUNKLGdCQUFELENBQXpDLEMsQ0FFUDs7QUFFQSxNQUFNSyxPQUFPLEdBQUdDLG1FQUFhLENBQ3pCO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBQ0wsZ0JBQUQsR0FBb0IsQ0FBQ00sS0FBRCxFQUFRQyxNQUFSLHFDQUNiRCxLQURhO0FBRWhCO0FBQ0FsQixhQUFTLEVBQUVrQixLQUFLLENBQUNsQixTQUFOLENBQWdCb0IsTUFBaEIsQ0FBdUJWLFNBQXZCLENBSEssQ0FJaEI7O0FBSmdCLElBUHhCO0FBYUksR0FBQ0csZ0JBQUQsR0FBb0IsQ0FBQ0ssS0FBRCxFQUFRQyxNQUFSLHFDQUNiRCxLQURhO0FBRWhCO0FBQ0FsQixhQUFTLEVBQUVrQixLQUFLLENBQUNsQixTQUFOLENBQWdCb0IsTUFBaEIsQ0FBdUJWLFNBQXZCLENBSEssQ0FJaEI7O0FBSmdCO0FBYnhCLENBRHlCLEVBcUJ6QlgsWUFyQnlCLENBQTdCO0FBd0JlaUIsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucywgY3JlYXRlQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcblxuLy8gaW5pdGlhbCBzdGF0ZVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbWFpblBvc3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7YKk7YKkICPjhLTjhLTjhLQgIyNhZGZcIixcbiAgICAgICAgICAgIEltYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZ1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZ1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH5cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IFwiaGVyb1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuyWvOuluCDsgqzqs6Dsi7bslrTsmpR+XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIBcIixcbiAgICAgICAgICAgIEltYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH5cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IFwiaGVyb1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuyWvOuluCDsgqzqs6Dsi7bslrTsmpR+XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBpbWFnZVBhdGhzOiBbXSxcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxufTtcblxuLy8gZHVtbXkgZGF0YVxuXG5jb25zdCBkdW1teVBvc3QgPSB7XG4gICAgaWQ6IDMsXG4gICAgY29udGVudDogXCLrjZTrr7jrjbDsnbTthLDsnoRcIixcbiAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcbiAgICB9LFxuICAgIEltYWdlczogW10sXG4gICAgQ29tbWVudHM6IFtdLFxufTtcblxuLy8gYWN0aW9uIHR5cGVcblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xuXG4vLyBhY3Rpb24gY3JlYXRvclxuXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSBjcmVhdGVBY3Rpb24oQUREX1BPU1RfUkVRVUVTVCk7XG5cbi8vIHJlZHVjZXJcblxuY29uc3QgcmVkdWNlciA9IGhhbmRsZUFjdGlvbnMoXG4gICAge1xuICAgICAgICAvLyBbQUREX1BPU1RfUkVRVUVTVF06IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAvLyAgICAgLi4uc3RhdGUsXG4gICAgICAgIC8vICAgICAvLyDsno7sl5Ag7LaU6rCA66W8IO2VtOyVvCDsnITsl5DshJwg67aA7YSwIOy2lOqwgOuQqFxuICAgICAgICAvLyAgICAgbWFpblBvc3RzOiBzdGF0ZS5tYWluUG9zdHMuY29uY2F0KGR1bW15UG9zdCksXG4gICAgICAgIC8vICAgICAvL1tkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIC8vIH0pLFxuICAgICAgICBbQUREX1BPU1RfU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAvLyDsno7sl5Ag7LaU6rCA66W8IO2VtOyVvCDsnITsl5DshJwg67aA7YSwIOy2lOqwgOuQqFxuICAgICAgICAgICAgbWFpblBvc3RzOiBzdGF0ZS5tYWluUG9zdHMuY29uY2F0KGR1bW15UG9zdCksXG4gICAgICAgICAgICAvL1tkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIH0pLFxuICAgICAgICBbQUREX1BPU1RfRkFJTFVSRV06IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAvLyDsno7sl5Ag7LaU6rCA66W8IO2VtOyVvCDsnITsl5DshJwg67aA7YSwIOy2lOqwgOuQqFxuICAgICAgICAgICAgbWFpblBvc3RzOiBzdGF0ZS5tYWluUG9zdHMuY29uY2F0KGR1bW15UG9zdCksXG4gICAgICAgICAgICAvL1tkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAgaW5pdGlhbFN0YXRlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // initial state\n\nconst initialState = {\n  isLoggingIn: false,\n  // 로그인 시도중\n  isLoggingOut: false,\n  // 로그아웃 시도중\n  isLoggedIn: false,\n  // 로그인 성공\n  me: null,\n  signUpData: {},\n  loginData: {}\n}; // action type\n\nconst LOG_IN_REQUEST = \"LOG_IN_REQUEST\";\nconst LOG_IN_SUCCESS = \"LOG_IN_SUCCESS\";\nconst LOG_IN_FAILURE = \"LOG_IN_FAILURE\";\nconst LOG_OUT_REQUEST = \"LOG_OUT_REQUEST\";\nconst LOG_OUT_SUCCESS = \"LOG_OUT_SUCCESS\";\nconst LOG_OUT_FAILURE = \"LOG_OUT_FAILURE\"; // action creator\n\nconst loginRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(LOG_IN_REQUEST, data => data);\nconst logoutRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(LOG_OUT_REQUEST); // reducer\n\nconst dummyMe = {\n  nickname: \"zino\"\n};\nconst reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"handleActions\"])({\n  [LOG_IN_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingIn: true\n  }),\n  [LOG_IN_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingOut: false,\n    isLoggedIn: true,\n    me: dummyMe\n  }),\n  [LOG_IN_FAILURE]: (state, action) => _objectSpread({}, state),\n  [LOG_OUT_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingOut: true\n  }),\n  [LOG_OUT_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingIn: false,\n    isLoggingOut: false,\n    isLoggedIn: false,\n    me: null\n  }),\n  [LOG_OUT_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n    isLoggedIn: false\n  })\n}, initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dpbmdPdXQiLCJpc0xvZ2dlZEluIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiY3JlYXRlQWN0aW9uIiwiZGF0YSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJkdW1teU1lIiwibmlja25hbWUiLCJyZWR1Y2VyIiwiaGFuZGxlQWN0aW9ucyIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNqQkMsYUFBVyxFQUFFLEtBREk7QUFDRztBQUNwQkMsY0FBWSxFQUFFLEtBRkc7QUFFSTtBQUNyQkMsWUFBVSxFQUFFLEtBSEs7QUFHRTtBQUNuQkMsSUFBRSxFQUFFLElBSmE7QUFLakJDLFlBQVUsRUFBRSxFQUxLO0FBTWpCQyxXQUFTLEVBQUU7QUFOTSxDQUFyQixDLENBU0E7O0FBRU8sTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCLEMsQ0FFUDs7QUFFTyxNQUFNQyxrQkFBa0IsR0FBR0Msa0VBQVksQ0FBQ1AsY0FBRCxFQUFrQlEsSUFBRCxJQUFVQSxJQUEzQixDQUF2QztBQUNBLE1BQU1DLG1CQUFtQixHQUFHRixrRUFBWSxDQUFDSixlQUFELENBQXhDLEMsQ0FFUDs7QUFFQSxNQUFNTyxPQUFPLEdBQUc7QUFBRUMsVUFBUSxFQUFFO0FBQVosQ0FBaEI7QUFFQSxNQUFNQyxPQUFPLEdBQUdDLG1FQUFhLENBQ3pCO0FBQ0ksR0FBQ2IsY0FBRCxHQUFrQixDQUFDYyxLQUFELEVBQVFDLE1BQVIscUNBQ1hELEtBRFc7QUFFZHBCLGVBQVcsRUFBRTtBQUZDLElBRHRCO0FBS0ksR0FBQ08sY0FBRCxHQUFrQixDQUFDYSxLQUFELEVBQVFDLE1BQVIscUNBQ1hELEtBRFc7QUFFZG5CLGdCQUFZLEVBQUUsS0FGQTtBQUdkQyxjQUFVLEVBQUUsSUFIRTtBQUlkQyxNQUFFLEVBQUVhO0FBSlUsSUFMdEI7QUFXSSxHQUFDUixjQUFELEdBQWtCLENBQUNZLEtBQUQsRUFBUUMsTUFBUix1QkFDWEQsS0FEVyxDQVh0QjtBQWVJLEdBQUNYLGVBQUQsR0FBbUIsQ0FBQ1csS0FBRCxFQUFRQyxNQUFSLHFDQUNaRCxLQURZO0FBRWZuQixnQkFBWSxFQUFFO0FBRkMsSUFmdkI7QUFtQkksR0FBQ1MsZUFBRCxHQUFtQixDQUFDVSxLQUFELEVBQVFDLE1BQVIscUNBQ1pELEtBRFk7QUFFZnBCLGVBQVcsRUFBRSxLQUZFO0FBR2ZDLGdCQUFZLEVBQUUsS0FIQztBQUlmQyxjQUFVLEVBQUUsS0FKRztBQUtmQyxNQUFFLEVBQUU7QUFMVyxJQW5CdkI7QUEwQkksR0FBQ1EsZUFBRCxHQUFtQixDQUFDUyxLQUFELEVBQVFDLE1BQVIscUNBQ1pELEtBRFk7QUFFZmxCLGNBQVUsRUFBRTtBQUZHO0FBMUJ2QixDQUR5QixFQWdDekJILFlBaEN5QixDQUE3QjtBQW1DZW1CLHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMsIGNyZWF0ZUFjdGlvbiB9IGZyb20gXCJyZWR1eC1hY3Rpb25zXCI7XG5cbi8vIGluaXRpYWwgc3RhdGVcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxuICAgIGlzTG9nZ2luZ091dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSwgLy8g66Gc6re47J24IOyEseqztVxuICAgIG1lOiBudWxsLFxuICAgIHNpZ25VcERhdGE6IHt9LFxuICAgIGxvZ2luRGF0YToge30sXG59O1xuXG4vLyBhY3Rpb24gdHlwZVxuXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcblxuLy8gYWN0aW9uIGNyZWF0b3JcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IGNyZWF0ZUFjdGlvbihMT0dfSU5fUkVRVUVTVCwgKGRhdGEpID0+IGRhdGEpO1xuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSBjcmVhdGVBY3Rpb24oTE9HX09VVF9SRVFVRVNUKTtcblxuLy8gcmVkdWNlclxuXG5jb25zdCBkdW1teU1lID0geyBuaWNrbmFtZTogXCJ6aW5vXCIgfTtcblxuY29uc3QgcmVkdWNlciA9IGhhbmRsZUFjdGlvbnMoXG4gICAge1xuICAgICAgICBbTE9HX0lOX1JFUVVFU1RdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICBbTE9HX0lOX1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgICAgICBtZTogZHVtbXlNZSxcbiAgICAgICAgfSksXG4gICAgICAgIFtMT0dfSU5fRkFJTFVSRV06IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAvL21lOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgfSksXG4gICAgICAgIFtMT0dfT1VUX1JFUVVFU1RdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2dnaW5nT3V0OiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgW0xPR19PVVRfU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICBtZTogbnVsbCxcbiAgICAgICAgfSksXG4gICAgICAgIFtMT0dfT1VUX0ZBSUxVUkVdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAgaW5pdGlhbFN0YXRlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./sagas/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./sagas/post.js\");\n\n\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_user__WEBPACK_IMPORTED_MODULE_1__[\"watchUser\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_post__WEBPACK_IMPORTED_MODULE_2__[\"watchPost\"])]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootSaga);\n/**\n * @author 박진호\n * @summary redux saga\n * @type dsafd\n *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsIndhdGNoVXNlciIsIndhdGNoUG9zdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVQSxRQUFWLEdBQXFCO0FBQ2pCLFFBQU1DLDhEQUFHLENBQUMsQ0FBQ0MsK0RBQUksQ0FBQ0MsK0NBQUQsQ0FBTCxFQUFrQkQsK0RBQUksQ0FBQ0UsK0NBQUQsQ0FBdEIsQ0FBRCxDQUFUO0FBQ0g7O0FBRWNKLHVFQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NhZ2FzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBwdXQsIGNhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgeyB3YXRjaFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyB3YXRjaFBvc3QgfSBmcm9tIFwiLi9wb3N0XCI7XG5cbmZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hVc2VyKSwgZm9yayh3YXRjaFBvc3QpXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RTYWdhO1xuXG4vKipcbiAqIEBhdXRob3Ig67CV7KeE7Zi4XG4gKiBAc3VtbWFyeSByZWR1eCBzYWdhXG4gKiBAdHlwZSBkc2FmZFxuICovXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: watchPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watchPost\", function() { return watchPost; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\n // api\n\nfunction addPostAPI(data) {\n  return axios.post(\"/api/post\", data);\n} // saga\n\n\nfunction* addPost(action) {\n  try {\n    // const result = yield call(addPostAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    const id = shortId.generate();\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"ADD_POST_SUCCESS\"],\n      data: {\n        id,\n        content: action.data\n      }\n    });\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: ADD_POST_TO_ME,\n      data: id\n    });\n  } catch (err) {\n    console.error(err);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"ADD_POST_FAILURE\"],\n      data: err.response.data\n    });\n  }\n} // watcher\n\n\nfunction* watchPost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__[\"ADD_POST_REQUEST\"], addPost);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzPzNhYmEiXSwibmFtZXMiOlsiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhZGRQb3N0IiwiYWN0aW9uIiwiZGVsYXkiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInB1dCIsInR5cGUiLCJBRERfUE9TVF9TVUNDRVNTIiwiY29udGVudCIsIkFERF9QT1NUX1RPX01FIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiQUREX1BPU1RfRkFJTFVSRSIsInJlc3BvbnNlIiwid2F0Y2hQb3N0IiwidGFrZUxhdGVzdCIsIkFERF9QT1NUX1JFUVVFU1QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQU9BOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLFNBQU9DLEtBQUssQ0FBQ0MsSUFBTixDQUFXLFdBQVgsRUFBd0JGLElBQXhCLENBQVA7QUFDSCxDLENBRUQ7OztBQUVBLFVBQVVHLE9BQVYsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCLE1BQUk7QUFDQTtBQUNBLFVBQU1DLGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTUMsRUFBRSxHQUFHQyxPQUFPLENBQUNDLFFBQVIsRUFBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFQywrREFEQTtBQUVOWCxVQUFJLEVBQUU7QUFDRk0sVUFERTtBQUVGTSxlQUFPLEVBQUVSLE1BQU0sQ0FBQ0o7QUFGZDtBQUZBLEtBQUQsQ0FBVDtBQU9BLFVBQU1TLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFRyxjQURBO0FBRU5iLFVBQUksRUFBRU07QUFGQSxLQUFELENBQVQ7QUFJSCxHQWZELENBZUUsT0FBT1EsR0FBUCxFQUFZO0FBQ1ZDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0EsVUFBTUwsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVPLCtEQURBO0FBRU5qQixVQUFJLEVBQUVjLEdBQUcsQ0FBQ0ksUUFBSixDQUFhbEI7QUFGYixLQUFELENBQVQ7QUFJSDtBQUNKLEMsQ0FFRDs7O0FBRU8sVUFBVW1CLFNBQVYsR0FBc0I7QUFDekIsUUFBTUMscUVBQVUsQ0FBQ0MsK0RBQUQsRUFBbUJsQixPQUFuQixDQUFoQjtBQUNIIiwiZmlsZSI6Ii4vc2FnYXMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRha2VMYXRlc3QsIGNhbGwsIHB1dCwgZGVsYXkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQge1xuICAgIEFERF9QT1NUX1JFUVVFU1QsXG4gICAgQUREX1BPU1RfU1VDQ0VTUyxcbiAgICBBRERfUE9TVF9GQUlMVVJFLFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xuXG4vLyBhcGlcblxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3RcIiwgZGF0YSk7XG59XG5cbi8vIHNhZ2FcblxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxuICAgICAgICAgICAgZGF0YTogaWQsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gd2F0Y2hlclxuXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoUG9zdCgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: watchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watchUser\", function() { return watchUser; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n // api\n\nfunction logInAPI(data) {\n  return axios.post(\"/api/login\", data);\n}\n\nfunction logOutAPI() {\n  return axios.post(\"/api/logout\");\n}\n\nfunction signUpAPI() {\n  return axios.post(\"/api/signUp\");\n}\n\nfunction followAPI() {\n  return axios.post(\"/api/follow\");\n} // saga\n\n\nfunction* logIn(action) {\n  try {\n    console.log(\"saga logIn\"); // const result = yield call(logInAPI);\n\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_IN_SUCCESS\"],\n      data: action.data\n    });\n  } catch (err) {\n    console.error(err);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_IN_FAILURE\"],\n      error: err.response.data\n    });\n  }\n}\n\nfunction* logOut() {\n  try {\n    // const result = yield call(logOutAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_OUT_SUCCESS\"]\n    });\n  } catch (err) {\n    console.error(err);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_OUT_FAILURE\"],\n      error: err.response.data\n    });\n  }\n} // watcher\n\n\nfunction* watchUser() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_IN_REQUEST\"], logIn);\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_OUT_REQUEST\"], logOut);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzP2EzODYiXSwibmFtZXMiOlsibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwibG9nT3V0QVBJIiwic2lnblVwQVBJIiwiZm9sbG93QVBJIiwibG9nSW4iLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiTE9HX0lOX1NVQ0NFU1MiLCJlcnIiLCJlcnJvciIsIkxPR19JTl9GQUlMVVJFIiwicmVzcG9uc2UiLCJsb2dPdXQiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJ3YXRjaFVzZXIiLCJ0YWtlTGF0ZXN0IiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfT1VUX1JFUVVFU1QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQWlCQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUNwQixTQUFPQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxZQUFYLEVBQXlCRixJQUF6QixDQUFQO0FBQ0g7O0FBRUQsU0FBU0csU0FBVCxHQUFxQjtBQUNqQixTQUFPRixLQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLENBQVA7QUFDSDs7QUFFRCxTQUFTRSxTQUFULEdBQXFCO0FBQ2pCLFNBQU9ILEtBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVNHLFNBQVQsR0FBcUI7QUFDakIsU0FBT0osS0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0gsQyxDQUVEOzs7QUFFQSxVQUFVSSxLQUFWLENBQWdCQyxNQUFoQixFQUF3QjtBQUNwQixNQUFJO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFEQSxDQUVBOztBQUNBLFVBQU1DLGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTUMsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVDLDZEQURBO0FBRU5iLFVBQUksRUFBRU8sTUFBTSxDQUFDUDtBQUZQLEtBQUQsQ0FBVDtBQUlILEdBUkQsQ0FRRSxPQUFPYyxHQUFQLEVBQVk7QUFDVk4sV0FBTyxDQUFDTyxLQUFSLENBQWNELEdBQWQ7QUFDQSxVQUFNSCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUksNkRBREE7QUFFTkQsV0FBSyxFQUFFRCxHQUFHLENBQUNHLFFBQUosQ0FBYWpCO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxVQUFVa0IsTUFBVixHQUFtQjtBQUNmLE1BQUk7QUFDQTtBQUNBLFVBQU1SLGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTUMsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUVPLDhEQUFlQTtBQURmLEtBQUQsQ0FBVDtBQUdILEdBTkQsQ0FNRSxPQUFPTCxHQUFQLEVBQVk7QUFDVk4sV0FBTyxDQUFDTyxLQUFSLENBQWNELEdBQWQ7QUFDQSxVQUFNSCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRVEsOERBREE7QUFFTkwsV0FBSyxFQUFFRCxHQUFHLENBQUNHLFFBQUosQ0FBYWpCO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSixDLENBRUQ7OztBQUVPLFVBQVVxQixTQUFWLEdBQXNCO0FBQ3pCLFFBQU1DLHFFQUFVLENBQUNDLDZEQUFELEVBQWlCakIsS0FBakIsQ0FBaEI7QUFDQSxRQUFNZ0IscUVBQVUsQ0FBQ0UsOERBQUQsRUFBa0JOLE1BQWxCLENBQWhCO0FBQ0giLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICB0YWtlTGF0ZXN0LFxuICAgIGZvcmssXG4gICAgcHV0LFxuICAgIGRlbGF5LFxuICAgIGNhbGwsXG4gICAgdGFrZSxcbiAgICB0YWtlRXZlcnksXG59IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCB7XG4gICAgTE9HX0lOX1JFUVVFU1QsXG4gICAgTE9HX0lOX1NVQ0NFU1MsXG4gICAgTE9HX0lOX0ZBSUxVUkUsXG4gICAgTE9HX09VVF9SRVFVRVNULFxuICAgIExPR19PVVRfU1VDQ0VTUyxcbiAgICBMT0dfT1VUX0ZBSUxVUkUsXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG4vLyBhcGlcblxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dpblwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dvdXRcIik7XG59XG5cbmZ1bmN0aW9uIHNpZ25VcEFQSSgpIHtcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvc2lnblVwXCIpO1xufVxuXG5mdW5jdGlvbiBmb2xsb3dBUEkoKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2ZvbGxvd1wiKTtcbn1cblxuLy8gc2FnYVxuXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzYWdhIGxvZ0luXCIpO1xuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJKTtcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIGxvZ091dCgpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8vIHdhdGNoZXJcblxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaFVzZXIoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n\n\n\n\n\n\n\nconst configureStore = () => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();\n  const middlewares = [sagaMiddleware];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBQ3pCLFFBQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsQ0FBcEI7QUFDQSxRQUFNRyxRQUFRLEdBQ1YsUUFDTUMsU0FETixHQUVNQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBSDdCO0FBSUEsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxpREFBRCxFQUFjTixRQUFkLENBQXpCO0FBQ0FJLE9BQUssQ0FBQ0csUUFBTixHQUFpQlYsY0FBYyxDQUFDVyxHQUFmLENBQW1CQyw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPTCxLQUFQO0FBQ0gsQ0FWRDs7QUFZQSxNQUFNTSxPQUFPLEdBQUdDLHdFQUFhLENBQUNmLGNBQUQsRUFBaUI7QUFDMUNnQixPQUFLO0FBRHFDLENBQWpCLENBQTdCO0FBSWVGLHNFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xuICAgIGNvbnN0IGVuaGFuY2VyID1cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICAgICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBlbmhhbmNlcik7XG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuICAgIHJldHVybiBzdG9yZTtcbn07XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIj81MGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtc2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-saga\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-actions\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1hY3Rpb25zXCI/NjlmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtYWN0aW9uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-actions\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });
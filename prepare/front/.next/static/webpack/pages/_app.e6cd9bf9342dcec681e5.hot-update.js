webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ \"./node_modules/redux-actions/es/index.js\");\n\n\nvar _handleActions;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // initial state\n\nvar initialState = {\n  isLoggingIn: false,\n  // 로그인 시도중\n  isLoggingOut: false,\n  // 로그아웃 시도중\n  isLoggedIn: false,\n  // 로그인 성공\n  me: null,\n  signUpData: {},\n  loginData: {}\n}; // action type\n\nvar LOG_IN_REQUEST = \"LOG_IN_REQUEST\";\nvar LOG_IN_SUCCESS = \"LOG_IN_SUCCESS\";\nvar LOG_IN_FAILURE = \"LOG_IN_FAILURE\";\nvar LOG_OUT_REQUEST = \"LOG_OUT_REQUEST\";\nvar LOG_OUT_SUCCESS = \"LOG_OUT_SUCCESS\";\nvar LOG_OUT_FAILURE = \"LOG_OUT_FAILURE\"; // action creator\n\nvar loginRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])(LOG_IN_REQUEST, function (data) {\n  return data;\n});\nvar logoutRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])(LOG_OUT_REQUEST); // reducer\n\nvar dummyMe = {\n  nickname: \"zino\"\n};\nvar reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"handleActions\"])((_handleActions = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_IN_REQUEST, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingIn: true\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_IN_SUCCESS, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingOut: false,\n    isLoggedIn: true,\n    me: dummyMe\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_IN_FAILURE, function (state, action) {\n  return _objectSpread({}, state);\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_OUT_REQUEST, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingOut: true\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_OUT_SUCCESS, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingIn: false,\n    isLoggingOut: false,\n    isLoggedIn: false,\n    me: null\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_OUT_FAILURE, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggedIn: false\n  });\n}), _handleActions), initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2luZ0luIiwiaXNMb2dnaW5nT3V0IiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImNyZWF0ZUFjdGlvbiIsImRhdGEiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiZHVtbXlNZSIsIm5pY2tuYW1lIiwicmVkdWNlciIsImhhbmRsZUFjdGlvbnMiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsYUFBVyxFQUFFLEtBREk7QUFDRztBQUNwQkMsY0FBWSxFQUFFLEtBRkc7QUFFSTtBQUNyQkMsWUFBVSxFQUFFLEtBSEs7QUFHRTtBQUNuQkMsSUFBRSxFQUFFLElBSmE7QUFLakJDLFlBQVUsRUFBRSxFQUxLO0FBTWpCQyxXQUFTLEVBQUU7QUFOTSxDQUFyQixDLENBU0E7O0FBRU8sSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCLEMsQ0FFUDs7QUFFTyxJQUFNQyxrQkFBa0IsR0FBR0Msa0VBQVksQ0FBQ1AsY0FBRCxFQUFpQixVQUFDUSxJQUFEO0FBQUEsU0FBVUEsSUFBVjtBQUFBLENBQWpCLENBQXZDO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUdGLGtFQUFZLENBQUNKLGVBQUQsQ0FBeEMsQyxDQUVQOztBQUVBLElBQU1PLE9BQU8sR0FBRztBQUFFQyxVQUFRLEVBQUU7QUFBWixDQUFoQjtBQUVBLElBQU1DLE9BQU8sR0FBR0MsbUVBQWEsaUlBRXBCYixjQUZvQixFQUVILFVBQUNjLEtBQUQsRUFBUUMsTUFBUjtBQUFBLHlDQUNYRCxLQURXO0FBRWRwQixlQUFXLEVBQUU7QUFGQztBQUFBLENBRkcsNkdBTXBCTyxjQU5vQixFQU1ILFVBQUNhLEtBQUQsRUFBUUMsTUFBUjtBQUFBLHlDQUNYRCxLQURXO0FBRWRuQixnQkFBWSxFQUFFLEtBRkE7QUFHZEMsY0FBVSxFQUFFLElBSEU7QUFJZEMsTUFBRSxFQUFFYTtBQUpVO0FBQUEsQ0FORyw2R0FZcEJSLGNBWm9CLEVBWUgsVUFBQ1ksS0FBRCxFQUFRQyxNQUFSO0FBQUEsMkJBQ1hELEtBRFc7QUFBQSxDQVpHLDZHQWdCcEJYLGVBaEJvQixFQWdCRixVQUFDVyxLQUFELEVBQVFDLE1BQVI7QUFBQSx5Q0FDWkQsS0FEWTtBQUVmbkIsZ0JBQVksRUFBRTtBQUZDO0FBQUEsQ0FoQkUsNkdBb0JwQlMsZUFwQm9CLEVBb0JGLFVBQUNVLEtBQUQsRUFBUUMsTUFBUjtBQUFBLHlDQUNaRCxLQURZO0FBRWZwQixlQUFXLEVBQUUsS0FGRTtBQUdmQyxnQkFBWSxFQUFFLEtBSEM7QUFJZkMsY0FBVSxFQUFFLEtBSkc7QUFLZkMsTUFBRSxFQUFFO0FBTFc7QUFBQSxDQXBCRSw2R0EyQnBCUSxlQTNCb0IsRUEyQkYsVUFBQ1MsS0FBRCxFQUFRQyxNQUFSO0FBQUEseUNBQ1pELEtBRFk7QUFFZmxCLGNBQVUsRUFBRTtBQUZHO0FBQUEsQ0EzQkUsb0JBZ0N6QkgsWUFoQ3lCLENBQTdCO0FBbUNlbUIsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucywgY3JlYXRlQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcblxuLy8gaW5pdGlhbCBzdGF0ZVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNMb2dnaW5nSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg7ISx6rO1XG4gICAgbWU6IG51bGwsXG4gICAgc2lnblVwRGF0YToge30sXG4gICAgbG9naW5EYXRhOiB7fSxcbn07XG5cbi8vIGFjdGlvbiB0eXBlXG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xuXG4vLyBhY3Rpb24gY3JlYXRvclxuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gY3JlYXRlQWN0aW9uKExPR19JTl9SRVFVRVNULCAoZGF0YSkgPT4gZGF0YSk7XG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IGNyZWF0ZUFjdGlvbihMT0dfT1VUX1JFUVVFU1QpO1xuXG4vLyByZWR1Y2VyXG5cbmNvbnN0IGR1bW15TWUgPSB7IG5pY2tuYW1lOiBcInppbm9cIiB9O1xuXG5jb25zdCByZWR1Y2VyID0gaGFuZGxlQWN0aW9ucyhcbiAgICB7XG4gICAgICAgIFtMT0dfSU5fUkVRVUVTVF06IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIFtMT0dfSU5fU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgIG1lOiBkdW1teU1lLFxuICAgICAgICB9KSxcbiAgICAgICAgW0xPR19JTl9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIC8vbWU6IGFjdGlvbi5kYXRhLFxuICAgICAgICB9KSxcbiAgICAgICAgW0xPR19PVVRfUkVRVUVTVF06IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICBbTE9HX09VVF9TVUNDRVNTXTogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcbiAgICAgICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXG4gICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgICAgIG1lOiBudWxsLFxuICAgICAgICB9KSxcbiAgICAgICAgW0xPR19PVVRfRkFJTFVSRV06IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgfSksXG4gICAgfSxcbiAgICBpbml0aWFsU3RhdGUsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ \"./node_modules/redux-actions/es/index.js\");\n\n\nvar _handleActions;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // initial state\n\nvar initialState = {\n  isLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n}; // action type\n\nvar LOG_IN_REQUEST = \"LOG_IN_REQUEST\";\nvar LOG_IN_SUCCESS = \"LOG_IN_SUCCESS\";\nvar LOG_IN_FAILURE = \"LOG_IN_FAILURE\";\nvar LOG_OUT_REQUEST = \"LOG_OUT_REQUEST\";\nvar LOG_OUT_SUCCESS = \"LOG_OUT_SUCCESS\";\nvar LOG_OUT_FAILURE = \"LOG_OUT_FAILURE\"; // action creator\n\nvar loginRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])(LOG_IN_REQUEST, function (data) {\n  return data;\n});\nvar logoutRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])(LOG_OUT_REQUEST); // reducer\n\nvar reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"handleActions\"])((_handleActions = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_IN_SUCCESS, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggedIn: true,\n    me: action.data\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_IN_FAILURE, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggedIn: true,\n    me: action.data\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_OUT_SUCCESS, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggedIn: false\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_OUT_FAILURE, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggedIn: false\n  });\n}), _handleActions), initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJjcmVhdGVBY3Rpb24iLCJkYXRhIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJoYW5kbGVBY3Rpb25zIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLFlBQVUsRUFBRSxLQURLO0FBRWpCQyxJQUFFLEVBQUUsSUFGYTtBQUdqQkMsWUFBVSxFQUFFLEVBSEs7QUFJakJDLFdBQVMsRUFBRTtBQUpNLENBQXJCLEMsQ0FPQTs7QUFFTyxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEIsQyxDQUVQOztBQUVPLElBQU1DLGtCQUFrQixHQUFHQyxrRUFBWSxDQUFDUCxjQUFELEVBQWlCLFVBQUNRLElBQUQ7QUFBQSxTQUFVQSxJQUFWO0FBQUEsQ0FBakIsQ0FBdkM7QUFDQSxJQUFNQyxtQkFBbUIsR0FBR0Ysa0VBQVksQ0FBQ0osZUFBRCxDQUF4QyxDLENBRVA7O0FBRUEsSUFBTU8sT0FBTyxHQUFHQyxtRUFBYSxpSUFPcEJWLGNBUG9CLEVBT0gsVUFBQ1csS0FBRCxFQUFRQyxNQUFSO0FBQUEseUNBQ1hELEtBRFc7QUFFZGhCLGNBQVUsRUFBRSxJQUZFO0FBR2RDLE1BQUUsRUFBRWdCLE1BQU0sQ0FBQ0w7QUFIRztBQUFBLENBUEcsNkdBWXBCTixjQVpvQixFQVlILFVBQUNVLEtBQUQsRUFBUUMsTUFBUjtBQUFBLHlDQUNYRCxLQURXO0FBRWRoQixjQUFVLEVBQUUsSUFGRTtBQUdkQyxNQUFFLEVBQUVnQixNQUFNLENBQUNMO0FBSEc7QUFBQSxDQVpHLDZHQXFCcEJKLGVBckJvQixFQXFCRixVQUFDUSxLQUFELEVBQVFDLE1BQVI7QUFBQSx5Q0FDWkQsS0FEWTtBQUVmaEIsY0FBVSxFQUFFO0FBRkc7QUFBQSxDQXJCRSw2R0F5QnBCUyxlQXpCb0IsRUF5QkYsVUFBQ08sS0FBRCxFQUFRQyxNQUFSO0FBQUEseUNBQ1pELEtBRFk7QUFFZmhCLGNBQVUsRUFBRTtBQUZHO0FBQUEsQ0F6QkUsb0JBOEJ6QkQsWUE5QnlCLENBQTdCO0FBaUNlZSxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zLCBjcmVhdGVBY3Rpb24gfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xuXG4vLyBpbml0aWFsIHN0YXRlXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICBtZTogbnVsbCxcbiAgICBzaWduVXBEYXRhOiB7fSxcbiAgICBsb2dpbkRhdGE6IHt9LFxufTtcblxuLy8gYWN0aW9uIHR5cGVcblxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XG5cbi8vIGFjdGlvbiBjcmVhdG9yXG5cbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSBjcmVhdGVBY3Rpb24oTE9HX0lOX1JFUVVFU1QsIChkYXRhKSA9PiBkYXRhKTtcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gY3JlYXRlQWN0aW9uKExPR19PVVRfUkVRVUVTVCk7XG5cbi8vIHJlZHVjZXJcblxuY29uc3QgcmVkdWNlciA9IGhhbmRsZUFjdGlvbnMoXG4gICAge1xuICAgICAgICAvLyBbTE9HX0lOX1JFUVVFU1RdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgLy8gICAgIG1lOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgLy8gfSksXG4gICAgICAgIFtMT0dfSU5fU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgICAgbWU6IGFjdGlvbi5kYXRhLFxuICAgICAgICB9KSxcbiAgICAgICAgW0xPR19JTl9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgICAgICBtZTogYWN0aW9uLmRhdGEsXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBbTE9HX09VVF9SRVFVRVNUXTogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgICAgIC8vICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLy8gICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAvLyB9KSxcbiAgICAgICAgW0xPR19PVVRfU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgfSksXG4gICAgICAgIFtMT0dfT1VUX0ZBSUxVUkVdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAgaW5pdGlhbFN0YXRlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})
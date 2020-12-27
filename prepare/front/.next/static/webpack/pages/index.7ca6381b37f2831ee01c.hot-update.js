webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts/AppLayout */ \"./components/Layouts/AppLayout.jsx\");\n/* harmony import */ var _components_main_home_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main/home/PostForm */ \"./components/main/home/PostForm.jsx\");\n/* harmony import */ var _components_main_home_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main/home/PostCard */ \"./components/main/home/PostCard.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/jinho/JS/NodeBird/prepare/front/pages/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (_ref) {\n    var user = _ref.user;\n    return {\n      isLoggedIn: user.isLoggedIn\n    };\n  }),\n      isLoggedIn = _useSelector.isLoggedIn;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      mainPosts = _useSelector2.mainPosts;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_main_home_PostForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 28\n    }, _this), mainPosts.map(function (v, i) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_main_home_PostCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"yViitBsbbl69mW3t/o7jzus6gBQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiSG9tZSIsInVzZVNlbGVjdG9yIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzdGF0ZSIsInBvc3QiLCJtYWluUG9zdHMiLCJtYXAiLCJ2IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEscUJBQ1FDLCtEQUFXLENBQUM7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxXQUFlO0FBQzlDQyxnQkFBVSxFQUFFRCxJQUFJLENBQUNDO0FBRDZCLEtBQWY7QUFBQSxHQUFELENBRG5CO0FBQUEsTUFDUEEsVUFETyxnQkFDUEEsVUFETzs7QUFBQSxzQkFJT0YsK0RBQVcsQ0FBQyxVQUFDRyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FKbEI7QUFBQSxNQUlQQyxTQUpPLGlCQUlQQSxTQUpPOztBQU1mLHNCQUNJLHFFQUFDLHFFQUFEO0FBQUEsZUFDS0gsVUFBVSxpQkFBSSxxRUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRG5CLEVBR0tHLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDBCQUNYLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQWQsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNILENBZkQ7O0dBQU1ULEk7VUFDcUJDLHVELEVBR0RBLHVEOzs7S0FKcEJELEk7QUFpQlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRzL0FwcExheW91dFwiO1xuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL21haW4vaG9tZS9Qb3N0Rm9ybVwiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL21haW4vaG9tZS9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB1c2VTZWxlY3RvcigoeyB1c2VyIH0pID0+ICh7XG4gICAgICAgIGlzTG9nZ2VkSW46IHVzZXIuaXNMb2dnZWRJbixcbiAgICB9KSk7XG4gICAgY29uc3QgeyBtYWluUG9zdHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAge2lzTG9nZ2VkSW4gJiYgPFBvc3RGb3JtPjwvUG9zdEZvcm0+fVxuXG4gICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxQb3N0Q2FyZD48L1Bvc3RDYXJkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})
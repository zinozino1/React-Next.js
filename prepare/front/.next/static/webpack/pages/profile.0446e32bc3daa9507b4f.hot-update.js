webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/Layouts/AppLayout.jsx":
/*!******************************************!*\
  !*** ./components/Layouts/AppLayout.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _auth_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/UserProfile */ \"./components/auth/UserProfile.jsx\");\n/* harmony import */ var _auth_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/LoginForm */ \"./components/auth/LoginForm.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/jinho/JS/NodeBird/prepare/front/components/Layouts/AppLayout.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar SearchWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Input\"].Search).withConfig({\n  displayName: \"AppLayout__SearchWrapper\",\n  componentId: \"zhahhs-0\"\n})([\"vertical-align:middle;\"]);\n_c = SearchWrapper;\n\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useSelector\"])(function (_ref2) {\n    var user = _ref2.user;\n    return {\n      isLoggedIn: user.isLoggedIn\n    };\n  }),\n      isLoggedIn = _useSelector.isLoggedIn;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useSelector\"])(function (_ref3) {\n    var post = _ref3.post;\n    return {\n      mainPosts: post.mainPosts\n    };\n  }),\n      mainPosts = _useSelector2.mainPosts;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"], {\n      mode: \"horizontal\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"Home\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/profile\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"\\uD504\\uB85C\\uD544\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SearchWrapper, {\n          placeholder: \"input search text\",\n          enterButton: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/signup\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"\\uD68C\\uC6D0\\uAC00\\uC785\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n      gutter: 8,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n        xs: 24,\n        sm: 6,\n        md: 6,\n        style: {\n          border: \"1px solid black\"\n        },\n        children: isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_auth_UserProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_auth_LoginForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n        xs: 24,\n        sm: 12,\n        md: 12,\n        style: {\n          border: \"1px solid black\"\n        },\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n        xs: 24,\n        sm: 6,\n        md: 6,\n        style: {\n          border: \"1px solid black\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/zinozino1\",\n          target: \"_blank\",\n          rel: \"noreferrer noopener\",\n          children: \"Made by zino\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AppLayout, \"yViitBsbbl69mW3t/o7jzus6gBQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useSelector\"]];\n});\n\n_c2 = AppLayout;\nAppLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SearchWrapper\");\n$RefreshReg$(_c2, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXRzL0FwcExheW91dC5qc3g/MmFkZSJdLCJuYW1lcyI6WyJTZWFyY2hXcmFwcGVyIiwic3R5bGVkIiwiSW5wdXQiLCJTZWFyY2giLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsInVzZVNlbGVjdG9yIiwidXNlciIsImlzTG9nZ2VkSW4iLCJwb3N0IiwibWFpblBvc3RzIiwiYm9yZGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsaUVBQU0sQ0FBQ0MsMENBQUssQ0FBQ0MsTUFBUCxDQUFUO0FBQUE7QUFBQTtBQUFBLDhCQUFuQjtLQUFNSCxhOztBQUlOLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLHFCQUNUQywrREFBVyxDQUFDO0FBQUEsUUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsV0FBZTtBQUM5Q0MsZ0JBQVUsRUFBRUQsSUFBSSxDQUFDQztBQUQ2QixLQUFmO0FBQUEsR0FBRCxDQURGO0FBQUEsTUFDeEJBLFVBRHdCLGdCQUN4QkEsVUFEd0I7O0FBQUEsc0JBSVZGLCtEQUFXLENBQUM7QUFBQSxRQUFHRyxJQUFILFNBQUdBLElBQUg7QUFBQSxXQUFlO0FBQzdDQyxlQUFTLEVBQUVELElBQUksQ0FBQ0M7QUFENkIsS0FBZjtBQUFBLEdBQUQsQ0FKRDtBQUFBLE1BSXhCQSxTQUp3QixpQkFJeEJBLFNBSndCOztBQVFoQyxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHlDQUFEO0FBQU0sVUFBSSxFQUFDLFlBQVg7QUFBQSw4QkFDSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBTUkscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsK0JBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQVdJLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLCtCQUNJLHFFQUFDLGFBQUQ7QUFDSSxxQkFBVyxFQUFDLG1CQURoQjtBQUVJLHFCQUFXO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSixlQWlCSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQXdCSSxxRUFBQyx3Q0FBRDtBQUFLLFlBQU0sRUFBRSxDQUFiO0FBQUEsOEJBQ0kscUVBQUMsd0NBQUQ7QUFDSSxVQUFFLEVBQUUsRUFEUjtBQUVJLFVBQUUsRUFBRSxDQUZSO0FBR0ksVUFBRSxFQUFFLENBSFI7QUFJSSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBSlg7QUFBQSxrQkFNS0gsVUFBVSxnQkFDUCxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPLGdCQUdQLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFhSSxxRUFBQyx3Q0FBRDtBQUNJLFVBQUUsRUFBRSxFQURSO0FBRUksVUFBRSxFQUFFLEVBRlI7QUFHSSxVQUFFLEVBQUUsRUFIUjtBQUlJLGFBQUssRUFBRTtBQUFFRyxnQkFBTSxFQUFFO0FBQVYsU0FKWDtBQUFBLGtCQU1LTjtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSixlQXFCSSxxRUFBQyx3Q0FBRDtBQUNJLFVBQUUsRUFBRSxFQURSO0FBRUksVUFBRSxFQUFFLENBRlI7QUFHSSxVQUFFLEVBQUUsQ0FIUjtBQUlJLGFBQUssRUFBRTtBQUFFTSxnQkFBTSxFQUFFO0FBQVYsU0FKWDtBQUFBLCtCQU1JO0FBQ0ksY0FBSSxFQUFDLDhCQURUO0FBRUksZ0JBQU0sRUFBQyxRQUZYO0FBR0ksYUFBRyxFQUFDLHFCQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUErREgsQ0F2RUQ7O0dBQU1QLFM7VUFDcUJFLHVELEVBR0RBLHVEOzs7TUFKcEJGLFM7QUF5RU5BLFNBQVMsQ0FBQ1EsU0FBVixHQUFzQjtBQUNsQlAsVUFBUSxFQUFFUSxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBRFAsQ0FBdEI7QUFJZVgsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dHMvQXBwTGF5b3V0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vYXV0aC9Vc2VyUHJvZmlsZVwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vYXV0aC9Mb2dpbkZvcm1cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgU2VhcmNoV3JhcHBlciA9IHN0eWxlZChJbnB1dC5TZWFyY2gpYFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB1c2VTZWxlY3RvcigoeyB1c2VyIH0pID0+ICh7XG4gICAgICAgIGlzTG9nZ2VkSW46IHVzZXIuaXNMb2dnZWRJbixcbiAgICB9KSk7XG4gICAgY29uc3QgeyBtYWluUG9zdHMgfSA9IHVzZVNlbGVjdG9yKCh7IHBvc3QgfSkgPT4gKHtcbiAgICAgICAgbWFpblBvc3RzOiBwb3N0Lm1haW5Qb3N0cyxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+7ZSE66Gc7ZWEPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaFdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW5wdXQgc2VhcmNoIHRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgPjwvU2VhcmNoV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0+XG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICB4cz17MjR9XG4gICAgICAgICAgICAgICAgICAgIHNtPXs2fVxuICAgICAgICAgICAgICAgICAgICBtZD17Nn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyUHJvZmlsZT48L1VzZXJQcm9maWxlPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luRm9ybT48L0xvZ2luRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgIHhzPXsyNH1cbiAgICAgICAgICAgICAgICAgICAgc209ezEyfVxuICAgICAgICAgICAgICAgICAgICBtZD17MTJ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICAgICAgeHM9ezI0fVxuICAgICAgICAgICAgICAgICAgICBzbT17Nn1cbiAgICAgICAgICAgICAgICAgICAgbWQ9ezZ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vemlub3ppbm8xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWFkZSBieSB6aW5vXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layouts/AppLayout.jsx\n");

/***/ })

})
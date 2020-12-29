webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/Layouts/AppLayout.jsx":
/*!******************************************!*\
  !*** ./components/Layouts/AppLayout.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _auth_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/UserProfile */ \"./components/auth/UserProfile.jsx\");\n/* harmony import */ var _auth_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/LoginForm */ \"./components/auth/LoginForm.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/jinho/JS/NodeBird/prepare/front/components/Layouts/AppLayout.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar SearchWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Input\"].Search).withConfig({\n  displayName: \"AppLayout__SearchWrapper\",\n  componentId: \"zhahhs-0\"\n})([\"vertical-align:middle;\"]);\n_c = SearchWrapper;\n\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  // 페이지 하단 좌우스크롤이 신경쓰인다면 gutter의 마진을 제거해줘야함. 필요하면 강의 참조\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useSelector\"])(function (_ref2) {\n    var user = _ref2.user;\n    return {\n      isLoggedIn: user.isLoggedIn\n    };\n  }),\n      isLoggedIn = _useSelector.isLoggedIn;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      mainPosts = _useSelector2.mainPosts;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"], {\n      mode: \"horizontal\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"Home\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/profile\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"\\uD504\\uB85C\\uD544\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SearchWrapper, {\n          placeholder: \"input search text\",\n          enterButton: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/signup\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"\\uD68C\\uC6D0\\uAC00\\uC785\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n      gutter: 8,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n        xs: 24,\n        sm: 6,\n        md: 6,\n        style: {\n          border: \"1px solid black\"\n        },\n        children: isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_auth_UserProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 25\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_auth_LoginForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n        xs: 24,\n        sm: 12,\n        md: 12,\n        style: {\n          border: \"1px solid black\"\n        },\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n        xs: 24,\n        sm: 6,\n        md: 6,\n        style: {\n          border: \"1px solid black\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/zinozino1\",\n          target: \"_blank\",\n          rel: \"noreferrer noopener\",\n          children: \"Made by zino\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AppLayout, \"yViitBsbbl69mW3t/o7jzus6gBQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useSelector\"]];\n});\n\n_c2 = AppLayout;\nAppLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SearchWrapper\");\n$RefreshReg$(_c2, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXRzL0FwcExheW91dC5qc3g/MmFkZSJdLCJuYW1lcyI6WyJTZWFyY2hXcmFwcGVyIiwic3R5bGVkIiwiSW5wdXQiLCJTZWFyY2giLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsInVzZVNlbGVjdG9yIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzdGF0ZSIsInBvc3QiLCJtYWluUG9zdHMiLCJib3JkZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxpRUFBTSxDQUFDQywwQ0FBSyxDQUFDQyxNQUFQLENBQVQ7QUFBQTtBQUFBO0FBQUEsOEJBQW5CO0tBQU1ILGE7O0FBSU4sSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQ2hDO0FBRGdDLHFCQUdUQywrREFBVyxDQUFDO0FBQUEsUUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsV0FBZTtBQUM5Q0MsZ0JBQVUsRUFBRUQsSUFBSSxDQUFDQztBQUQ2QixLQUFmO0FBQUEsR0FBRCxDQUhGO0FBQUEsTUFHeEJBLFVBSHdCLGdCQUd4QkEsVUFId0I7O0FBQUEsc0JBTVZGLCtEQUFXLENBQUMsVUFBQ0csS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBTkQ7QUFBQSxNQU14QkMsU0FOd0IsaUJBTXhCQSxTQU53Qjs7QUFRaEMsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyx5Q0FBRDtBQUFNLFVBQUksRUFBQyxZQUFYO0FBQUEsOEJBQ0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsK0JBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU1JLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLCtCQUNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosZUFXSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSwrQkFDSSxxRUFBQyxhQUFEO0FBQ0kscUJBQVcsRUFBQyxtQkFEaEI7QUFFSSxxQkFBVztBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEosZUFpQkkscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsK0JBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUF3QkkscUVBQUMsd0NBQUQ7QUFBSyxZQUFNLEVBQUUsQ0FBYjtBQUFBLDhCQUNJLHFFQUFDLHdDQUFEO0FBQ0ksVUFBRSxFQUFFLEVBRFI7QUFFSSxVQUFFLEVBQUUsQ0FGUjtBQUdJLFVBQUUsRUFBRSxDQUhSO0FBSUksYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUpYO0FBQUEsa0JBTUtKLFVBQVUsZ0JBQ1AscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETyxnQkFHUCxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBYUkscUVBQUMsd0NBQUQ7QUFDSSxVQUFFLEVBQUUsRUFEUjtBQUVJLFVBQUUsRUFBRSxFQUZSO0FBR0ksVUFBRSxFQUFFLEVBSFI7QUFJSSxhQUFLLEVBQUU7QUFBRUksZ0JBQU0sRUFBRTtBQUFWLFNBSlg7QUFBQSxrQkFNS1A7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkosZUFxQkkscUVBQUMsd0NBQUQ7QUFDSSxVQUFFLEVBQUUsRUFEUjtBQUVJLFVBQUUsRUFBRSxDQUZSO0FBR0ksVUFBRSxFQUFFLENBSFI7QUFJSSxhQUFLLEVBQUU7QUFBRU8sZ0JBQU0sRUFBRTtBQUFWLFNBSlg7QUFBQSwrQkFNSTtBQUNJLGNBQUksRUFBQyw4QkFEVDtBQUVJLGdCQUFNLEVBQUMsUUFGWDtBQUdJLGFBQUcsRUFBQyxxQkFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0RILENBdkVEOztHQUFNUixTO1VBR3FCRSx1RCxFQUdEQSx1RDs7O01BTnBCRixTO0FBeUVOQSxTQUFTLENBQUNTLFNBQVYsR0FBc0I7QUFDbEJSLFVBQVEsRUFBRVMsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURQLENBQXRCO0FBSWVaLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXRzL0FwcExheW91dC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4uL2F1dGgvVXNlclByb2ZpbGVcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uL2F1dGgvTG9naW5Gb3JtXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IFNlYXJjaFdyYXBwZXIgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuYDtcblxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIC8vIO2OmOydtOyngCDtlZjri6gg7KKM7Jqw7Iqk7YGs66Gk7J20IOyLoOqyveyTsOyduOuLpOuptCBndXR0ZXLsnZgg66eI7KeE7J2EIOygnOqxsO2VtOykmOyVvO2VqC4g7ZWE7JqU7ZWY66m0IOqwleydmCDssLjsobBcblxuICAgIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHsgdXNlciB9KSA9PiAoe1xuICAgICAgICBpc0xvZ2dlZEluOiB1c2VyLmlzTG9nZ2VkSW4sXG4gICAgfSkpO1xuICAgIGNvbnN0IHsgbWFpblBvc3RzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPu2UhOuhnO2VhDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hXcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImlucHV0IHNlYXJjaCB0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgID48L1NlYXJjaFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPu2ajOybkOqwgOyehTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezh9PlxuICAgICAgICAgICAgICAgIDxDb2xcbiAgICAgICAgICAgICAgICAgICAgeHM9ezI0fVxuICAgICAgICAgICAgICAgICAgICBzbT17Nn1cbiAgICAgICAgICAgICAgICAgICAgbWQ9ezZ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlclByb2ZpbGU+PC9Vc2VyUHJvZmlsZT5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dpbkZvcm0+PC9Mb2dpbkZvcm0+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICB4cz17MjR9XG4gICAgICAgICAgICAgICAgICAgIHNtPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgbWQ9ezEyfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sXG4gICAgICAgICAgICAgICAgICAgIHhzPXsyNH1cbiAgICAgICAgICAgICAgICAgICAgc209ezZ9XG4gICAgICAgICAgICAgICAgICAgIG1kPXs2fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ppbm96aW5vMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hZGUgYnkgemlub1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layouts/AppLayout.jsx\n");

/***/ })

})
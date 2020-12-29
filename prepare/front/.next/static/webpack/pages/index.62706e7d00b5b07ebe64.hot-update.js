webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main/home/PostImages.jsx":
/*!*********************************************!*\
  !*** ./components/main/home/PostImages.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/jinho/JS/NodeBird/prepare/front/components/main/home/PostImages.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar PostImages = function PostImages(_ref) {\n  _s();\n\n  var images = _ref.images;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showImagesZoom = _useState[0],\n      setShowImagesZoom = _useState[1];\n\n  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {}, []);\n\n  if (images.length === 1) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        role: \"presentation\",\n        src: images[0].src,\n        alt: image[0].src,\n        onClick: onZoom\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false);\n  }\n\n  if (images.length === 2) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        width: \"50%\",\n        role: \"presentation\",\n        src: images[0].src,\n        alt: image[0].src,\n        onClick: onZoom\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        width: \"50%\",\n        role: \"presentation\",\n        src: images[1].src,\n        alt: image[1].src,\n        onClick: onZoom\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        role: \"presentation\",\n        src: images[0].src,\n        alt: image[0].src,\n        onClick: onZoom\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(PostImages, \"UE9uMxceBgwv4jfRR4p3tn5mPaU=\");\n\n_c = PostImages;\nPostImages.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostImages\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2hvbWUvUG9zdEltYWdlcy5qc3g/NTM2YyJdLCJuYW1lcyI6WyJQb3N0SW1hZ2VzIiwiaW1hZ2VzIiwidXNlU3RhdGUiLCJzaG93SW1hZ2VzWm9vbSIsInNldFNob3dJbWFnZXNab29tIiwib25ab29tIiwidXNlQ2FsbGJhY2siLCJsZW5ndGgiLCJzcmMiLCJpbWFnZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxLQUFELENBRHJCO0FBQUEsTUFDeEJDLGNBRHdCO0FBQUEsTUFDUkMsaUJBRFE7O0FBRS9CLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFNLENBQUUsQ0FBVCxFQUFXLEVBQVgsQ0FBMUI7O0FBRUEsTUFBSUwsTUFBTSxDQUFDTSxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLHdCQUNJO0FBQUEsNkJBQ0k7QUFDSSxZQUFJLEVBQUMsY0FEVDtBQUVJLFdBQUcsRUFBRU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxHQUZuQjtBQUdJLFdBQUcsRUFBRUMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRCxHQUhsQjtBQUlJLGVBQU8sRUFBRUg7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBREo7QUFVSDs7QUFFRCxNQUFJSixNQUFNLENBQUNNLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsd0JBQ0k7QUFBQSw4QkFDSTtBQUNJLGFBQUssRUFBQyxLQURWO0FBRUksWUFBSSxFQUFDLGNBRlQ7QUFHSSxXQUFHLEVBQUVOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sR0FIbkI7QUFJSSxXQUFHLEVBQUVDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0QsR0FKbEI7QUFLSSxlQUFPLEVBQUVIO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBUUk7QUFDSSxhQUFLLEVBQUMsS0FEVjtBQUVJLFlBQUksRUFBQyxjQUZUO0FBR0ksV0FBRyxFQUFFSixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLEdBSG5CO0FBSUksV0FBRyxFQUFFQyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNELEdBSmxCO0FBS0ksZUFBTyxFQUFFSDtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSjtBQUFBLG9CQURKO0FBa0JIOztBQUVELHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSw2QkFDSTtBQUNJLFlBQUksRUFBQyxjQURUO0FBRUksV0FBRyxFQUFFSixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLEdBRm5CO0FBR0ksV0FBRyxFQUFFQyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNELEdBSGxCO0FBSUksZUFBTyxFQUFFSDtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFZSCxDQWxERDs7R0FBTUwsVTs7S0FBQUEsVTtBQW9ETkEsVUFBVSxDQUFDVSxTQUFYLEdBQXVCO0FBQ25CVCxRQUFNLEVBQUVVLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCO0FBRFcsQ0FBdkI7QUFJZWIseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4vaG9tZS9Qb3N0SW1hZ2VzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcyB9KSA9PiB7XG4gICAgY29uc3QgW3Nob3dJbWFnZXNab29tLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCkgPT4ge30sIFtdKTtcblxuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZVswXS5zcmN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cbiAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTAlXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZVswXS5zcmN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cbiAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlc1sxXS5zcmN9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2VbMV0uc3JjfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlWzBdLnNyY31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XG4gICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main/home/PostImages.jsx\n");

/***/ })

})
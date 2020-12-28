webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main/home/CommentForm.jsx":
/*!**********************************************!*\
  !*** ./components/main/home/CommentForm.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useInput */ \"./hooks/useInput.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/jinho/JS/NodeBird/prepare/front/components/main/home/CommentForm.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Form\"]).withConfig({\n  displayName: \"CommentForm__FormWrapper\",\n  componentId: \"xt783t-0\"\n})([\"margin-bottom:30px;\"]);\n_c = FormWrapper;\n\nvar CommentForm = function CommentForm(_ref) {\n  _s();\n\n  var post = _ref.post;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      id = _useSelector.id;\n\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\"),\n      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useInput, 2),\n      commentText = _useInput2[0],\n      onChangeCommentText = _useInput2[1];\n\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    console.log(post.id, commentText);\n  }, [commentText]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormWrapper, {\n    onFinish: onSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"].TextArea, {\n      onChange: onChangeCommentText,\n      value: commentText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      type: \"primary\",\n      htmlType: \"submit\",\n      style: {\n        \"float\": \"right\"\n      },\n      children: \"\\uB4F1\\uB85D\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(CommentForm, \"Tja3L+ItvRcrx1vA663PYRkbk6s=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c2 = CommentForm;\nCommentForm.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FormWrapper\");\n$RefreshReg$(_c2, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2hvbWUvQ29tbWVudEZvcm0uanN4P2JlZTQiXSwibmFtZXMiOlsiRm9ybVdyYXBwZXIiLCJzdHlsZWQiLCJGb3JtIiwiQ29tbWVudEZvcm0iLCJwb3N0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpZCIsInVzZUlucHV0IiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImUiLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MseUNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwyQkFBakI7S0FBTUYsVzs7QUFJTixJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHFCQUNmQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQURJO0FBQUEsTUFDdEJDLEVBRHNCLGdCQUN0QkEsRUFEc0I7O0FBQUEsa0JBR2FDLCtEQUFRLENBQUMsRUFBRCxDQUhyQjtBQUFBO0FBQUEsTUFHdkJDLFdBSHVCO0FBQUEsTUFHVkMsbUJBSFU7O0FBSzlCLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FDeEIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixJQUFJLENBQUNJLEVBQWpCLEVBQXFCRSxXQUFyQjtBQUNILEdBSHVCLEVBSXhCLENBQUNBLFdBQUQsQ0FKd0IsQ0FBNUI7QUFPQSxzQkFDSSxxRUFBQyxXQUFEO0FBQWEsWUFBUSxFQUFFRSxRQUF2QjtBQUFBLDRCQUNJLHFFQUFDLDBDQUFELENBQU8sUUFBUDtBQUNJLGNBQVEsRUFBRUQsbUJBRGQ7QUFFSSxXQUFLLEVBQUVEO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0kscUVBQUMsMkNBQUQ7QUFBUSxVQUFJLEVBQUMsU0FBYjtBQUF1QixjQUFRLEVBQUMsUUFBaEM7QUFBeUMsV0FBSyxFQUFFO0FBQUUsaUJBQU87QUFBVCxPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBV0gsQ0F2QkQ7O0dBQU1QLFc7VUFDYUUsdUQsRUFFNEJJLHVEOzs7TUFIekNOLFc7QUF5Qk5BLFdBQVcsQ0FBQ2MsU0FBWixHQUF3QjtBQUNwQmIsTUFBSSxFQUFFYyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURILENBQXhCO0FBSWVqQiwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWFpbi9ob21lL0NvbW1lbnRGb3JtLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUlucHV0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbmA7XG5cbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcblxuICAgIGNvbnN0IFtjb21tZW50VGV4dCwgb25DaGFuZ2VDb21tZW50VGV4dF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0LmlkLCBjb21tZW50VGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIFtjb21tZW50VGV4dF0sXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXR9PlxuICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxuICAgICAgICAgICAgPjwvSW5wdXQuVGV4dEFyZWE+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAgICAgIOuTseuhnVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybVdyYXBwZXI+XG4gICAgKTtcbn07XG5cbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcbiAgICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main/home/CommentForm.jsx\n");

/***/ })

})
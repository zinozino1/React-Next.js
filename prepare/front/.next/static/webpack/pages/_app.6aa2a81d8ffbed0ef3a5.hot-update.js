webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: addPostAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPostAction\", function() { return addPostAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ \"./node_modules/redux-actions/es/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // initial state\n\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    },\n    content: \"첫 번째 게시글\",\n    Images: [{\n      src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n    }, {\n      src: \"https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg\"\n    }, {\n      src: \"https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"nero\"\n      },\n      content: \"우와 개정판이 나왔군요~\"\n    }, {\n      User: {\n        nickname: \"hero\"\n      },\n      content: \"얼른 사고싶어요~\"\n    }]\n  }, {\n    id: 2,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    },\n    content: \"첫 번째 게시글\",\n    Images: [{\n      src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n    }, {\n      src: \"https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg\"\n    }, {\n      src: \"https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"nero\"\n      },\n      content: \"우와 개정판이 나왔군요~\"\n    }, {\n      User: {\n        nickname: \"hero\"\n      },\n      content: \"얼른 사고싶어요~\"\n    }]\n  }],\n  imagePaths: [1, 2, 3, 4],\n  postAdded: false\n}; // dummy data\n\nvar dummyPost = {\n  id: 2,\n  content: \"더미데이터임\",\n  User: {\n    id: 1,\n    nickname: \"제로초\"\n  },\n  Images: [],\n  Comments: []\n}; // action type\n\nvar ADD_POST = \"ADD_POST\"; // action creator\n\nvar addPostAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])(ADD_POST); // reducer\n\nvar reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"handleActions\"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, ADD_POST, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    // 잎에 추가를 해야 위에서 부터 추가됨\n    mainPosts: state.mainPosts.concat(dummyPost) //[dummyPost, ...state.mainPosts],\n\n  });\n}), initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsImR1bW15UG9zdCIsIkFERF9QT1NUIiwiYWRkUG9zdEFjdGlvbiIsImNyZWF0ZUFjdGlvbiIsInJlZHVjZXIiLCJoYW5kbGVBY3Rpb25zIiwic3RhdGUiLCJhY3Rpb24iLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Q0FFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLFdBQVMsRUFBRSxDQUNQO0FBQ0lDLE1BQUUsRUFBRSxDQURSO0FBRUlDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUZWO0FBTUlDLFdBQU8sRUFBRSxVQU5iO0FBT0lDLFVBQU0sRUFBRSxDQUNKO0FBQ0lDLFNBQUcsRUFDQztBQUZSLEtBREksRUFLSjtBQUNJQSxTQUFHLEVBQ0M7QUFGUixLQUxJLEVBU0o7QUFDSUEsU0FBRyxFQUNDO0FBRlIsS0FUSSxDQVBaO0FBcUJJQyxZQUFRLEVBQUUsQ0FDTjtBQUNJTCxVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFY7QUFJSUMsYUFBTyxFQUFFO0FBSmIsS0FETSxFQU9OO0FBQ0lGLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEVjtBQUlJQyxhQUFPLEVBQUU7QUFKYixLQVBNO0FBckJkLEdBRE8sRUFxQ1A7QUFDSUgsTUFBRSxFQUFFLENBRFI7QUFFSUMsUUFBSSxFQUFFO0FBQ0ZELFFBQUUsRUFBRSxDQURGO0FBRUZFLGNBQVEsRUFBRTtBQUZSLEtBRlY7QUFNSUMsV0FBTyxFQUFFLFVBTmI7QUFPSUMsVUFBTSxFQUFFLENBQ0o7QUFDSUMsU0FBRyxFQUNDO0FBRlIsS0FESSxFQUtKO0FBQ0lBLFNBQUcsRUFDQztBQUZSLEtBTEksRUFTSjtBQUNJQSxTQUFHLEVBQ0M7QUFGUixLQVRJLENBUFo7QUFxQklDLFlBQVEsRUFBRSxDQUNOO0FBQ0lMLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEVjtBQUlJQyxhQUFPLEVBQUU7QUFKYixLQURNLEVBT047QUFDSUYsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBUE07QUFyQmQsR0FyQ08sQ0FETTtBQTJFakJJLFlBQVUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0EzRUs7QUE0RWpCQyxXQUFTLEVBQUU7QUE1RU0sQ0FBckIsQyxDQStFQTs7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDZFQsSUFBRSxFQUFFLENBRFU7QUFFZEcsU0FBTyxFQUFFLFFBRks7QUFHZEYsTUFBSSxFQUFFO0FBQ0ZELE1BQUUsRUFBRSxDQURGO0FBRUZFLFlBQVEsRUFBRTtBQUZSLEdBSFE7QUFPZEUsUUFBTSxFQUFFLEVBUE07QUFRZEUsVUFBUSxFQUFFO0FBUkksQ0FBbEIsQyxDQVdBOztBQUVBLElBQU1JLFFBQVEsR0FBRyxVQUFqQixDLENBRUE7O0FBRU8sSUFBTUMsYUFBYSxHQUFHQyxrRUFBWSxDQUFDRixRQUFELENBQWxDLEMsQ0FFUDs7QUFFQSxJQUFNRyxPQUFPLEdBQUdDLG1FQUFhLENBQUMsOEZBRXJCSixRQUZvQixFQUVULFVBQUNLLEtBQUQsRUFBUUMsTUFBUjtBQUFBLHlDQUNMRCxLQURLO0FBRVI7QUFDQWhCLGFBQVMsRUFBRWdCLEtBQUssQ0FBQ2hCLFNBQU4sQ0FBZ0JrQixNQUFoQixDQUF1QlIsU0FBdkIsQ0FISCxDQUlSOztBQUpRO0FBQUEsQ0FGUyxHQVN6QlgsWUFUeUIsQ0FBN0I7QUFZZWUsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucywgY3JlYXRlQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcblxuLy8gaW5pdGlhbCBzdGF0ZVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbWFpblBvc3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIBcIixcbiAgICAgICAgICAgIEltYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZ1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZ1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH5cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IFwiaGVyb1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuyWvOuluCDsgqzqs6Dsi7bslrTsmpR+XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIBcIixcbiAgICAgICAgICAgIEltYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZ1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZ1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH5cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IFwiaGVyb1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuyWvOuluCDsgqzqs6Dsi7bslrTsmpR+XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBpbWFnZVBhdGhzOiBbMSwgMiwgMywgNF0sXG4gICAgcG9zdEFkZGVkOiBmYWxzZSxcbn07XG5cbi8vIGR1bW15IGRhdGFcblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICAgIGlkOiAyLFxuICAgIGNvbnRlbnQ6IFwi642U66+4642w7J207YSw7J6EXCIsXG4gICAgVXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXG4gICAgfSxcbiAgICBJbWFnZXM6IFtdLFxuICAgIENvbW1lbnRzOiBbXSxcbn07XG5cbi8vIGFjdGlvbiB0eXBlXG5cbmNvbnN0IEFERF9QT1NUID0gXCJBRERfUE9TVFwiO1xuXG4vLyBhY3Rpb24gY3JlYXRvclxuXG5leHBvcnQgY29uc3QgYWRkUG9zdEFjdGlvbiA9IGNyZWF0ZUFjdGlvbihBRERfUE9TVCk7XG5cbi8vIHJlZHVjZXJcblxuY29uc3QgcmVkdWNlciA9IGhhbmRsZUFjdGlvbnMoXG4gICAge1xuICAgICAgICBbQUREX1BPU1RdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgLy8g7J6O7JeQIOy2lOqwgOulvCDtlbTslbwg7JyE7JeQ7IScIOu2gO2EsCDstpTqsIDrkKhcbiAgICAgICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmNvbmNhdChkdW1teVBvc3QpLFxuICAgICAgICAgICAgLy9bZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIGluaXRpYWxTdGF0ZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})
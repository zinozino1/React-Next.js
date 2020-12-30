webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, addPostRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPostRequestAction\", function() { return addPostRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ \"./node_modules/redux-actions/es/index.js\");\n\n\nvar _handleActions;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // initial state\n\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    },\n    content: \"첫 번째 게시글 #해시태그 #키키 #ㄴㄴㄴ ##adf\",\n    Images: [{\n      src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n    }, {\n      src: \"https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg\"\n    }, {\n      src: \"https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"nero\"\n      },\n      content: \"우와 개정판이 나왔군요~\"\n    }, {\n      User: {\n        nickname: \"hero\"\n      },\n      content: \"얼른 사고싶어요~\"\n    }]\n  }, {\n    id: 2,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    },\n    content: \"첫 번째 게시글\",\n    Images: [{\n      src: \"https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"nero\"\n      },\n      content: \"우와 개정판이 나왔군요~\"\n    }, {\n      User: {\n        nickname: \"hero\"\n      },\n      content: \"얼른 사고싶어요~\"\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n}; // dummy data\n\nvar dummyPost = {\n  id: 3,\n  content: \"더미데이터임\",\n  User: {\n    id: 1,\n    nickname: \"제로초\"\n  },\n  Images: [],\n  Comments: []\n}; // action type\n\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\"; // action creator\n\nvar addPostRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])(ADD_POST_REQUEST); // reducer\n\nvar reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"handleActions\"])((_handleActions = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, ADD_POST_SUCCESS, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    // 잎에 추가를 해야 위에서 부터 추가됨\n    mainPosts: state.mainPosts.concat(dummyPost) //[dummyPost, ...state.mainPosts],\n\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, ADD_POST_FAILURE, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    // 잎에 추가를 해야 위에서 부터 추가됨\n    mainPosts: state.mainPosts.concat(dummyPost) //[dummyPost, ...state.mainPosts],\n\n  });\n}), _handleActions), initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsImR1bW15UG9zdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiY3JlYXRlQWN0aW9uIiwicmVkdWNlciIsImhhbmRsZUFjdGlvbnMiLCJzdGF0ZSIsImFjdGlvbiIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxXQUFTLEVBQUUsQ0FDUDtBQUNJQyxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGVjtBQU1JQyxXQUFPLEVBQUUsK0JBTmI7QUFPSUMsVUFBTSxFQUFFLENBQ0o7QUFDSUMsU0FBRyxFQUNDO0FBRlIsS0FESSxFQUtKO0FBQ0lBLFNBQUcsRUFDQztBQUZSLEtBTEksRUFTSjtBQUNJQSxTQUFHLEVBQ0M7QUFGUixLQVRJLENBUFo7QUFxQklDLFlBQVEsRUFBRSxDQUNOO0FBQ0lMLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEVjtBQUlJQyxhQUFPLEVBQUU7QUFKYixLQURNLEVBT047QUFDSUYsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBUE07QUFyQmQsR0FETyxFQXFDUDtBQUNJSCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGVjtBQU1JQyxXQUFPLEVBQUUsVUFOYjtBQU9JQyxVQUFNLEVBQUUsQ0FDSjtBQUNJQyxTQUFHLEVBQ0M7QUFGUixLQURJLENBUFo7QUFhSUMsWUFBUSxFQUFFLENBQ047QUFDSUwsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBRE0sRUFPTjtBQUNJRixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFY7QUFJSUMsYUFBTyxFQUFFO0FBSmIsS0FQTTtBQWJkLEdBckNPLENBRE07QUFtRWpCSSxZQUFVLEVBQUUsRUFuRUs7QUFvRWpCQyxXQUFTLEVBQUU7QUFwRU0sQ0FBckIsQyxDQXVFQTs7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDZFQsSUFBRSxFQUFFLENBRFU7QUFFZEcsU0FBTyxFQUFFLFFBRks7QUFHZEYsTUFBSSxFQUFFO0FBQ0ZELE1BQUUsRUFBRSxDQURGO0FBRUZFLFlBQVEsRUFBRTtBQUZSLEdBSFE7QUFPZEUsUUFBTSxFQUFFLEVBUE07QUFRZEUsVUFBUSxFQUFFO0FBUkksQ0FBbEIsQyxDQVdBOztBQUVPLElBQU1JLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QixDLENBRVA7O0FBRU8sSUFBTUMsb0JBQW9CLEdBQUdDLGtFQUFZLENBQUNKLGdCQUFELENBQXpDLEMsQ0FFUDs7QUFFQSxJQUFNSyxPQUFPLEdBQUdDLG1FQUFhLGlJQVFwQkwsZ0JBUm9CLEVBUUQsVUFBQ00sS0FBRCxFQUFRQyxNQUFSO0FBQUEseUNBQ2JELEtBRGE7QUFFaEI7QUFDQWxCLGFBQVMsRUFBRWtCLEtBQUssQ0FBQ2xCLFNBQU4sQ0FBZ0JvQixNQUFoQixDQUF1QlYsU0FBdkIsQ0FISyxDQUloQjs7QUFKZ0I7QUFBQSxDQVJDLDZHQWNwQkcsZ0JBZG9CLEVBY0QsVUFBQ0ssS0FBRCxFQUFRQyxNQUFSO0FBQUEseUNBQ2JELEtBRGE7QUFFaEI7QUFDQWxCLGFBQVMsRUFBRWtCLEtBQUssQ0FBQ2xCLFNBQU4sQ0FBZ0JvQixNQUFoQixDQUF1QlYsU0FBdkIsQ0FISyxDQUloQjs7QUFKZ0I7QUFBQSxDQWRDLG9CQXFCekJYLFlBckJ5QixDQUE3QjtBQXdCZWlCLHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMsIGNyZWF0ZUFjdGlvbiB9IGZyb20gXCJyZWR1eC1hY3Rpb25zXCI7XG5cbi8vIGluaXRpYWwgc3RhdGVcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG1haW5Qb3N0czogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+2CpO2CpCAj44S044S044S0ICMjYWRmXCIsXG4gICAgICAgICAgICBJbWFnZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjZcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGdcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGdcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIENvbW1lbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCJuZXJvXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcImhlcm9cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLslrzrpbgg7IKs6rOg7Iu27Ja07JqUflwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAXCIsXG4gICAgICAgICAgICBJbWFnZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjZcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIENvbW1lbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCJuZXJvXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcImhlcm9cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLslrzrpbgg7IKs6rOg7Iu27Ja07JqUflwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgaW1hZ2VQYXRoczogW10sXG4gICAgcG9zdEFkZGVkOiBmYWxzZSxcbn07XG5cbi8vIGR1bW15IGRhdGFcblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICAgIGlkOiAzLFxuICAgIGNvbnRlbnQ6IFwi642U66+4642w7J207YSw7J6EXCIsXG4gICAgVXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXG4gICAgfSxcbiAgICBJbWFnZXM6IFtdLFxuICAgIENvbW1lbnRzOiBbXSxcbn07XG5cbi8vIGFjdGlvbiB0eXBlXG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcblxuLy8gYWN0aW9uIGNyZWF0b3JcblxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gY3JlYXRlQWN0aW9uKEFERF9QT1NUX1JFUVVFU1QpO1xuXG4vLyByZWR1Y2VyXG5cbmNvbnN0IHJlZHVjZXIgPSBoYW5kbGVBY3Rpb25zKFxuICAgIHtcbiAgICAgICAgLy8gW0FERF9QT1NUX1JFUVVFU1RdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgICAgLy8g7J6O7JeQIOy2lOqwgOulvCDtlbTslbwg7JyE7JeQ7IScIOu2gO2EsCDstpTqsIDrkKhcbiAgICAgICAgLy8gICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmNvbmNhdChkdW1teVBvc3QpLFxuICAgICAgICAvLyAgICAgLy9bZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICAvLyB9KSxcbiAgICAgICAgW0FERF9QT1NUX1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgLy8g7J6O7JeQIOy2lOqwgOulvCDtlbTslbwg7JyE7JeQ7IScIOu2gO2EsCDstpTqsIDrkKhcbiAgICAgICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmNvbmNhdChkdW1teVBvc3QpLFxuICAgICAgICAgICAgLy9bZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICB9KSxcbiAgICAgICAgW0FERF9QT1NUX0ZBSUxVUkVdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgLy8g7J6O7JeQIOy2lOqwgOulvCDtlbTslbwg7JyE7JeQ7IScIOu2gO2EsCDstpTqsIDrkKhcbiAgICAgICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmNvbmNhdChkdW1teVBvc3QpLFxuICAgICAgICAgICAgLy9bZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIGluaXRpYWxTdGF0ZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ \"./node_modules/redux-actions/es/index.js\");\n\n\nvar _handleActions;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // initial state\n\nvar initialState = {\n  isLoggingIn: false,\n  // 로그인 시도중\n  isLoggingOut: false,\n  // 로그아웃 시도중\n  isLoggedIn: false,\n  // 로그인 성공\n  me: null,\n  signUpData: {},\n  loginData: {}\n}; // action type\n\nvar LOG_IN_REQUEST = \"LOG_IN_REQUEST\";\nvar LOG_IN_SUCCESS = \"LOG_IN_SUCCESS\";\nvar LOG_IN_FAILURE = \"LOG_IN_FAILURE\";\nvar LOG_OUT_REQUEST = \"LOG_OUT_REQUEST\";\nvar LOG_OUT_SUCCESS = \"LOG_OUT_SUCCESS\";\nvar LOG_OUT_FAILURE = \"LOG_OUT_FAILURE\"; // action creator\n\nvar loginRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])(LOG_IN_REQUEST, function (data) {\n  return data;\n});\nvar logoutRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"createAction\"])(LOG_OUT_REQUEST); // reducer\n\nvar reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__[\"handleActions\"])((_handleActions = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_IN_REQUEST, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingIn: true\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_IN_SUCCESS, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingOut: false,\n    isLoggedIn: true,\n    me: action.data\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_IN_FAILURE, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    me: action.data\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_OUT_REQUEST, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingOut: true\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_OUT_SUCCESS, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggingOut: false,\n    isLoggedIn: false,\n    me: null\n  });\n}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_handleActions, LOG_OUT_FAILURE, function (state, action) {\n  return _objectSpread(_objectSpread({}, state), {}, {\n    isLoggedIn: false\n  });\n}), _handleActions), initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2luZ0luIiwiaXNMb2dnaW5nT3V0IiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImNyZWF0ZUFjdGlvbiIsImRhdGEiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsImhhbmRsZUFjdGlvbnMiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsYUFBVyxFQUFFLEtBREk7QUFDRztBQUNwQkMsY0FBWSxFQUFFLEtBRkc7QUFFSTtBQUNyQkMsWUFBVSxFQUFFLEtBSEs7QUFHRTtBQUNuQkMsSUFBRSxFQUFFLElBSmE7QUFLakJDLFlBQVUsRUFBRSxFQUxLO0FBTWpCQyxXQUFTLEVBQUU7QUFOTSxDQUFyQixDLENBU0E7O0FBRU8sSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCLEMsQ0FFUDs7QUFFTyxJQUFNQyxrQkFBa0IsR0FBR0Msa0VBQVksQ0FBQ1AsY0FBRCxFQUFpQixVQUFDUSxJQUFEO0FBQUEsU0FBVUEsSUFBVjtBQUFBLENBQWpCLENBQXZDO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUdGLGtFQUFZLENBQUNKLGVBQUQsQ0FBeEMsQyxDQUVQOztBQUVBLElBQU1PLE9BQU8sR0FBR0MsbUVBQWEsaUlBRXBCWCxjQUZvQixFQUVILFVBQUNZLEtBQUQsRUFBUUMsTUFBUjtBQUFBLHlDQUNYRCxLQURXO0FBRWRsQixlQUFXLEVBQUU7QUFGQztBQUFBLENBRkcsNkdBTXBCTyxjQU5vQixFQU1ILFVBQUNXLEtBQUQsRUFBUUMsTUFBUjtBQUFBLHlDQUNYRCxLQURXO0FBRWRqQixnQkFBWSxFQUFFLEtBRkE7QUFHZEMsY0FBVSxFQUFFLElBSEU7QUFJZEMsTUFBRSxFQUFFZ0IsTUFBTSxDQUFDTDtBQUpHO0FBQUEsQ0FORyw2R0FZcEJOLGNBWm9CLEVBWUgsVUFBQ1UsS0FBRCxFQUFRQyxNQUFSO0FBQUEseUNBQ1hELEtBRFc7QUFFZGYsTUFBRSxFQUFFZ0IsTUFBTSxDQUFDTDtBQUZHO0FBQUEsQ0FaRyw2R0FnQnBCTCxlQWhCb0IsRUFnQkYsVUFBQ1MsS0FBRCxFQUFRQyxNQUFSO0FBQUEseUNBQ1pELEtBRFk7QUFFZmpCLGdCQUFZLEVBQUU7QUFGQztBQUFBLENBaEJFLDZHQW9CcEJTLGVBcEJvQixFQW9CRixVQUFDUSxLQUFELEVBQVFDLE1BQVI7QUFBQSx5Q0FDWkQsS0FEWTtBQUVmakIsZ0JBQVksRUFBRSxLQUZDO0FBR2ZDLGNBQVUsRUFBRSxLQUhHO0FBSWZDLE1BQUUsRUFBRTtBQUpXO0FBQUEsQ0FwQkUsNkdBMEJwQlEsZUExQm9CLEVBMEJGLFVBQUNPLEtBQUQsRUFBUUMsTUFBUjtBQUFBLHlDQUNaRCxLQURZO0FBRWZoQixjQUFVLEVBQUU7QUFGRztBQUFBLENBMUJFLG9CQStCekJILFlBL0J5QixDQUE3QjtBQWtDZWlCLHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMsIGNyZWF0ZUFjdGlvbiB9IGZyb20gXCJyZWR1eC1hY3Rpb25zXCI7XG5cbi8vIGluaXRpYWwgc3RhdGVcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxuICAgIGlzTG9nZ2luZ091dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSwgLy8g66Gc6re47J24IOyEseqztVxuICAgIG1lOiBudWxsLFxuICAgIHNpZ25VcERhdGE6IHt9LFxuICAgIGxvZ2luRGF0YToge30sXG59O1xuXG4vLyBhY3Rpb24gdHlwZVxuXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcblxuLy8gYWN0aW9uIGNyZWF0b3JcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IGNyZWF0ZUFjdGlvbihMT0dfSU5fUkVRVUVTVCwgKGRhdGEpID0+IGRhdGEpO1xuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSBjcmVhdGVBY3Rpb24oTE9HX09VVF9SRVFVRVNUKTtcblxuLy8gcmVkdWNlclxuXG5jb25zdCByZWR1Y2VyID0gaGFuZGxlQWN0aW9ucyhcbiAgICB7XG4gICAgICAgIFtMT0dfSU5fUkVRVUVTVF06IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIFtMT0dfSU5fU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgfSksXG4gICAgICAgIFtMT0dfSU5fRkFJTFVSRV06IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBtZTogYWN0aW9uLmRhdGEsXG4gICAgICAgIH0pLFxuICAgICAgICBbTE9HX09VVF9SRVFVRVNUXTogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGlzTG9nZ2luZ091dDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIFtMT0dfT1VUX1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgbWU6IG51bGwsXG4gICAgICAgIH0pLFxuICAgICAgICBbTE9HX09VVF9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIGluaXRpYWxTdGF0ZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})
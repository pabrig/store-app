"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProductCard.tsx":
/*!************************************!*\
  !*** ./components/ProductCard.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/pablorigalli/Proyects/store_app/components/ProductCard.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ProductCard = function ProductCard(_ref) {\n  _s();\n\n  var product = _ref.product,\n      onAdd = _ref.onAdd;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isVisible = _useState[0],\n      setIsVisible = _useState[1];\n\n  function over(e) {\n    setIsVisible(true);\n  }\n\n  function out(e) {\n    setIsVisible(false);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n      height: 300,\n      backgroundColor: \"primary.100\",\n      borderRadius: \"md\",\n      pos: \"relative\",\n      padding: 10,\n      spacing: 10,\n      boxShadow: \"xl\",\n      p: \"6\",\n      rounded: \"md\",\n      cursor: \"pointer\",\n      _hover: {\n        boxShadow: \"dark-lg\"\n      },\n      onMouseOver: over,\n      onMouseOut: out,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n        spacing: 1,\n        maxW: \"330px\",\n        w: \"full\",\n        objectFit: \"cover\",\n        borderRadius: \"md\",\n        mt: 10,\n        _hover: {\n          mt: \"-10\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n          width: \"100%\",\n          maxHeight: 128,\n          objectFit: \"cover\",\n          borderRadius: \"md\",\n          src: product.image\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n          color: \"primary.800\",\n          fontWeight: 500,\n          children: product.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n          fontSize: \"sm\",\n          children: product.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n        alignItems: \"flex-end\",\n        direction: \"row\",\n        justifyContent: \"space-between\",\n        display: isVisible ? \"block\" : \"none\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n          color: \"green.500\",\n          fontSize: \"sm\",\n          fontWeight: \"500\",\n          children: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.default)(product.price)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n          size: \"sm\",\n          bg: \"primary.400\",\n          fontWeight: \"bold\",\n          color: \"white\",\n          boxShadow: \"xl\",\n          variant: \"solid\",\n          onClick: function onClick() {\n            return onAdd(product);\n          },\n          children: \"Agregar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)]\n    }, product.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProductCard, \"QjDZesRvLCmcrZLxgN677nXnVLA=\");\n\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNELE9BQUQsQ0FBWDtBQUFBLFdBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkNGO0FBQUEsT0FPT0EsT0FBTyxDQUFDYSxFQVBmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWlFRCxDQTFFRDs7R0FBTWQ7O0tBQUFBO0FBMkVOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4P2U2ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBTdGFjaywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCBwYXJzZUN1cnJlbmN5IGZyb20gXCIuLi91dGlscy9oZWxwZXJzXCI7XG5cbmludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcbiAgcHJvZHVjdDogUHJvZHVjdDtcbiAgb25BZGQ6IChwcm9kdWN0OiBQcm9kdWN0KSA9PiB2b2lkO1xufVxuXG5jb25zdCBQcm9kdWN0Q2FyZDogRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoeyBwcm9kdWN0LCBvbkFkZCB9KSA9PiB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gb3ZlcihlKSB7XG4gICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIG91dChlKSB7XG4gICAgc2V0SXNWaXNpYmxlKGZhbHNlKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RhY2tcbiAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cInByaW1hcnkuMTAwXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxuICAgICAgICBwb3M9e1wicmVsYXRpdmVcIn1cbiAgICAgICAgcGFkZGluZz17MTB9XG4gICAgICAgIHNwYWNpbmc9ezEwfVxuICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgIGJveFNoYWRvdz1cInhsXCJcbiAgICAgICAgcD1cIjZcIlxuICAgICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgX2hvdmVyPXt7IGJveFNoYWRvdzogXCJkYXJrLWxnXCIgfX1cbiAgICAgICAgb25Nb3VzZU92ZXI9e292ZXJ9XG4gICAgICAgIG9uTW91c2VPdXQ9e291dH1cbiAgICAgID5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICBtYXhXPXtcIjMzMHB4XCJ9XG4gICAgICAgICAgdz17XCJmdWxsXCJ9XG4gICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIm1kXCJcbiAgICAgICAgICBtdD17MTB9XG4gICAgICAgICAgX2hvdmVyPXt7IG10OiBcIi0xMFwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBtYXhIZWlnaHQ9ezEyOH1cbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIm1kXCJcbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFRleHQgY29sb3I9XCJwcmltYXJ5LjgwMFwiIGZvbnRXZWlnaHQ9ezUwMH0+XG4gICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIlxuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICBkaXNwbGF5PXtpc1Zpc2libGUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JlZW4uNTAwXCIgZm9udFNpemU9XCJzbVwiIGZvbnRXZWlnaHQ9XCI1MDBcIj5cbiAgICAgICAgICAgIHtwYXJzZUN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgYmc9XCJwcmltYXJ5LjQwMFwiXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGJveFNoYWRvdz1cInhsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzb2xpZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZChwcm9kdWN0KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZ3JlZ2FyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJTdGFjayIsIlRleHQiLCJJbWFnZSIsInBhcnNlQ3VycmVuY3kiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3QiLCJvbkFkZCIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsIm92ZXIiLCJlIiwib3V0IiwiYm94U2hhZG93IiwibXQiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductCard.tsx\n");

/***/ })

});
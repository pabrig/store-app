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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _ProductImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductImage */ \"./components/ProductImage.tsx\");\n/* harmony import */ var _ProductDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductDescription */ \"./components/ProductDescription.tsx\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/pablorigalli/Proyects/store_app/components/ProductCard.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ProductCard = function ProductCard(_ref) {\n  _s();\n\n  var product = _ref.product,\n      _onAdd = _ref.onAdd;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isVisible = _useState[0],\n      setIsVisible = _useState[1];\n\n  function over() {\n    setIsVisible(true);\n  }\n\n  function out() {\n    setIsVisible(false);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n      height: 310,\n      bgGradient: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"linear(to-t, gray.300, gray.100)\", \"linear(to-l, gray.700, gray.600)\"),\n      rounded: \"3xl\",\n      mt: 10,\n      pos: \"relative\",\n      boxShadow: \"xl\",\n      cursor: \"pointer\",\n      _hover: {\n        boxShadow: \"2xl\",\n        transition: \"0.8s\"\n      },\n      onMouseOver: over,\n      onMouseOut: out,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n        direction: \"row\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ProductImage__WEBPACK_IMPORTED_MODULE_1__.default, {\n          image: product.image\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ProductDescription__WEBPACK_IMPORTED_MODULE_2__.default, {\n          title: product.title,\n          description: product.description,\n          price: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.default)(product.price),\n          isVisible: true,\n          onAdd: function onAdd() {\n            return _onAdd(product);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, product.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProductCard, \"JbHVt7+WpNjzY8zQGa0oEbn2L6g=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue];\n});\n\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFPQSxJQUFNTyxXQUFpQyxHQUFHLFNBQXBDQSxXQUFvQyxPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLEtBQVk7O0FBQ2hFLGtCQUFrQ1IsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQUEsTUFBT1MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxXQUFTQyxJQUFULEdBQWdCO0FBQ2RELElBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRDs7QUFDRCxXQUFTRSxHQUFULEdBQWU7QUFDYkYsSUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEOztBQUNELHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFDRSxZQUFNLEVBQUUsR0FEVjtBQUVFLGdCQUFVLEVBQUVSLG1FQUFpQixDQUMzQixrQ0FEMkIsRUFFM0Isa0NBRjJCLENBRi9CO0FBTUUsYUFBTyxFQUFDLEtBTlY7QUFPRSxRQUFFLEVBQUUsRUFQTjtBQVFFLFNBQUcsRUFBRSxVQVJQO0FBVUUsZUFBUyxFQUFDLElBVlo7QUFXRSxZQUFNLEVBQUMsU0FYVDtBQVlFLFlBQU0sRUFBRTtBQUNOVyxRQUFBQSxTQUFTLEVBQUUsS0FETDtBQUVOQyxRQUFBQSxVQUFVLEVBQUU7QUFGTixPQVpWO0FBZ0JFLGlCQUFXLEVBQUVILElBaEJmO0FBaUJFLGdCQUFVLEVBQUVDLEdBakJkO0FBQUEsNkJBbUJFLDhEQUFDLG1EQUFEO0FBQU8saUJBQVMsRUFBQyxLQUFqQjtBQUF1QixzQkFBYyxFQUFDLFFBQXRDO0FBQStDLGtCQUFVLEVBQUMsUUFBMUQ7QUFBQSxtQkFDRyxHQURILGVBRUUsOERBQUMsa0RBQUQ7QUFBYyxlQUFLLEVBQUVMLE9BQU8sQ0FBQ1E7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUV5QyxHQUZ6QyxlQUdFLDhEQUFDLHdEQUFEO0FBQ0UsZUFBSyxFQUFFUixPQUFPLENBQUNTLEtBRGpCO0FBRUUscUJBQVcsRUFBRVQsT0FBTyxDQUFDVSxXQUZ2QjtBQUdFLGVBQUssRUFBRVosdURBQWEsQ0FBQ0UsT0FBTyxDQUFDVyxLQUFULENBSHRCO0FBSUUsbUJBQVMsTUFKWDtBQUtFLGVBQUssRUFBRTtBQUFBLG1CQUFNVixNQUFLLENBQUNELE9BQUQsQ0FBWDtBQUFBO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQkYsT0FTT0EsT0FBTyxDQUFDWSxFQVRmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW1DRCxDQTVDRDs7R0FBTWI7VUFhY0o7OztLQWJkSTtBQTZDTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLnRzeD9lNmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0YWNrLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCBQcm9kdWN0SW1hZ2UgZnJvbSBcIi4vUHJvZHVjdEltYWdlXCI7XG5pbXBvcnQgUHJvZHVjdERlc2NyaXB0aW9uIGZyb20gXCIuL1Byb2R1Y3REZXNjcmlwdGlvblwiO1xuaW1wb3J0IHBhcnNlQ3VycmVuY3kgZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcblxuaW50ZXJmYWNlIFByb2R1Y3RDYXJkUHJvcHMge1xuICBwcm9kdWN0OiBQcm9kdWN0O1xuICBvbkFkZDogKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkOiBGQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7IHByb2R1Y3QsIG9uQWRkIH0pID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBvdmVyKCkge1xuICAgIHNldElzVmlzaWJsZSh0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBvdXQoKSB7XG4gICAgc2V0SXNWaXNpYmxlKGZhbHNlKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RhY2tcbiAgICAgICAgaGVpZ2h0PXszMTB9XG4gICAgICAgIGJnR3JhZGllbnQ9e3VzZUNvbG9yTW9kZVZhbHVlKFxuICAgICAgICAgIFwibGluZWFyKHRvLXQsIGdyYXkuMzAwLCBncmF5LjEwMClcIixcbiAgICAgICAgICBcImxpbmVhcih0by1sLCBncmF5LjcwMCwgZ3JheS42MDApXCJcbiAgICAgICAgKX1cbiAgICAgICAgcm91bmRlZD1cIjN4bFwiXG4gICAgICAgIG10PXsxMH1cbiAgICAgICAgcG9zPXtcInJlbGF0aXZlXCJ9XG4gICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgYm94U2hhZG93PVwieGxcIlxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgYm94U2hhZG93OiBcIjJ4bFwiLFxuICAgICAgICAgIHRyYW5zaXRpb246IFwiMC44c1wiXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VPdmVyPXtvdmVyfVxuICAgICAgICBvbk1vdXNlT3V0PXtvdXR9XG4gICAgICA+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPFByb2R1Y3RJbWFnZSBpbWFnZT17cHJvZHVjdC5pbWFnZX0gLz57XCIgXCJ9XG4gICAgICAgICAgPFByb2R1Y3REZXNjcmlwdGlvblxuICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIHByaWNlPXtwYXJzZUN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfVxuICAgICAgICAgICAgaXNWaXNpYmxlXG4gICAgICAgICAgICBvbkFkZD17KCkgPT4gb25BZGQocHJvZHVjdCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0YWNrIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJQcm9kdWN0SW1hZ2UiLCJQcm9kdWN0RGVzY3JpcHRpb24iLCJwYXJzZUN1cnJlbmN5IiwiUHJvZHVjdENhcmQiLCJwcm9kdWN0Iiwib25BZGQiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJvdmVyIiwib3V0IiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductCard.tsx\n");

/***/ })

});
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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Banner */ \"./components/Banner.jsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data */ \"./data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [destinos, setDestinos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchDestinos = async ()=>{\n            const response = await fetch(\"https://links.papareact.com/pyp\");\n            const dataDestinos = await response.json();\n            setDestinos(dataDestinos);\n        };\n    }, []);\n    const { titulo  } = _data__WEBPACK_IMPORTED_MODULE_6__.MainInfo;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Clone Airbnb\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielghiaroni/Desktop/Dev/clone-airbnb/pages/index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielghiaroni/Desktop/Dev/clone-airbnb/pages/index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gabrielghiaroni/Desktop/Dev/clone-airbnb/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gabrielghiaroni/Desktop/Dev/clone-airbnb/pages/index.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gabrielghiaroni/Desktop/Dev/clone-airbnb/pages/index.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-7xl mx-auto px-8 md:px-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"pt-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl md:text-4xl font-semibold pb-5\",\n                            children: titulo\n                        }, void 0, false, {\n                            fileName: \"/Users/gabrielghiaroni/Desktop/Dev/clone-airbnb/pages/index.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        destinos.map((item, index)=>{\n                            const {} = item;\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gabrielghiaroni/Desktop/Dev/clone-airbnb/pages/index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gabrielghiaroni/Desktop/Dev/clone-airbnb/pages/index.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gabrielghiaroni/Desktop/Dev/clone-airbnb/pages/index.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielghiaroni/Desktop/Dev/clone-airbnb/pages/index.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"SYJz1cBOi2FYnnWqddwoRVeRjiM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNoQjtBQUNjO0FBQ0E7QUFDQTtBQUNQO0FBRXBCLFNBQVNPLE9BQVE7O0lBRTlCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUE7SUFFeENDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUyxnQkFBZ0IsVUFBWTtZQUNoQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTUMsZUFBZSxNQUFNRixTQUFTRyxJQUFJO1lBQ3hDTCxZQUFZSTtRQUNkO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTSxFQUFDRSxPQUFNLEVBQUMsR0FBR1QsMkNBQVFBO0lBRXpCLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2Ysa0RBQUlBOztrQ0FDSCw4REFBQ2dCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDbEIsMERBQU1BOzs7OzswQkFDUCw4REFBQ0UsMERBQU1BOzs7OzswQkFDUCw4REFBQ2lCO2dCQUFLTCxXQUFVOzBCQUNkLDRFQUFDTTtvQkFBUU4sV0FBVTs7c0NBQ2pCLDhEQUFDTzs0QkFBR1AsV0FBVTtzQ0FBMkNGOzs7Ozs7d0JBQ3hEUCxTQUFTaUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7NEJBQzdCLE1BQU0sRUFBRSxHQUFHRDt3QkFDYjs7Ozs7Ozs7Ozs7OzBCQUdKLDhEQUFDdEIsMERBQU1BOzs7Ozs7Ozs7OztBQUdiLENBQUM7R0FqQ3VCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5uZXInO1xuaW1wb3J0IHsgTWFpbkluZm8gfSBmcm9tICcuLi9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoKSB7XG5cbiAgY29uc3QgW2Rlc3Rpbm9zLCBzZXREZXN0aW5vc10gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEZXN0aW5vcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9weXAnKTtcbiAgICAgIGNvbnN0IGRhdGFEZXN0aW5vcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldERlc3Rpbm9zKGRhdGFEZXN0aW5vcylcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3Qge3RpdHVsb30gPSBNYWluSW5mbztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNsb25lIEFpcmJuYjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxCYW5uZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nbWF4LXctN3hsIG14LWF1dG8gcHgtOCBtZDpweC0xNic+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHQtNic+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgbWQ6dGV4dC00eGwgZm9udC1zZW1pYm9sZCBwYi01Jz57dGl0dWxvfTwvaDI+XG4gICAgICAgICAge2Rlc3Rpbm9zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHt9ID0gaXRlbTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiSGVhZGVyIiwiRm9vdGVyIiwiQmFubmVyIiwiTWFpbkluZm8iLCJIb21lIiwiZGVzdGlub3MiLCJzZXREZXN0aW5vcyIsImZldGNoRGVzdGlub3MiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YURlc3Rpbm9zIiwianNvbiIsInRpdHVsbyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwic2VjdGlvbiIsImgyIiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});
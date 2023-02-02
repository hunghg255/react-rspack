self['hotUpdate']('main', {
"./src/App.jsx": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __webpack_require__.interopRequire(__webpack_require__("./node_modules/react/index.js"));
var _reactSvg = __webpack_require__.interopRequire(__webpack_require__("./src/assets/react.svg"));
__webpack_require__("./src/App.css");
var _antd = __webpack_require__("./node_modules/antd/es/index.js");
var RefreshRuntime = __webpack_require__('/react-refresh');
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = globalThis.$RefreshReg$;
prevRefreshSig = globalThis.$RefreshSig$;
globalThis.$RefreshReg$ = (type, id)=>{
    RefreshRuntime.register(type, "src/App.jsx_" + id);
};
globalThis.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function App() {
    _s();
    const [count, setCount] = (0, _react.useState)(0);
    (0, _react.useEffect)(()=>{
        _antd.message.success('Hello asd');
    }, []);
    return _react.default.createElement("div", {
        className: "App",
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 15,
            columnNumber: 5
        },
        __self: this
    }, _react.default.createElement(_antd.DatePicker, {
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 16,
            columnNumber: 7
        },
        __self: this
    }), _react.default.createElement("div", {
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 17,
            columnNumber: 7
        },
        __self: this
    }, _react.default.createElement("a", {
        href: "https://reactjs.org",
        target: "_blank",
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 18,
            columnNumber: 9
        },
        __self: this
    }, _react.default.createElement("img", {
        src: _reactSvg.default,
        className: "logo react",
        alt: "React logo",
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 19,
            columnNumber: 11
        },
        __self: this
    }))), _react.default.createElement("h1", {
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 22,
            columnNumber: 7
        },
        __self: this
    }, "Rspack + React asdas asdasd"), "\xe1dasda", _react.default.createElement("div", {
        className: "card",
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 24,
            columnNumber: 7
        },
        __self: this
    }, _react.default.createElement("button", {
        onClick: ()=>setCount((count)=>count + 1),
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 25,
            columnNumber: 9
        },
        __self: this
    }, "count is ", count), _react.default.createElement("p", {
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 28,
            columnNumber: 9
        },
        __self: this
    }, "Edit ", _react.default.createElement("code", {
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 29,
            columnNumber: 16
        },
        __self: this
    }, "src/App.jsx"), " and save to test HMR")), _react.default.createElement("p", {
        className: "read-the-docs",
        __source: {
            fileName: "</Users/kengzone/Documents/project/rspack-webpack/src/App.jsx>",
            lineNumber: 32,
            columnNumber: 7
        },
        __self: this
    }, "Click on the Rspack and React logos to learn more"));
}
_s(App, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
_c = App;
var _default = App;
var _c;
$RefreshReg$(_c, "App");
var RefreshRuntime = __webpack_require__('/react-refresh');
globalThis.$RefreshReg$ = prevRefreshReg;
globalThis.$RefreshSig$ = prevRefreshSig;
module.hot.accept();
RefreshRuntime.queueUpdate();
},

});
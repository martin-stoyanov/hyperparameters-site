module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ChartArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_chartjs_2__ = __webpack_require__("react-chartjs-2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_chartjs_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_chartjs_2__);
var _jsxFileName = "/Users/Martin/PycharmProjects/hyperjsSite/components/ChartArray.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ChartArray =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChartArray, _React$Component);

  function ChartArray() {
    _classCallCheck(this, ChartArray);

    return _possibleConstructorReturn(this, (ChartArray.__proto__ || Object.getPrototypeOf(ChartArray)).apply(this, arguments));
  }

  _createClass(ChartArray, [{
    key: "render",
    value: function render() {
      function isIn2D(int, array) {
        var isIn = false;

        for (var i = 0; i < array.length; i += 1) {
          if (Number(array[i][0]) === int) {
            isIn = true;
          }
        }

        return isIn;
      }

      var array = this.props.array;
      var labels = this.props.labels;
      labels = JSON.parse(labels);
      var count = array.reduce(function (n, val) {
        var result = n;
        result[val] = result[val] === undefined ? 1 : result[val] + 1;
        return result;
      }, {}); // makes object into 2d array

      var sorted = [];

      for (var n in count) {
        sorted.push([n, count[n]]);
      }
      /* // of array doesn't have an int, then add [int, 0] to array
      for (let i = 0; i < 5; i += 1) {
        if (!isIn2D(i, sorted)) {
          sorted.push([`${i}`, 0]);
        }
      }
      */
      // sort the array


      sorted.sort(function (a, b) {
        return a[0] - b[0];
      });
      var data = {
        labels: labels,
        datasets: [{
          label: 'after 500 iterations',
          backgroundColor: 'rgba(101, 199, 216,0.4)',
          borderColor: 'rgba(101, 199, 216,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(117,16,218,0.4)',
          hoverBorderColor: 'rgba(117,16,218,1)',
          data: [sorted[0][1], sorted[1][1]]
        }]
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_chartjs_2__["Bar"], {
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }));
    }
  }]);

  return ChartArray;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChartArray);

/***/ }),

/***/ "./components/Doc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet__ = __webpack_require__("grommet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DocProperty__ = __webpack_require__("./components/DocProperty.js");
var _jsxFileName = "/Users/Martin/PycharmProjects/hyperjsSite/components/Doc.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Doc =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Doc, _React$Component);

  function Doc() {
    _classCallCheck(this, Doc);

    return _possibleConstructorReturn(this, (Doc.__proto__ || Object.getPrototypeOf(Doc)).apply(this, arguments));
  }

  _createClass(Doc, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          desc = _props.desc,
          name = _props.name,
          example = _props.example,
          examples = _props.examples,
          text = _props.text,
          nav = _props.nav,
          footer = _props.footer;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Layout__["a" /* default */], {
        title: this.props.name,
        description: desc && desc.description,
        nav: nav,
        footer: footer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        pad: {
          horizontal: 'large',
          top: 'large'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        direction: "row-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        margin: {
          vertical: 'large'
        },
        basis: "1/2",
        align: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Heading"], {
        level: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, name)), desc ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Paragraph"], {
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, desc.description) : null, text ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Paragraph"], {
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, text) : null, desc && desc.availableAt ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Button"], {
        href: desc.availableAt.url,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, typeof desc.availableAt.badge === 'string' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        alt: "Example badge",
        src: desc.availableAt.badge,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }) : desc.availableAt.badge) : null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        flex: true,
        pad: {
          vertical: 'large'
        },
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, example))), desc ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        pad: {
          horizontal: 'large',
          bottom: 'large'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, desc.usage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        pad: "large",
        round: "large",
        margin: "small",
        background: "light-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Heading"], {
        margin: "none",
        level: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Usage")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Markdown"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, desc.usage)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        pad: "large",
        round: "large",
        background: "light-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, desc.properties ? desc.properties.map(function (property) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__DocProperty__["a" /* default */], {
          key: property.name,
          property: property,
          examples: examples[property.name],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        });
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Text"], {
        color: "light-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "No properties"))) : null, children);
    }
  }]);

  return Doc;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


Doc.propTypes = {
  desc: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  example: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  examples: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
Doc.defaultProps = {
  desc: undefined,
  example: null,
  examples: {},
  text: undefined
};

/***/ }),

/***/ "./components/DocProperty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet__ = __webpack_require__("grommet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet__);
var _jsxFileName = "/Users/Martin/PycharmProjects/hyperjsSite/components/DocProperty.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DocProperty =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DocProperty, _React$Component);

  function DocProperty() {
    _classCallCheck(this, DocProperty);

    return _possibleConstructorReturn(this, (DocProperty.__proto__ || Object.getPrototypeOf(DocProperty)).apply(this, arguments));
  }

  _createClass(DocProperty, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          property = _props.property,
          examples = _props.examples;
      var example;

      if (examples) {
        example = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
          flex: true,
          align: "end",
          margin: {
            vertical: 'medium'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }, examples);
      }

      var defaultValue;

      if (property.defaultValue) {
        defaultValue = " (".concat(property.defaultValue, ")");
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        key: property.name,
        direction: "row-responsive",
        justify: "between",
        align: "start",
        border: "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        basis: "1/2",
        margin: {
          right: 'large'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Heading"], {
        level: 3,
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "".concat(property.name).concat(property.required ? ' *' : ''))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Markdown"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "``".concat(property.description, "``"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        flex: true,
        align: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, property.format, defaultValue))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, example));
    }
  }]);

  return DocProperty;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(DocProperty, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    examples: undefined
  }
});
Object.defineProperty(DocProperty, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    property: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    examples: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }
});


/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet__ = __webpack_require__("grommet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet__);
var _jsxFileName = "/Users/Martin/PycharmProjects/hyperjsSite/components/Footer.js";



var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Box"], {
    align: "center",
    pad: "xsmall",
    background: "dark-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Paragraph"], {
    style: {
      maxWidth: '500px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Button"], {
    href: "https://github.com/atanasster/hyperjs",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "HyperJS"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Box"], {
    align: "center",
    background: "dark-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Paragraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Copyright (c) 2018 Atanas Stoyanov, Martin Stoyanov")));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet__ = __webpack_require__("grommet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/Martin/PycharmProjects/hyperjsSite/components/Header.js";




var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Box"], {
    direction: "row",
    pad: "medium",
    align: "center",
    justify: "between",
    background: "brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Box"], {
    direction: "row",
    justify: "left",
    gap: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Heading"], {
    margin: "none",
    level: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "HyperSearch"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Text"], {
    margin: {
      top: 'xsmall'
    },
    size: "xsmall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Hyperparameter optimization for Javascript")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Box"], {
    direction: "row",
    justify: "right",
    gap: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/tutorials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Tutorials")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Gallery"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet__ = __webpack_require__("grommet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "/Users/Martin/PycharmProjects/hyperjsSite/components/Layout.js";






var Layout = function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children,
      description = _ref.description;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Grommet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/utils/spaceToArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_RandomState__ = __webpack_require__("./src/utils/RandomState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_pyll_stochastic__ = __webpack_require__("./src/pyll/stochastic.js");


/* harmony default export */ __webpack_exports__["a"] = (function (space) {
  var NSamples = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var seed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var arr = [];

  for (var i = 0; i < NSamples; i += 1) {
    arr.push(Object(__WEBPACK_IMPORTED_MODULE_1__src_pyll_stochastic__["k" /* sample */])(space, {
      rng: new __WEBPACK_IMPORTED_MODULE_0__src_utils_RandomState__["a" /* default */](seed)
    }));
  }

  return arr;
});

/***/ }),

/***/ "./pages/choice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet__ = __webpack_require__("grommet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Doc__ = __webpack_require__("./components/Doc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__("./src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_utils_spaceToArray__ = __webpack_require__("./components/utils/spaceToArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ChartArray__ = __webpack_require__("./components/ChartArray.js");
var _jsxFileName = "/Users/Martin/PycharmProjects/hyperjsSite/pages/choice.js";





 // import KDEChartArray from '../components/KDEChartArray';

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Doc__["a" /* default */], {
    name: "randint",
    example: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["Box"], {
      basis: "medium",
      pad: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ChartArray__["a" /* default */], {
      array: Object(__WEBPACK_IMPORTED_MODULE_4__components_utils_spaceToArray__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__src__["a" /* default */].choice('choice', ['cat', 'dog'])),
      labels: "[\"cat\", \"dog\"]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    })),
    desc: {
      description: 'Return a random integer in the range [0, upper)',
      properties: [{
        name: 'label',
        description: 'a name for the expression'
      }, {
        name: 'upper',
        description: 'The random integer can be anywhere from 0 to upper (not included)',
        required: false
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  });
});

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__ = __webpack_require__("./src/pyll/stochastic.js");

var HyperoptJS = {
  choice: function choice(label, options) {
    return new __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__["a" /* Choice */](label, {
      options: options
    });
  },
  randint: function randint(label, upper) {
    return new __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__["i" /* Randint */](label, {
      upper: upper
    });
  },
  uniform: function uniform(label, low, high) {
    return new __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__["j" /* Uniform */](label, {
      low: low,
      high: high
    });
  },
  quniform: function quniform(label, low, high, q) {
    return new __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__["h" /* QUniform */](label, {
      low: low,
      high: high,
      q: q
    });
  },
  loguniform: function loguniform(label, low, high) {
    return new __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__["c" /* LogUniform */](label, {
      low: low,
      high: high
    });
  },
  qloguniform: function qloguniform(label, low, high, q) {
    return new __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__["f" /* QLogUniform */](label, {
      low: low,
      high: high,
      q: q
    });
  },
  normal: function normal(label, mu, sigma) {
    return new __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__["d" /* Normal */](label, {
      mu: mu,
      sigma: sigma
    });
  },
  qnormal: function qnormal(label, mu, sigma, q) {
    return new __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__["g" /* QNormal */](label, {
      mu: mu,
      sigma: sigma,
      q: q
    });
  },
  lognormal: function lognormal(label, mu, sigma) {
    return new __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__["b" /* LogNormal */](label, {
      mu: mu,
      sigma: sigma
    });
  },
  qlognormal: function qlognormal(label, mu, sigma, q) {
    return new __WEBPACK_IMPORTED_MODULE_0__pyll_stochastic__["e" /* QLogNormal */](label, {
      mu: mu,
      sigma: sigma,
      q: q
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (HyperoptJS);

/***/ }),

/***/ "./src/pyll/base.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSymbol; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _gPO(o) { _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return _gPO(o); }

function _sPO(o, p) { _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return _sPO(o, p); }

function _construct(Parent, args, Class) { _construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); }; return _construct(Parent, args, Class); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }; return _wrapNativeSuper(Class); }

var NotImplementedError =
/*#__PURE__*/
function (_Error) {
  _inherits(NotImplementedError, _Error);

  function NotImplementedError() {
    _classCallCheck(this, NotImplementedError);

    return _possibleConstructorReturn(this, (NotImplementedError.__proto__ || Object.getPrototypeOf(NotImplementedError)).apply(this, arguments));
  }

  return NotImplementedError;
}(_wrapNativeSuper(Error));

var BaseSymbol =
/*#__PURE__*/
function () {
  function BaseSymbol(label, params) {
    _classCallCheck(this, BaseSymbol);

    this.label = label;
    this.params = params;
  } // eslint-disable-next-line no-unused-vars


  _createClass(BaseSymbol, [{
    key: "eval",
    value: function _eval(rng) {
      // Override this method to generate a new value
      throw new NotImplementedError(this.params);
    }
  }]);

  return BaseSymbol;
}();



/***/ }),

/***/ "./src/pyll/stochastic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Randint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Uniform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return QUniform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LogUniform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return QLogUniform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Normal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return QNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LogNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return QLogNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__("./src/pyll/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_RandomState__ = __webpack_require__("./src/utils/RandomState.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Choice =
/*#__PURE__*/
function (_BaseSymbol) {
  _inherits(Choice, _BaseSymbol);

  function Choice() {
    _classCallCheck(this, Choice);

    return _possibleConstructorReturn(this, (Choice.__proto__ || Object.getPrototypeOf(Choice)).apply(this, arguments));
  }

  _createClass(Choice, [{
    key: "eval",
    value: function _eval(rng) {
      var options = this.params.options;
      var idx = rng.randrange(0, options.length, 1);
      var option = options[idx];

      if (!Array.isArray(option)) {
        return option;
      }

      if (option.length !== 2) {
        throw new Error('Array of choice options must consist of label and value');
      }

      var value = option[1];
      return typeof value.eval === 'function' ? value.eval(rng) : value;
    }
  }]);

  return Choice;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);
var Randint =
/*#__PURE__*/
function (_BaseSymbol2) {
  _inherits(Randint, _BaseSymbol2);

  function Randint() {
    _classCallCheck(this, Randint);

    return _possibleConstructorReturn(this, (Randint.__proto__ || Object.getPrototypeOf(Randint)).apply(this, arguments));
  }

  _createClass(Randint, [{
    key: "eval",
    value: function _eval(rng) {
      return rng.randrange(0, this.params.upper, 1);
    }
  }]);

  return Randint;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);
var Uniform =
/*#__PURE__*/
function (_BaseSymbol3) {
  _inherits(Uniform, _BaseSymbol3);

  function Uniform() {
    _classCallCheck(this, Uniform);

    return _possibleConstructorReturn(this, (Uniform.__proto__ || Object.getPrototypeOf(Uniform)).apply(this, arguments));
  }

  _createClass(Uniform, [{
    key: "eval",
    value: function _eval(rng) {
      var _params = this.params,
          low = _params.low,
          high = _params.high;
      return rng.uniform(low, high);
    }
  }]);

  return Uniform;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);
var QUniform =
/*#__PURE__*/
function (_BaseSymbol4) {
  _inherits(QUniform, _BaseSymbol4);

  function QUniform() {
    _classCallCheck(this, QUniform);

    return _possibleConstructorReturn(this, (QUniform.__proto__ || Object.getPrototypeOf(QUniform)).apply(this, arguments));
  }

  _createClass(QUniform, [{
    key: "eval",
    value: function _eval(rng) {
      var _params2 = this.params,
          low = _params2.low,
          high = _params2.high,
          q = _params2.q;
      return Math.round(rng.uniform(low, high) / q) * q;
    }
  }]);

  return QUniform;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);
var LogUniform =
/*#__PURE__*/
function (_BaseSymbol5) {
  _inherits(LogUniform, _BaseSymbol5);

  function LogUniform() {
    _classCallCheck(this, LogUniform);

    return _possibleConstructorReturn(this, (LogUniform.__proto__ || Object.getPrototypeOf(LogUniform)).apply(this, arguments));
  }

  _createClass(LogUniform, [{
    key: "eval",
    value: function _eval(rng) {
      var _params3 = this.params,
          low = _params3.low,
          high = _params3.high;
      return Math.exp(rng.uniform(low, high));
    }
  }]);

  return LogUniform;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);
var QLogUniform =
/*#__PURE__*/
function (_BaseSymbol6) {
  _inherits(QLogUniform, _BaseSymbol6);

  function QLogUniform() {
    _classCallCheck(this, QLogUniform);

    return _possibleConstructorReturn(this, (QLogUniform.__proto__ || Object.getPrototypeOf(QLogUniform)).apply(this, arguments));
  }

  _createClass(QLogUniform, [{
    key: "eval",
    value: function _eval(rng) {
      var _params4 = this.params,
          low = _params4.low,
          high = _params4.high,
          q = _params4.q;
      return Math.round(Math.exp(rng.uniform(low, high)) / q) * q;
    }
  }]);

  return QLogUniform;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);
var Normal =
/*#__PURE__*/
function (_BaseSymbol7) {
  _inherits(Normal, _BaseSymbol7);

  function Normal() {
    _classCallCheck(this, Normal);

    return _possibleConstructorReturn(this, (Normal.__proto__ || Object.getPrototypeOf(Normal)).apply(this, arguments));
  }

  _createClass(Normal, [{
    key: "eval",
    value: function _eval(rng) {
      var _params5 = this.params,
          mu = _params5.mu,
          sigma = _params5.sigma;
      return rng.gauss(mu, sigma);
    }
  }]);

  return Normal;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);
var QNormal =
/*#__PURE__*/
function (_BaseSymbol8) {
  _inherits(QNormal, _BaseSymbol8);

  function QNormal() {
    _classCallCheck(this, QNormal);

    return _possibleConstructorReturn(this, (QNormal.__proto__ || Object.getPrototypeOf(QNormal)).apply(this, arguments));
  }

  _createClass(QNormal, [{
    key: "eval",
    value: function _eval(rng) {
      var _params6 = this.params,
          mu = _params6.mu,
          sigma = _params6.sigma,
          q = _params6.q;
      return Math.round(rng.gauss(mu, sigma) / q) * q;
    }
  }]);

  return QNormal;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);
var LogNormal =
/*#__PURE__*/
function (_BaseSymbol9) {
  _inherits(LogNormal, _BaseSymbol9);

  function LogNormal() {
    _classCallCheck(this, LogNormal);

    return _possibleConstructorReturn(this, (LogNormal.__proto__ || Object.getPrototypeOf(LogNormal)).apply(this, arguments));
  }

  _createClass(LogNormal, [{
    key: "eval",
    value: function _eval(rng) {
      var _params7 = this.params,
          mu = _params7.mu,
          sigma = _params7.sigma;
      return Math.exp(rng.gauss(mu, sigma));
    }
  }]);

  return LogNormal;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);
var QLogNormal =
/*#__PURE__*/
function (_BaseSymbol10) {
  _inherits(QLogNormal, _BaseSymbol10);

  function QLogNormal() {
    _classCallCheck(this, QLogNormal);

    return _possibleConstructorReturn(this, (QLogNormal.__proto__ || Object.getPrototypeOf(QLogNormal)).apply(this, arguments));
  }

  _createClass(QLogNormal, [{
    key: "eval",
    value: function _eval(rng) {
      var _params8 = this.params,
          mu = _params8.mu,
          sigma = _params8.sigma,
          q = _params8.q;
      return Math.round(Math.exp(rng.gauss(mu, sigma)) / q) * q;
    }
  }]);

  return QLogNormal;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);
var sample = function sample(space) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var rng = params.rng;

  if (!rng) {
    rng = new __WEBPACK_IMPORTED_MODULE_1__utils_RandomState__["a" /* default */]();
  }

  return space.eval(rng);
};

/***/ }),

/***/ "./src/utils/RandomState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-bitwise */
// from: https://gist.github.com/banksean/300494
// https://github.com/jrus/random-js/blob/master/random.coffee
var POW_NEG_26 = Math.pow(2, -26);
var POW_NEG_27 = Math.pow(2, -27);
var POW_32 = Math.pow(2, 32);

var RandomState =
/*#__PURE__*/
function () {
  function RandomState(seed) {
    _classCallCheck(this, RandomState);

    this.bits = {};
    this.seed = seed === undefined ? new Date().getTime() : seed;
    this.N = 624;
    this.M = 397;
    this.MATRIX_A = 0x9908b0df;
    /* constant vector a */

    this.UPPER_MASK = 0x80000000;
    /* most significant w-r bits */

    this.LOWER_MASK = 0x7fffffff;
    /* least significant r bits */

    this.mt = new Array(this.N);
    /* the array for the state vector */

    this.mti = this.N + 1;
    /* mti==N+1 means mt[N] is not initialized */

    this.initGen(this.seed);
  }
  /* initializes mt[N] with a seed */


  _createClass(RandomState, [{
    key: "initGen",
    value: function initGen(seed) {
      this.mt[0] = seed >>> 0;

      for (this.mti = 1; this.mti < this.N; this.mti += 1) {
        var s = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
        this.mt[this.mti] = // eslint-disable-next-line no-mixed-operators
        (((s & 0xffff0000) >>> 16) * 1812433253 << 16) + (s & 0x0000ffff) * 1812433253 + this.mti;
        /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */

        /* In the previous versions, MSBs of the seed affect   */

        /* only MSBs of the array mt[].                        */

        /* 2002/01/09 modified by Makoto Matsumoto             */

        this.mt[this.mti] >>>= 0;
        /* for >32 bit machines */
      }

      this.next_gauss = null;
    }
  }, {
    key: "randint",
    value: function randint() {
      var y;
      var mag01 = [0x0, this.MATRIX_A];
      /* mag01[x] = x * MATRIX_A  for x=0,1 */

      if (this.mti >= this.N) {
        /* generate N words at one time */
        var kk;

        if (this.mti === this.N + 1) {
          /* if initGen() has not been called, */
          this.initGen(5489);
        }
        /* a default initial seed is used */


        for (kk = 0; kk < this.N - this.M; kk += 1) {
          y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
          this.mt[kk] = this.mt[kk + this.M] ^ y >>> 1 ^ mag01[y & 0x1];
        }

        for (; kk < this.N - 1; kk += 1) {
          y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
          this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ y >>> 1 ^ mag01[y & 0x1];
        }

        y = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
        this.mt[this.N - 1] = this.mt[this.M - 1] ^ y >>> 1 ^ mag01[y & 0x1];
        this.mti = 0;
      }

      y = this.mt[this.mti += 1];
      /* Tempering */

      y ^= y >>> 11;
      y ^= y << 7 & 0x9d2c5680;
      y ^= y << 15 & 0xefc60000;
      y ^= y >>> 18;
      return y >>> 0;
    }
  }, {
    key: "random",
    value: function random() {
      // Return a random float in the range [0, 1), with a full 53
      // bits of entropy.
      var val = this.randint();
      var lowBits = val >>> 6;
      var highBits = val >>> 5;
      return (highBits + lowBits * POW_NEG_26) * POW_NEG_27;
    }
  }, {
    key: "randbelow",
    value: function randbelow(upperBound) {
      var lg = function lg(x) {
        return Math.LOG2E * Math.log(x + 1e-10) >> 0;
      };

      if (upperBound <= 0x100000000) {
        var r = upperBound;
        var bits = this.bits[upperBound] || (this.bits[upperBound] = lg(upperBound - 1) + 1); // memoize values for `bits`

        while (r >= upperBound) {
          r = this.randint() >>> 32 - bits;

          if (r < 0) {
            r += POW_32;
          }
        }

        return r;
      }

      return this.randint() % upperBound;
    }
  }, {
    key: "randrange",
    value: function randrange(start, stop, step) {
      // Return a random integer N in range `[start...stop] by step`
      if (stop === undefined) {
        return this.randbelow(start);
      } else if (!step) {
        return start + this.randbelow(stop - start);
      }

      return start + step * this.randbelow(Math.floor((stop - start) / step));
    }
  }, {
    key: "gauss",
    value: function gauss() {
      var mu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var sigma = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      // Gaussian distribution. `mu` is the mean, and `sigma` is the standard
      // deviation. Notes:
      //   * uses the "polar method"
      //   * we generate pairs; keep one in a cache for next time
      var z = this.next_gauss;

      if (z != null) {
        this.next_gauss = null;
      } else {
        var s;
        var u;
        var v;

        while (!s || !(s < 1)) {
          u = 2 * this.random() - 1;
          v = 2 * this.random() - 1;
          s = u * u + v * v;
        }

        var w = Math.sqrt(-2 * Math.log(s) / s);
        z = u * w;
        this.next_gauss = v * w;
      }

      return mu + z * sigma; // Alias for the `gauss` function
    }
  }, {
    key: "uniform",
    value: function uniform(a, b) {
      // Return a random floating point number N such that a <= N <= b for
      // a <= b and b <= N <= a for b < a.
      return a + this.random() * (b - a);
    }
  }]);

  return RandomState;
}();



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/choice.js");


/***/ }),

/***/ "grommet":
/***/ (function(module, exports) {

module.exports = require("grommet");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ })

/******/ });
//# sourceMappingURL=choice.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(//db.onlinewebfonts.com/c/123c7e674188c97798dd39cd41ff2d85?family=Brown+Regular);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: 'Brown Regular', sans-serif;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Bungee Shade', serif;\r\n  font-size: 4.8rem;\r\n  line-height: 4.6rem;\r\n  color: #484848;\r\n}\r\n\r\n/* body {\r\n  color: hsla(0, 0%, 38%, 1);\r\n} */\r\n/* #container {\r\n  height: 100vh;\r\n  width: 100vh;\r\n} */\r\n#nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 32px;\r\n  width: 100vw;\r\n  height: 72px;\r\n  background-color: hsla(0, 0%, 22%, 1);\r\n}\r\n\r\n#nav > div {\r\n  font-size: 1.8rem;\r\n  color: hsl(44, 11%, 81%);\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n#nav > div:hover {\r\n  color: hsl(44, 11%, 91%);\r\n}\r\n\r\n.highlight {\r\n  position: relative;\r\n}\r\n\r\n.highlight::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 28px;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n  background: linear-gradient(\r\n    90deg,\r\n    #f2777a 0%,\r\n    #ffcc66 30%,\r\n    #66cccc 60%,\r\n    #cc99cc 90%\r\n  );\r\n}\r\n\r\n#content {\r\n  width: 100vw;\r\n  height: calc(100vh - 72px);\r\n  background-color: hsla(0, 0%, 18%, 1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.project-summary-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 400px;\r\n  width: 980px;\r\n  background-color: hsla(36, 60%, 98%, 1);\r\n  border-radius: 10px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.project-summary-text-container {\r\n  width: 57%;\r\n  padding: 32px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n.date {\r\n  margin-top: 16px;\r\n}\r\n.date-published,\r\n.date-date {\r\n  font-size: 1.6rem;\r\n  line-height: 1rem;\r\n}\r\n\r\n.date-published {\r\n  color: hsla(0, 0%, 51%, 1);\r\n}\r\n\r\n.date-date {\r\n  color: hsla(0, 0%, 38%, 1);\r\n}\r\n.summary-text {\r\n  margin-top: 18px;\r\n  color: hsla(0, 0%, 35%, 1);\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\n.btn-read-more-container {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 190px;\r\n  height: 44px;\r\n  border: 1.5px solid hsla(0, 0%, 35%, 1);\r\n  border-radius: 10px;\r\n}\r\n\r\n.btn-read-more-text {\r\n  font-size: 1.8rem;\r\n  color: hsla(0, 0%, 35%, 1);\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.project-summary-img-container {\r\n  width: 43%;\r\n  overflow: hidden;\r\n  border-radius: 0px 10px 10px 0px;\r\n}\r\n\r\n#project-summary-img-wheater {\r\n  position: relative;\r\n  left: -1025px;\r\n  top: -30px;\r\n  transform: scale(1.4);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAGA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;;GAEG;AACH;;;GAGG;AACH;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,+BAA+B;EAC/B,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,OAAO;EACP,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB;;;;;;GAMC;AACH;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,qCAAqC;EACrC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,uCAAuC;EACvC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,gBAAgB;AAClB;AACA;;EAEE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;AACA;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,uCAAuC;EACvC,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,qBAAqB;AACvB","sourcesContent":["@import url(//db.onlinewebfonts.com/c/123c7e674188c97798dd39cd41ff2d85?family=Brown+Regular);\r\n@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: 'Brown Regular', sans-serif;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Bungee Shade', serif;\r\n  font-size: 4.8rem;\r\n  line-height: 4.6rem;\r\n  color: #484848;\r\n}\r\n\r\n/* body {\r\n  color: hsla(0, 0%, 38%, 1);\r\n} */\r\n/* #container {\r\n  height: 100vh;\r\n  width: 100vh;\r\n} */\r\n#nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 32px;\r\n  width: 100vw;\r\n  height: 72px;\r\n  background-color: hsla(0, 0%, 22%, 1);\r\n}\r\n\r\n#nav > div {\r\n  font-size: 1.8rem;\r\n  color: hsl(44, 11%, 81%);\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n#nav > div:hover {\r\n  color: hsl(44, 11%, 91%);\r\n}\r\n\r\n.highlight {\r\n  position: relative;\r\n}\r\n\r\n.highlight::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 28px;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n  background: linear-gradient(\r\n    90deg,\r\n    #f2777a 0%,\r\n    #ffcc66 30%,\r\n    #66cccc 60%,\r\n    #cc99cc 90%\r\n  );\r\n}\r\n\r\n#content {\r\n  width: 100vw;\r\n  height: calc(100vh - 72px);\r\n  background-color: hsla(0, 0%, 18%, 1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.project-summary-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 400px;\r\n  width: 980px;\r\n  background-color: hsla(36, 60%, 98%, 1);\r\n  border-radius: 10px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.project-summary-text-container {\r\n  width: 57%;\r\n  padding: 32px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\n.date {\r\n  margin-top: 16px;\r\n}\r\n.date-published,\r\n.date-date {\r\n  font-size: 1.6rem;\r\n  line-height: 1rem;\r\n}\r\n\r\n.date-published {\r\n  color: hsla(0, 0%, 51%, 1);\r\n}\r\n\r\n.date-date {\r\n  color: hsla(0, 0%, 38%, 1);\r\n}\r\n.summary-text {\r\n  margin-top: 18px;\r\n  color: hsla(0, 0%, 35%, 1);\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\n.btn-read-more-container {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 190px;\r\n  height: 44px;\r\n  border: 1.5px solid hsla(0, 0%, 35%, 1);\r\n  border-radius: 10px;\r\n}\r\n\r\n.btn-read-more-text {\r\n  font-size: 1.8rem;\r\n  color: hsla(0, 0%, 35%, 1);\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.project-summary-img-container {\r\n  width: 43%;\r\n  overflow: hidden;\r\n  border-radius: 0px 10px 10px 0px;\r\n}\r\n\r\n#project-summary-img-wheater {\r\n  position: relative;\r\n  left: -1025px;\r\n  top: -30px;\r\n  transform: scale(1.4);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/html/about.html":
/*!*****************************!*\
  !*** ./src/html/about.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<h1>about</h1>\r\n<p>i tell you something</p>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/portfolio.html":
/*!*********************************!*\
  !*** ./src/html/portfolio.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<h1>portfolio</h1>\r\n<p>i tell you something</p>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/projects.html":
/*!********************************!*\
  !*** ./src/html/projects.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/example.png */ "./src/images/example.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"project-summary-container\">\r\n    <div class=\"project-summary-text-container\">\r\n        <div class=\"summary-header\"><h2>WEATHER APP</h2></div>\r\n        <div class=\"date\"><span class=\"date-published\">PUBLISHED: </span><span class=\"date-date\">MARS 2022</span></div>\r\n        <div class=\"summary-text\">I'll just write some text here and see how it turns out. Looking good.I'll just write some text here and see how it turns out. Looking good.I'll just write some text here and see how it turns out. Looking good.I'll just write some text here and see how it turns out. Looking good. Hiho!</div>\r\n        <div class=\"btn-read-more-container\"><div class=\"btn-read-more-text\">Read more >></div></div>\r\n    </div>\r\n    <div class=\"project-summary-img-container\"><img id=\"project-summary-img-wheater\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img></div>\r\n</div>\r\n\r\n<div class=\"project-summary-container\">\r\n    <div class=\"project-summary-text-container\">\r\n        <div class=\"summary-header\"><h2>WEATHER APP</h2></div>\r\n        <div class=\"date\"><span class=\"date-published\">PUBLISHED: </span><span class=\"date-date\">MARS 2022</span></div>\r\n        <div class=\"summary-text\">I'll just write some text here and see how it turns out. Looking good.I'll just write some text here and see how it turns out. Looking good.I'll just write some text here and see how it turns out. Looking good.I'll just write some text here and see how it turns out. Looking good. Hiho!</div>\r\n        <div class=\"btn-read-more-container\"><div class=\"btn-read-more-text\">Read more >></div></div>\r\n    </div>\r\n    <div class=\"project-summary-img-container\"><img id=\"project-summary-img-wheater\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img></div>\r\n</div>\r\n\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/example.png":
/*!********************************!*\
  !*** ./src/images/example.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ee958bf3833ad4420e9a.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_projects_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/projects.html */ "./src/html/projects.html");
/* harmony import */ var _html_portfolio_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html/portfolio.html */ "./src/html/portfolio.html");
/* harmony import */ var _html_about_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html/about.html */ "./src/html/about.html");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





class DisplayController {
  constructor() {
    this.content = document.getElementById('content');
    this.navLinks = document.querySelectorAll('#nav > div');
    this.navLinks.forEach((link) =>
      link.addEventListener('click', this.navLinkSelected)
    );
  }

  navLinkSelected = (e) => {
    this.highlightSelected(e);
    main.showPage(e.target.id);
  };

  highlightSelected(e) {
    this.navLinks.forEach((link) => link.classList.remove('highlight'));
    e.target.classList.add('highlight');
  }

  renderPage(content) {
    this.content.innerHTML = content;
  }
}

class Main {
  constructor() {
    this.html = { projects: _html_projects_html__WEBPACK_IMPORTED_MODULE_0__["default"], portfolio: _html_portfolio_html__WEBPACK_IMPORTED_MODULE_1__["default"], about: _html_about_html__WEBPACK_IMPORTED_MODULE_2__["default"] };
    this.displayController = new DisplayController();
    this.showPage('projects');
  }

  showPage(name) {
    const content = this.html[`${name}`];
    this.displayController.renderPage(content);
  }
}

const main = new Main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQjRDO0FBQ0U7QUFDUjtBQUNoQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUSx3RUFBVyxxRUFBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEtBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9odG1sL2Fib3V0Lmh0bWwiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9odG1sL3BvcnRmb2xpby5odG1sIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9zcmMvaHRtbC9wcm9qZWN0cy5odG1sIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzEyM2M3ZTY3NDE4OGM5Nzc5OGRkMzljZDQxZmYyZDg1P2ZhbWlseT1Ccm93bitSZWd1bGFyKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnVuZ2VlK1NoYWRlJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQnJvd24gUmVndWxhcicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIFNoYWRlJywgc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDQuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0LjZyZW07XFxyXFxuICBjb2xvcjogIzQ4NDg0ODtcXHJcXG59XFxyXFxuXFxyXFxuLyogYm9keSB7XFxyXFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMzglLCAxKTtcXHJcXG59ICovXFxyXFxuLyogI2NvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZoO1xcclxcbn0gKi9cXHJcXG4jbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiA3MnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMjIlLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiA+IGRpdiB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGNvbG9yOiBoc2woNDQsIDExJSwgODElKTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1vdXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiA+IGRpdjpob3ZlciB7XFxyXFxuICBjb2xvcjogaHNsKDQ0LCAxMSUsIDkxJSk7XFxyXFxufVxcclxcblxcclxcbi5oaWdobGlnaHQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDI4cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgOTBkZWcsXFxyXFxuICAgICNmMjc3N2EgMCUsXFxyXFxuICAgICNmZmNjNjYgMzAlLFxcclxcbiAgICAjNjZjY2NjIDYwJSxcXHJcXG4gICAgI2NjOTljYyA5MCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcycHgpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTglLCAxKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDk4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgzNiwgNjAlLCA5OCUsIDEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDU3JTtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxufVxcclxcbi5kYXRlLXB1Ymxpc2hlZCxcXHJcXG4uZGF0ZS1kYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlLXB1Ymxpc2hlZCB7XFxyXFxuICBjb2xvcjogaHNsYSgwLCAwJSwgNTElLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtZGF0ZSB7XFxyXFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMzglLCAxKTtcXHJcXG59XFxyXFxuLnN1bW1hcnktdGV4dCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxOHB4O1xcclxcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDM1JSwgMSk7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVhZC1tb3JlLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxOTBweDtcXHJcXG4gIGhlaWdodDogNDRweDtcXHJcXG4gIGJvcmRlcjogMS41cHggc29saWQgaHNsYSgwLCAwJSwgMzUlLCAxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVhZC1tb3JlLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMzUlLCAxKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1pbWctY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA0MyU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXN1bW1hcnktaW1nLXdoZWF0ZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTEwMjVweDtcXHJcXG4gIHRvcDogLTMwcHg7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBOztHQUVHO0FBQ0g7OztHQUdHO0FBQ0g7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEI7Ozs7OztHQU1DO0FBQ0g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKC8vZGIub25saW5ld2ViZm9udHMuY29tL2MvMTIzYzdlNjc0MTg4Yzk3Nzk4ZGQzOWNkNDFmZjJkODU/ZmFtaWx5PUJyb3duK1JlZ3VsYXIpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZStTaGFkZSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0Jyb3duIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZScsIHNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA0LjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogNC42cmVtO1xcclxcbiAgY29sb3I6ICM0ODQ4NDg7XFxyXFxufVxcclxcblxcclxcbi8qIGJvZHkge1xcclxcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDM4JSwgMSk7XFxyXFxufSAqL1xcclxcbi8qICNjb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2aDtcXHJcXG59ICovXFxyXFxuI25hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogNzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDIyJSwgMSk7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBkaXYge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogaHNsKDQ0LCAxMSUsIDgxJSk7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBkaXY6aG92ZXIge1xcclxcbiAgY29sb3I6IGhzbCg0NCwgMTElLCA5MSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyOHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDkwZGVnLFxcclxcbiAgICAjZjI3NzdhIDAlLFxcclxcbiAgICAjZmZjYzY2IDMwJSxcXHJcXG4gICAgIzY2Y2NjYyA2MCUsXFxyXFxuICAgICNjYzk5Y2MgOTAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MnB4KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDE4JSwgMSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIHdpZHRoOiA5ODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMzYsIDYwJSwgOTglLCAxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1NyU7XFxyXFxuICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbn1cXHJcXG4uZGF0ZS1wdWJsaXNoZWQsXFxyXFxuLmRhdGUtZGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1wdWJsaXNoZWQge1xcclxcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDUxJSwgMSk7XFxyXFxufVxcclxcblxcclxcbi5kYXRlLWRhdGUge1xcclxcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDM4JSwgMSk7XFxyXFxufVxcclxcbi5zdW1tYXJ5LXRleHQge1xcclxcbiAgbWFyZ2luLXRvcDogMThweDtcXHJcXG4gIGNvbG9yOiBoc2xhKDAsIDAlLCAzNSUsIDEpO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTkwcHg7XFxyXFxuICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIGhzbGEoMCwgMCUsIDM1JSwgMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDM1JSwgMSk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktaW1nLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNDMlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy13aGVhdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC0xMDI1cHg7XFxyXFxuICB0b3A6IC0zMHB4O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGgxPmFib3V0PC9oMT5cXHJcXG48cD5pIHRlbGwgeW91IHNvbWV0aGluZzwvcD5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGgxPnBvcnRmb2xpbzwvaDE+XFxyXFxuPHA+aSB0ZWxsIHlvdSBzb21ldGhpbmc8L3A+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9leGFtcGxlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3VtbWFyeS1oZWFkZXJcXFwiPjxoMj5XRUFUSEVSIEFQUDwvaDI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj48c3BhbiBjbGFzcz1cXFwiZGF0ZS1wdWJsaXNoZWRcXFwiPlBVQkxJU0hFRDogPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJkYXRlLWRhdGVcXFwiPk1BUlMgMjAyMjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN1bW1hcnktdGV4dFxcXCI+SSdsbCBqdXN0IHdyaXRlIHNvbWUgdGV4dCBoZXJlIGFuZCBzZWUgaG93IGl0IHR1cm5zIG91dC4gTG9va2luZyBnb29kLkknbGwganVzdCB3cml0ZSBzb21lIHRleHQgaGVyZSBhbmQgc2VlIGhvdyBpdCB0dXJucyBvdXQuIExvb2tpbmcgZ29vZC5JJ2xsIGp1c3Qgd3JpdGUgc29tZSB0ZXh0IGhlcmUgYW5kIHNlZSBob3cgaXQgdHVybnMgb3V0LiBMb29raW5nIGdvb2QuSSdsbCBqdXN0IHdyaXRlIHNvbWUgdGV4dCBoZXJlIGFuZCBzZWUgaG93IGl0IHR1cm5zIG91dC4gTG9va2luZyBnb29kLiBIaWhvITwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLXJlYWQtbW9yZS1jb250YWluZXJcXFwiPjxkaXYgY2xhc3M9XFxcImJ0bi1yZWFkLW1vcmUtdGV4dFxcXCI+UmVhZCBtb3JlID4+PC9kaXY+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktaW1nLWNvbnRhaW5lclxcXCI+PGltZyBpZD1cXFwicHJvamVjdC1zdW1tYXJ5LWltZy13aGVhdGVyXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48L2ltZz48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN1bW1hcnktaGVhZGVyXFxcIj48aDI+V0VBVEhFUiBBUFA8L2gyPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+PHNwYW4gY2xhc3M9XFxcImRhdGUtcHVibGlzaGVkXFxcIj5QVUJMSVNIRUQ6IDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiZGF0ZS1kYXRlXFxcIj5NQVJTIDIwMjI8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW1tYXJ5LXRleHRcXFwiPkknbGwganVzdCB3cml0ZSBzb21lIHRleHQgaGVyZSBhbmQgc2VlIGhvdyBpdCB0dXJucyBvdXQuIExvb2tpbmcgZ29vZC5JJ2xsIGp1c3Qgd3JpdGUgc29tZSB0ZXh0IGhlcmUgYW5kIHNlZSBob3cgaXQgdHVybnMgb3V0LiBMb29raW5nIGdvb2QuSSdsbCBqdXN0IHdyaXRlIHNvbWUgdGV4dCBoZXJlIGFuZCBzZWUgaG93IGl0IHR1cm5zIG91dC4gTG9va2luZyBnb29kLkknbGwganVzdCB3cml0ZSBzb21lIHRleHQgaGVyZSBhbmQgc2VlIGhvdyBpdCB0dXJucyBvdXQuIExvb2tpbmcgZ29vZC4gSGlobyE8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1yZWFkLW1vcmUtY29udGFpbmVyXFxcIj48ZGl2IGNsYXNzPVxcXCJidG4tcmVhZC1tb3JlLXRleHRcXFwiPlJlYWQgbW9yZSA+PjwvZGl2PjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWltZy1jb250YWluZXJcXFwiPjxpbWcgaWQ9XFxcInByb2plY3Qtc3VtbWFyeS1pbWctd2hlYXRlclxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+PC9pbWc+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHByb2plY3RzIGZyb20gJy4vaHRtbC9wcm9qZWN0cy5odG1sJztcclxuaW1wb3J0IHBvcnRmb2xpbyBmcm9tICcuL2h0bWwvcG9ydGZvbGlvLmh0bWwnO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9odG1sL2Fib3V0Lmh0bWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcblxyXG5jbGFzcyBEaXNwbGF5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgdGhpcy5uYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuYXYgPiBkaXYnKTtcclxuICAgIHRoaXMubmF2TGlua3MuZm9yRWFjaCgobGluaykgPT5cclxuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubmF2TGlua1NlbGVjdGVkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5hdkxpbmtTZWxlY3RlZCA9IChlKSA9PiB7XHJcbiAgICB0aGlzLmhpZ2hsaWdodFNlbGVjdGVkKGUpO1xyXG4gICAgbWFpbi5zaG93UGFnZShlLnRhcmdldC5pZCk7XHJcbiAgfTtcclxuXHJcbiAgaGlnaGxpZ2h0U2VsZWN0ZWQoZSkge1xyXG4gICAgdGhpcy5uYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpKTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyUGFnZShjb250ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE1haW4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5odG1sID0geyBwcm9qZWN0cywgcG9ydGZvbGlvLCBhYm91dCB9O1xyXG4gICAgdGhpcy5kaXNwbGF5Q29udHJvbGxlciA9IG5ldyBEaXNwbGF5Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5zaG93UGFnZSgncHJvamVjdHMnKTtcclxuICB9XHJcblxyXG4gIHNob3dQYWdlKG5hbWUpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmh0bWxbYCR7bmFtZX1gXTtcclxuICAgIHRoaXMuZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyUGFnZShjb250ZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
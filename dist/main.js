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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --body-background-color: hsl(0, 0%, 85%);\r\n  --header-color: hsl(0, 0%, 28%);\r\n  --link-color: hsl(216, 37%, 42%);\r\n  --text-background-color: hsl(0, 0%, 94%);\r\n  --image-desc-color: hsl(0, 0%, 51%);\r\n  --text-published-color: hsl(0, 0%, 51%);\r\n  --text-published-date-color: hsl(0, 0%, 38%);\r\n  --text-paragraph-color: hsl(0, 0%, 35%);\r\n  --btn-read-more-background-color: hsl(273, 9%, 32%);\r\n  --btn-read-more-text-color: hsl(44, 11%, 81%);\r\n  --btn-read-more-hover-color: hsl(0, 0%, 100%);\r\n  --nav-background-color: hsl(273, 9%, 24%);\r\n  --nav-background-bright-color: hsl(273, 9%, 34%);\r\n  --nav-link-text-color: hsl(44, 11%, 81%);\r\n  --nav-link-text-hover-color: hsl(44, 11%, 91%);\r\n  --nav-link-text-underline-color: linear-gradient(\r\n    90deg,\r\n    hsl(359, 83%, 71%) 0%,\r\n    hsl(40, 100%, 70%) 30%,\r\n    hsl(180, 50%, 60%) 60%,\r\n    hsl(300, 33%, 70%) 90%\r\n  );\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: 'Brown Regular', sans-serif;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-background-color);\r\n  min-height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  color: var(--header-color);\r\n}\r\n\r\nh1 {\r\n  font-size: 7.2rem;\r\n  line-height: 6.6rem;\r\n}\r\nh2 {\r\n  font-size: 4.8rem;\r\n  line-height: 4.4rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 2.8rem;\r\n  line-height: 2.6rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\na {\r\n  color: var(--link-color);\r\n  text-decoration: none;\r\n}\r\n\r\nnav {\r\n  background-color: var(--nav-background-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  height: 80px;\r\n}\r\n\r\n.navlink {\r\n  color: var(--nav-link-text-color);\r\n  font-size: 1.8rem;\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.navlink:hover {\r\n  color: var(--nav-link-text-hover-color);\r\n}\r\n\r\n.navlink-highlight {\r\n  position: relative;\r\n}\r\n\r\n.navlink-highlight::before {\r\n  background: var(--nav-link-text-underline-color);\r\n  content: '';\r\n  position: absolute;\r\n  top: 28px;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 40px;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.project-summary-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  /* flex-wrap: wrap; */\r\n  height: 400px;\r\n  width: 980px;\r\n  border-radius: 2px;\r\n}\r\n\r\n.project-summary-text-container {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px;\r\n  gap: 40px;\r\n}\r\n\r\n.project-summary-header {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-read-more {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 150px;\r\n  height: 44px;\r\n  border-radius: 2px;\r\n  background: var(--btn-read-more-background-color);\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.btn-read-more-text {\r\n  font-size: 1.8rem;\r\n  color: var(--text-background-color);\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.btn-read-more:hover {\r\n  background-color: var(--nav-background-bright-color);\r\n}\r\n\r\n.project-summary-img-container {\r\n  width: 50%;\r\n  overflow: hidden;\r\n  border-radius: 0px 2px 2px 0px;\r\n}\r\n\r\n#project-summary-img-weather {\r\n  position: relative;\r\n  left: -550px;\r\n  top: -230px;\r\n  transform: scale(0.85);\r\n}\r\n\r\n#project-summary-img-this-site {\r\n  position: relative;\r\n  transform: scale(1);\r\n}\r\n\r\n.about-container {\r\n  width: 980px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 40px;\r\n}\r\n\r\n.nail-img-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.about-text,\r\n.project-summary-container,\r\n.article-container {\r\n  background-color: var(--text-background-color);\r\n}\r\n\r\n.about-text {\r\n  padding: 40px;\r\n  border-radius: 2px;\r\n  width: 450px;\r\n}\r\n\r\n.article-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 980px;\r\n  border-radius: 2px;\r\n  padding: 64px;\r\n  gap: 40px;\r\n}\r\n\r\n.article-header {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 2px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-text {\r\n  color: var(--image-desc-color);\r\n  /* margin-top: 12px; */\r\n  text-align: center;\r\n}\r\n\r\n.article-text {\r\n  padding: 0px 20px;\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\n.article-img-text,\r\n.date-published,\r\n.date-date {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.date-published {\r\n  color: var(--text-published-color);\r\n}\r\n\r\n.date-date {\r\n  color: var(--text-published-date-color);\r\n}\r\n\r\n.about-text,\r\n.project-summary-text,\r\n.article-text {\r\n  color: var(--text-paragraph-color);\r\n}\r\n\r\n.about-text,\r\n.project-summary-text {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\nul {\r\n  margin-left: 30px;\r\n}\r\nli {\r\n  margin-bottom: 10px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(//db.onlinewebfonts.com/c/123c7e674188c97798dd39cd41ff2d85?family=Brown+Regular);\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --body-background-color: hsl(0, 0%, 85%);\r\n  --header-color: hsl(0, 0%, 28%);\r\n  --link-color: hsl(216, 37%, 42%);\r\n  --text-background-color: hsl(0, 0%, 94%);\r\n  --image-desc-color: hsl(0, 0%, 51%);\r\n  --text-published-color: hsl(0, 0%, 51%);\r\n  --text-published-date-color: hsl(0, 0%, 38%);\r\n  --text-paragraph-color: hsl(0, 0%, 35%);\r\n  --btn-read-more-background-color: hsl(273, 9%, 32%);\r\n  --btn-read-more-text-color: hsl(44, 11%, 81%);\r\n  --btn-read-more-hover-color: hsl(0, 0%, 100%);\r\n  --nav-background-color: hsl(273, 9%, 24%);\r\n  --nav-background-bright-color: hsl(273, 9%, 34%);\r\n  --nav-link-text-color: hsl(44, 11%, 81%);\r\n  --nav-link-text-hover-color: hsl(44, 11%, 91%);\r\n  --nav-link-text-underline-color: linear-gradient(\r\n    90deg,\r\n    hsl(359, 83%, 71%) 0%,\r\n    hsl(40, 100%, 70%) 30%,\r\n    hsl(180, 50%, 60%) 60%,\r\n    hsl(300, 33%, 70%) 90%\r\n  );\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: 'Brown Regular', sans-serif;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-background-color);\r\n  min-height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  color: var(--header-color);\r\n}\r\n\r\nh1 {\r\n  font-size: 7.2rem;\r\n  line-height: 6.6rem;\r\n}\r\nh2 {\r\n  font-size: 4.8rem;\r\n  line-height: 4.4rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 2.8rem;\r\n  line-height: 2.6rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\na {\r\n  color: var(--link-color);\r\n  text-decoration: none;\r\n}\r\n\r\nnav {\r\n  background-color: var(--nav-background-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  height: 80px;\r\n}\r\n\r\n.navlink {\r\n  color: var(--nav-link-text-color);\r\n  font-size: 1.8rem;\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.navlink:hover {\r\n  color: var(--nav-link-text-hover-color);\r\n}\r\n\r\n.navlink-highlight {\r\n  position: relative;\r\n}\r\n\r\n.navlink-highlight::before {\r\n  background: var(--nav-link-text-underline-color);\r\n  content: '';\r\n  position: absolute;\r\n  top: 28px;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 40px;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.project-summary-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  /* flex-wrap: wrap; */\r\n  height: 400px;\r\n  width: 980px;\r\n  border-radius: 2px;\r\n}\r\n\r\n.project-summary-text-container {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px;\r\n  gap: 40px;\r\n}\r\n\r\n.project-summary-header {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-read-more {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 150px;\r\n  height: 44px;\r\n  border-radius: 2px;\r\n  background: var(--btn-read-more-background-color);\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.btn-read-more-text {\r\n  font-size: 1.8rem;\r\n  color: var(--text-background-color);\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.btn-read-more:hover {\r\n  background-color: var(--nav-background-bright-color);\r\n}\r\n\r\n.project-summary-img-container {\r\n  width: 50%;\r\n  overflow: hidden;\r\n  border-radius: 0px 2px 2px 0px;\r\n}\r\n\r\n#project-summary-img-weather {\r\n  position: relative;\r\n  left: -550px;\r\n  top: -230px;\r\n  transform: scale(0.85);\r\n}\r\n\r\n#project-summary-img-this-site {\r\n  position: relative;\r\n  transform: scale(1);\r\n}\r\n\r\n.about-container {\r\n  width: 980px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 40px;\r\n}\r\n\r\n.nail-img-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.about-text,\r\n.project-summary-container,\r\n.article-container {\r\n  background-color: var(--text-background-color);\r\n}\r\n\r\n.about-text {\r\n  padding: 40px;\r\n  border-radius: 2px;\r\n  width: 450px;\r\n}\r\n\r\n.article-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 980px;\r\n  border-radius: 2px;\r\n  padding: 64px;\r\n  gap: 40px;\r\n}\r\n\r\n.article-header {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 2px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-text {\r\n  color: var(--image-desc-color);\r\n  /* margin-top: 12px; */\r\n  text-align: center;\r\n}\r\n\r\n.article-text {\r\n  padding: 0px 20px;\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\n.article-img-text,\r\n.date-published,\r\n.date-date {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.date-published {\r\n  color: var(--text-published-color);\r\n}\r\n\r\n.date-date {\r\n  color: var(--text-published-date-color);\r\n}\r\n\r\n.about-text,\r\n.project-summary-text,\r\n.article-text {\r\n  color: var(--text-paragraph-color);\r\n}\r\n\r\n.about-text,\r\n.project-summary-text {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\nul {\r\n  margin-left: 30px;\r\n}\r\nli {\r\n  margin-bottom: 10px;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/me.png */ "./src/images/me.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/nail.svg */ "./src/images/nail.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<div class=\"about-container\">\r\n    <div class=\"about-img-container\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n    </div>\r\n    <div class=\"about-text\">\r\n        <div class=\"nail-img-container\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"></img>\r\n        </div>\r\n        <p>The guy behind this site is me, <b>Kristoffer</b>. I live in Uppsala, Sweden and am currently working at Atlas Copco as an UX designer.</p>\r\n    </div>\r\n</div>";
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
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/portfolio.png */ "./src/images/portfolio.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"article-container\">\r\n  <div class=\"article-header-container\">\r\n    <div class=\"article-header\">\r\n      <h1>PORTFOLIO</h1>\r\n    </div>\r\n    <div class=\"date\">\r\n      <span class=\"date-published\">PUBLISHED: </span\r\n      ><span class=\"date-date\">MARS 2022</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"article-img-container\">\r\n        <img class=\"article-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n        <div class=\"article-img-text\">First page of my wonderful portfolio</div>\r\n  </div>\r\n  <div class=\"article-text\">\r\n    <p>I've designed user interfaces for fighter jets, trucks, buses,\r\n    production line machines and more since 2011. <a href=\"https://knightec-my.sharepoint.com/:b:/r/personal/kristoffer_johansson_knightec_se/Documents/CV%26Portfolio/kristoffer_portfolio_april2022_eng.pdf?csf=1&web=1&e=FIvnXe\" download=\"kristoffer_portfolio\">Download</a> a pdf of my portfolio for more information and maybe check out my <a href=\"https://www.linkedin.com/in/kristoffer-johansson-5460ba19a/\">LinkedIn</a>.\r\n    </p>\r\n  </div>\r\n</div>\r\n";
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

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/code.png */ "./src/images/code.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/example.png */ "./src/images/example.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<div class=\"project-summary-container\">\r\n    <div class=\"project-summary-text-container\"\">\r\n        <div class=\"project-summary-header-container\">\r\n            <div class=\"project-summary-header\"><h2>THIS WEBSITE</h2></div>\r\n            <div class=\"date\"><span class=\"date-published\">PUBLISHED: </span><span class=\"date-date\">MAY 2022</span></div>\r\n        </div>\r\n        <div class=\"project-summary-text\"><p>I did my first webdesign course back in 2003 at IT-gymnasiet in Frolunda, Gothenburg and now 19 years later I'm hungry and back for more, raawr!</p></div>\r\n        <div id=\"thiswebsite\" class=\"btn-read-more btn-read-more-text\">Read more</div>\r\n    </div>\r\n    <div class=\"project-summary-img-container\">\r\n        <img id=\"project-summary-img-this-site\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"project-summary-container\">\r\n    <div class=\"project-summary-text-container\"\">\r\n        <div class=\"project-summary-header-container\">\r\n            <div class=\"project-summary-header\"><h2>WEATHER APP</h2></div>\r\n            <div class=\"date\"><span class=\"date-published\">PUBLISHED: </span><span class=\"date-date\">MARS 2022</span></div>\r\n        </div>\r\n        <div class=\"project-summary-text\"><p>Who doesn’t visit <a href=\"https://regnradar.se/\">regnradar.se</a> \r\n            when they see a rain cloud to better understand how much rain they’re looking at?</p></div>\r\n        <div id=\"weatherapp\" class=\"btn-read-more btn-read-more-text\">Read more</div>\r\n    </div>\r\n    <div class=\"project-summary-img-container\">\r\n        <img id=\"project-summary-img-weather\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"></img>\r\n    </div>\r\n</div>\r\n\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/thiswebsite.html":
/*!***********************************!*\
  !*** ./src/html/thiswebsite.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/code.png */ "./src/images/code.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"article-container\">\r\n  <div class=\"article-header-container\">\r\n    <div class=\"article-header\">\r\n      <h1>THIS WEBSITE</h1>\r\n    </div>\r\n    <div class=\"date\">\r\n      <span class=\"date-published\">PUBLISHED: </span\r\n      ><span class=\"date-date\">MARS 2022</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"article-img-container\">\r\n        <img class=\"article-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n        <div class=\"article-img-text\">Should have stayed with the rainbow header, right?</div>\r\n  </div>\r\n  <div class=\"article-text\">\r\n    <p>\r\n      My aim is to keep this website very simple and then use it to publish stuff related to all wonderful projects in my pipeline. Let's see how it goes.\r\n    </p>\r\n  </div>\r\n  <div class=\"article-text\">\r\n    <h3>To do ✓</h3>\r\n    <p>\r\n      <ul>\r\n        <li><b>Responsive design</b></br>I'm not aiming for full compatibility with Netscape v1.0 on a pager, but one should be able to visit this website on a modern phone without any issues</li>\r\n        <li><b>Project navigation drop-down</b></br>The navigation link at the top of the pages named \"PROJECTS\" needs a dropdown that shows all published projects</li>\r\n        <li><b>Previous page functionality</b></br>So apparently doing the page with javascript has created some unplanned issues, like this one</li>\r\n      </ul>  \r\n    </p> \r\n  </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/weatherapp.html":
/*!**********************************!*\
  !*** ./src/html/weatherapp.html ***!
  \**********************************/
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
var code = "<div class=\"article-container\">\r\n  <div class=\"article-header-container\">\r\n    <div class=\"article-header\">\r\n      <h1>WEATHER APP</h1>\r\n    </div>\r\n    <div class=\"date\">\r\n      <span class=\"date-published\">PUBLISHED: </span\r\n      ><span class=\"date-date\">MARS 2022</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"article-img-container\">\r\n        <img class=\"article-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></img>\r\n        <div class=\"article-img-text\">A cold rainy day it seems :(</div>\r\n  </div>\r\n  <div class=\"article-text\">\r\n    <p>\r\n      I went into this project with a nerdy urge to create something involving precipitation radar data. Who doesn’t visit <a href=\"https://regnradar.se/\">regnradar.se</a> \r\n      when they see a rain cloud to better understand how much rain they’re looking at? Nerdy urges aside, the offical reason for creating the weather app was that my household wanted a place to easily spot time and temperature in the home. That is of course why the two white windows with current temprature and time take up a fair amount of space in the UI; they´re easily visible from different angles and distances even when shown on a small display. The graph serves as a serious decision making tool when dressing my young one for the kindergarden and the map with precipitation radar data is just a delight to look at. Visit <a href=\"https://github.com/odsmal/weather-app\">the GitHub repo</a> to see what the weather app is made of.\r\n    </p>\r\n  </div>\r\n  <div class=\"article-text\">\r\n    <h3>To do ✓</h3>\r\n    <p>\r\n      <ul>\r\n        <li><b>Color mismatch</b></br>When overlapping the wind and temprature colors look horrendous - fix!</li>\r\n        <li><b>More radar images</b></br>Make it possible to select radar images from different time episodes. The app is currently only displaying the latest image fetched from SMHI.</li>\r\n        <li><b>Radar image color scale</b></br>Add a color scale to make sense of the radar data coloring.</li>\r\n        <li><b>Responsive design</b></br>Maybe make the app responsive. It is currently hardcoded for a 1280x720 display.</li>\r\n        <li><b>Set location</b></br>Right now the geolocation is hardcoded to coordinates in the Uppsala region. Would be sweet if the user could choose location of interest.</li>\r\n      </ul>  \r\n    </p> \r\n  </div>\r\n</div>";
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

/***/ "./src/images/code.png":
/*!*****************************!*\
  !*** ./src/images/code.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/617122678248915fc73b.png";

/***/ }),

/***/ "./src/images/example.png":
/*!********************************!*\
  !*** ./src/images/example.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ee958bf3833ad4420e9a.png";

/***/ }),

/***/ "./src/images/me.png":
/*!***************************!*\
  !*** ./src/images/me.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2007ec8ac475065c33b7.png";

/***/ }),

/***/ "./src/images/nail.svg":
/*!*****************************!*\
  !*** ./src/images/nail.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e0ceab826a5773588376.svg";

/***/ }),

/***/ "./src/images/portfolio.png":
/*!**********************************!*\
  !*** ./src/images/portfolio.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/678933c910c638638f5b.png";

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
/* harmony import */ var _html_weatherapp_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html/weatherapp.html */ "./src/html/weatherapp.html");
/* harmony import */ var _html_thiswebsite_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html/thiswebsite.html */ "./src/html/thiswebsite.html");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







class DisplayController {
  constructor() {
    this.addGlobalEventListener('click', '.btn-read-more', this.linkSelected);
    this.addGlobalEventListener('click', '.navlink', this.navLinkSelected);
    this.content = document.getElementById('content');
    this.oldHighlight = document.getElementById('projects');
  }

  addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
      if (e.target.matches(selector)) callback(e);
    });
  }

  linkSelected = (e) => {
    main.selectPage(e.target.id);
  };

  navLinkSelected = (e) => {
    this.highlightSelected(e);
    this.linkSelected(e);
  };

  highlightSelected(e) {
    this.oldHighlight.classList.remove('navlink-highlight');
    e.target.classList.add('navlink-highlight');
    this.oldHighlight = e.target;
  }

  showPage(content) {
    this.content.innerHTML = content;
  }
}

class Main {
  constructor() {
    this.htmlPages = {
      projects: _html_projects_html__WEBPACK_IMPORTED_MODULE_0__["default"],
      portfolio: _html_portfolio_html__WEBPACK_IMPORTED_MODULE_1__["default"],
      about: _html_about_html__WEBPACK_IMPORTED_MODULE_2__["default"],
      weatherapp: _html_weatherapp_html__WEBPACK_IMPORTED_MODULE_3__["default"],
      thiswebsite: _html_thiswebsite_html__WEBPACK_IMPORTED_MODULE_4__["default"],
    };
    this.displayController = new DisplayController();
    this.selectPage('projects');
  }

  selectPage(name) {
    if (name in this.htmlPages) {
      const content = this.htmlPages[`${name}`];
      this.displayController.showPage(content);
    }
  }
}

const main = new Main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vc3JjL2h0bWwvYWJvdXQuaHRtbCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vc3JjL2h0bWwvcG9ydGZvbGlvLmh0bWwiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9odG1sL3Byb2plY3RzLmh0bWwiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9odG1sL3RoaXN3ZWJzaXRlLmh0bWwiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9odG1sL3dlYXRoZXJhcHAuaHRtbCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8xMjNjN2U2NzQxODhjOTc3OThkZDM5Y2Q0MWZmMmQ4NT9mYW1pbHk9QnJvd24rUmVndWxhcik7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xcclxcbiAgLS1oZWFkZXItY29sb3I6IGhzbCgwLCAwJSwgMjglKTtcXHJcXG4gIC0tbGluay1jb2xvcjogaHNsKDIxNiwgMzclLCA0MiUpO1xcclxcbiAgLS10ZXh0LWJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTQlKTtcXHJcXG4gIC0taW1hZ2UtZGVzYy1jb2xvcjogaHNsKDAsIDAlLCA1MSUpO1xcclxcbiAgLS10ZXh0LXB1Ymxpc2hlZC1jb2xvcjogaHNsKDAsIDAlLCA1MSUpO1xcclxcbiAgLS10ZXh0LXB1Ymxpc2hlZC1kYXRlLWNvbG9yOiBoc2woMCwgMCUsIDM4JSk7XFxyXFxuICAtLXRleHQtcGFyYWdyYXBoLWNvbG9yOiBoc2woMCwgMCUsIDM1JSk7XFxyXFxuICAtLWJ0bi1yZWFkLW1vcmUtYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3MywgOSUsIDMyJSk7XFxyXFxuICAtLWJ0bi1yZWFkLW1vcmUtdGV4dC1jb2xvcjogaHNsKDQ0LCAxMSUsIDgxJSk7XFxyXFxuICAtLWJ0bi1yZWFkLW1vcmUtaG92ZXItY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuICAtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjczLCA5JSwgMjQlKTtcXHJcXG4gIC0tbmF2LWJhY2tncm91bmQtYnJpZ2h0LWNvbG9yOiBoc2woMjczLCA5JSwgMzQlKTtcXHJcXG4gIC0tbmF2LWxpbmstdGV4dC1jb2xvcjogaHNsKDQ0LCAxMSUsIDgxJSk7XFxyXFxuICAtLW5hdi1saW5rLXRleHQtaG92ZXItY29sb3I6IGhzbCg0NCwgMTElLCA5MSUpO1xcclxcbiAgLS1uYXYtbGluay10ZXh0LXVuZGVybGluZS1jb2xvcjogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICA5MGRlZyxcXHJcXG4gICAgaHNsKDM1OSwgODMlLCA3MSUpIDAlLFxcclxcbiAgICBoc2woNDAsIDEwMCUsIDcwJSkgMzAlLFxcclxcbiAgICBoc2woMTgwLCA1MCUsIDYwJSkgNjAlLFxcclxcbiAgICBoc2woMzAwLCAzMyUsIDcwJSkgOTAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQnJvd24gUmVndWxhcicsIHNhbnMtc2VyaWY7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDcuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA2LjZyZW07XFxyXFxufVxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNC44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDQuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLW5hdi1saW5rLXRleHQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uYXYtbGluay10ZXh0LWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbmstaGlnaGxpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbmstaGlnaGxpZ2h0OjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbmF2LWxpbmstdGV4dC11bmRlcmxpbmUtY29sb3IpO1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDI4cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbiAgcGFkZGluZzogNDBweCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogOTgwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1yZWFkLW1vcmUge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tcmVhZC1tb3JlLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1icmlnaHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LWltZy1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggMnB4IDJweCAwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXN1bW1hcnktaW1nLXdlYXRoZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTU1MHB4O1xcclxcbiAgdG9wOiAtMjMwcHg7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy10aGlzLXNpdGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogOTgwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5haWwtaW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQsXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1jb250YWluZXIsXFxyXFxuLmFydGljbGUtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICB3aWR0aDogNDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA5ODBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDY0cHg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWctdGV4dCB7XFxyXFxuICBjb2xvcjogdmFyKC0taW1hZ2UtZGVzYy1jb2xvcik7XFxyXFxuICAvKiBtYXJnaW4tdG9wOiAxMnB4OyAqL1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWctdGV4dCxcXHJcXG4uZGF0ZS1wdWJsaXNoZWQsXFxyXFxuLmRhdGUtZGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtcHVibGlzaGVkIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXB1Ymxpc2hlZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kYXRlLWRhdGUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtcHVibGlzaGVkLWRhdGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCxcXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQsXFxyXFxuLmFydGljbGUtdGV4dCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1wYXJhZ3JhcGgtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCxcXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxubGkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsd0NBQXdDO0VBQ3hDLG1DQUFtQztFQUNuQyx1Q0FBdUM7RUFDdkMsNENBQTRDO0VBQzVDLHVDQUF1QztFQUN2QyxtREFBbUQ7RUFDbkQsNkNBQTZDO0VBQzdDLDZDQUE2QztFQUM3Qyx5Q0FBeUM7RUFDekMsZ0RBQWdEO0VBQ2hELHdDQUF3QztFQUN4Qyw4Q0FBOEM7RUFDOUM7Ozs7OztHQU1DO0FBQ0g7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpREFBaUQ7RUFDakQsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7OztFQUdFLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzEyM2M3ZTY3NDE4OGM5Nzc5OGRkMzljZDQxZmYyZDg1P2ZhbWlseT1Ccm93bitSZWd1bGFyKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1ib2R5LWJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODUlKTtcXHJcXG4gIC0taGVhZGVyLWNvbG9yOiBoc2woMCwgMCUsIDI4JSk7XFxyXFxuICAtLWxpbmstY29sb3I6IGhzbCgyMTYsIDM3JSwgNDIlKTtcXHJcXG4gIC0tdGV4dC1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk0JSk7XFxyXFxuICAtLWltYWdlLWRlc2MtY29sb3I6IGhzbCgwLCAwJSwgNTElKTtcXHJcXG4gIC0tdGV4dC1wdWJsaXNoZWQtY29sb3I6IGhzbCgwLCAwJSwgNTElKTtcXHJcXG4gIC0tdGV4dC1wdWJsaXNoZWQtZGF0ZS1jb2xvcjogaHNsKDAsIDAlLCAzOCUpO1xcclxcbiAgLS10ZXh0LXBhcmFncmFwaC1jb2xvcjogaHNsKDAsIDAlLCAzNSUpO1xcclxcbiAgLS1idG4tcmVhZC1tb3JlLWJhY2tncm91bmQtY29sb3I6IGhzbCgyNzMsIDklLCAzMiUpO1xcclxcbiAgLS1idG4tcmVhZC1tb3JlLXRleHQtY29sb3I6IGhzbCg0NCwgMTElLCA4MSUpO1xcclxcbiAgLS1idG4tcmVhZC1tb3JlLWhvdmVyLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogaHNsKDI3MywgOSUsIDI0JSk7XFxyXFxuICAtLW5hdi1iYWNrZ3JvdW5kLWJyaWdodC1jb2xvcjogaHNsKDI3MywgOSUsIDM0JSk7XFxyXFxuICAtLW5hdi1saW5rLXRleHQtY29sb3I6IGhzbCg0NCwgMTElLCA4MSUpO1xcclxcbiAgLS1uYXYtbGluay10ZXh0LWhvdmVyLWNvbG9yOiBoc2woNDQsIDExJSwgOTElKTtcXHJcXG4gIC0tbmF2LWxpbmstdGV4dC11bmRlcmxpbmUtY29sb3I6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgOTBkZWcsXFxyXFxuICAgIGhzbCgzNTksIDgzJSwgNzElKSAwJSxcXHJcXG4gICAgaHNsKDQwLCAxMDAlLCA3MCUpIDMwJSxcXHJcXG4gICAgaHNsKDE4MCwgNTAlLCA2MCUpIDYwJSxcXHJcXG4gICAgaHNsKDMwMCwgMzMlLCA3MCUpIDkwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0Jyb3duIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyB7XFxyXFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiA3LjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogNi42cmVtO1xcclxcbn1cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDQuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0LjRyZW07XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uYXYtbGluay10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbmF2LWxpbmstdGV4dC1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rLWhpZ2hsaWdodCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rLWhpZ2hsaWdodDo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5hdi1saW5rLXRleHQtdW5kZXJsaW5lLWNvbG9yKTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyOHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDQwcHggNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDk4MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVhZC1tb3JlIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiA0NHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYnRuLXJlYWQtbW9yZS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1vdXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1yZWFkLW1vcmUtdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1yZWFkLW1vcmU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQtYnJpZ2h0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1pbWctY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDJweCAycHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy13ZWF0aGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC01NTBweDtcXHJcXG4gIHRvcDogLTIzMHB4O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtc3VtbWFyeS1pbWctdGhpcy1zaXRlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDk4MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYWlsLWltZy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10ZXh0LFxcclxcbi5wcm9qZWN0LXN1bW1hcnktY29udGFpbmVyLFxcclxcbi5hcnRpY2xlLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWJhY2tncm91bmQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogOTgwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBwYWRkaW5nOiA2NHB4O1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaW1nLXRleHQge1xcclxcbiAgY29sb3I6IHZhcigtLWltYWdlLWRlc2MtY29sb3IpO1xcclxcbiAgLyogbWFyZ2luLXRvcDogMTJweDsgKi9cXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaW1nLXRleHQsXFxyXFxuLmRhdGUtcHVibGlzaGVkLFxcclxcbi5kYXRlLWRhdGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlLXB1Ymxpc2hlZCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1wdWJsaXNoZWQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1kYXRlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXB1Ymxpc2hlZC1kYXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQsXFxyXFxuLnByb2plY3Qtc3VtbWFyeS10ZXh0LFxcclxcbi5hcnRpY2xlLXRleHQge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtcGFyYWdyYXBoLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQsXFxyXFxuLnByb2plY3Qtc3VtbWFyeS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcbmxpIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL25haWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImFib3V0LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFib3V0LWltZy1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48L2ltZz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFib3V0LXRleHRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFpbC1pbWctY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiPjwvaW1nPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8cD5UaGUgZ3V5IGJlaGluZCB0aGlzIHNpdGUgaXMgbWUsIDxiPktyaXN0b2ZmZXI8L2I+LiBJIGxpdmUgaW4gVXBwc2FsYSwgU3dlZGVuIGFuZCBhbSBjdXJyZW50bHkgd29ya2luZyBhdCBBdGxhcyBDb3BjbyBhcyBhbiBVWCBkZXNpZ25lci48L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcG9ydGZvbGlvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImFydGljbGUtY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyXFxcIj5cXHJcXG4gICAgICA8aDE+UE9SVEZPTElPPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJkYXRlLXB1Ymxpc2hlZFxcXCI+UFVCTElTSEVEOiA8L3NwYW5cXHJcXG4gICAgICA+PHNwYW4gY2xhc3M9XFxcImRhdGUtZGF0ZVxcXCI+TUFSUyAyMDIyPC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1pbWctY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImFydGljbGUtaW1nXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48L2ltZz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaW1nLXRleHRcXFwiPkZpcnN0IHBhZ2Ugb2YgbXkgd29uZGVyZnVsIHBvcnRmb2xpbzwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLXRleHRcXFwiPlxcclxcbiAgICA8cD5JJ3ZlIGRlc2lnbmVkIHVzZXIgaW50ZXJmYWNlcyBmb3IgZmlnaHRlciBqZXRzLCB0cnVja3MsIGJ1c2VzLFxcclxcbiAgICBwcm9kdWN0aW9uIGxpbmUgbWFjaGluZXMgYW5kIG1vcmUgc2luY2UgMjAxMS4gPGEgaHJlZj1cXFwiaHR0cHM6Ly9rbmlnaHRlYy1teS5zaGFyZXBvaW50LmNvbS86Yjovci9wZXJzb25hbC9rcmlzdG9mZmVyX2pvaGFuc3Nvbl9rbmlnaHRlY19zZS9Eb2N1bWVudHMvQ1YlMjZQb3J0Zm9saW8va3Jpc3RvZmZlcl9wb3J0Zm9saW9fYXByaWwyMDIyX2VuZy5wZGY/Y3NmPTEmd2ViPTEmZT1GSXZuWGVcXFwiIGRvd25sb2FkPVxcXCJrcmlzdG9mZmVyX3BvcnRmb2xpb1xcXCI+RG93bmxvYWQ8L2E+IGEgcGRmIG9mIG15IHBvcnRmb2xpbyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhbmQgbWF5YmUgY2hlY2sgb3V0IG15IDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9rcmlzdG9mZmVyLWpvaGFuc3Nvbi01NDYwYmExOWEvXFxcIj5MaW5rZWRJbjwvYT4uXFxyXFxuICAgIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY29kZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZXhhbXBsZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS10ZXh0LWNvbnRhaW5lclxcXCJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWhlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1oZWFkZXJcXFwiPjxoMj5USElTIFdFQlNJVEU8L2gyPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPjxzcGFuIGNsYXNzPVxcXCJkYXRlLXB1Ymxpc2hlZFxcXCI+UFVCTElTSEVEOiA8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImRhdGUtZGF0ZVxcXCI+TUFZIDIwMjI8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS10ZXh0XFxcIj48cD5JIGRpZCBteSBmaXJzdCB3ZWJkZXNpZ24gY291cnNlIGJhY2sgaW4gMjAwMyBhdCBJVC1neW1uYXNpZXQgaW4gRnJvbHVuZGEsIEdvdGhlbmJ1cmcgYW5kIG5vdyAxOSB5ZWFycyBsYXRlciBJJ20gaHVuZ3J5IGFuZCBiYWNrIGZvciBtb3JlLCByYWF3ciE8L3A+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJ0aGlzd2Vic2l0ZVxcXCIgY2xhc3M9XFxcImJ0bi1yZWFkLW1vcmUgYnRuLXJlYWQtbW9yZS10ZXh0XFxcIj5SZWFkIG1vcmU8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1pbWctY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgaWQ9XFxcInByb2plY3Qtc3VtbWFyeS1pbWctdGhpcy1zaXRlXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48L2ltZz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS10ZXh0LWNvbnRhaW5lclxcXCJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1zdW1tYXJ5LWhlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS1oZWFkZXJcXFwiPjxoMj5XRUFUSEVSIEFQUDwvaDI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+PHNwYW4gY2xhc3M9XFxcImRhdGUtcHVibGlzaGVkXFxcIj5QVUJMSVNIRUQ6IDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiZGF0ZS1kYXRlXFxcIj5NQVJTIDIwMjI8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3Qtc3VtbWFyeS10ZXh0XFxcIj48cD5XaG8gZG9lc27igJl0IHZpc2l0IDxhIGhyZWY9XFxcImh0dHBzOi8vcmVnbnJhZGFyLnNlL1xcXCI+cmVnbnJhZGFyLnNlPC9hPiBcXHJcXG4gICAgICAgICAgICB3aGVuIHRoZXkgc2VlIGEgcmFpbiBjbG91ZCB0byBiZXR0ZXIgdW5kZXJzdGFuZCBob3cgbXVjaCByYWluIHRoZXnigJlyZSBsb29raW5nIGF0PzwvcD48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcIndlYXRoZXJhcHBcXFwiIGNsYXNzPVxcXCJidG4tcmVhZC1tb3JlIGJ0bi1yZWFkLW1vcmUtdGV4dFxcXCI+UmVhZCBtb3JlPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LXN1bW1hcnktaW1nLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8aW1nIGlkPVxcXCJwcm9qZWN0LXN1bW1hcnktaW1nLXdlYXRoZXJcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiPjwvaW1nPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2NvZGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1jb250YWluZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1oZWFkZXItY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1oZWFkZXJcXFwiPlxcclxcbiAgICAgIDxoMT5USElTIFdFQlNJVEU8L2gxPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUtcHVibGlzaGVkXFxcIj5QVUJMSVNIRUQ6IDwvc3BhblxcclxcbiAgICAgID48c3BhbiBjbGFzcz1cXFwiZGF0ZS1kYXRlXFxcIj5NQVJTIDIwMjI8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWltZy1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwiYXJ0aWNsZS1pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPjwvaW1nPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1pbWctdGV4dFxcXCI+U2hvdWxkIGhhdmUgc3RheWVkIHdpdGggdGhlIHJhaW5ib3cgaGVhZGVyLCByaWdodD88L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS10ZXh0XFxcIj5cXHJcXG4gICAgPHA+XFxyXFxuICAgICAgTXkgYWltIGlzIHRvIGtlZXAgdGhpcyB3ZWJzaXRlIHZlcnkgc2ltcGxlIGFuZCB0aGVuIHVzZSBpdCB0byBwdWJsaXNoIHN0dWZmIHJlbGF0ZWQgdG8gYWxsIHdvbmRlcmZ1bCBwcm9qZWN0cyBpbiBteSBwaXBlbGluZS4gTGV0J3Mgc2VlIGhvdyBpdCBnb2VzLlxcclxcbiAgICA8L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtdGV4dFxcXCI+XFxyXFxuICAgIDxoMz5UbyBkbyDinJM8L2gzPlxcclxcbiAgICA8cD5cXHJcXG4gICAgICA8dWw+XFxyXFxuICAgICAgICA8bGk+PGI+UmVzcG9uc2l2ZSBkZXNpZ248L2I+PC9icj5JJ20gbm90IGFpbWluZyBmb3IgZnVsbCBjb21wYXRpYmlsaXR5IHdpdGggTmV0c2NhcGUgdjEuMCBvbiBhIHBhZ2VyLCBidXQgb25lIHNob3VsZCBiZSBhYmxlIHRvIHZpc2l0IHRoaXMgd2Vic2l0ZSBvbiBhIG1vZGVybiBwaG9uZSB3aXRob3V0IGFueSBpc3N1ZXM8L2xpPlxcclxcbiAgICAgICAgPGxpPjxiPlByb2plY3QgbmF2aWdhdGlvbiBkcm9wLWRvd248L2I+PC9icj5UaGUgbmF2aWdhdGlvbiBsaW5rIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2VzIG5hbWVkIFxcXCJQUk9KRUNUU1xcXCIgbmVlZHMgYSBkcm9wZG93biB0aGF0IHNob3dzIGFsbCBwdWJsaXNoZWQgcHJvamVjdHM8L2xpPlxcclxcbiAgICAgICAgPGxpPjxiPlByZXZpb3VzIHBhZ2UgZnVuY3Rpb25hbGl0eTwvYj48L2JyPlNvIGFwcGFyZW50bHkgZG9pbmcgdGhlIHBhZ2Ugd2l0aCBqYXZhc2NyaXB0IGhhcyBjcmVhdGVkIHNvbWUgdW5wbGFubmVkIGlzc3VlcywgbGlrZSB0aGlzIG9uZTwvbGk+XFxyXFxuICAgICAgPC91bD4gIFxcclxcbiAgICA8L3A+IFxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9leGFtcGxlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImFydGljbGUtY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFydGljbGUtaGVhZGVyXFxcIj5cXHJcXG4gICAgICA8aDE+V0VBVEhFUiBBUFA8L2gxPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImRhdGUtcHVibGlzaGVkXFxcIj5QVUJMSVNIRUQ6IDwvc3BhblxcclxcbiAgICAgID48c3BhbiBjbGFzcz1cXFwiZGF0ZS1kYXRlXFxcIj5NQVJTIDIwMjI8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLWltZy1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwiYXJ0aWNsZS1pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPjwvaW1nPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS1pbWctdGV4dFxcXCI+QSBjb2xkIHJhaW55IGRheSBpdCBzZWVtcyA6KDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlLXRleHRcXFwiPlxcclxcbiAgICA8cD5cXHJcXG4gICAgICBJIHdlbnQgaW50byB0aGlzIHByb2plY3Qgd2l0aCBhIG5lcmR5IHVyZ2UgdG8gY3JlYXRlIHNvbWV0aGluZyBpbnZvbHZpbmcgcHJlY2lwaXRhdGlvbiByYWRhciBkYXRhLiBXaG8gZG9lc27igJl0IHZpc2l0IDxhIGhyZWY9XFxcImh0dHBzOi8vcmVnbnJhZGFyLnNlL1xcXCI+cmVnbnJhZGFyLnNlPC9hPiBcXHJcXG4gICAgICB3aGVuIHRoZXkgc2VlIGEgcmFpbiBjbG91ZCB0byBiZXR0ZXIgdW5kZXJzdGFuZCBob3cgbXVjaCByYWluIHRoZXnigJlyZSBsb29raW5nIGF0PyBOZXJkeSB1cmdlcyBhc2lkZSwgdGhlIG9mZmljYWwgcmVhc29uIGZvciBjcmVhdGluZyB0aGUgd2VhdGhlciBhcHAgd2FzIHRoYXQgbXkgaG91c2Vob2xkIHdhbnRlZCBhIHBsYWNlIHRvIGVhc2lseSBzcG90IHRpbWUgYW5kIHRlbXBlcmF0dXJlIGluIHRoZSBob21lLiBUaGF0IGlzIG9mIGNvdXJzZSB3aHkgdGhlIHR3byB3aGl0ZSB3aW5kb3dzIHdpdGggY3VycmVudCB0ZW1wcmF0dXJlIGFuZCB0aW1lIHRha2UgdXAgYSBmYWlyIGFtb3VudCBvZiBzcGFjZSBpbiB0aGUgVUk7IHRoZXnCtHJlIGVhc2lseSB2aXNpYmxlIGZyb20gZGlmZmVyZW50IGFuZ2xlcyBhbmQgZGlzdGFuY2VzIGV2ZW4gd2hlbiBzaG93biBvbiBhIHNtYWxsIGRpc3BsYXkuIFRoZSBncmFwaCBzZXJ2ZXMgYXMgYSBzZXJpb3VzIGRlY2lzaW9uIG1ha2luZyB0b29sIHdoZW4gZHJlc3NpbmcgbXkgeW91bmcgb25lIGZvciB0aGUga2luZGVyZ2FyZGVuIGFuZCB0aGUgbWFwIHdpdGggcHJlY2lwaXRhdGlvbiByYWRhciBkYXRhIGlzIGp1c3QgYSBkZWxpZ2h0IHRvIGxvb2sgYXQuIFZpc2l0IDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9vZHNtYWwvd2VhdGhlci1hcHBcXFwiPnRoZSBHaXRIdWIgcmVwbzwvYT4gdG8gc2VlIHdoYXQgdGhlIHdlYXRoZXIgYXBwIGlzIG1hZGUgb2YuXFxyXFxuICAgIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZS10ZXh0XFxcIj5cXHJcXG4gICAgPGgzPlRvIGRvIOKckzwvaDM+XFxyXFxuICAgIDxwPlxcclxcbiAgICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaT48Yj5Db2xvciBtaXNtYXRjaDwvYj48L2JyPldoZW4gb3ZlcmxhcHBpbmcgdGhlIHdpbmQgYW5kIHRlbXByYXR1cmUgY29sb3JzIGxvb2sgaG9ycmVuZG91cyAtIGZpeCE8L2xpPlxcclxcbiAgICAgICAgPGxpPjxiPk1vcmUgcmFkYXIgaW1hZ2VzPC9iPjwvYnI+TWFrZSBpdCBwb3NzaWJsZSB0byBzZWxlY3QgcmFkYXIgaW1hZ2VzIGZyb20gZGlmZmVyZW50IHRpbWUgZXBpc29kZXMuIFRoZSBhcHAgaXMgY3VycmVudGx5IG9ubHkgZGlzcGxheWluZyB0aGUgbGF0ZXN0IGltYWdlIGZldGNoZWQgZnJvbSBTTUhJLjwvbGk+XFxyXFxuICAgICAgICA8bGk+PGI+UmFkYXIgaW1hZ2UgY29sb3Igc2NhbGU8L2I+PC9icj5BZGQgYSBjb2xvciBzY2FsZSB0byBtYWtlIHNlbnNlIG9mIHRoZSByYWRhciBkYXRhIGNvbG9yaW5nLjwvbGk+XFxyXFxuICAgICAgICA8bGk+PGI+UmVzcG9uc2l2ZSBkZXNpZ248L2I+PC9icj5NYXliZSBtYWtlIHRoZSBhcHAgcmVzcG9uc2l2ZS4gSXQgaXMgY3VycmVudGx5IGhhcmRjb2RlZCBmb3IgYSAxMjgweDcyMCBkaXNwbGF5LjwvbGk+XFxyXFxuICAgICAgICA8bGk+PGI+U2V0IGxvY2F0aW9uPC9iPjwvYnI+UmlnaHQgbm93IHRoZSBnZW9sb2NhdGlvbiBpcyBoYXJkY29kZWQgdG8gY29vcmRpbmF0ZXMgaW4gdGhlIFVwcHNhbGEgcmVnaW9uLiBXb3VsZCBiZSBzd2VldCBpZiB0aGUgdXNlciBjb3VsZCBjaG9vc2UgbG9jYXRpb24gb2YgaW50ZXJlc3QuPC9saT5cXHJcXG4gICAgICA8L3VsPiAgXFxyXFxuICAgIDwvcD4gXFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9odG1sL3Byb2plY3RzLmh0bWwnO1xyXG5pbXBvcnQgcG9ydGZvbGlvIGZyb20gJy4vaHRtbC9wb3J0Zm9saW8uaHRtbCc7XHJcbmltcG9ydCBhYm91dCBmcm9tICcuL2h0bWwvYWJvdXQuaHRtbCc7XHJcbmltcG9ydCB3ZWF0aGVyYXBwIGZyb20gJy4vaHRtbC93ZWF0aGVyYXBwLmh0bWwnO1xyXG5pbXBvcnQgdGhpc3dlYnNpdGUgZnJvbSAnLi9odG1sL3RoaXN3ZWJzaXRlLmh0bWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcblxyXG5jbGFzcyBEaXNwbGF5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgJy5idG4tcmVhZC1tb3JlJywgdGhpcy5saW5rU2VsZWN0ZWQpO1xyXG4gICAgdGhpcy5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdjbGljaycsICcubmF2bGluaycsIHRoaXMubmF2TGlua1NlbGVjdGVkKTtcclxuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICB0aGlzLm9sZEhpZ2hsaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xyXG4gIH1cclxuXHJcbiAgYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcih0eXBlLCBzZWxlY3RvciwgY2FsbGJhY2spIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSBjYWxsYmFjayhlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbGlua1NlbGVjdGVkID0gKGUpID0+IHtcclxuICAgIG1haW4uc2VsZWN0UGFnZShlLnRhcmdldC5pZCk7XHJcbiAgfTtcclxuXHJcbiAgbmF2TGlua1NlbGVjdGVkID0gKGUpID0+IHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0U2VsZWN0ZWQoZSk7XHJcbiAgICB0aGlzLmxpbmtTZWxlY3RlZChlKTtcclxuICB9O1xyXG5cclxuICBoaWdobGlnaHRTZWxlY3RlZChlKSB7XHJcbiAgICB0aGlzLm9sZEhpZ2hsaWdodC5jbGFzc0xpc3QucmVtb3ZlKCduYXZsaW5rLWhpZ2hsaWdodCcpO1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbmF2bGluay1oaWdobGlnaHQnKTtcclxuICAgIHRoaXMub2xkSGlnaGxpZ2h0ID0gZS50YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBzaG93UGFnZShjb250ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE1haW4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5odG1sUGFnZXMgPSB7XHJcbiAgICAgIHByb2plY3RzLFxyXG4gICAgICBwb3J0Zm9saW8sXHJcbiAgICAgIGFib3V0LFxyXG4gICAgICB3ZWF0aGVyYXBwLFxyXG4gICAgICB0aGlzd2Vic2l0ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLmRpc3BsYXlDb250cm9sbGVyID0gbmV3IERpc3BsYXlDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLnNlbGVjdFBhZ2UoJ3Byb2plY3RzJyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RQYWdlKG5hbWUpIHtcclxuICAgIGlmIChuYW1lIGluIHRoaXMuaHRtbFBhZ2VzKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmh0bWxQYWdlc1tgJHtuYW1lfWBdO1xyXG4gICAgICB0aGlzLmRpc3BsYXlDb250cm9sbGVyLnNob3dQYWdlKGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
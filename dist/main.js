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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --text-article-todo: hsl(0, 0%, 85%);\r\n  --body-background-color: hsl(0, 0%, 85%);\r\n  --header-color: hsl(210, 4%, 20%);\r\n  --link-color: hsl(216, 37%, 42%);\r\n  --text-background-color: hsl(0, 0%, 95%);\r\n  --image-desc-color: hsl(0, 0%, 50%);\r\n  --text-published-color: hsl(0, 0%, 50%);\r\n  --text-published-date-color: hsl(0, 0%, 20%);\r\n  --text-paragraph-color: hsl(0, 0%, 20%);\r\n  --btn-read-more-background-color: hsl(216, 37%, 42%);\r\n  --btn-read-more-text-color: hsl(0, 0%, 85%);\r\n  --nav-background-color: hsl(215, 35%, 25%);\r\n  --nav-background-hover-color: hsl(216, 37%, 52%);\r\n  --nav-link-text-color: hsl(0, 0%, 85%);\r\n  --nav-link-text-hover-color: hsl(0, 0%, 95%);\r\n  --nav-link-text-underline-color: linear-gradient(\r\n    90deg,\r\n    hsl(359, 83%, 71%) 0%,\r\n    hsl(40, 100%, 70%) 30%,\r\n    hsl(180, 50%, 60%) 60%,\r\n    hsl(300, 33%, 70%) 90%\r\n  );\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: 'Brown Regular', sans-serif;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-background-color);\r\n  min-height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  color: var(--header-color);\r\n}\r\n\r\nh1 {\r\n  font-size: 7.2rem;\r\n  line-height: 6.6rem;\r\n}\r\nh2 {\r\n  font-size: 4.8rem;\r\n  line-height: 4.4rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 2.8rem;\r\n  line-height: 2.6rem;\r\n}\r\n\r\na {\r\n  color: var(--link-color);\r\n  text-decoration: none;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  background-color: var(--nav-background-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  min-height: 80px;\r\n}\r\n\r\n.navlink {\r\n  color: var(--nav-link-text-color);\r\n  font-size: 1.8rem;\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.navlink:hover {\r\n  color: var(--nav-link-text-hover-color);\r\n}\r\n\r\n.navlink-highlight {\r\n  position: relative;\r\n}\r\n\r\n.navlink-highlight::before {\r\n  background: var(--nav-link-text-underline-color);\r\n  content: '';\r\n  position: absolute;\r\n  top: 28px;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 40px;\r\n  padding: 40px 0px;\r\n}\r\n\r\n.project-summary-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-radius: 2px;\r\n  height: 400px;\r\n  width: 100%;\r\n  max-width: 980px;\r\n}\r\n\r\n.project-summary-text-container {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px;\r\n  gap: 40px;\r\n}\r\n\r\n.project-summary-img-container {\r\n  flex: 1;\r\n  overflow: hidden;\r\n  border-radius: 0px 2px 2px 0px;\r\n}\r\n\r\n.project-summary-header {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-read-more {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 150px;\r\n  height: 44px;\r\n  border-radius: 2px;\r\n  background: var(--btn-read-more-background-color);\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.btn-read-more-text {\r\n  font-size: 1.8rem;\r\n  color: var(--text-background-color);\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.btn-read-more:hover {\r\n  background-color: var(--nav-background-hover-color);\r\n}\r\n\r\n#project-summary-img-this-site,\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  height: 500px;\r\n  width: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n#about-img-me {\r\n  object-fit: scale-down;\r\n}\r\n\r\n#project-summary-img-this-site {\r\n  object-position: top left;\r\n}\r\n\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  object-position: top right;\r\n}\r\n\r\n.project-summary-text-container,\r\n.article-container {\r\n  background-color: var(--text-background-color);\r\n}\r\n\r\n.article-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  max-width: 980px;\r\n  border-radius: 2px;\r\n  padding: 64px;\r\n  gap: 40px;\r\n}\r\n\r\n.article-header {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-container {\r\n  margin-left: -64px;\r\n  margin-right: -64px;\r\n}\r\n\r\n.article-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 2px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-text {\r\n  color: var(--image-desc-color);\r\n  text-align: center;\r\n}\r\n\r\n.article-text,\r\n.article-text-todo {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\n.article-text {\r\n  padding: 0px 20px;\r\n}\r\n\r\n.article-text-todo {\r\n  background-color: var(--text-article-todo);\r\n  padding: 64px;\r\n}\r\n\r\n.article-img-text,\r\n.date-published,\r\n.date-date {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.date-published,\r\n.date-date {\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.date-published {\r\n  color: var(--text-published-color);\r\n}\r\n\r\n.date-date {\r\n  color: var(--text-published-date-color);\r\n}\r\n\r\n.project-summary-text,\r\n.article-text,\r\n.article-text-todo {\r\n  color: var(--text-paragraph-color);\r\n}\r\n\r\n.project-summary-text {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\nul {\r\n  margin-left: 30px;\r\n}\r\nli {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.article-text-todo h3 {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #content {\r\n    padding: 0px;\r\n    gap: 3px;\r\n  }\r\n  .project-summary-container {\r\n    height: 600px;\r\n    width: 100%;\r\n    max-width: 490px;\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .project-summary-text-container {\r\n    padding: 20px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-container {\r\n    padding: 20px 0px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-header-container {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-img-container {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .article-text {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-text-todo {\r\n    padding: 20px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 4.8rem;\r\n    line-height: 4.4rem;\r\n  }\r\n\r\n  .article-header {\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 280px) {\r\n  nav {\r\n    flex-direction: column;\r\n    padding: 10px 0px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(//db.onlinewebfonts.com/c/123c7e674188c97798dd39cd41ff2d85?family=Brown+Regular);\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --text-article-todo: hsl(0, 0%, 85%);\r\n  --body-background-color: hsl(0, 0%, 85%);\r\n  --header-color: hsl(210, 4%, 20%);\r\n  --link-color: hsl(216, 37%, 42%);\r\n  --text-background-color: hsl(0, 0%, 95%);\r\n  --image-desc-color: hsl(0, 0%, 50%);\r\n  --text-published-color: hsl(0, 0%, 50%);\r\n  --text-published-date-color: hsl(0, 0%, 20%);\r\n  --text-paragraph-color: hsl(0, 0%, 20%);\r\n  --btn-read-more-background-color: hsl(216, 37%, 42%);\r\n  --btn-read-more-text-color: hsl(0, 0%, 85%);\r\n  --nav-background-color: hsl(215, 35%, 25%);\r\n  --nav-background-hover-color: hsl(216, 37%, 52%);\r\n  --nav-link-text-color: hsl(0, 0%, 85%);\r\n  --nav-link-text-hover-color: hsl(0, 0%, 95%);\r\n  --nav-link-text-underline-color: linear-gradient(\r\n    90deg,\r\n    hsl(359, 83%, 71%) 0%,\r\n    hsl(40, 100%, 70%) 30%,\r\n    hsl(180, 50%, 60%) 60%,\r\n    hsl(300, 33%, 70%) 90%\r\n  );\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: 'Brown Regular', sans-serif;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-background-color);\r\n  min-height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  color: var(--header-color);\r\n}\r\n\r\nh1 {\r\n  font-size: 7.2rem;\r\n  line-height: 6.6rem;\r\n}\r\nh2 {\r\n  font-size: 4.8rem;\r\n  line-height: 4.4rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 2.8rem;\r\n  line-height: 2.6rem;\r\n}\r\n\r\na {\r\n  color: var(--link-color);\r\n  text-decoration: none;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  background-color: var(--nav-background-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  min-height: 80px;\r\n}\r\n\r\n.navlink {\r\n  color: var(--nav-link-text-color);\r\n  font-size: 1.8rem;\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.navlink:hover {\r\n  color: var(--nav-link-text-hover-color);\r\n}\r\n\r\n.navlink-highlight {\r\n  position: relative;\r\n}\r\n\r\n.navlink-highlight::before {\r\n  background: var(--nav-link-text-underline-color);\r\n  content: '';\r\n  position: absolute;\r\n  top: 28px;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 40px;\r\n  padding: 40px 0px;\r\n}\r\n\r\n.project-summary-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-radius: 2px;\r\n  height: 400px;\r\n  width: 100%;\r\n  max-width: 980px;\r\n}\r\n\r\n.project-summary-text-container {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px;\r\n  gap: 40px;\r\n}\r\n\r\n.project-summary-img-container {\r\n  flex: 1;\r\n  overflow: hidden;\r\n  border-radius: 0px 2px 2px 0px;\r\n}\r\n\r\n.project-summary-header {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-read-more {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 150px;\r\n  height: 44px;\r\n  border-radius: 2px;\r\n  background: var(--btn-read-more-background-color);\r\n  transition: color 0.1s ease-out;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.btn-read-more-text {\r\n  font-size: 1.8rem;\r\n  color: var(--text-background-color);\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.btn-read-more:hover {\r\n  background-color: var(--nav-background-hover-color);\r\n}\r\n\r\n#project-summary-img-this-site,\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  height: 500px;\r\n  width: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n#about-img-me {\r\n  object-fit: scale-down;\r\n}\r\n\r\n#project-summary-img-this-site {\r\n  object-position: top left;\r\n}\r\n\r\n#project-summary-img-weather,\r\n#about-img-me {\r\n  object-position: top right;\r\n}\r\n\r\n.project-summary-text-container,\r\n.article-container {\r\n  background-color: var(--text-background-color);\r\n}\r\n\r\n.article-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  max-width: 980px;\r\n  border-radius: 2px;\r\n  padding: 64px;\r\n  gap: 40px;\r\n}\r\n\r\n.article-header {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-container {\r\n  margin-left: -64px;\r\n  margin-right: -64px;\r\n}\r\n\r\n.article-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 2px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.article-img-text {\r\n  color: var(--image-desc-color);\r\n  text-align: center;\r\n}\r\n\r\n.article-text,\r\n.article-text-todo {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\n.article-text {\r\n  padding: 0px 20px;\r\n}\r\n\r\n.article-text-todo {\r\n  background-color: var(--text-article-todo);\r\n  padding: 64px;\r\n}\r\n\r\n.article-img-text,\r\n.date-published,\r\n.date-date {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.date-published,\r\n.date-date {\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.date-published {\r\n  color: var(--text-published-color);\r\n}\r\n\r\n.date-date {\r\n  color: var(--text-published-date-color);\r\n}\r\n\r\n.project-summary-text,\r\n.article-text,\r\n.article-text-todo {\r\n  color: var(--text-paragraph-color);\r\n}\r\n\r\n.project-summary-text {\r\n  font-size: 1.8rem;\r\n  line-height: 3rem;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n\r\nul {\r\n  margin-left: 30px;\r\n}\r\nli {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.article-text-todo h3 {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #content {\r\n    padding: 0px;\r\n    gap: 3px;\r\n  }\r\n  .project-summary-container {\r\n    height: 600px;\r\n    width: 100%;\r\n    max-width: 490px;\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .project-summary-text-container {\r\n    padding: 20px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-container {\r\n    padding: 20px 0px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .article-header-container {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-img-container {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .article-text {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  .article-text-todo {\r\n    padding: 20px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 4.8rem;\r\n    line-height: 4.4rem;\r\n  }\r\n\r\n  .article-header {\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 280px) {\r\n  nav {\r\n    flex-direction: column;\r\n    padding: 10px 0px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
// import projects from './html/projects.html';
// import portfolio from './html/portfolio.html';
// import about from './html/about.html';
// import weatherapp from './html/weatherapp.html';
// import thiswebsite from './html/thiswebsite.html';


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
    // this.htmlPages = {
    //   projects,
    //   portfolio,
    //   about,
    //   weatherapp,
    //   thiswebsite,
    // };
    this.displayController = new DisplayController();
    this.selectPage('projects');
  }

  async selectPage(name) {
    // if (name in this.htmlPages) {
    //   this.scrollToTop();
    //   const content = this.htmlPages[`${name}`];
    //   this.displayController.showPage(content);
    // }
    try {
      const response = await fetch(`./html/${name}.html`); // Gets a promise
      const content = await response.text();
      this.displayController.showPage(content);
    } catch (err) {
      console.log(`Fetch error:${err}`); // Error handling
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}

const main = new Main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZHNtYWwuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RzbWFsLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kc21hbC5naXRodWIuaW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8xMjNjN2U2NzQxODhjOTc3OThkZDM5Y2Q0MWZmMmQ4NT9mYW1pbHk9QnJvd24rUmVndWxhcik7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLXRleHQtYXJ0aWNsZS10b2RvOiBoc2woMCwgMCUsIDg1JSk7XFxyXFxuICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xcclxcbiAgLS1oZWFkZXItY29sb3I6IGhzbCgyMTAsIDQlLCAyMCUpO1xcclxcbiAgLS1saW5rLWNvbG9yOiBoc2woMjE2LCAzNyUsIDQyJSk7XFxyXFxuICAtLXRleHQtYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcclxcbiAgLS1pbWFnZS1kZXNjLWNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuICAtLXRleHQtcHVibGlzaGVkLWNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuICAtLXRleHQtcHVibGlzaGVkLWRhdGUtY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcXHJcXG4gIC0tdGV4dC1wYXJhZ3JhcGgtY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcXHJcXG4gIC0tYnRuLXJlYWQtbW9yZS1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjE2LCAzNyUsIDQyJSk7XFxyXFxuICAtLWJ0bi1yZWFkLW1vcmUtdGV4dC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xcclxcbiAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogaHNsKDIxNSwgMzUlLCAyNSUpO1xcclxcbiAgLS1uYXYtYmFja2dyb3VuZC1ob3Zlci1jb2xvcjogaHNsKDIxNiwgMzclLCA1MiUpO1xcclxcbiAgLS1uYXYtbGluay10ZXh0LWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XFxyXFxuICAtLW5hdi1saW5rLXRleHQtaG92ZXItY29sb3I6IGhzbCgwLCAwJSwgOTUlKTtcXHJcXG4gIC0tbmF2LWxpbmstdGV4dC11bmRlcmxpbmUtY29sb3I6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgOTBkZWcsXFxyXFxuICAgIGhzbCgzNTksIDgzJSwgNzElKSAwJSxcXHJcXG4gICAgaHNsKDQwLCAxMDAlLCA3MCUpIDMwJSxcXHJcXG4gICAgaHNsKDE4MCwgNTAlLCA2MCUpIDYwJSxcXHJcXG4gICAgaHNsKDMwMCwgMzMlLCA3MCUpIDkwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0Jyb3duIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyB7XFxyXFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiA3LjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogNi42cmVtO1xcclxcbn1cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDQuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0LjRyZW07XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uYXYtbGluay10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW5hdi1saW5rLXRleHQtaG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGluay1oaWdobGlnaHQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGluay1oaWdobGlnaHQ6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXYtbGluay10ZXh0LXVuZGVybGluZS1jb2xvcik7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjhweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDk4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQtY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktaW1nLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAycHggMnB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1yZWFkLW1vcmUge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tcmVhZC1tb3JlLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXN1bW1hcnktaW1nLXRoaXMtc2l0ZSxcXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy13ZWF0aGVyLFxcclxcbiNhYm91dC1pbWctbWUge1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtaW1nLW1lIHtcXHJcXG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXN1bW1hcnktaW1nLXRoaXMtc2l0ZSB7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IHRvcCBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zdW1tYXJ5LWltZy13ZWF0aGVyLFxcclxcbiNhYm91dC1pbWctbWUge1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIsXFxyXFxuLmFydGljbGUtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA5ODBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDY0cHg7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWctY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNjRweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTY0cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWltZy10ZXh0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1pbWFnZS1kZXNjLWNvbG9yKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtdGV4dCxcXHJcXG4uYXJ0aWNsZS10ZXh0LXRvZG8ge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0LXRvZG8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1hcnRpY2xlLXRvZG8pO1xcclxcbiAgcGFkZGluZzogNjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaW1nLXRleHQsXFxyXFxuLmRhdGUtcHVibGlzaGVkLFxcclxcbi5kYXRlLWRhdGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlLXB1Ymxpc2hlZCxcXHJcXG4uZGF0ZS1kYXRlIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlLXB1Ymxpc2hlZCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1wdWJsaXNoZWQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1kYXRlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXB1Ymxpc2hlZC1kYXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS10ZXh0LFxcclxcbi5hcnRpY2xlLXRleHQsXFxyXFxuLmFydGljbGUtdGV4dC10b2RvIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXBhcmFncmFwaC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5saSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0LXRvZG8gaDMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICNjb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBnYXA6IDNweDtcXHJcXG4gIH1cXHJcXG4gIC5wcm9qZWN0LXN1bW1hcnktY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNDkwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXJ0aWNsZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtaW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtdGV4dCB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFydGljbGUtdGV4dC10b2RvIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0LjhyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0LjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXJ0aWNsZS1oZWFkZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xcclxcbiAgbmF2IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0M7RUFDeEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMsbUNBQW1DO0VBQ25DLHVDQUF1QztFQUN2Qyw0Q0FBNEM7RUFDNUMsdUNBQXVDO0VBQ3ZDLG9EQUFvRDtFQUNwRCwyQ0FBMkM7RUFDM0MsMENBQTBDO0VBQzFDLGdEQUFnRDtFQUNoRCxzQ0FBc0M7RUFDdEMsNENBQTRDO0VBQzVDOzs7Ozs7R0FNQztBQUNIOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxp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LG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8xMjNjN2U2NzQxODhjOTc3OThkZDM5Y2Q0MWZmMmQ4NT9mYW1pbHk9QnJvd24rUmVndWxhcik7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tdGV4dC1hcnRpY2xlLXRvZG86IGhzbCgwLCAwJSwgODUlKTtcXHJcXG4gIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XFxyXFxuICAtLWhlYWRlci1jb2xvcjogaHNsKDIxMCwgNCUsIDIwJSk7XFxyXFxuICAtLWxpbmstY29sb3I6IGhzbCgyMTYsIDM3JSwgNDIlKTtcXHJcXG4gIC0tdGV4dC1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxyXFxuICAtLWltYWdlLWRlc2MtY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gIC0tdGV4dC1wdWJsaXNoZWQtY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gIC0tdGV4dC1wdWJsaXNoZWQtZGF0ZS1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcclxcbiAgLS10ZXh0LXBhcmFncmFwaC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcclxcbiAgLS1idG4tcmVhZC1tb3JlLWJhY2tncm91bmQtY29sb3I6IGhzbCgyMTYsIDM3JSwgNDIlKTtcXHJcXG4gIC0tYnRuLXJlYWQtbW9yZS10ZXh0LWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XFxyXFxuICAtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjE1LCAzNSUsIDI1JSk7XFxyXFxuICAtLW5hdi1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yOiBoc2woMjE2LCAzNyUsIDUyJSk7XFxyXFxuICAtLW5hdi1saW5rLXRleHQtY29sb3I6IGhzbCgwLCAwJSwgODUlKTtcXHJcXG4gIC0tbmF2LWxpbmstdGV4dC1ob3Zlci1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcclxcbiAgLS1uYXYtbGluay10ZXh0LXVuZGVybGluZS1jb2xvcjogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICA5MGRlZyxcXHJcXG4gICAgaHNsKDM1OSwgODMlLCA3MSUpIDAlLFxcclxcbiAgICBoc2woNDAsIDEwMCUsIDcwJSkgMzAlLFxcclxcbiAgICBoc2woMTgwLCA1MCUsIDYwJSkgNjAlLFxcclxcbiAgICBoc2woMzAwLCAzMyUsIDcwJSkgOTAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQnJvd24gUmVndWxhcicsIHNhbnMtc2VyaWY7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDcuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA2LjZyZW07XFxyXFxufVxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNC44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDQuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbiAgbWluLWhlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLW5hdi1saW5rLXRleHQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbmF2LWxpbmstdGV4dC1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rLWhpZ2hsaWdodCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rLWhpZ2hsaWdodDo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5hdi1saW5rLXRleHQtdW5kZXJsaW5lLWNvbG9yKTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyOHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogOTgwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXN1bW1hcnktdGV4dC1jb250YWluZXIge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS1pbWctY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDJweCAycHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlYWQtbW9yZSB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogNDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ0bi1yZWFkLW1vcmUtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVhZC1tb3JlLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVhZC1tb3JlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtc3VtbWFyeS1pbWctdGhpcy1zaXRlLFxcclxcbiNwcm9qZWN0LXN1bW1hcnktaW1nLXdlYXRoZXIsXFxyXFxuI2Fib3V0LWltZy1tZSB7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNhYm91dC1pbWctbWUge1xcclxcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtc3VtbWFyeS1pbWctdGhpcy1zaXRlIHtcXHJcXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wIGxlZnQ7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXN1bW1hcnktaW1nLXdlYXRoZXIsXFxyXFxuI2Fib3V0LWltZy1tZSB7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IHRvcCByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS10ZXh0LWNvbnRhaW5lcixcXHJcXG4uYXJ0aWNsZS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDk4MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgcGFkZGluZzogNjRweDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLWltZy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC02NHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtNjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtaW1nLXRleHQge1xcclxcbiAgY29sb3I6IHZhcigtLWltYWdlLWRlc2MtY29sb3IpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS10ZXh0LFxcclxcbi5hcnRpY2xlLXRleHQtdG9kbyB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXRleHQge1xcclxcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXRleHQtdG9kbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWFydGljbGUtdG9kbyk7XFxyXFxuICBwYWRkaW5nOiA2NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1pbWctdGV4dCxcXHJcXG4uZGF0ZS1wdWJsaXNoZWQsXFxyXFxuLmRhdGUtZGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtcHVibGlzaGVkLFxcclxcbi5kYXRlLWRhdGUge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtcHVibGlzaGVkIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXB1Ymxpc2hlZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kYXRlLWRhdGUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtcHVibGlzaGVkLWRhdGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdW1tYXJ5LXRleHQsXFxyXFxuLmFydGljbGUtdGV4dCxcXHJcXG4uYXJ0aWNsZS10ZXh0LXRvZG8ge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtcGFyYWdyYXBoLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VtbWFyeS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcbmxpIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXRleHQtdG9kbyBoMyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgI2NvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGdhcDogM3B4O1xcclxcbiAgfVxcclxcbiAgLnByb2plY3Qtc3VtbWFyeS1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0OTBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2plY3Qtc3VtbWFyeS10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnRpY2xlLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXJ0aWNsZS1oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXJ0aWNsZS1pbWctY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXJ0aWNsZS10ZXh0IHtcXHJcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXJ0aWNsZS10ZXh0LXRvZG8ge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDQuOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hcnRpY2xlLWhlYWRlciB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4MHB4KSB7XFxyXFxuICBuYXYge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9odG1sL3Byb2plY3RzLmh0bWwnO1xyXG4vLyBpbXBvcnQgcG9ydGZvbGlvIGZyb20gJy4vaHRtbC9wb3J0Zm9saW8uaHRtbCc7XHJcbi8vIGltcG9ydCBhYm91dCBmcm9tICcuL2h0bWwvYWJvdXQuaHRtbCc7XHJcbi8vIGltcG9ydCB3ZWF0aGVyYXBwIGZyb20gJy4vaHRtbC93ZWF0aGVyYXBwLmh0bWwnO1xyXG4vLyBpbXBvcnQgdGhpc3dlYnNpdGUgZnJvbSAnLi9odG1sL3RoaXN3ZWJzaXRlLmh0bWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcblxyXG5jbGFzcyBEaXNwbGF5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgJy5idG4tcmVhZC1tb3JlJywgdGhpcy5saW5rU2VsZWN0ZWQpO1xyXG4gICAgdGhpcy5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdjbGljaycsICcubmF2bGluaycsIHRoaXMubmF2TGlua1NlbGVjdGVkKTtcclxuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICB0aGlzLm9sZEhpZ2hsaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xyXG4gIH1cclxuXHJcbiAgYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcih0eXBlLCBzZWxlY3RvciwgY2FsbGJhY2spIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSBjYWxsYmFjayhlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbGlua1NlbGVjdGVkID0gKGUpID0+IHtcclxuICAgIG1haW4uc2VsZWN0UGFnZShlLnRhcmdldC5pZCk7XHJcbiAgfTtcclxuXHJcbiAgbmF2TGlua1NlbGVjdGVkID0gKGUpID0+IHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0U2VsZWN0ZWQoZSk7XHJcbiAgICB0aGlzLmxpbmtTZWxlY3RlZChlKTtcclxuICB9O1xyXG5cclxuICBoaWdobGlnaHRTZWxlY3RlZChlKSB7XHJcbiAgICB0aGlzLm9sZEhpZ2hsaWdodC5jbGFzc0xpc3QucmVtb3ZlKCduYXZsaW5rLWhpZ2hsaWdodCcpO1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbmF2bGluay1oaWdobGlnaHQnKTtcclxuICAgIHRoaXMub2xkSGlnaGxpZ2h0ID0gZS50YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBzaG93UGFnZShjb250ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE1haW4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy5odG1sUGFnZXMgPSB7XHJcbiAgICAvLyAgIHByb2plY3RzLFxyXG4gICAgLy8gICBwb3J0Zm9saW8sXHJcbiAgICAvLyAgIGFib3V0LFxyXG4gICAgLy8gICB3ZWF0aGVyYXBwLFxyXG4gICAgLy8gICB0aGlzd2Vic2l0ZSxcclxuICAgIC8vIH07XHJcbiAgICB0aGlzLmRpc3BsYXlDb250cm9sbGVyID0gbmV3IERpc3BsYXlDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLnNlbGVjdFBhZ2UoJ3Byb2plY3RzJyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzZWxlY3RQYWdlKG5hbWUpIHtcclxuICAgIC8vIGlmIChuYW1lIGluIHRoaXMuaHRtbFBhZ2VzKSB7XHJcbiAgICAvLyAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcclxuICAgIC8vICAgY29uc3QgY29udGVudCA9IHRoaXMuaHRtbFBhZ2VzW2Ake25hbWV9YF07XHJcbiAgICAvLyAgIHRoaXMuZGlzcGxheUNvbnRyb2xsZXIuc2hvd1BhZ2UoY29udGVudCk7XHJcbiAgICAvLyB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuL2h0bWwvJHtuYW1lfS5odG1sYCk7IC8vIEdldHMgYSBwcm9taXNlXHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgIHRoaXMuZGlzcGxheUNvbnRyb2xsZXIuc2hvd1BhZ2UoY29udGVudCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coYEZldGNoIGVycm9yOiR7ZXJyfWApOyAvLyBFcnJvciBoYW5kbGluZ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9Ub3AoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYWluID0gbmV3IE1haW4oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
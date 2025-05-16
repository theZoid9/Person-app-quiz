/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((module) => {

eval("const footer=()=>{\r\n    const footer = document.createElement(\"footer\")\r\n\r\n    footer.style.backgroundColor = \"#333\"\r\n    footer.style.color = \"white\"\r\n    footer.style.padding = \"10px\"\r\n    footer.style.textAlign = \"center\"\r\n    footer.style.position = \"fixed\"\r\n    footer.style.bottom = \"0\"\r\n    footer.style.width = \"100%\"\r\n    footer.textContent = \"© 2025 Brain Tease - All Rights Reserved\";\r\n    return footer\r\n}\r\n\r\nmodule.exports={footer}\n\n//# sourceURL=webpack://quiz-app/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((module) => {

eval("const header=()=>{\r\n    const header= document.createElement('header')\r\n\r\n    header.style.padding=\"25px\"\r\n    header.backgroundColor=\"#ffff\"\r\n    header.style.color=\"#000000\"\r\n    header.textContent=\"Brain Tease\"\r\n    return header\r\n}\r\n\r\nmodule.exports={header}\n\n//# sourceURL=webpack://quiz-app/./src/components/header.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {homePage}=__webpack_require__(/*! ./pages/homepage */ \"./src/pages/homepage.js\")\r\n\r\ndocument.addEventListener(\"DomContentLoaded\",()=>{\r\n    homePage()\r\n})\r\n\r\nconsole.log(\"testing\")\n\n//# sourceURL=webpack://quiz-app/./src/main.js?");

/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {header} = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\")\r\nconst {footer} = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\")\r\nconst homepage=()=>{\r\n    const app = document.getElementById('app')\r\n    app.prependChild(header())\r\n\r\n    const main = document.createElement('div')\r\n    main.id='main'\r\n    app.appendChild(main)\r\n    const welcome = document.createElement('h1')\r\n    welcome.textContent='Welcome to Brain Tease'\r\n    welcome.style.color=\"#000000\"\r\n    main.appendChild(welcome)\r\n    app.appendChild(footer())\r\n}\r\n\r\nmodule.exports={homepage}\n\n//# sourceURL=webpack://quiz-app/./src/pages/homepage.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/styles.css"
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0b3JhdW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlcy5jc3M/ZTRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/styles.css\n\n}");

/***/ },

/***/ "./src/img/logo.png"
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/f300dd5b625fd35ff3ad.png";

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _js_renderAddressTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/renderAddressTab.js */ \"./src/js/renderAddressTab.js\");\n/* harmony import */ var _js_renderHomeTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/renderHomeTab.js */ \"./src/js/renderHomeTab.js\");\n/* harmony import */ var _js_renderMenuTab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/renderMenuTab.js */ \"./src/js/renderMenuTab.js\");\n\r\n\r\n\r\n\r\n\r\nconst TabsSwitcher = (() => {\r\n  const homeLink = document.querySelector(\".home-link\");\r\n  const menuLink = document.querySelector(\".menu-link\");\r\n  const addressLink = document.querySelector(\".address-link\");\r\n  const contentDiv = document.querySelector(\".content\");\r\n\r\n  const clearTab = () => {\r\n    contentDiv.innerHTML = \"\";\r\n  }\r\n\r\n  homeLink.addEventListener(\"click\", () => {\r\n    clearTab();\r\n    contentDiv.append((0,_js_renderHomeTab_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n  });\r\n\r\n  menuLink.addEventListener(\"click\", () => {\r\n    clearTab();\r\n    contentDiv.append((0,_js_renderMenuTab_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n  });\r\n\r\n  addressLink.addEventListener(\"click\", () => {\r\n    clearTab();\r\n    contentDiv.append((0,_js_renderAddressTab_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n  });\r\n\r\n  contentDiv.append((0,_js_renderHomeTab_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n\r\n})();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFDOEI7QUFDTjtBQUNBO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdFQUFhO0FBQ25DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0VBQWE7QUFDbkMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtRUFBZ0I7QUFDdEMsR0FBRztBQUNIO0FBQ0Esb0JBQW9CLGdFQUFhO0FBQ2pDO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0b3JhdW50LXBhZ2UvLi9zcmMvaW5kZXguanM/M2QzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY3NzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgcmVuZGVyQWRkcmVzc1RhYiBmcm9tIFwiLi9qcy9yZW5kZXJBZGRyZXNzVGFiLmpzXCI7XHJcbmltcG9ydCByZW5kZXJIb21lVGFiIGZyb20gXCIuL2pzL3JlbmRlckhvbWVUYWIuanNcIjtcclxuaW1wb3J0IHJlbmRlck1lbnVUYWIgZnJvbSBcIi4vanMvcmVuZGVyTWVudVRhYi5qc1wiO1xyXG5cclxuY29uc3QgVGFic1N3aXRjaGVyID0gKCgpID0+IHtcclxuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1saW5rXCIpO1xyXG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWxpbmtcIik7XHJcbiAgY29uc3QgYWRkcmVzc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHJlc3MtbGlua1wiKTtcclxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cclxuICBjb25zdCBjbGVhclRhYiA9ICgpID0+IHtcclxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjbGVhclRhYigpO1xyXG4gICAgY29udGVudERpdi5hcHBlbmQocmVuZGVySG9tZVRhYigpKTtcclxuICB9KTtcclxuXHJcbiAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsZWFyVGFiKCk7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZChyZW5kZXJNZW51VGFiKCkpO1xyXG4gIH0pO1xyXG5cclxuICBhZGRyZXNzTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY2xlYXJUYWIoKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kKHJlbmRlckFkZHJlc3NUYWIoKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnRlbnREaXYuYXBwZW5kKHJlbmRlckhvbWVUYWIoKSk7XHJcblxyXG59KSgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/js/renderAddressTab.js"
/*!************************************!*\
  !*** ./src/js/renderAddressTab.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderAddressTab = () => {\r\n  const addressDiv = document.createElement(\"address\");\r\n  addressDiv.classList.add(\"address\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Address\";\r\n  title.classList.add(\"address__title\", \"title\");\r\n\r\n  const addressInfo = document.createElement(\"p\");\r\n  addressInfo.textContent = `Deep in the Siberian Forest, 42nd kilometer of the Taiga Highway, Kemerovo Region.`;\r\n  addressInfo.classList.add(\"address__text\");\r\n\r\n  const addressTime = document.createElement(\"p\");\r\n  addressTime.textContent =\r\n    \"Daily from 12:00 PM until the last wolf howls (around 11:00 PM).\";\r\n  addressTime.classList.add(\"address__time\");\r\n\r\n  const addressContacts = document.createElement(\"div\");\r\n  addressContacts.classList.add(\"address__contacts\");\r\n\r\n  const addressEmail = document.createElement(\"a\");\r\n  addressEmail.href = \"mailto:reserve@evilbear.com\";\r\n  addressEmail.textContent = \"reserve@evilbear.com\";\r\n  addressEmail.classList.add(\"address__email\");\r\n\r\n  const addressPhone = document.createElement(\"a\");\r\n  addressPhone.href = \"tel:+7384555-BEAR\";\r\n  addressPhone.textContent = \"tel:+7 (384) 555-BEAR\";\r\n  addressPhone.classList.add(\"address__phone\");\r\n\r\n  addressContacts.append(addressEmail, addressPhone);\r\n\r\n  addressDiv.append(title, addressInfo, addressTime, addressContacts);\r\n\r\n  return addressDiv;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAddressTab);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVuZGVyQWRkcmVzc1RhYi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdG9yYXVudC1wYWdlLy4vc3JjL2pzL3JlbmRlckFkZHJlc3NUYWIuanM/ZWRjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW5kZXJBZGRyZXNzVGFiID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYWRkcmVzc1wiKTtcclxuICBhZGRyZXNzRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiO1xyXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzX190aXRsZVwiLCBcInRpdGxlXCIpO1xyXG5cclxuICBjb25zdCBhZGRyZXNzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGFkZHJlc3NJbmZvLnRleHRDb250ZW50ID0gYERlZXAgaW4gdGhlIFNpYmVyaWFuIEZvcmVzdCwgNDJuZCBraWxvbWV0ZXIgb2YgdGhlIFRhaWdhIEhpZ2h3YXksIEtlbWVyb3ZvIFJlZ2lvbi5gO1xyXG4gIGFkZHJlc3NJbmZvLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzX190ZXh0XCIpO1xyXG5cclxuICBjb25zdCBhZGRyZXNzVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGFkZHJlc3NUaW1lLnRleHRDb250ZW50ID1cclxuICAgIFwiRGFpbHkgZnJvbSAxMjowMCBQTSB1bnRpbCB0aGUgbGFzdCB3b2xmIGhvd2xzIChhcm91bmQgMTE6MDAgUE0pLlwiO1xyXG4gIGFkZHJlc3NUaW1lLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzX190aW1lXCIpO1xyXG5cclxuICBjb25zdCBhZGRyZXNzQ29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZHJlc3NDb250YWN0cy5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc19fY29udGFjdHNcIik7XHJcblxyXG4gIGNvbnN0IGFkZHJlc3NFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGFkZHJlc3NFbWFpbC5ocmVmID0gXCJtYWlsdG86cmVzZXJ2ZUBldmlsYmVhci5jb21cIjtcclxuICBhZGRyZXNzRW1haWwudGV4dENvbnRlbnQgPSBcInJlc2VydmVAZXZpbGJlYXIuY29tXCI7XHJcbiAgYWRkcmVzc0VtYWlsLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzX19lbWFpbFwiKTtcclxuXHJcbiAgY29uc3QgYWRkcmVzc1Bob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYWRkcmVzc1Bob25lLmhyZWYgPSBcInRlbDorNzM4NDU1NS1CRUFSXCI7XHJcbiAgYWRkcmVzc1Bob25lLnRleHRDb250ZW50ID0gXCJ0ZWw6KzcgKDM4NCkgNTU1LUJFQVJcIjtcclxuICBhZGRyZXNzUGhvbmUuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NfX3Bob25lXCIpO1xyXG5cclxuICBhZGRyZXNzQ29udGFjdHMuYXBwZW5kKGFkZHJlc3NFbWFpbCwgYWRkcmVzc1Bob25lKTtcclxuXHJcbiAgYWRkcmVzc0Rpdi5hcHBlbmQodGl0bGUsIGFkZHJlc3NJbmZvLCBhZGRyZXNzVGltZSwgYWRkcmVzc0NvbnRhY3RzKTtcclxuXHJcbiAgcmV0dXJuIGFkZHJlc3NEaXY7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBZGRyZXNzVGFiO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/renderAddressTab.js\n\n}");

/***/ },

/***/ "./src/js/renderHomeTab.js"
/*!*********************************!*\
  !*** ./src/js/renderHomeTab.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo.png */ \"./src/img/logo.png\");\n\r\n\r\nconst renderHomeTab = () => {\r\n  const homeDiv = document.createElement(\"div\");\r\n  homeDiv.classList.add(\"home\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Evil Bear\";\r\n  title.classList.add(\"home__title\", \"title\");\r\n\r\n  const logo = document.createElement(\"img\");\r\n  logo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  logo.classList.add(\"home__logo\");\r\n\r\n  const text = document.createElement(\"p\");\r\n  text.textContent = `Welcome to the \"Evil Bear\" lair! Why is the bear angry? Because he had\r\n        been looking for the perfect combination of excellent cuisine and the\r\n        right atmosphere for a long time. Our menu features harsh portions,\r\n        signature snacks with character, and a solid bar menu. Here you can\r\n        forget about the noise of the city, loosen your tie and have a great\r\n        time in the company of your friends. Come on in, it's warm, noisy, and\r\n        delicious. But remember: the bear has a good appetite!`;\r\n  text.classList.add(\"home__text\");\r\n\r\n  homeDiv.append(title, logo, text);\r\n\r\n  return homeDiv;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomeTab);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVuZGVySG9tZVRhYi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMENBQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdG9yYXVudC1wYWdlLy4vc3JjL2pzL3JlbmRlckhvbWVUYWIuanM/MmMwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nb0ltZyBmcm9tIFwiLi4vaW1nL2xvZ28ucG5nXCI7XHJcblxyXG5jb25zdCByZW5kZXJIb21lVGFiID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVEaXYuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJFdmlsIEJlYXJcIjtcclxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaG9tZV9fdGl0bGVcIiwgXCJ0aXRsZVwiKTtcclxuXHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbG9nby5zcmMgPSBsb2dvSW1nO1xyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImhvbWVfX2xvZ29cIik7XHJcblxyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0ZXh0LnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gdGhlIFwiRXZpbCBCZWFyXCIgbGFpciEgV2h5IGlzIHRoZSBiZWFyIGFuZ3J5PyBCZWNhdXNlIGhlIGhhZFxyXG4gICAgICAgIGJlZW4gbG9va2luZyBmb3IgdGhlIHBlcmZlY3QgY29tYmluYXRpb24gb2YgZXhjZWxsZW50IGN1aXNpbmUgYW5kIHRoZVxyXG4gICAgICAgIHJpZ2h0IGF0bW9zcGhlcmUgZm9yIGEgbG9uZyB0aW1lLiBPdXIgbWVudSBmZWF0dXJlcyBoYXJzaCBwb3J0aW9ucyxcclxuICAgICAgICBzaWduYXR1cmUgc25hY2tzIHdpdGggY2hhcmFjdGVyLCBhbmQgYSBzb2xpZCBiYXIgbWVudS4gSGVyZSB5b3UgY2FuXHJcbiAgICAgICAgZm9yZ2V0IGFib3V0IHRoZSBub2lzZSBvZiB0aGUgY2l0eSwgbG9vc2VuIHlvdXIgdGllIGFuZCBoYXZlIGEgZ3JlYXRcclxuICAgICAgICB0aW1lIGluIHRoZSBjb21wYW55IG9mIHlvdXIgZnJpZW5kcy4gQ29tZSBvbiBpbiwgaXQncyB3YXJtLCBub2lzeSwgYW5kXHJcbiAgICAgICAgZGVsaWNpb3VzLiBCdXQgcmVtZW1iZXI6IHRoZSBiZWFyIGhhcyBhIGdvb2QgYXBwZXRpdGUhYDtcclxuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJob21lX190ZXh0XCIpO1xyXG5cclxuICBob21lRGl2LmFwcGVuZCh0aXRsZSwgbG9nbywgdGV4dCk7XHJcblxyXG4gIHJldHVybiBob21lRGl2O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZVRhYjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/renderHomeTab.js\n\n}");

/***/ },

/***/ "./src/js/renderMenuTab.js"
/*!*********************************!*\
  !*** ./src/js/renderMenuTab.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderMenuTab = () => {\r\n  const menuItems = [\r\n    {\r\n      title: \"Tomahawk Steak\",\r\n      price: \"$45\",\r\n      description: \"Huge juicy grilled beef rib.\",\r\n    },\r\n    {\r\n      title: \"Bear's Lair Burger\",\r\n      price: \"$18\",\r\n      description: \"Double patty with hot jalapeno.\",\r\n    },\r\n    {\r\n      title: \"Wild Boar Ribs\",\r\n      price: \"$26\",\r\n      description: \"Smoked ribs with honey BBQ.\",\r\n    },\r\n    {\r\n      title: \"Grilled Salmon\",\r\n      price: \"$28\",\r\n      description: \"Tender fish cooked over coals.\",\r\n    },\r\n    {\r\n      title: \"Hunter's Stew\",\r\n      price: \"$15\",\r\n      description: \"Thick meat soup with mushrooms.\",\r\n    },\r\n    {\r\n      title: \"Smoked Wings\",\r\n      price: \"$12\",\r\n      description: \"Spicy chicken wings from smoker.\",\r\n    },\r\n    {\r\n      title: \"Charcoal Venison\",\r\n      price: \"$38\",\r\n      description: \"Wild deer meat with lingonberry.\",\r\n    },\r\n    {\r\n      title: \"Woodland Mushrooms\",\r\n      price: \"$14\",\r\n      description: \"Crispy pan-fried forest chanterelles.\",\r\n    },\r\n  ];\r\n\r\n  const menuDiv = document.createElement(\"div\");\r\n  menuDiv.classList.add(\"menu\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Menu\";\r\n  title.classList.add(\"menu__title\", \"title\");\r\n\r\n  const list = document.createElement(\"ul\");\r\n  list.classList.add(\"menu__list\");\r\n\r\n  for (let menuItem of menuItems) {\r\n    let menuElem = document.createElement(\"li\");\r\n    menuElem.classList.add(\"menu-item\");\r\n\r\n    let menuElemTitle = document.createElement(\"h3\");\r\n    menuElemTitle.textContent = menuItem.title;\r\n    menuElemTitle.classList.add(\"menu-item__title\");\r\n\r\n    let menuElemDescr = document.createElement(\"p\");\r\n    menuElemDescr.textContent = menuItem.description;\r\n    menuElemDescr.classList.add(\"menu-item__descr\");\r\n\r\n    let menuElemPrice = document.createElement(\"p\");\r\n    menuElemPrice.textContent = menuItem.price;\r\n    menuElemPrice.classList.add(\"menu-item__price\");\r\n\r\n    menuElem.append(menuElemTitle, menuElemDescr, menuElemPrice);\r\n\r\n    list.append(menuElem);\r\n  }\r\n\r\n  menuDiv.append(title, list);\r\n\r\n  return menuDiv;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuTab);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVuZGVyTWVudVRhYi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RvcmF1bnQtcGFnZS8uL3NyYy9qcy9yZW5kZXJNZW51VGFiLmpzP2RkMzEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVuZGVyTWVudVRhYiA9ICgpID0+IHtcclxuICBjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlRvbWFoYXdrIFN0ZWFrXCIsXHJcbiAgICAgIHByaWNlOiBcIiQ0NVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJIdWdlIGp1aWN5IGdyaWxsZWQgYmVlZiByaWIuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCZWFyJ3MgTGFpciBCdXJnZXJcIixcclxuICAgICAgcHJpY2U6IFwiJDE4XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRvdWJsZSBwYXR0eSB3aXRoIGhvdCBqYWxhcGVuby5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIldpbGQgQm9hciBSaWJzXCIsXHJcbiAgICAgIHByaWNlOiBcIiQyNlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJTbW9rZWQgcmlicyB3aXRoIGhvbmV5IEJCUS5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkdyaWxsZWQgU2FsbW9uXCIsXHJcbiAgICAgIHByaWNlOiBcIiQyOFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJUZW5kZXIgZmlzaCBjb29rZWQgb3ZlciBjb2Fscy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkh1bnRlcidzIFN0ZXdcIixcclxuICAgICAgcHJpY2U6IFwiJDE1XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaWNrIG1lYXQgc291cCB3aXRoIG11c2hyb29tcy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlNtb2tlZCBXaW5nc1wiLFxyXG4gICAgICBwcmljZTogXCIkMTJcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiU3BpY3kgY2hpY2tlbiB3aW5ncyBmcm9tIHNtb2tlci5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkNoYXJjb2FsIFZlbmlzb25cIixcclxuICAgICAgcHJpY2U6IFwiJDM4XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIldpbGQgZGVlciBtZWF0IHdpdGggbGluZ29uYmVycnkuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJXb29kbGFuZCBNdXNocm9vbXNcIixcclxuICAgICAgcHJpY2U6IFwiJDE0XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNyaXNweSBwYW4tZnJpZWQgZm9yZXN0IGNoYW50ZXJlbGxlcy5cIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudV9fdGl0bGVcIiwgXCJ0aXRsZVwiKTtcclxuXHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJtZW51X19saXN0XCIpO1xyXG5cclxuICBmb3IgKGxldCBtZW51SXRlbSBvZiBtZW51SXRlbXMpIHtcclxuICAgIGxldCBtZW51RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIG1lbnVFbGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcblxyXG4gICAgbGV0IG1lbnVFbGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBtZW51RWxlbVRpdGxlLnRleHRDb250ZW50ID0gbWVudUl0ZW0udGl0bGU7XHJcbiAgICBtZW51RWxlbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1fX3RpdGxlXCIpO1xyXG5cclxuICAgIGxldCBtZW51RWxlbURlc2NyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBtZW51RWxlbURlc2NyLnRleHRDb250ZW50ID0gbWVudUl0ZW0uZGVzY3JpcHRpb247XHJcbiAgICBtZW51RWxlbURlc2NyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1fX2Rlc2NyXCIpO1xyXG5cclxuICAgIGxldCBtZW51RWxlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBtZW51RWxlbVByaWNlLnRleHRDb250ZW50ID0gbWVudUl0ZW0ucHJpY2U7XHJcbiAgICBtZW51RWxlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1fX3ByaWNlXCIpO1xyXG5cclxuICAgIG1lbnVFbGVtLmFwcGVuZChtZW51RWxlbVRpdGxlLCBtZW51RWxlbURlc2NyLCBtZW51RWxlbVByaWNlKTtcclxuXHJcbiAgICBsaXN0LmFwcGVuZChtZW51RWxlbSk7XHJcbiAgfVxyXG5cclxuICBtZW51RGl2LmFwcGVuZCh0aXRsZSwgbGlzdCk7XHJcblxyXG4gIHJldHVybiBtZW51RGl2O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudVRhYjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/renderMenuTab.js\n\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(1);


document.addEventListener('DOMContentLoaded', () => {
  const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */]();
  // debugger
  // game.startRound();
  // debugger
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__target__ = __webpack_require__(3);



class Game {
  constructor() {
    const canvas = document.getElementById('canvas');
    this.screenWidth = canvas.width;
    this.screenHeight = canvas.height;

    Object(__WEBPACK_IMPORTED_MODULE_0__environment__["a" /* default */])(this);
    this.startRound = this.startRound.bind(this);
    this.startRound();

  }

  startRound() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    // ctx.clearRect(0, 0, c.width, c.height);

    this.count = 4;
    this.dropInterval = 1000;

    this.roundLoop = setInterval(() => {
      ctx.clearRect(0, 0, c.width, c.height);
      if (this.count > 0) {
        const target = new __WEBPACK_IMPORTED_MODULE_1__target__["a" /* default */]();
        // console.log(target);
        // target.drop.bind(target);
        this.count--;
      } else {
        clearInterval(this.roundLoop);
      }
    }, this.dropInterval);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let canvas, ctx, background, currentGame;

function render(game) {
  currentGame = game;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  // background = document.getElementById('background');
  window.requestAnimationFrame(renderRepaint);
}

function renderRepaint() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  renderBackground();


  window.requestAnimationFrame(() => renderRepaint());
}

const renderBackground = () => {
  ctx.drawImage(0, 0, canvas.width, canvas.height);
};

/* harmony default export */ __webpack_exports__["a"] = (render);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const screenWidth = 900;
const words = ['a', 'be', 'see', 'deed', 'fifth', 'sixths', 'seventh'];
const level = 1;

class Target {
  constructor() {
    this.screenWidth = 900;
    // get the word that will be the target
    // need library of words
    // font size?
    this.target = words[Math.floor(Math.random() * words.length)];

    // where to start (math to have words appear from all over top of screen)
    this.x = Math.random() * (screenWidth - 50) + 25;
    this.y = 0;

    // import level
    this.speed = (level * 20);

    this.drop();

  }

  drop() {
    const fallSpeed = setInterval(() => {
      this.y += 5;
      this.draw();
    }, this.speed);
  }

  draw() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    // ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillText(this.target, this.x, this.y);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Target);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
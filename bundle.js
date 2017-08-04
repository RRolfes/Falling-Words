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

  handleInput(game);
});

const handleInput = (game) => {
  document.getElementsByTagName('body')[0].addEventListener('keydown', (e) => {
    game.handleInput(e);
  });
};


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

    this.targets = [];
    this.score = 0;
    this.answer = '';
    this.lives = 3;

    Object(__WEBPACK_IMPORTED_MODULE_0__environment__["a" /* default */])(this);
    // this.startRound = this.startRound.bind(this);
    this.startRound(this.lives);

  }

  startRound(lives) {
    this.count = 1;
    this.lives = lives;
    this.dropInterval = 1000 - (this.score / 2);

    this.roundLoop = setInterval(() => {
      if (this.lives > 0 && this.count % 2 !== 0) {

        const target = new __WEBPACK_IMPORTED_MODULE_1__target__["a" /* default */]();
        this.targets.push(target);

        target.drop();
        this.count++;

      } else {
        clearInterval(this.roundLoop);
        this.startRound(this.lives);
      }
    }, this.dropInterval);
    // console.log(this.dropInterval);
  }


  handleInput(e) {
    const keyCode = e.which;
    console.log(keyCode);

    if (this.lives > 0) {
      if (keyCode >= 65 && keyCode <= 90){
        this.answer += e.key;
      } else if (keyCode === 8) {
        this.answer = this.answer.slice(0, -1);
      } else if (keyCode === 13) {
        this.checkInput(this.answer);
        this.answer = "";
      }
    } else if (keyCode === 32 ) {
      window.location.reload();
    }
  }

  removeTarget(target) {
    const idx = this.targets.indexOf(target);
    this.targets.splice(idx, 1);

    if (this.lives === 0) {
      this.targets = [];
    }
  }

  checkInput(input) {
    this.targets.forEach((target) => {
      if ( input === target.target ) {
        this.score += 10;
        target.solved = true;
      }
    });
  }



}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let canvas, ctx, background, currentGame, screenWidth, screenHeight;

function render(game) {
  currentGame = game;
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  screenWidth = canvas.width;
  screenHeight = canvas.height;

  // background = document.getElementById('background');
  window.requestAnimationFrame(renderRepaint);
}

function renderRepaint() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  renderWords();
  displayGameInfo();

  // renderBackground();

  window.requestAnimationFrame(() => renderRepaint());
}

// const renderBackground = () => {
//   ctx.drawImage(0, 0, canvas.width, canvas.height);
// };

const renderWords = () => {
  currentGame.targets.forEach((target) => {

    ctx.font="30px Verdana";
    ctx.fillText(target.target, target.x, target.y);

    if (target.y === canvas.height - 33) {
      currentGame.lives--;
      currentGame.removeTarget(target);
    } else if (target.solved) {
      currentGame.removeTarget(target);
    }

  });
};

const displayGameInfo = () => {
  ctx.font="30px Verdana";

  ctx.textAlign="left";
  ctx.fillText(`Score: ${currentGame.score}`, 30, screenHeight - 10);

  ctx.textAlign="right";
  ctx.fillText(`Lives: ${currentGame.lives}`, screenWidth - 30, screenHeight - 10);

  ctx.textAlign="center";
  ctx.fillText(`${currentGame.answer}`, screenWidth/2 , screenHeight - 10);

  if (currentGame.lives === 0) {
    currentGame.answer = '';
    ctx.fillText("Game Over!", screenWidth/2, screenHeight/2);
    ctx.fillText("Press space to restart", screenWidth/2, screenHeight/2 + 30);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (render);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const words = ['a', 'be', 'see', 'deed', 'fifth', 'sixths', 'seventh'];


class Target {
  constructor() {
    this.screenWidth = 900;

    this.target = words[Math.floor(Math.random() * words.length)];

    this.x = Math.random() * (this.screenWidth - 100) + 25;
    this.y = 0;

    this.solved = false;

    this.speed = 20;

    this.drop();

  }

  drop() {
    const fallSpeed = setInterval(() => {
      this.y += 1.5;
    }, this.speed);
  }

  // hitBottom(screenHeight) {
  //   return this.y > screenHeight - 30;
  // }

}

/* harmony default export */ __webpack_exports__["a"] = (Target);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
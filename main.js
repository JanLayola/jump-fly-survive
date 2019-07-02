'use strict';

function main() {
  
  var mainElement = document.querySelector('#site-main')

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  };

  function createSplashScreen() {
    var splashScreen = buildDom(`
      <section> 
        <h1>Jump, Fly & Survive</h1>
        <button>Start</button>
      </section>
    `);

    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', createGameScreen);

  };
  
  function createGameScreen() {
    var gameScreen = buildDom(`
      <section>
        <canvas width="600" height="750"></canvas>
      </section>
    `);

    var canvas = gameScreen.querySelector('canvas');
    var game = new Game(canvas);

    game.startGame();

    window.setTimeout(createGameOverScreen, "3000");
  };

  function createGameOverScreen() {
    var gameOverScreen = buildDom(`
      <section>
        <h1>Game Over</h1>
        <button id="restart-button">Restart</button>
        <button id="menu-button">Menu</button>
      </section>
    `);  
    
    var restartButton = gameOverScreen.querySelector('#restart-button');
    restartButton.addEventListener('click', createGameScreen);

    var menuButton = gameOverScreen.querySelector('#menu-button');
    menuButton.addEventListener('click', createSplashScreen);

  };


  createSplashScreen();

};

window.addEventListener('load', main);
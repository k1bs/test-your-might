let p1 = new Player(1);
let p2 = new Player(2);
let game = new GameState();

$(function(){
  keyStart();
  console.log(game)
})



// Keylogger function

function keyStart () {
  $(window).keydown(function(e) {
    console.log(e.which);
    if (e.which === 65 || e.which === 90) {
      $('#bar-player-1').stop(true, false);
      $('#bar-player-1').height('+=50');
      $('#bar-player-1').animate({height: 0}, 200);
    }
    if (e.which === 190 || e.which === 191) {
      $('#bar-player-2').stop(true, false);
      $('#bar-player-2').height('+=50');
      $('#bar-player-2').animate({height: 0}, 200);
    }
    if (e.which === 88) {
      $('#bar-player-1').stop();
      p1.addScore($('#bar-player-1').height());
      checkLine(p1);
    }
    if (e.which === 222) {
      $('#bar-player-2').stop();
      p2.addScore($('#bar-player-2').height());
      console.log(p2.score);
    }
  })
}

// Line checker function

function checkLine (player) {
  let line = game.height();
  let bar = `#bar-player-${player.number}`;
  if ($(bar).height() > line) {
    boardBreaker(player);
  }
}

// Board breaker function

function boardBreaker(player) {
  let board = `#mat-player-${player.number}`;
  let broken = `url(./images/${game.level}broken.png)`;
  $(board).css('background-image', broken);
}

// Game Constructor function

function GameState() {
  this.level = 1;
  this.height = function() {
    return Math.floor(246 - (123 / this.level));
  }
  this.next = function() {
    // Add code to change level, reload page?
  }
}


// Player Constructor function

function Player(number) {
  this.number = number;
  this.score = 0;
  this.addScore = function(score) {
    return this.score += score;
  };
}

// EmptyBar Constructor function

function EmptyBar(level) {
  this.level = level;
  this.barHeight = function () {
    // Math for bar height by level. (look up ease functions?)
  }
}



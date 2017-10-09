let p1 = new Player(1);
let p2 = new Player(2);
let game = new GameState();

$(function(){
  setMat();
  setBar();
  setText();
  keyStart();
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
      checkLine(p2);
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

// Game init

// Board breaker function

function boardBreaker(player) {
  let board = `#mat-player-${player.number}`;
  let broken = `url(./images/${game.level}broken.png)`;
  $(board).css('background-image', broken);
}

// Text setter function

function setText() {
  let header = $('h3');
  header.each(function(){
    $(this).text(game.matName());
  })
}

// Mat field setter function

function setMat() {
  let container = $('.material');
  let mat = `url(./images/${game.level}whole.png`;
  container.each(function() {
    $(this).css('background-image', mat);
  });
}

// Bar setter function

function setBar() {
  let toGain = $('.to-gain-bar');
  let excess = $('.excess-bar');
  toGain.each(function() {
    $(this).height(game.height());
  })
  excess.each(function() {
    $(this).height(246 - (game.height()));
  })
}

// Game Constructor function

function GameState() {
  this.level = 1;
  this.height = function() {
    return Math.floor(250 - (123 / (this.level)));
  }
  this.next = function() {
    // Add code to change level, reload page?
  }
  this.matName = function() {
    let mats = ['wood','stone','steel','ruby','diamond'];
    return mats[(this.level) - 1];
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





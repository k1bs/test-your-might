let p1 = new Player(1);
let p2 = new Player(2);

$(function(){
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
      console.log(p1.score);
    }
    if (e.which === 222) {
      $('#bar-player-2').stop();
      p2.addScore($('#bar-player-2').height());
      console.log(p2.score);
    }
  })
}

// Game Constructor function

function GameState() {
  this.level = null;
  this.next = function() {
    // Add code to change level, reload page?
  }
}


// Player Constructor function

function Player(number) {
  this.number = '#bar-player-' + number;
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



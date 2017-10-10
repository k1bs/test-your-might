let p1 = new Player(1);
let p2 = new Player(2);
let game = new GameState(1);
let strikeCount = 0;

let currentLevel = parseInt(localStorage.getItem('level'));
let p1Score = parseInt(localStorage.getItem('1-score'));
let p2Score = parseInt(localStorage.getItem('2-score'));

if (currentLevel) {
  game.level = currentLevel;
} else {
  game.score = 1;
}

if (p1Score) {
  p1.score = p1Score;
} else {
  p1.score = 0;
}

if (p2Score) {
  p2.score = p2Score;
} else {
  p2.score = 0;
}



$(function(){
  setMat();
  setBar();
  setText();
  keyStart();
  timer();
})



// Keylogger function

function keyStart () {
  $(window).on('keydown.one', window, handlerOne);
  $(window).on('keydown.two', window, handlerTwo);
  $(window).keydown(function(e) {
    if (e.which === 88) {
      $(window).off('keydown.one');
      $('#bar-player-1').stop();
      p1.addScore($('#bar-player-1').height());
      checkLine(p1);
      p1.storeScore();
    }
  })
  $(window).keydown(function(e) {
    if (e.which === 222) {
      $(window).off('keydown.two')
      $('#bar-player-2').stop();
      p2.addScore($('#bar-player-2').height());
      checkLine(p2);
      p2.storeScore();
    }
  })
  $('#title-button').click(function() {
    $('#shade').addClass('fade')
    setTimeout(function(){
      window.location.href = 'index.html';
    }, 1500);
  })
  $('#reset-button').click(function() {
    $('#shade').addClass('fade')
    setTimeout(function(){
      window.location.reload(true);
      localStorage.removeItem('level');
      localStorage.removeItem('1-score');
      localStorage.removeItem('2-score');
    }, 1500);
  })
}

// Line checker function

function checkLine (player) {
  strikeCount++;
  let line = game.height();
  let bar = `#bar-player-${player.number}`;
  let box = `#hero-player-${player.number}`;
  let animation = '';
  if (player === p1){
    animation = 'onechop'
  } else {
    animation = 'twochop'
  }
  $(box).removeClass('onebreathe twobreathe');
  window.setTimeout(function() {
    $('#punch').get(0).play();
  },500);
  $(box).addClass(animation);
  if ($(bar).height() > line) {
    boardBreaker(player);
  }
  if (strikeCount === 2) {
    window.clearInterval(interval);
    game.next();
  }

}

// Keyhandler Player One

function handlerOne(event) {
  if (event.which === 65 || event.which === 90) {
      $('#bar-player-1').stop(true, false);
      $('#bar-player-1').height('+=50');
      $('#bar-player-1').animate({height: 0}, 250);
  }
}

// Keyhandler Player Two

function handlerTwo(event) {
  if (event.which === 190 || event.which === 191) {
      $('#bar-player-2').stop(true, false);
      $('#bar-player-2').height('+=50');
      $('#bar-player-2').animate({height: 0}, 250);
  }
}

// Winner Check function

function checkWin() {
  if (p1.score > p2.score) {
    $('h1').text('Player One Wins!')
  } else if (p1.score < p2.score) {
    $('h1').text('Player Two Wins!')
  } else {
    $('h1').text(`It's a draw!`)
  }
}

// Board breaker function

function boardBreaker(player) {
  let board = `#mat-player-${player.number}`;
  let broken = `url(./images/${game.level}broken.png)`;
  let timer = window.setTimeout(function() {
    $(board).css('background-image', broken);
    $('#crunch').get(0).play();
  }, 600)
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

function GameState(cachedLevel) {
  this.level = cachedLevel;
  this.height = function() {
    return Math.floor(250 - (123 / (this.level)));
  }
  this.next = function() {
    if (this.level !== 5) {
      this.level++;
      localStorage.setItem('level',this.level);
      setTimeout(function(){
        $('#begin').get(0).pause();
        $('#end').prop('volume',0.5);
        $('#end').get(0).play();
      }, 2000)
      setTimeout(function() {
        $('#shade').addClass('fade');
      },7000)
      setTimeout(function() {
        window.location.reload(true);
      }, 8500);
    } else if (this.level === 5) {
      setTimeout(function () {
        checkWin();
        $('h1').addClass('h1-blink')
      }, 4000)
      setTimeout(function () {
        $('#victory').get(0).play();
      }, 6000)
    }
  }
  this.matName = function() {
    let mats = ['wood','stone','steel','ruby','diamond'];
    let bonus = [40, 80, 120, 200, 300];
    return mats[(this.level) - 1];
  }
}


// Player Constructor function

function Player(number, score) {
  this.number = number;
  this.score = score;
}

Player.prototype.storeScore = function() {
  let holderName = `${this.number}-score`;
  localStorage.setItem(holderName, this.score);
};

Player.prototype.addScore = function(newScore) {
  this.score = Math.floor(this.score + newScore);
}

// EmptyBar Constructor function

function EmptyBar(level) {
  this.level = level;
  this.barHeight = function () {
    // Math for bar height by level. (look up ease functions?)
  }
}

// Timer decrement function

function timer() {
  interval = setInterval(newText, 1000);
  function newText() {
    let currentTime = parseInt($('h1').html());
    let newTime = currentTime - 1;
    if (currentTime === 5) {
      $('h1').addClass('h1-blink')
    }
    if (currentTime === 0) {
      $('h1').removeClass('h1-blink')
      clearInterval(interval);
      $(window).off('keydown.one')
      $(window).off('keydown.two')
      game.next();
    } else {
      let newTime = currentTime - 1;
      $('h1').text(newTime);
    }
  }
}





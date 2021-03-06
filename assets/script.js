/* global localStorage: false, console: false, $: false */
let p1 = new Player(1)
let p2 = new Player(2)
let game = new GameState(1)
let strikeCount = 0

let interval

let currentLevel = parseInt(localStorage.getItem('level'))
let p1Score = parseInt(localStorage.getItem('1-score'))
let p2Score = parseInt(localStorage.getItem('2-score'))

if (currentLevel) {
  game.level = currentLevel
} else {
  game.score = 1
}

if (p1Score) {
  p1.score = p1Score
} else {
  p1.score = 0
}

if (p2Score) {
  p2.score = p2Score
} else {
  p2.score = 0
}

$(function () {
  setMat()
  setBar()
  setText()
  keyStart()
  timer()
})

// initialize keylogger for controls

function keyStart () {
  $(window).on('keydown.one', window, handlerOne)
  $(window).on('keydown.two', window, handlerTwo)
  $(window).keydown(function (e) {
    if (e.which === 88) {
      $(window).off('keydown.one')
      $('#bar-player-1').stop()
      p1.addScore(($('#bar-player-1').height()) * 100)
      checkLine(p1)
      p1.storeScore()
    }
  })
  $(window).keydown(function (e) {
    if (e.which === 222) {
      $(window).off('keydown.two')
      $('#bar-player-2').stop()
      p2.addScore(($('#bar-player-2').height()) * 100)
      checkLine(p2)
      p2.storeScore()
    }
  })
  $('#title-button').click(function () {
    $('#shade').addClass('fade')
    setTimeout(function () {
      window.location.href = 'index.html'
    }, 1500)
  })
  $('#reset-button').click(function () {
    $('#shade').addClass('fade')
    localStorage.removeItem('level')
    localStorage.removeItem('1-score')
    localStorage.removeItem('2-score')
    setTimeout(function () {
      window.location.reload(true)
    }, 1500)
  })
}

// line checker and chop animation function

function checkLine (player) {
  strikeCount++
  let line = game.height()
  let bar = `#bar-player-${player.number}`
  let box = `#hero-player-${player.number}`
  let animation = ''
  if (player === p1) {
    animation = 'onechop'
  } else {
    animation = 'twochop'
  }
  $(box).removeClass('onebreathe twobreathe')
  window.setTimeout(function () {
    $('#punch').get(0).play()
  }, 500)
  $(box).addClass(animation)
  if ($(bar).height() > line) {
    boardBreaker(player)
    player.addScore(game.matBonus())
  }
  if (strikeCount === 2) {
    window.clearInterval(interval)
    game.next()
  }
}

// Keyhandler Player One

function handlerOne (event) {
  if (event.which === 65 || event.which === 90) {
    $('#bar-player-1').stop(true, false)
    $('#bar-player-1').height('+=50')
    $('#bar-player-1').animate({height: 0}, 250)
  }
}

// Keyhandler Player Two

function handlerTwo (event) {
  if (event.which === 190 || event.which === 191) {
    $('#bar-player-2').stop(true, false)
    $('#bar-player-2').height('+=50')
    $('#bar-player-2').animate({height: 0}, 250)
  }
}

// Final score / winner function

function checkWin () {
  if (p1.score > p2.score) {
    $('#hero-player-1').stop()
    $('#hero-player-1').removeClass('onechop onebreathe')
    setTimeout(function () {
      $('h1').text('Player One Wins!')
    }, 1000)
  } else if (p1.score < p2.score) {
    $('#hero-player-2').stop()
    $('#hero-player-2').removeClass('twochop twobreathe')
    setTimeout(function () {
      $('h1').text('Player Two Wins!')
    }, 1000)
  } else {
    $('h1').text(`It's a draw!`)
  }
}

// Board breaker function

function boardBreaker (player) {
  let board = `#mat-player-${player.number}`
  console.log(game.level)
  let broken = `url(./images/${game.level}broken.png)`
  window.setTimeout(function () {
    $(board).css('background-image', broken)
    $('#crunch').get(0).play()
  }, 600)
}

// Text setter function

function setText () {
  let header3 = $('h3')
  let header4 = $('h4')
  header3.each(function () {
    $(this).text(game.matName())
  })
  header4.each(function () {
    $(this).text('break bonus: ' + game.matBonus())
  })
}

// Mat field setter function

function setMat () {
  let container = $('.material')
  let mat = `url(./images/${game.level}whole.png`
  container.each(function () {
    $(this).css('background-image', mat)
  })
}

// Bar setter function

function setBar () {
  let toGain = $('.to-gain-bar')
  let excess = $('.excess-bar')
  toGain.each(function () {
    $(this).height(game.height())
  })
  excess.each(function () {
    $(this).height(246 - (game.height()))
  })
}

// Game Constructor function

function GameState (cachedLevel) {
  this.level = cachedLevel
  this.height = function () {
    return Math.floor(250 - (123 / (this.level)))
  }
  this.next = function () {
    if (this.level !== 5) {
      this.level++
      localStorage.setItem('level', this.level)
      setTimeout(function () {
        $('#p1-h4').html(`Total: <span class="h1-blink">${p1.score}<span>`)
        $('#p2-h4').html(`Total: <span class="h1-blink">${p2.score}<span>`)
        // $('h4').each(function() {
        //   $(this).addClass('h1-blink');
        // })
      }, 1500)
      setTimeout(function () {
        $('#begin').get(0).pause()
        $('#end').prop('volume', 0.5)
        $('#end').get(0).play()
      }, 3000)
      setTimeout(function () {
        $('#shade').addClass('fade')
      }, 8000)
      setTimeout(function () {
        window.location.reload(true)
      }, 9200)
    } else if (this.level === 5) {
      setTimeout(function () {
        $('#p1-h4').html(`Total: <span class="h1-blink">${p1.score}<span>`)
        $('#p2-h4').html(`Total: <span class="h1-blink">${p2.score}<span>`)
      }, 4000)
      setTimeout(function () {
        checkWin()
      }, 5000)
      setTimeout(function () {
        $('h1').addClass('h1-blink')
      }, 6000)
      setTimeout(function () {
        $('#victory').get(0).play()
      }, 8000)
    }
  }
  this.matName = function () {
    let mats = ['wood', 'stone', 'steel', 'ruby', 'diamond']
    return mats[(this.level) - 1]
  }
  this.matBonus = function () {
    let bonus = [4000, 8000, 12000, 20000, 30000]
    return bonus[(this.level) - 1]
  }
}

// Player Constructor function

function Player (number, score) {
  this.number = number
  this.score = score
}

Player.prototype.storeScore = function () {
  let holderName = `${this.number}-score`
  localStorage.setItem(holderName, this.score)
}

Player.prototype.addScore = function (newScore) {
  this.score = Math.floor(this.score + newScore)
}

// Timer decrement function

function timer () {
  interval = setInterval(newText, 1000)
  function newText () {
    let currentTime = parseInt($('h1').html())
    if (currentTime === 5) {
      $('h1').addClass('h1-blink')
    }
    if (currentTime === 0) {
      $('h1').removeClass('h1-blink')
      clearInterval(interval)
      $(window).off('keydown.one')
      $(window).off('keydown.two')
      game.next()
    } else {
      let newTime = currentTime - 1
      $('h1').text(newTime)
    }
  }
}

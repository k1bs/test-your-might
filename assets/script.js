
$(function(){
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
  })
})

function Player(Number) {
  this.number = number;
  this.score = 0;
  this.addScore = function(score) {
    return this.score += score;
  }
}

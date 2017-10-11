$(function (){
  console.log('page loaded')
  $('#play-link').click(function(){
    $('body').append('<div id="shade" class="fade"></div>')
    localStorage.setItem('level',1);
    localStorage.setItem('1-score',0);
    localStorage.setItem('2-score',0);
    setTimeout(function(){
      window.location.href = 'game.html';
    }, 1500);
  })
  $('#instructions-link').click(function(){
    $('body').append('<div id="instruction" ></div>')
    $('#instruction').html('<h3 id="instruction-h3">Instructions</h3><p class="instruction-p">Press your assigned strength keys as fast as you can!</p><p class="instruction-p">Fill your bar as high as you can, then prepare to strike! Only a well timed strike will break what lies in front of you, unlocking extra points!</p><p class="instruction-p">The highest score after five rounds wins!</p><p class="instruction-p">Press <span>ESC</span> to exit</p><div id="inst-float-left"><h4 class="inst-label">player 1</h3><p style="text-align:left">Strength keys: <span>A</span> and <span>Z</span><br>Strike key: <span>X</span></p></div><div id="inst-float-right"><h4 class="inst-label">player 2</h4><p style="text-align:left">Strength keys: <span>.</span> and <span>?</span><br>Strike key: <span>"</span></p></div>');
  })
  $(window).keydown(function(e) {
    if (e.which === 27) {
      $('#instruction').remove();
    }
  })
})

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
    $('#instruction').html('<p>Test Paragraph</p>');
  })
  $(window).keydown(function(e) {
    if (e.which === 27) {
      $('#instruction').remove();
    }
  })
})

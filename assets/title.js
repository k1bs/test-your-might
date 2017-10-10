$(function (){
  console.log('page loaded')
  $('#play-link').click(function(){
    $('#shade').addClass('fade');
    $('body').append('<div id="shade" class="fade"></div>')
    setTimeout(function(){
      window.location.href = 'game.html';
    }, 1500);
  })
})

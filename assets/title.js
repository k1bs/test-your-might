$(function (){
  console.log('page loaded')
  $('#play-link').click(function(){
    $('body').append('<div id="shade" class="fade"></div>')
    setTimeout(function(){
      window.location.href = 'game.html';
    }, 1500);
  })
})

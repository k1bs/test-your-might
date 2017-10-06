
$(function(){
  $(window).keydown(function(e) {
    if (e.which === 65 || e.which === 90) {
      console.log('go up');
      $(".bar").height('+=30');
    }
  })
})

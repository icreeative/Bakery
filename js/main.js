
$(function() {
  var siema = new Siema({
    loop: true,
    duration: 500,
    draggable: false,
    perPage: 3,
    easing: 'ease-in'
  });
  $('.carousel-left').on('click', ()=>{
    siema.prev();
    return false;
  })
  $('.carousel-right').on('click', ()=>{
    siema.next();
    return false;
  })
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
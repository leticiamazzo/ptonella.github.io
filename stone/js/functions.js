$(document).ready(function() {
  $('.smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 110
        }, 1200);
        return false;
      }
    }
  });


  $('.main-menu a').on('click', function() {
    $(this).prevAll('li').addClass('active').siblings('li').removeClass('active');
  });
});

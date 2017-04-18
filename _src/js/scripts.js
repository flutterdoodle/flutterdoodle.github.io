lightbox.option({
  'showImageNumberLabel': false,
  'resizeDuration': 400
})

$(document).ready(function(){
  var loc = window.location.pathname;

  $('.nav__link').each(function() {
    $(this).toggleClass('nav__link--active', $(this).attr('href') == loc);
  });
})
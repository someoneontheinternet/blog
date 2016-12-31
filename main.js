
$('html, body').animate({
    scrollTop: "0px"
}, 0);

$(window).load(function() {
  $('.banner-title').removeClass('pre');
  $('.banner-subtitle').removeClass('pre');
  $('.banner-scrolldown').removeClass('pre');

  var doc = $(window);
  var pos = 0;

  var start = $('#main-section').offset().top - 50;
  var navbar = $('.navbar-inverse');

  $(window).resize() {
    start = $('#main-section').offset().top - 50;
  }

  doc.on('scroll', function() {
    pos = doc.scrollTop();
    if (pos >= start) {
      navbar.css('background-color', '#222');
    } else {
      navbar.css('background-color', 'rgba(0, 0, 0, 0)');
    }
  });

});

var btnToggle = $('#btn-navbar-top-toggle');
var icon = $('#nav-icon');
var navbarHeader = $('.navbar-header');

btnToggle.click(function() {
  if (navbarHeader.hasClass('open')) {
    setTimeout(function() {
      navbarHeader.removeClass('open');
    }, 322);
  } else {
    navbarHeader.addClass('open');
  }

  icon.toggleClass('open');
});























/*
*/

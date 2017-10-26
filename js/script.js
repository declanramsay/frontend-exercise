$(document).ready(function() {
  $('.hamburger-icon').on('click touch', function(e) {
    $('.subMenu').toggleClass('visible');
    e.stopPropagation();
    e.preventDefault();
  });
});

$(document).on('click touch', function(e) {
  let subMenu = $('.subMenu');
  if (!subMenu.is(e.target) && subMenu.has(e.target).length === 0 && subMenu.hasClass('visible')) {
    subMenu.removeClass('visible');
  }
});
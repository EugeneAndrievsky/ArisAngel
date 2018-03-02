$('header').hide().fadeIn(2000);

$('.main-menu').on('click', 'a', function(event) {
  event.preventDefault();
  var url = this.href;

  $('li.current').removeClass('current');
  $(this).closest('li').addClass('current');

  $('#content').remove();
  $('main').load(url + ' #content').hide().fadeIn('slow');
});

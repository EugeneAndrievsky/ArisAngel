$('header').hide();

$(function(){
  $('header').fadeIn(2000);
  $('.main-nav__list').on('click', '.main-nav__link', function(event) {
    event.preventDefault();
    var url = this.href;
    var $this = $(this);

    $this
      .closest('.main-nav__list')
      .find('.main-nav__link')
      .removeClass('main-nav__link--current');
    $this.addClass('main-nav__link--current');

    $('#content').remove();
    $('.main-content').load(url + ' #content').hide().fadeIn('slow');
  });
});

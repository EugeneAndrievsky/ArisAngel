$(function(){
  var $verses = $('.poem__content');

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
    $('.main-content').load(url + ' #content', function(){
      $('.poem__content').hide();
    })
      .hide()
      .fadeIn('slow');
  });


  $('.main-content').on('click', '.poem__name', function() {
    var $nextVerses = $(this).next($verses);
    if($nextVerses.hasClass('.poem__name--opened')) {
      $nextVerses
        .removeClass('.poem__name--opened')
        .slideUp(500);
    } else {
      $nextVerses
        .addClass('.poem__name--opened')
        .slideDown(500);
    }
  });

});

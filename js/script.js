$(function(){
  var $verses = $('.poem__content');
  var flag = false;
  var setDelay = function() {
    if (flag) {
      return 500;
    }
    return 0;
  }

  $('header').fadeIn(2000);
  $('.main-nav__list').on('click', '.main-nav__link', function(event) {
    event.preventDefault();
    var url = this.href;
    var $this = $(this);

// Визуальное переключение страниц в навигации
    $this
      .closest('.main-nav__list')
      .find('.main-nav__link')
      .removeClass('main-nav__link--current');
    $this.addClass('main-nav__link--current');

// Подгрузка страниц через ajax
    $('#content').remove();
    $('.main-content').load(url + ' #content', function(){
      $('.poem__content').hide();
    })
      .hide()
      .fadeIn('slow');
  });

// Показ стихов
  $('.main-content').on('click', '.poem__title', function() {
    var $this = $(this);
    var $nextVerses = $(this).next($verses);

    if(!$this.hasClass('poem__title--current')) {
      $('.poem__title--current').removeClass('poem__title--current');
      $('.poem__content--opened').slideUp(500);
      $this.addClass('poem__title--current');
      $nextVerses
        .delay(setDelay())
        .addClass('poem__content--opened')
        .slideDown(500);
        flag = true;
    } else {
      $this.removeClass('poem__title--current');
      $nextVerses
        .removeClass('poem__content--opened')
        .slideUp(500);
    }
  });

});

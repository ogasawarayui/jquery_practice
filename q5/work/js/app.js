$('.dropdown').hover(
  function () {
    //カーソルが重なった時
    $(this).children('.dropdown-menu').addClass('open');
  }, function () {
    //カーソルが離れた時
    $(this).children('.dropdown-menu').removeClass('open');
  }
);

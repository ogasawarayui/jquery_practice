$(".drawer_button").on('click', function () {
  $(".drawer_bg").toggle();
  $(".drawer_button").toggleClass(".active");
  $(".drawer_nav_wrapper").toggleClass(".open");
});
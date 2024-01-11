$(function () {
  $(".nav-item").on("click", function () {
    $(".description li").addClass("is-hidden");
    $(this).removeClass("is-hidden");
    var index = $(this).index();
    $(".is-hidden").hide();
    $(".is-hidden").eq(index).fadeIn(0);
  });
});
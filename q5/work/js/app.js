$(function () {
  $(".dropdwn li").hover(
    function () {
      $(".dropdwn_menu:not(:animated)", this).slideDown();
    },
    function () {
      $(".dropdwn_menu", this).slideUp();
    }
  );
});

$("#nav-item li").on('click', function () {
  var index = $(this).index();
  $("#is-hidden li").eq(index).addClass("")
});
/*Q1-1*/
//読み込み時に
$(window).on('load', function () {
  //文字色変更
  $("#q1").css("color", "#4169e1");
});
/*Q1-2*/
//クリックして
$("#q2").on('click', function () {
  //ボタンの背景色変更
  $("#q2").css("background-color", "#ffffff");
});
/*Q1-3*/
//クリックして
$("#q3").on('click', function () {
  //３秒かけてフェードアウト
  $("#q3").fadeOut(3000);
});
/*Q1-4*/
//クリックして
$("#q4").on('click', function () {
  //サイズ変更
  $("#q4").addClass("large");
});
/*Q1-5*/
//クリックして
$("#q5").on('click', function () {
  //DOM揷入
  $("#q5").before("DOMの前").prepend("DOMの中の前").append("DOMの中の後").after("DOMの後");
});
/*Q1-6*/
//クリックして
$("#q6").on('click', function () {
  //２秒かけて移動
  $("#q6").animate({ 'margin-top': '100px', 'margin-left': '100px' }, 2000);
});
/*Q1-7*/
//クリックして
$("#q7").on('click', function () {
  //idのノードをコンソールで表示
  var id = $("#q7").attr("#q7");
  console.log(id);
});
/*Q1-8*/
//ホバー時に
$("#q8").hover(
  function () {
    //ボタンのサイズ変更
    $("#q8").addClass("large");
  }
);
/*Q1-9*/
//クリックして
$("#q9 li").on('click', function () {
  //配列のアラート表示
  var index = $("#q9 li").index($(this));
  alert(index);
});
/*Q1-10*/
$("#q10 li").on('click', function () {
  //Q10をクリックしてQ11を操作
  var index = $(this).index();
  $("#q11 li").eq(index).addClass("large-text")
});

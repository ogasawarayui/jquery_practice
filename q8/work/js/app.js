// API
$(function () {
  //ページカウントの初期値を設定する
  var pageCount = 1;
  //検索ワードの初期値を設定する　変数に前の検索ワードを格納
  var searchLog = "";
  const settings = {
    "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
    "method": "GET",
  }
  $(".search-btn").on("click", function () {
    var searchWord = $("#search-input").val();
    if (searchWord === searchLog) {
      pageCount = pageCount + 1;
    } else {
      pageCount = 1;
      searchLog = searchWord;
    }
    console.log($("#search-input").val());
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      displayResult(result)
    }).fail(function (err) {
      displayError(err)
    });
  });
  function displayResult(data) {
    //for (let i = 0; i < len; i++) { のようなコード書く
  }
  function displayError(error) {

  }
});
// API
$(function () {
  //ページカウントの初期値を設定する
  var pageCount = 1;
  //検索ワードの初期値を設定する　変数に前の検索ワードを格納
  var searchLog = "";
  $(".search-btn").on("click", function () {
    var searchWord = $("#search-input").val();
    if (searchWord === searchLog) {
      pageCount = pageCount + 1;
      console.log(pageCount);
    } else {
      pageCount = 1;
      searchLog = searchWord;
      console.log(searchLog);
    }
    console.log($("#search-input").val());
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    }
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      displayResult(result)
    }).fail(function (err) {
      displayError(err)
    });
  });
  function displayResult(result) {
    $(".lists").empty();
    const resultItem = result[0].items;
    if (result && result.length > 0) {
      $.each(resultItem, function (index, item) {
        console.log(item);
        const title = item["title"];
        console.log(title);
        const creator = item["dc:creator"];
        const bookinfo = title + creator;
        $(".lists").prepend(bookinfo);
      });
    }
  }
  $(".reset-btn").on('click', function () {
    $(".lists").empty();
  })
  function displayError(err) {
    console.log(err.status);
  }
  if (400 === 400) {
    console.log("リクエストエラー")
  }
  else if (0 === 0) {
    console.log("正常に処理できませんでした")
  }
  else {
    console.log("エラーが発生しました")
  }
  var result = $('lists').position();
  console.log(result);
  console.log(result.top);
  console.log(result.left);

  const pos = $('lists').offset();

  console.log(pos);


});
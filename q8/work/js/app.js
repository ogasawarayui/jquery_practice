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
    $(".message").remove();
    const resultItem = result[0].items;
    if (result[0]["opensearch:totalResults"] > 0) {
      $.each(resultItem, function (index, item) {
        const title = item["title"];
        const creator = item["dc:creator"];
        const publisher = item["dc:publisher"];
        const link = item["link"]["@id"];
        console.log(link);
        const bookinfo = '<li class="lists-item"><div class="list-inner"><p>タイトル：' + title + '</p><p>作者：' + creator + '</p><p>出版社：' + publisher + '</p><a href="' + link + '" target="_blank">書籍情報</a></div></li>';
        $(".lists").prepend(bookinfo);
      });
    } else {
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
    }
  }

  function displayError(err) {
    console.log(err.status);
    $(".message").remove();
    if (err.status === 400) {
      $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>');
    }
    else if (err.status === 0) {
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
    }
    else {
      $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>');
    }
  }

  $(".reset-btn").on('click', function () {
    $(".lists").empty();
    $("#search-input").val("");
    $(".message").remove();
  });

});


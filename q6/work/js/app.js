$(function () {
  $(".select-box").on("change", function () {
    var str = $(this).val();
    var allFood = $(".food-list li");
    if (str === "all") {
      allFood.show();
    } else {
      $.each(allFood, function (e, foodList) {
        //変数dに変数foodListのデータ属性"category-type"を格納する
        const eachFoodList = $(foodList).data("category-type");
        //変数bが変数dと等しければ変数aを表示、等しくなければ非表示
        if (str === eachFoodList) {
          $(foodList).show();
        } else {
          $(foodList).hide();
        }
      })
    }
  })
});
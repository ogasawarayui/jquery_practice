$(function () {
  $(".btn__submit").on('click', function () {
    const FamilyName = $("#family__name").val();
    console.log("名字");
    console.log(FamilyName);
    const GivenName = $("#given__name").val();
    console.log("名前");
    console.log(GivenName);
    const LabelSection = $(":checked").val();
    console.log("生年月日");
    console.log(LabelSection);
    console.log("年");
    const SelectUnit = $('select__unit[name=.month]:checked').val();
    console.log(SelectUnit);
    console.log("月");
    console.log("日");
  });
});
$(function () {
  $(".btn__submit").on('click', function () {
    const FamilyName = $("#family__name").val();
    console.log("名字");
    console.log(FamilyName);
    const GivenName = $("#given__name").val();
    console.log("名前");
    console.log(GivenName);
    const LabelText = $("#label__text").val();
    console.log("生年月日");
    console.log(LabelText);
    const LabelSection = $(":checked").val();
    console.log(LabelSection);
    const Required = $("#label__text").val();
    console.log("生年月日");
    console.log(LabelText); = $("#label__text").val();
    console.log("required”);
    console.log(LabelText);
  });
}); 
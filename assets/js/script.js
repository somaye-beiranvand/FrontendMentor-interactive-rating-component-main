document.addEventListener("DOMContentLoaded", function () {
  $(".thank-card").hide();
  $(".thank-card__btn").on("click", function () {
    $(".card").show();
    $(".thank-card").hide();
  });
  $(".card__submit").on("click", function (e) {
    e.preventDefault();
    let r = $("input[name=score]:checked").val();
    $(".card").hide();
    $(".thank-card").show();
    $(".thank-card__result").text("You selected " + r + " out of 5");
  });
  $("input[name='score']").on("focus", function () {
    $(this).parent().css("background-color", "orange");
  });
  $("input[name='score']").on("blur", function () {
    $(this).parent().css("background-color", "white");
  });
});

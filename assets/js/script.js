document.addEventListener("DOMContentLoaded", function () {
  $(".card__submit").on("click", function (e) {
    e.preventDefault();
    let r = $("input[name=score]:checked").val();
    $(".card").hide();
    $(".thank-card").css("display", "flex");
    $(".thank-card__result").text("You selected " + r + " out of 5");
  });
  $(".thank-card__btn").on("click", function () {
    $(".card").show();
    $(".thank-card").hide();
  });
  $("input[name='score']").on("focus", function () {
    $(this).parent().addClass("selected");
  });
  $("input[name='score']").on("blur", function () {
    $(this).parent().removeClass("selected");
  });
});

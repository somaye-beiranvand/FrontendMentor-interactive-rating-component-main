document.addEventListener("DOMContentLoaded", function () {
  const RatingCardBtn = $(".rating-card__btn");
  const RatingCard = $(".rating-card");
  const ThankCard = $(".thank-card");
  const ThankCardResult = $(".thank-card__result");
  const ThankCardBtn = $(".thank-card__btn");

  RatingCardBtn.on("click", function (e) {
    e.preventDefault();
    RatingCard.hide();
    ThankCard.css("display", "flex");
    /*render selected value*/
    let r = $("input[name=score]:checked").val();
    /*show selected value*/
    ThankCardResult.text("You selected " + r + " out of 5");
  });

  ThankCardBtn.on("click", function () {
    $("input[name=score]:checked").prop("checked", false);
    RatingCardBtn.prop("disabled", true);
    RatingCard.show();
    ThankCard.hide();
  });

  $("input[name='score']").on("focus", function () {
    RatingCardBtn.prop("disabled", false);
  });
  // $("input[name='score']").on("blur", function () {
  // });
});

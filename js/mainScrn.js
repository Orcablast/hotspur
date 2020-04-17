var imgNums = 8;

$(function () {
  imgSlide();

  setInterval(slideAnimation, 5000);

  function getImgNum() {
    return Math.floor(Math.random() * imgNums) + 1;
  }

  function imgSlide() {
    $(".main_scrn img").attr("src", "./imgs/bg/" + getImgNum() + ".png");
  }

  function slideAnimation() {
    $(".main_scrn img").animate({ opacity: "0" }, "slow", imgSlide);
    $(".main_scrn img").animate({ opacity: "0.65" }, "slow");
  }
});

var imgNums = 8;
var imgIndex = 0;
var nums = [];

$(function () {
  function getNums() {
    for (var i = 1; i <= imgNums; i++) {
      nums.push(i);
    }

    nums.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  }

  getNums();

  imgSlide();

  interval = setInterval(slideAnimation, 5000);
  timeOut = null;

  function imgSlide() {
    if (imgIndex == imgNums || imgIndex < 0) {
      imgIndex = 0;
    }

    console.log(imgIndex);
    $(".main_scrn img").attr("src", "./imgs/bg/" + nums[imgIndex++] + ".png");
  }

  function slideAnimation() {
    $(".main_scrn img").animate({ opacity: "0" }, "slow", imgSlide);
    $(".main_scrn img").animate({ opacity: "0.65" }, "slow");
  }

  $("#scrn_next").click(function () {
    clearInterval(interval);
    if (timeOut != null) {
      clearTimeout(timeOut);
    }

    slideAnimation();
    timeOut = setTimeout(function () {
      interval = setInterval(slideAnimation, 5000);
    }, 7000);
  });

  $("#scrn_prev").click(function () {
    clearInterval(interval);
    if (timeOut != null) {
      clearTimeout(timeOut);
    }

    imgIndex = imgIndex - 2;

    slideAnimation();
    timeOut = setTimeout(function () {
      interval = setInterval(slideAnimation, 5000);
    }, 7000);
  });
});

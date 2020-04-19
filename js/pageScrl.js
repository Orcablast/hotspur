$(function () {
  if (document.body.scrollHeight > 970) {
    console.log("스크롤 페이지");
    window.addEventListener("wheel", pageScrl);
    $("footer").addClass("scrl_page_footer scroll");
    $("main").addClass("scrl_page_main");
    $("header").addClass("scrl_page_header");
  }

  function pageScrl(event) {
    var y = event.deltaY;
    var pageY = window.scrollY;

    if ($("header").css("display") != "none" && y > 0) {
      $("header").addClass("scrolled");
      $("header").slideToggle(function () {
        $(this).clearQueue();
      });
    } else if ($("header").css("display") == "none" && y < 0) {
      $("header").slideToggle(function () {
        $(this).clearQueue();
      });
    }

    if (
      $("footer").css("display") == "none" &&
      pageY > document.body.scrollHeight - window.innerHeight - 100
    ) {
      $("footer").slideToggle(150, function () {
        $(this).clearQueue();
      });
    } else if (
      $("footer").css("display") != "none" &&
      pageY < document.body.scrollHeight - window.innerHeight
    ) {
      $("footer").slideToggle(200, function () {
        $(this).clearQueue();
      });
    }
  }
});

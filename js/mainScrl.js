$(function () {
  $("footer").toggle();
  $("main").toggle();
  $(".dh-myinfo").toggle();
  enable();

  function userMenu() {
    $(".dh-myinfo").fadeToggle();
  }

  function disable() {
    $("header").off("mousewheel DOMMouseScroll");
  }

  function enable() {
    $("header").on("mousewheel DOMMouseScroll", scrollScrn);
  }

  function scrollScrn() {
    disable();

    $(this).prev().slideToggle();

    setTimeout(enable, 300);
    $("main").fadeToggle();
    $("footer").toggle();

    if ($("main").css("display") == "none") {
      $(".dh-user i").off("click");
    } else {
      $(".dh-user i").on("click", userMenu);
    }
  }
});

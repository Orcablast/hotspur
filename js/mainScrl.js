$(function () {
  $("footer").toggle();
  $("main").toggle();
  enable();

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
  }
});

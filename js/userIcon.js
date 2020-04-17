$(".dh-myinfo").toggle();
$(".dh-user i").on("click", userMenu);

function userMenu() {
  $(".dh-myinfo").fadeToggle();
  window.click.stopPropagation();
}

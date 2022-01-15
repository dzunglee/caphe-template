$('body').on('mouseenter', '.icon_menu_right', function (e) {
  if (!$(this).hasClass('show')) {
    $(this).find('.bt_cut').click();
  }
});
$('body').on('mouseleave', '.icon_menu_right', function (e) {
  if ($(this).hasClass('show')) {
    $(this).click();
  }
});

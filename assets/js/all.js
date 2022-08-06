"use strict";

$(document).ready(function () {
  $('.tab').on('click', function () {
    console.log("click one");
    $('.tab').removeClass('active');
    $(this).addClass('active');
  });
  $('.mnuBar .tab').on('click', function () {
    console.log("click one");
    $('.mnuBar .tab').removeClass('active');
    $(this).addClass('active');
  });
});
//# sourceMappingURL=all.js.map

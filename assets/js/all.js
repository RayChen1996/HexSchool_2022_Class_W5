"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $('.tab').on('click', function () {
    console.log("click one");
    $('.tab').removeClass('active');
    $(this).addClass('active');
  });
});
//# sourceMappingURL=all.js.map

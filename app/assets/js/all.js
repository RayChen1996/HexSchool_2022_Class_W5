console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');




  $('.tab').on('click', function() {
    console.log("click one")
    $('.tab').removeClass('active');
    $(this).addClass('active');
  });
});



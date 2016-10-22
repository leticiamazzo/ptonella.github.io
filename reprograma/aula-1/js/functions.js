$(function () {
  $(".inline-list-side input").change(function(){
    if ($('.inline-list-side input:checked').length == $('.inline-list-side input[type="checkbox"]').length) {
      $(".answer").show();
    } else {
      $(".answer").hide();
    }
  });

  $("[data-answer").on('click', function(event) {
    $(this).next('.answer-image').show();
  });


});

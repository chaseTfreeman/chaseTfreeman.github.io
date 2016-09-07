$(document).ready(function() {

//   function check_if_in_view() {
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = (window_top_position + window_height);
//
//   $.each($animation_elements, function() {
//     var $element = $(this);
//     var element_height = $('#p-holder').outerHeight();
//     var element_top_position = $('#p-holder').offset().top;
//     var element_bottom_position = (element_top_position + element_height);
//
//     //check to see if this current container is within viewport
//     if ((element_bottom_position >= window_top_position) &&
//         (element_top_position <= window_bottom_position)) {
//       $('#p-holder').addClass('parallax-holder');
//     } else {
//       $('#p-holder').removeClass('parallax-holder');
//     }
//   });
// }
  $(window).scroll(function() {
      $(".parallax-holder").css({
      'opacity' : .85-(($(this).scrollTop())/1000)
      });
  });
  $(window).scroll(function() {
      $(".parallax-holder2").css({
      'opacity' : 1.35 -(($(this).scrollTop())/1500)
      });
  });
});

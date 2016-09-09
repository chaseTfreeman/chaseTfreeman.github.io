$(document).ready(function() {
  // $(window).scroll(function() {
  //     $(".parallax-holder").css({
  //     'opacity' : 1 -(($(this).scrollTop())/1200)
  //     });
  // });
  // $(window).scroll(function() {
  //     $(".parallax-holder2").css({
  //     'opacity' : 1.5 -(($(this).scrollTop())/1500)
  //     });
  // });
  $(".foodme-scroll").click(function() {
      $('html,body').animate({
          scrollTop: $(".foodme-start-scroll").offset().top},
          'slow');
  });
  $(".picstory-scroll").click(function() {
      $('html,body').animate({
          scrollTop: $(".picstory-start-scroll").offset().top},
          'slow');
  });
  $(".resume-scroll").click(function() {
      $('html,body').animate({
          scrollTop: $(".resume-start-scroll").offset().top},
          'slow');
  });
});

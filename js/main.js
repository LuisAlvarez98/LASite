$(document).ready(function(){
      $('.parallax').parallax();
    $("#button-projects").click(function() {
      $('html, body').animate({
          scrollTop: $("#projects").offset().top
      }, 1000);
  });

  $("#button-personal").click(function(){
    $('html, body').animate({
      scrollTop: $("#personal").offset().top
    }, 1000);
  });

    $("#button-academic").click(function(){
      $("html, body").animate({
        scrollTop: $("#academic").offset().top
      }, 1000);
    });
  });

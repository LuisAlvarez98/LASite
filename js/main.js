$(document).ready(function(){
  //Materialize
      $('.parallax').parallax();
    $("#button-projects").click(function() {
      $('html, body').animate({
          scrollTop: $("#projects").offset().top
      }, 1000);
  });
  //end of Materialize
  //Navbar Buttons
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
    //end of Navbar Buttons
    $(function(){
        $('.items').fadeIn(2000);
    });
  });

/*======================================
  =            Hamburger Menu            =
  ======================================*/

  $(".ham").click(function() {
    $('.rb-main-menu').slideToggle();
    $(this).toggleClass('active');
    $(this).toggleClass('rb-close');
    
  });

  /*=====  End of Hamburger Menu  ======*/

  
/*====================================
=         scroll fixed header            =
====================================*/
// $(document).ready(function() {
//   var $header = $("header"),
//       $clone = $header.before($header.clone().addClass("clone"));
  
//   $(window).on("scroll", function() {
//       var fromTop = $(window).scrollTop();
//       $("body").toggleClass("down", (fromTop > 400));
//   });
// });

$(window).scroll(function() {
  if ($(this).scrollTop() ){  
      $('header').addClass("sticky");
      // $('header').slideDown("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });
    
    
/*=====  End of fixed header  ======*/


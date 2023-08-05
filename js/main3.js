$(function(){
 
"use strict";

$(".navbar h4").css({
  
  "color":"#FFF",
  "fontSize":"28px"
  });

$(".navbar .nav-link").css({
  
  "color":"#FFF",
  "fontSize":"15px",
  "textTransform":"uppercase"
  });


$(".navbar .nav-link").mouseenter(function(){
   
   $(this).css({
      
      "padding":"0px",
      "borderBottom":"2px solid #1abc9c",
      "fontWeight":"bold",
      "color":"#1abc9c",
      
      
   
   });
   
});
$(".navbar .nav-link").mouseleave(function(){
   
   $(this).css({
      
      "padding":".5rem .5rem",
      "fontWeight":"normal",
      "border":"none",
      "color":"#FFF"
      });
   
   
   });

  $(".header").height($(window).height());
  $(window).resize(function(){
     $(".header").height($(window).height());
  });
 
 
   
$(".header .carousel").each(function(){
  $(this).css("paddingTop",($(window).height() - $(".header .carousel-item").height())/1.65 );
});


$(".navbar li a").click(function(){
  
  $("html, body").animate({
    
    scrollTop:$("#" + $(this).data("value")).offset().top
    
  },800);
  });
   
  
  $(".testo").height($(window).height()/1.8);
  $(window).resize(function(){
     $(".testo").height($(window).height()/1.8);
  });   
   

   
   
 (function selfSlider(){
  
  $(".testo .slide .active").each(function(){
  if(!$(this).is(":last-child")){
      $(this).delay(2500).fadeOut(1000,function(){
        $(this).removeClass("active").next().addClass("active").fadeIn(1500);
        selfSlider();
        });
      
    } else {
      
     $(this).delay(2500).fadeOut(1000,function(){
      $(this).removeClass("active");
      $(".testo .slide div").eq(0).addClass("active").fadeIn(1500);
      selfSlider();
      }); 
    }
  });
  }());
 
 
 
 $('.ourproj ul li').on('click',function() {
     $(this).addClass('active').siblings().removeClass('active');
    // if($(this).data('class')==='All'){
     // $('.popic .col-md-4').css('opacity',1);
      
  // } else{ $('.popic .col-md-4').css('opacity','0.06');
           // $($(this).data('class')).parent().css('opacity',1); }//
            
}); 
 
 
 
 var mixer = mixitup('.ourproj .container');
return mixer; 
 
 


 
 
 
 
 
 
   
});

















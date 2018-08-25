$(document).ready(function(){
  var stickyNavTop = $('.nav_container').offset().top;
  var stickyNav = function (){
    var scrollTop = $(window).scrollTop();
    
    if (scrollTop > stickyNavTop) {
      $('.nav_container').addClass("sticky");
      
      
    } else {
      $('.nav_container').removeClass("sticky");
      
    }
    
    
  };
 

  stickyNav();
  $(window).scroll(function(){
    stickyNav();
    
  });
  
  $(".mobileone").on("click", function() {
    $(".navlinks a").toggleClass("is_hidden");
    console.log("You clicked me");
      
      
});
  

    

   



});


                 
                 
                 
                 



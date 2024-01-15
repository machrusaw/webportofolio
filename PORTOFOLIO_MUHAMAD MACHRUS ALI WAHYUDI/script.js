$(document).ready(function(){

  const sidebar = $(".sidebar");
  const closeBtn = $("#menu");
  const searchBtn = $(".bx-search");

  closeBtn.on("click", function(){
    sidebar.toggleClass("open");
    menuBtnChange();
  });

  searchBtn.on("click", function(){
    sidebar.toggleClass("open");
    menuBtnChange();
  });

  function menuBtnChange(){
    if(sidebar.hasClass("open")){
      closeBtn.removeClass("bx-menu").addClass("bx-menu-alt-right");
    } else {
      closeBtn.removeClass("bx-menu-alt-right").addClass("bx-menu");
    }
  }

  $("#menu").on("click", function () {
    sidebar.toggleClass("show");
  });

  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

  window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search")

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    searchBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu-alt-right")
        }else{
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
        }
    }

   
    var swiper = new Swiper(".home-slider", {
      grabCursor:true,
      loop:true,
      centeredSlides:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
   });
   
   var swiper = new Swiper(".food-slider", {
      grabCursor:true,
      loop:true,
      centeredSlides:true,
      spaceBetween: 20,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      breakpoints: {
         0: {
           slidesPerView: 1,
         },
         700: {
           slidesPerView: 2,
         },
         1000: {
           slidesPerView: 3,
         },
      },
   });
}

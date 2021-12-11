$(function(){
$('.header-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    responsive: [
     { 
       breakpoint: 361,
      settings: {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
    ],   
   
    prevArrow: '<button type = "button" class = "slick-prev"> <img src="./images/prev.svg" alt="#"></button>',
    nextArrow: '<button type = "button" class = "slick-next">  <img src="./images/next.svg" alt="#"> </button>'
});

$('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
    prevArrow: '<button type = "button" class = "product-prev"> <img src="./images/top.png" alt="#"></button>',
    nextArrow: '<button type = "button" class = "product-next">  <img src="./images/down.png" alt="#"></button>',
    responsive: [
     { 
       breakpoint: 900,
      settings: {        
        vertical: false,  
        slidesToShow: 3,
        arrows: false,
        dots: true
       }
      
    }
    ]    
  });
  
  

  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,   
    arrows: false   
  });
                    

$(document).ready(function(){
  $('.menu__btn').click(function(){
     $('.menu__list').toggleClass("menu__list--active");
 });
});


});
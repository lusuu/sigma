$(document).ready(function(){
  $('.home-slider').slick({
    dots: true,
    autoplay: true,
  	autoplaySpeed: 6000
  });

  $('.retail-brands-slider').slick({
    autoplay: true,
  	autoplaySpeed: 2000,
  	slidesToShow: 4, 
  	slidesToScroll: 4,
    adaptiveHeight: true, 
    responsive: [
      { breakpoint: 768,
        settings: "unslick"
      }
    ]
  });


  $('.history-years-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 8, 
    slidesToScroll: 1,
    adaptiveHeight: true, 
    responsive: [
      { breakpoint: 992,
        settings: {
          autoplaySpeed: 3000,
          slidesToShow: 5,
          infinite: true,
          arrows: false
        }
      }, 
      { breakpoint: 768,
        settings: {
          autoplaySpeed: 3000,
          slidesToShow: 3,
          infinite: true,
          arrows: false
        }
      }
    ]
  });
});
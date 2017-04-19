jQuery(document).ready(function($){
  $historyYearsSlider = $(".history-years-slider");
  $historyYearsSliderSection = $(".history-years-slider-section");
  $window = $(window);
  $offsetHeight = $historyYearsSlider.offset().top;

  $window.scroll(function(){
    if ($window.scrollTop() > $offsetHeight) {
      $historyYearsSliderSection.addClass("active");
    } else{
      $historyYearsSliderSection.removeClass("active");
    }
  });
});
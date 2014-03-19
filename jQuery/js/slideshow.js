$(document).ready(function(){

    //bxSlider plugin
    var onSlideBefore = function($slideElement, oldIndex, newIndex){
        console.log($slideElement, oldIndex, newIndex);
    };

    var onSlideAfter = function($slideElement, oldIndex, newIndex){
        console.log($slideElement, oldIndex, newIndex);
    };

    $(".fancybox").fancybox();

    var $slider = $('#slideshow').bxSlider({
    'mode' : 'fade',
    'controls' : false,
    'pager' : false,
    'onSlideBefore' : onSlideBefore,
    'onSlideAfter' : onSlideAfter
    });

    $(document).on('click', '.proximo',function(){
        $slider.goToNextSlide();
    });

    $(document).on('click', '.previo',function(){
        $slider.goToPrevSlide();
    });

    //fancybox plugin



});
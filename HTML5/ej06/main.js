$(function(){
    "use strict";
    var video = $('video').get(0);
    video.volume = 0.5;

    $(document).on('click', '#iniciar', function(e){
        video.play();
    });

    $(document).on('click', '#pausa', function(e){
        video.pause();
    });

    $(document).on('click', '#parar', function(e){
        video.pause();
        video.currentTime = 0;
    });

    $(document).on('click', '#avanzar', function(e){
        video.currentTime += 10;
    });

    $(document).on('click', '#retroceder', function(e){var time = video.currentTime;
        video.currentTime -= 10;
    });

    $(document).on('click', '#inicio', function(e){
        video.currentTime = 0;
    });

    $(document).on('click', '#fin', function(e){
        video.currentTime = video.duration;
    });

    $(document).on('click', '#completa', function(e){
        if(video.requestFullScreen){
            video.requestFullScreen();
        }
        else if(video.mozRequestFullScreen){
            video.mozRequestFullScreen();
        }
        else if(video.webkitRequestFullScreen){
            video.webkitRequestFullScreen();
        }
    });

    $(document).on('change', '#volumen', function(e){
        video.volume = this.value;
    });

    $('video').on('timeupdate',function(e){
        $('progress').val(this.currentTime/this.duration*100);
    });

});

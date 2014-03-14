$(document).ready(function(){
    "use strict";

    var $boxes = $('.box');

        /*$boxes.animate({ // Primer elemento los parametros a cambiar, el segundo la duracion del cambio
            'height' : '50px', //y el terdero que hacer despues de finalizar efecto
            'width' : '50px',
            'color' : 'yellow',
            'background-color' : 'red',
            'font-size' : '18px',
            'left' : '100%'
        }, 1000, function(){
            console.log('Fin de animacion');
        });*/

        var $width =  $(document).width();

        $boxes.css({
            'height' : '50px',
            'width' : '50px',
            'color' : 'yellow',
            'background-color' : 'blue',
            'font-size' : '18px',
            '-webkit-transform' : 'translatex('+ ($width - 100)+'px)',
            '-webkit-transition-property' : 'all',
            '-webkit-transition-duration' : '3s'

        });
});
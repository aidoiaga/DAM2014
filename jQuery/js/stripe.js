(function($){
    "use strict";

    $.fn.stripe = function(color){
        var c = color || '#ccc'; //Si le llega un color usa el color, sino por defecto se le asigna el color #ccc

        return this.filter('table').each(function(){
            var $this = $(this);

            $this.find('tbody tr:odd').css('background-color', c);
        });

    };

})(jQuery);

$('table, div').stripe('#ff05d9'); //Esta llamada deberia de ir en otro fichero.
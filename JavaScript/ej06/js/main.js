window.$ = Element.prototype.$ = function(selector){
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);//esta linea se puede cambiar por '$'

    return (elems.length === 1) ? elems[0] : elems;
};

var muestra = (function(){
    "use strict";

    var muestra = function(){
        var enlace = document.querySelectorAll(".enlace");
        if(enlace.length > 0){
            enlace[0].classList.add('oculto');

            var  parrafo = enlace[0].previousElementSibling;
            var spans = parrafo.querySelectorAll('span.oculto');

            if(spans.length > 0){
                spans[0].classList.remove('oculto');
            }
        }
    };

    return muestra;

})();
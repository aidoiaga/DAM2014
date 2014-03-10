window.$ = Element.prototype.$ = function(selector){
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);//esta linea se puede cambiar por '$'

    return (elems.length === 1) ? elems[0] : elems;
};

var anade = (function(){
    "use strict";

    var lista = $('#lista'),
        lis = lista.children,
        count = lista.children.length;

    var mostrarTexto = function(e){
        e.preventDefault();
        e.stopPropagation();

        console.log(this);
        console.log(e);
    };

    lista.addEventListener('click', mostrarTexto);

    /*for (var i = lis.length - 1; i >= 0; i--) {
        lis[i].addEventListener('click', mostrarTexto);
    }*/

    var anade = function(){
        var item = document.createElement('li');
        item.innerText = "Elemento " + (++count);
        lista.appendChild(item);
    };

    return anade;

})();
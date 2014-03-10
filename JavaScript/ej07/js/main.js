window.$ = Element.prototype.$ = function(selector){
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);//esta linea se puede cambiar por '$'

    return (elems.length === 1) ? elems[0] : elems;
};

var anade = (function(){
    "use strict";

    var lista = $('#lista'),
        count = lista.children.length;

    var anade = function(){
        var item = document.createElement('li');
        item.innerText = "Elemento " + (++count);
        lista.appendChild(item);
    };

    return anade;

})();
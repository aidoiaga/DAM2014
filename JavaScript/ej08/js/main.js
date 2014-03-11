window.$ = Element.prototype.$ = function(selector){
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);//esta linea se puede cambiar por '$'

    return (elems.length === 1) ? elems[0] : elems;
};

var anade = (function(){
    "use strict";

    var fecha = /(0[1-9]|[1-2][1-9]|30|31)\/(0[1-9]|1[0-2])\/(\d{4})/;

    console.log(fecha.test("Naci en Oñati el 24/05/1985"));
    console.log(fecha.test("Naci en Oñati el 30/02/1982"));
    console.log(fecha.test("Naci en Oñati el 30/13/1982"));
    console.log(fecha.test("Naci en Oñati el 99/99/1985"));
    console.log(fecha.test("Naci en Oñati el 00/99/1985"));

    console.log("Naci en Oñati el 24/05/1985".match(fecha));

    var email = /^(\w+)((\.|-)(\w+))*@(\w+)(\.\w{2,})+$/;

    console.log(email.test("anderidoyaga@gmail.com"));
    console.log(email.test("anderidoyaga@gmail.com.es"));
    console.log(email.test("anderidoyaga@gmail.z"));//error
    console.log(email.test(".ander@gmail.com"));//error
    console.log(email.test("a@a.com"));

})();
var APP = APP || {};
APP.validarCadena = (function(){
    "use strict";

    var valMin = function(cad){
        var cadMin = cad.toLowerCase();

        return cad && cadMin === cad;
    }

    var valMayus = function(cad){
        var cadMayus = cad.toUpperCase();

        return cad && cadMayus === cad;
    }

    var validarCadena = function(cad){


        if(valMin(cad)){
            return "Minuscula";
        }
        else if(valMayus(cad)){
            return "Mayuscula";
        }
        else{
            return "Mezcla";
        }
    }

    return validarCadena;

})();

console.log(APP.validarCadena('ASDFASDFADF'));
console.log(APP.validarCadena('asdfasdfdsf'));
console.log(APP.validarCadena('asdASSDsdfsdASF'));
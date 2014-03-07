var APP = APP || {};
APP.palindromo = (function(){
    "use strict";

    var valPalindromo = function(cad){
        cad = cad.trim().replace(/ /gi, "").toLowerCase();
        var cadRvs = cad.split("").reverse().join("");

        return cad && cadRvs == cad;
    };

    return valPalindromo;

})();

console.log(APP.palindromo('sieis'));
console.log(APP.palindromo('ander'));
console.log(APP.palindromo('La ruta nos aporto otro paso natural'));
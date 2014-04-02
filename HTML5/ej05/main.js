
//Ejercicio con JavaScript
(function(){
    "use strict";
    var user = document.getElementsByClassName('user');
    //console.log(user);

    for (var i = user.length - 1; i >= 0; i--) {



        if(user[i].dataset.lang === 'es'){
            user[i].dataset.lang = "es_ES";
        }

        console.log("Persona Nº" + (i+1));
        console.log("Nombre: " + user[i].dataset.name);
        console.log("Ciudad: " + user[i].dataset.city);
        console.log("Lengua: " + user[i].dataset.lang);
        console.log("Comida: " + user[i].dataset.food);
        console.log("");

        if(user[i].dataset.delete === 'true'){
            user[i].parentNode.removeChild(user[i]);
        }

    }

})();

/*
//Ejercicio con jQuery
$(function(){
    "use strict";
    var $user = $('.user');
    //console.log(user);
    var $ul = $('#personas');
    var lis =[];
    $user.each(function(i,el){

        if(el.dataset.delete == 'true'){
            el.remove();
        }

        if(el.dataset.lang === 'es'){
            el.dataset.lang = 'es_Es';
        }

        lis.push('<li>Persona Nº' + (i+1) + '</li>');
        lis.push('<li>Nombre: ' + el.dataset.name + '</li>');
        lis.push('<li>Ciudad: ' + el.dataset.city + '</li>');
        lis.push('<li>Lengua: ' + el.dataset.lang + '</li>');
        lis.push('<li>Comida: ' + el.dataset.food + '</li>');



    });

    $ul.append(lis);


});*/
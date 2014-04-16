
//Ejercicio con JavaScript
/*(function(){
    "use strict";
    var user = document.getElementsByClassName('user');

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

})();*/


//Ejercicio con jQuery
$(function(){
    "use strict";
    var users = $( '.user' );
    //console.log(user);
    var ul = $( '#personas' );
    var lis =[];

    $( '.user' ).each( function( i , user ) {

        if($(this).data( 'lang' ) === 'es'){
            $(this).data( 'lang' ,'es_Es' );
        }

        if($(this).data( 'delete' ) === true ){
            $(this).remove();
        }

        lis.push( '<li>Persona Nº' + (i+1) + '</li>' );
        lis.push( '<li>Nombre: ' +  $(this).data( 'name' ) + '</li>' );
        lis.push( '<li>Ciudad: ' +  $(this).data( 'city' ) + '</li>' );
        lis.push( '<li>Lengua: ' +  $(this).data( 'lang' ) + '</li>' );
        lis.push( '<li>Comida: ' +  $(this).data( 'food' ) + '</li>' );
        lis.push( '<p></p>' );

    });

    ul.append(lis);


});
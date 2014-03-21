$(document).ready(function(){
    "use strict";

    var valores = [];
    var actual = 0;
    var $on = true;

    var mostrarValor = function(valor){
        $('#ticker').text(valor.hora + ' : ' + valor.texto);
    };

    var initInterval = function() {
        $.ajax({
            url : '../servidor/generaContenidos.php',
            cache : false,
            success : function(data, textStatus, jqXHR){
                var now = new Date();
                var hora = now.getHours() +':' + now.getMinutes() + ':' + now.getSeconds();
                valores.push({hora : hora, texto : data});
                actual = valores.length - 1;
                mostrarValor(valores[actual]);

            },
            error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                console.log(errorThrown);
            }
        });
    };
    var start = setInterval(initInterval, 1000);
    $('#detener').on('click', function(){
        if($on){
            $on = false;
            clearInterval(start);
            //console.log(valores);
            //console.log(actual);
        }
        else{
            start = setInterval(initInterval, 1000);
            $on = true;
        }

    });
    $('#anterior').on('click', function(){
        actual = (actual === 0) ? valores.length - 1 : --actual;
        mostrarValor(valores[actual]);
    });
    $('#siguiente').on('click', function(){
        actual = (actual === valores.length -1 ) ? 0 : ++actual;
        mostrarValor(valores[actual]);
    });
});
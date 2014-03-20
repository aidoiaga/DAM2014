$(document).ready(function(){
    var $anterior;
    var valores = [];
    var index = 0;
    var $on = true;
    var initAjax = function() {
        $.ajax({
            url : '../servidor/generaContenidos.php',
            dataType : 'text',
            cache : false,
            success : function(data, textStatus, jqXHR){
                var now = new Date();
                var $hora = now.getHours() +':' + now.getMinutes() + ':' + now.getSeconds();
                $anterior = $('#ticker').text($hora + ' : ' +data);
                //console.log($anterior);
                valores.push({hora : $hora, texto : $anterior.text()});
                //console.log(valores[index]);
                //console.log(valores[index].text());
                //console.log(index);
                index++;

            },
            error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                console.log(errorThrown);
            }
        });
    };
    var start = setInterval(initAjax, 1000);
    $('#detener').on('click', function(){
        if($on){
            clearInterval(start);
            $on = false;
        }
        else{
            start = setInterval(initAjax, 1000);
            $on = true;
        }

    });
    $('#anterior').on('click', function(){
        $('ticker').text(valores[index--].hora + ' : ' +valores[index--].texto);
    });
    $('#siguiente').on('click', function(){
        $('ticker').text(valores[index++].hora + ' : ' +valores[index++].texto);
    });
});
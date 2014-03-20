$(document).ready(function(){
    var $anterior;
    var valores = [];
    var index = 0;
    var $on = true;
    var start = setInterval(function() {
        $.ajax({
            url : '../servidor/generaContenidos.php',
            dataType : 'text',
            cache : false,
            success : function(data, textStatus, jqXHR){
                var now = new Date();
                $anterior = $('#ticker').text(now.getHours() +':' + now.getMinutes() + ':' + now.getSeconds() + ' : ' +data);
                //console.log($anterior);
                valores.push($anterior.text());
                //console.log(valores[index]);
                //console.log(valores[index].text());
                //console.log(index);
                index++;

            },
            error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                console.log(errorThrown);
            }
        });
    }, 1000);
    $('#detener').on('click', function(){
        if($on){
            clearInterval(start);
            $on = false;
        }
        else{
            start = setInterval(function() {
                $.ajax({
                    url : '../servidor/generaContenidos.php',
                    dataType : 'text',
                    cache : false,
                    success : function(data, textStatus, jqXHR){
                        var now = new Date();
                        $anterior = $('#ticker').text(now.getHours() +':' + now.getMinutes() + ':' + now.getSeconds() + ' : ' +data);
                        valores.push($anterior.text());
                        index++;

                    },
                    error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                        console.log(errorThrown);
                    }
                });
            }, 1000);
            $on = true;
        }

    });
    $('#anterior').on('click', function(){
        $('ticker').text(valores[index--]);
    });
    $('#siguiente').on('click', function(){
        $('ticker').text(valores[index++]);
    });
});
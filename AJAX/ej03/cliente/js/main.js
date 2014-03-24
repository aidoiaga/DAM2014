$(document).ready(function(){
    "use strict";

    var $login = $('#login');
    var $res = $('#disponibilidad');

    $('#comprobar').on('click', function(){
        var login = $login.val();
        $.ajax({
                url : '../servidor/compruebaDisponibilidad.php',
                data : login,
                cache : false,
                success : function(data, textStatus, jqXHR){
                        console.log(data);
                        if(data === 'si')
                            $res.text('El nombre de usuario esta libre');
                        else
                            $res.text('El nombre de usuario esta ocupado');

                },
                error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                    console.log(errorThrown);
                }
            });
    });
});
$(document).ready(function(){
    "use strict";

    $('#comprobar').on('click', function(){
        var login = $('#login').val();
        $.ajax({
                url : '../servidor/compruebaDisponibilidad.php',
                data : login,
                cache : false,
                success : function(data, textStatus, jqXHR){
                        console.log(data);
                        if(data === 'si')
                            $('#disponibilidad').text('El nombre de usuario esta libre');
                        else
                            $('#disponibilidad').text('El nombre de usuario esta ocupado');

                },
                error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                    console.log(errorThrown);
                }
            });
    });
});
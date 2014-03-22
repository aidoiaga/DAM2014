$(document).ready(function(){
    "use strict";

    $('#comprobar').on('click', function(){
        var login = $('#login').val();
        $.ajax({
                url : '../servidor/compruebaDisponibilidadJSON.php',
                data : { login : login },
                type : 'post',
                //dataType : 'json',
                cache : false,
                success : function(data, textStatus, jqXHR){
                        var objeto_json = JSON.parse(data);
                        if(objeto_json.disponible === 'si'){
                            console.log('El nombre de usuario esta libre');
                            $('#disponibilidad').text('El nombre de usuario esta libre');
                        }
                        else{
                            $('#disponibilidad').text('');
                            var lis = [];
                            var $ul = $('<ul/>').addClass('alternativas');
                            var $li;

                            /*for(var i in objeto_json.alternativas) {
                                $li = '<li>' + objeto_json.alternativas[i] + '</li>';
                                lis.push($li);
                            }*/

                            $.each(objeto_json.alternativas, function(i, el){
                                $li = '<li>' + el + '</li>';
                                lis.push($li);
                            });

                            console.log(lis);
                            $('#disponibilidad').append($ul).append(lis);
                        }

                },
                error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                    console.log(errorThrown);
                }
            });
    });
});
$(document).ready(function(){
    "use strict";

    $('#comprobar').on('click', function(){
        var login = $('#login').val();
        $.ajax({
                url : '../servidor/compruebaDisponibilidadXML.php',
                data : { login : login },
                type : 'post',
                cache : false,
                success : function(data, textStatus, jqXHR){

                        var root = data.getElementsByTagName("respuesta")[0];
                        var disponible = root.getElementsByTagName("disponible")[0];
                        var mensaje = disponible.firstChild.nodeValue;
                        if(mensaje === 'si'){
                            console.log('El nombre de usuario esta libre');
                            $('#disponibilidad').text('El nombre de usuario esta libre');
                        }
                        else{
                            $('#disponibilidad').text('');
                            console.log('El nombre de usuario esta ocupado');
                            var alternativas = root.getElementsByTagName("login");
                            var lis = [];
                            var $ul = $('<ul/>').addClass('alternativas');
                            console.log(alternativas);
                            var $li;
                            $(alternativas).each(function(i, el){
                                var $el = $(el);
                                $li = '<li>' + $el.text() + '</li>';
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
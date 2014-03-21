$(document).ready(function(){
    var $this = $(this);
    var $recurso = $('#recurso').val(window.location);

    $('#enviar').on('click', function(e){
        $.ajax({
            url : $recurso.val(),
            dataType : 'text',
            cache : false,
            success : function(data, textStatus, jqXHR){
                $('#contenidos').text(data);
                $('#cabeceras').text(jqXHR.getAllResponseHeaders());
                $('#codigo').html(jqXHR.status + '<br/>' +jqXHR.statusText);
                //Para las cabeceras y los estados estan en el objeto qXHR
                console.log(jqXHR);
            },
            error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                console.log(errorThrown);
                console.log('Se ha producido un error al procesar la peticion');
            }
        });

    });


});
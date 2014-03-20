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
                //$('#estados').text(textStatus);
            },
            error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                console.log(errorThrown);
            }
        });

    });


});
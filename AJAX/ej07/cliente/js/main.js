$(document).ready(function(){
    "use strict";

        $.ajax({
            url : '../servidor/cargaProvinciasJSON.php',
            type : 'post',
            //dataType : 'json',
            cache : false,
            success : function(data, textStatus, jqXHR){
                    console.log(data);
                    //var objeto_json = JSON.parse(data);
                    var objeto_json = JSON.parse(data);

                    console.log(objeto_json);
                    var options = [];
                    var $option;
                    $.each(objeto_json, function(i, el){

                        $option = '<option value="'+i+'">' + el + '</option>';
                        //$option = '<option>' + el + '</option>';
                            options.push($option);
                    });
                    $('.provincia').append(options);

            },
            error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                console.log(errorThrown);
            }
        });

        /*$('.provincia').on('click', function(){
            var provincia =
            $.ajax({
                url : '../servidor/cargaMunicipiosJSON.php',
                data : data : { provincia : provincia },
                type : 'post',
                cache : false,
                success : function(data, textStatus, jqXHR){
                        var objeto_json = JSON.parse(data);

                        var options = [];
                        var $option;
                        $.each(objeto_json, function(i, el){
                            $option = '<option>' + el + '</option>';
                                options.push($option);
                        });
                        $('.municipio').append(options);

                },
                error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                    console.log(errorThrown);
                }
            });
        });*/
});
$(document).ready(function(){
    $(document).on('change','select[name=day]', function(e){
        var $this = $(this);

        /*console.log($this.val());
        $.getJSON('data/specials.json',
            { data : $this.val()},
            function(data, textStatus, jqXHR){
                console.log(data);
                console.log(textStatus);
                console.log(jqXHR);
            });
        */
        $.ajax({
            url : 'data/specials.json',
            data : { data : $this.val()},
            dataType : 'json',
            cache : false,
            success : function(data, textStatus, jqXHR){
                console.log(data);
            },
            error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                console.log(errorThrown);
            }
        });

    });
});
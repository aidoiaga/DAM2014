$(function(){
    "use strict";
    $(document).on('change', 'input',function(e){
        var valor = $('progress').val();
        $('progress').val(valor+1);
    });
});
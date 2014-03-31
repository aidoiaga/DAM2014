$(function(){
    "use strict";
    document.designMode ='on';

    $(document).on('click', '.bold' , function(e){
        document.execCommand('bold', false, null);
    });

    $(document).on('click', '.subra' , function(e){
        document.execCommand('underline', false, null);
    });

     $(document).on('click', '.cursiva' , function(e){
        document.execCommand('italic', false, null);
    });

});
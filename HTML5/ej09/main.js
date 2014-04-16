$(function(){
    "use strict";

    //SessionStorage
    $('#texto').val(sessionStorage.getItem('texto'));

    $(document).on('keyup', function(e){
        console.log($(texto).val());
        sessionStorage.setItem('texto', $('#texto').val());
    });



    //localStorage
    /*$('#texto').val(localStorage.getItem('texto'));

    $(document).on('keyup', function(e){
        localStorage.setItem('texto', $('#texto').val());
    });

    function handleStorage(event) {

        if (event.newValue != event.oldValue) { // value changed
            console.log('entra');
            $('#texto').val(localStorage.getItem('texto'));
        }
    }

    if(window.addEventListener)
        window.addEventListener('storage', handleStorage, false);
    else
        window.attachEvent('onstorage', handleStorage);
*/

});

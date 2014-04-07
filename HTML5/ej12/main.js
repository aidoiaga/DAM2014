$(function(){
    "use strict";
    $(document).on('click','#calcular', function(){
        var num = $('#numero').val();
        var worker = new Worker('worker.js');
        worker.postMessage(num);

        worker.addEventListener('message', function(e) {
            var numeros = JSON.parse(e.data);
            $('#primos').empty();
            $('#primos').append(numeros + " ");
        }, false);

    });




});
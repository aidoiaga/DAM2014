$(function () {
    "use strict";

    // Obtener los elementos del DOM
    var status = $('#status');
    var input = $('#input');
    var content = $('#content');
    var send = $('#send');
    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;
    var first = true;
    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    socket.onopen  = function(e){
                            console.log("Welcome - status "+this.readyState);
                            solicitarNick();
                        };
    socket.onerror = function(e){console.log("Error - status "+this.readyState);};
    socket.onclose = function(e){
                            console.log("Disconnected - status "+this.readyState);
                        };

    socket.onmessage = function(event) {
        var data = JSON.parse(event.data);

        if(data.type == 'history'){
            $.each(data.data, function(id, el){
                addMessage(el.author, el.text, el.color, new Date(el.time));
            });
            console.log(data.data);
        }
        else if(data.type == 'color'){
            console.log(data.data);
            myColor = data.data;
            status.css('color', myColor);
        }
        else if(data.type == 'message'){
            addMessage(data.data.author, data.data.text, data.data.color, new Date(data.data.time));
        }
    };

    var solicitarNick = function(){
        input.attr('disabled', false);
        status.empty();
        status.text("Introduce un nick");
        //socket.send(input.val());
    };

    $(document).on('click', '#send', function(){
        if(first){
            myName = input.val();
            socket.send(myName);
            status.empty();
            status.text(myName);
            input.val('');
            first=false;
        }
        else{
            socket.send(input.val());
            input.val('');
        }
    });


    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
});
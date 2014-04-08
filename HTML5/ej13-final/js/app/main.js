$(function(){
    "use strict";

    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
        window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction ||
        window.webkitIDBTransaction || window.msIDBTransaction;

    window.IDBKeyRange = window.IDBKeyRange ||
        window.webkitIDBKeyRange || window.msIDBKeyRange;

    var db = null;
    var numPlayer = null;

    var onerror = function(e) {
        console.log(e);
    };

    var showChallenges = function(){
        var transaction = db.transaction(["challenges"]);
        var store = transaction.objectStore("challenges");

        var singleKeyRange = IDBKeyRange.only(idChal);
        var request = store.openCursor(singleKeyRange);
    };

    var getPlayers = function(){
        var transaction = db.transaction(["players"]);
        var store = transaction.objectStore("players");

        var name = null;

        numPlayer = $('#next').data('player');

        if(numPlayer === 0){
            name = "Jane Doe";
            $('#next').data('player', 1);
        }
        else if(numPlayer === 1){
            $('#next').data('player', 0);
            $('#players').empty();
            name = "John Doe";
        }


        var singleKeyRange = IDBKeyRange.only(name);
        var request = store.openCursor(singleKeyRange);

        var datosPlayer = [];
        $('#players').empty();

        request.onsuccess = function (event) {
            var cursor = event.target.result;
            if(cursor){
                //console.log(cursor.value.photo);
                datosPlayer.push("<img src=\""+cursor.value.photo+"\"></img>");
                datosPlayer.push("<p>Nombre:"+cursor.value.name+"</p>");
                datosPlayer.push("<p>Edad:"+cursor.value.age+"</p>");
                datosPlayer.push("<p>Descripcion:"+cursor.value.dsc+"</p>");
                cursor.continue(); // get the next object
            }
        };

        request.onerror = onerror;

        store.transaction.oncomplete = function(event) {

            //$('#button').empty();
            //$('#button').append('<input type="button" id="challenges" value="Show Challenges" data-num-player="1" data-challenge1="1" data-challenge2="2"/>');
            $('#players').append(datosPlayer);
        };
    };

    var getShow = function(){
        var transaction = db.transaction(["show"]);
        var store = transaction.objectStore("show");
        var datosPrograma = [];
        var request = store.openCursor();

        request.onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                datosPrograma.push("<p>Numero de programa:"+cursor.value.id+"</p>");
                datosPrograma.push("<p>Fecha del programa:"+cursor.value.date+"</p>");
                datosPrograma.push("<p>Hora del programa:"+cursor.value.hour+"</p>");
                cursor.continue(); // get the next object
            }
        };

        request.onerror = onerror;

        store.transaction.oncomplete = function(event) {
            $('#show').empty();
            $('#show').append(datosPrograma);
        };
    };

    var addShow = function(data){
        var transaction = db.transaction(["show"], "readwrite");
        var store = transaction.objectStore("show");

        var show ={
            "id" : data.id,
            "date" : data.date,
            "hour" : data.hour
        };

        var request = store.put(show);

        request.onsuccess = function(e) {
            console.log("Sucessful add: "+e);
        };
        request.onerror = onerror;

        store.transaction.oncomplete = function(event) {
            getShow();
        };
    };

    var addPlayers = function(data){
        var transaction = db.transaction(["players"], "readwrite");
        var store = transaction.objectStore("players");

        $.each(data.players, function(id,player){
            var player_name = player.player.name;
            var player_age = player.player.age;
            var player_dsc = player.player.description;
            var player_photo=player.player.photo;

            var plr ={
                "name" : player_name,
                "age" : player_age,
                "dsc" : player_dsc,
                "photo" : player_photo
            };

            var request = store.put(plr);

            request.onsuccess = function(e) {
                console.log("Sucessful add: "+e);
            };

            request.onerror = onerror;

            store.transaction.oncomplete = function(event) {
                $('#button').append('<input type="button" id="next" value="Show Players" data-player="0"/>');
            };
        });
    };

    var addChallenges = function(data){
        var transaction = db.transaction(["challenges"], "readwrite");
        var store = transaction.objectStore("challenges");

        $.each(data.players, function(id,player){
            $.each(player.challenges, function(idChal,challenge){

                var chl ={
                    "idChal" : challenge.idChal,
                    "challenge_sel" : challenge.selected,
                    "challenge_place_addr" : challenge.place.address,
                    "challenge_place_lat" : challenge.place.latitud,
                    "challenge_place_lng" : challenge.place.longitud,
                    "challenge_place_dsc" : challenge.place.description,
                    "challenge_place_photo" : challenge.place.photo,
                    "challenge_opt1_name" : challenge.option1.name,
                    "challenge_opt1_photo" : challenge.option1.photo,
                    "challenge_opt1_dsc" : challenge.option1.description,
                    "challenge_opt1_price" : challenge.option1.price,
                    "challenge_opt1_likes" : challenge.option1.likes,
                    "challenge_opt2_name" : challenge.option2.name,
                    "challenge_opt2_photo" : challenge.option2.photo,
                    "challenge_opt2_dsc" : challenge.option2.description,
                    "challenge_opt2_price" : challenge.option2.price,
                    "challenge_opt2_likes" : challenge.option2.likes,
                };

                var request = store.put(chl);

                request.onsuccess = function(e) {
                    console.log("Sucessful add: "+e);
                };

                request.onerror = onerror;
            });

        });
    };

    var obtenerInfo = function(){
        $.ajax({
                url : 'data/show.json',
                cache : false,
                type : 'get',
                success : function(data, textStatus, jqXHR){
                        addShow(data);
                        addPlayers(data);
                        addChallenges(data);
                },
                error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                    console.log(errorThrown);
                }
            });
    };
    var open = function() {
        var version = 5;
        var request = indexedDB.open("juego", version);

        request.onupgradeneeded = function(e) {
            db = e.target.result;
            if(db.objectStoreNames.contains('show')) db.deleteObjectStore('show');
            if(db.objectStoreNames.contains('players')) db.deleteObjectStore('players');
            if(db.objectStoreNames.contains('challenges')) db.deleteObjectStore('challenges');

            var showStore = db.createObjectStore("show", { keyPath: "date" });
            var playerStore = db.createObjectStore("players", { keyPath: "name" });
            var challengeStore = db.createObjectStore("challenges", { keyPath: "idChal" });
        };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            db = e.target.result;
            console.log("DB opened");
            obtenerInfo();

        };

    };

    var init = function() {
        open();
    };

    $(document).on('click','#next',getPlayers);
    $(document).on('click','#challenges',showChallenges);

    window.addEventListener("DOMContentLoaded", init, false);
});
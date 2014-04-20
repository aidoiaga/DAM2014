$(function(){
    "use strict";

    var dbMsg = openDatabase('msgs', '1.0', 'Tabla twitter', 2 * 1024 * 1024);
    var numTweets;

    $(document).on('click','#create',function(){

        dbMsg.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS tweets');
            tx.executeSql('DROP TABLE IF EXISTS users');
            tx.executeSql('CREATE TABLE IF NOT EXISTS users(idUser, name, img)',[], getUsers);
            tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(idTweet, idUser, text, date)', [], getTweets);
        });
    });

    var getTweets = function() {
        var tweets = $.ajax({
            url : 'data/tweets.json',
            cache : false,
            type : 'get',
            success : function(data, textStatus, jqXHR){
                    $.each(data, function(id, tweet) {
                        dbMsg.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
                            tx.executeSql('INSERT INTO tweets (idTweet, idUser, text, date) VALUES (?, ?, ?, ?)', [tweet.idTweet, tweet.idUser, tweet.text, tweet.date],null,function(tx,error){console.log(error.message);});
                         });
                    });
            },
            error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                console.log(errorThrown);
            }
        });
    };

    var getUsers = function() {
        var tweets = $.ajax({
            url : 'data/users.json',
            cache : false,
            type : 'get',
            success : function(data, textStatus, jqXHR){
                    $.each(data, function(id, user) {
                        dbMsg.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
                            tx.executeSql('INSERT INTO users(idUser, name, img) VALUES (?, ?, ?)', [user.idUser, user.name, user.img],null,function(tx,error){console.log(error.message);});
                         });
                    });
            },
            error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                console.log(errorThrown);
            }
        });
    };

    $(document).on('click','#ver',function(){
            verTweets();
    });

    $(document).on('click','#add',function(){
        var $tweet = $('#tweet');
        var $idUser = $('#idUser');
        var date = (new Date).getTime();
        dbMsg.transaction(function(tx){
            tx.executeSql('SELECT * FROM users',
                [],
                function(tx,results){
                    var lenU = results.rows.length;
                    for (var i = 0; i < lenU; i++) {
                        if(results.rows.item(i).idUser != $idUser.val()){
                            addUser($idUser, lenU);
                            break;
                        }
                    }
                },
                function(tx,error){
                        console.log(error.message);
            });
            tx.executeSql('SELECT * FROM tweets',
                [],
                function(tx,results){
                    var lenT = results.rows.length;
                    var idTweet = ("000" + (lenT+1)).slice(-5);
                    console.log(idTweet);
                    addTweet(idTweet, $idUser.val(), $tweet, date);
                },
                function(tx,error){
                        console.log(error.message);
            });
            /*tx.executeSql('INSERT INTO tweets (idTweet, idUser, text, date) VALUES (?, ?, ?, ?)',
                ['0006', $idUser.val(), $tweet.val(), date],
                function(tx,results){
                    $tweet.val('');
                },
                function(tx,error){
                    console.log(error.message);
                });*/
        });
    });

    var addTweet = function(idTweet, idUser, text, date){
        var $tweet = $('#tweet');
        var $text = $(text);
        dbMsg.transaction(function(tx){
            tx.executeSql('INSERT INTO tweets (idTweet, idUser, text, date) VALUES (?, ?, ?, ?)',
            [idTweet, idUser, $text.val(), date],
            function(tx,results){
                $tweet.val('');
            },
            function(tx,error){
                console.log(error.message);
            });
        });
    };

    $(document).on('click','#delete',function(){
        removeTweet();
    });

    $(document).on('click','#update',function(){
        updateTweet();
    });

    var addUser = function(idUser, len){
        var $idUser = $(idUser);
        dbMsg.transaction(function(tx){
            tx.executeSql('INSERT INTO users(idUser, name, img) VALUES(?, ?, ?)',
                [$idUser.val(), 'Usuario'+(len+1), "data/img/ander.jpg"],
                function(tx,results){
                    $idUser.val('');
                },
                function(tx,error){
                    console.log(error.message);
                });
        });
    }

    var verTweets = function(){
        var $ul = $('#tweets');
        $ul.empty();
        dbMsg.transaction(function(tx){
            tx.executeSql('SELECT * FROM tweets', [],
                function(tx, results) {
                    var lis = [];
                    var len = results.rows.length;
                    for (var i = 0; i < len; i++) {
                        lis.push('<li>' + results.rows.item(i).text + '</li>');
                    }
                $ul.append(lis);
            });
        });
    }

    var removeTweet = function(){
        var $idTweet = $('#idTweet');
        dbMsg.transaction(function(tx){
            tx.executeSql('DELETE FROM tweets WHERE idTweet = ?',
                [$idTweet.val()],
                function(tx,results){
                    $idTweet.val('');
                },
                function(tx,error){
                    console.log(error.message);
                });
        });
    }

    var updateTweet = function(){
        var $idTweet = $('#idTweet');
        var $tweet = $('#tweet');
        dbMsg.transaction(function(tx){
            tx.executeSql('UPDATE tweets SET text = ?, date = ? WHERE idTweet = ?',
                [$tweet.val(), (new Date).getTime(),$idTweet.val()],
                function(tx,results){
                    $tweet.val('');
                    $idTweet.val('');
                },
                function(tx,error){
                    console.log(error.message);
                });
        });
    }

});
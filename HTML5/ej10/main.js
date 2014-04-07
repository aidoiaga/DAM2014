$(function(){
    "use strict";

    var dbMsg = openDatabase('msgs', '1.0', 'Tabla tweets', 2 * 1024 * 1024);
    var numTweets;
    dbMsg.transaction(function (tx) {
        tx.executeSql('DROP TABLE IF EXISTS tweets');
        tx.executeSql('DROP TABLE IF EXISTS users');
        tx.executeSql('CREATE TABLE IF NOT EXISTS users(idUser, name, img)',[], getUsers);
        tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(idTweet, idUser, text, date)', [], getTweets);
        //tx.executeSql('SELECT * FROM tweets WHERE date > ?', [time], );
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
            tx.executeSql('SELECT * FROM users',[],function(tx,results){
                var len = results.rows.length;
                for (var i =  - 1; i >= 0; i--) {
                    if(results.rows.item(i).idUser != $idUser.val()){
                        addUser($idUser, len);
                    }
                };
            });
            /*tx.executeSql('SELECT * FROM tweets',[],function(tx,results){
                                    numTweets = results.row.length;
                                    }
            );*/
            tx.executeSql('INSERT INTO tweets (idTweet, idUser, text, date) VALUES (?, ?, ?, ?)', ['0006', $idUser.val(), $tweet.val(), date],null,function(tx,error){console.log(error.message);});
            verTweets();
        });
    });

    var addUser = function(idUser, len){
        dbMsg.transaction(function(tx){
            tx.executeSql('INSERT INTO users(idUser, name, img) VALUES(?, ?, ?)',[idUser.val(), 'Usuario'+len+1, len], null, function(tx,error){console.log(error.message);});
        })
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

});
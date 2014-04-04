$(function(){
    "use strict";

    var dbMsg = openDatabase('msgs', '1.0', 'Tabla tweets', 2 * 1024 * 1024);

    dbMsg.transaction(function (tx) {
        tx.executeSql('DROP TABLE tweets');
        tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(idTweet, idUser, text, user, date)', [], getTweets);
        //tx.executeSql('CREATE TABLE IF NOT EXISTS users(idUser, name, img)', getUser);
        tx.executeSql('SELECT * FROM tweets', [], publicTweets);
        //tx.executeSql('SELECT * FROM tweets WHERE date > ?', [time], );
    });

    var getTweets = function(devolverTweets) {
        console.log('entra en getTweets');
        var tweets = $.ajax({
                url : 'data/tweets.json',
                cache : false,
                type : 'get',
                //success: devolverTweets,
                //datatype: 'json',
                success : function(data, textStatus, jqXHR){
                        console.log(data);
                        /*for (var j = 0; j < data.length; j++) {

                            tweet = data[j];
                            console.log(tweet);
                            dbMsg.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
                                tx.executeSql('INSERT INTO tweets (idTweet, idUser, text, user, date) VALUES (?, ?, ?, ?, ?)',
                                    [tweet.idTweet, tweet.idUser, tweet.text, tweet.user, tweet.date],null,function(tx,error){console.log(error.message);});
                            });
                        }*/
                        $.each(data, function(id, tweet) {
                        dbMsg.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
                            //var time = (new Date(Date.parse(tweet.created_at))).getTime();
                        //tx.executeSql('INSERT INTO tweets (idTweet, idUser, text, user, date) VALUES (?, ?, ?, ?, ?)', [tweet.idTweet, tweet.idUser, tweet.user, tweet.text, tweet.date]);
                        tx.executeSql('INSERT INTO tweets (idTweet, idUser, text, user, date) VALUES (?, ?, ?, ?, ?)',
                                    [tweet.idTweet, tweet.idUser, tweet.text, tweet.user, tweet.date],null,function(tx,error){console.log(error.message);});

            });
        });
                },
                error : function(jqXHR, textStatus, errorThrown){//Es conveniente poner una funcion de error siempre.
                    console.log(errorThrown);
                }
            });

        /*$.each(tweets, function(tweet) {

            dbMsg.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
                //var time = (new Date(Date.parse(tweet.created_at))).getTime();
                tx.executeSql('INSERT INTO tweets (idTweet, idUser, text, user, date) VALUES (?, ?, ?, ?, ?)', [tweet.idTweet, tweet.idUser, tweet.user, tweet.text, tweet.date]);

            });
        });*/
    };

    var publicTweets = function (tx, results) {
        console.log('entra en publicTweets');
        var lis = [];
        var $ul = $('#tweets');
        console.log(results);
        var len = results.rows.length;
        for (var i = 0; i < len; i++) {
            lis.push('<li>' + results.rows.item(i).text + '</li>');
        }
        $ul.append(lis);

    };

});
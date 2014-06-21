define('Data',['ydn-db'], function(ydn) {
    'use strict';

    var dbName = 'tweeter-db';
    var storeName = 'tweets';

    var db = new ydn.db.Storage(dbName);

    var addTweet = function(tweet, onSuccess, onError){

        var request = db.put(storeName, tweet, tweet.id);
        request.done(function(){
            lanzarEvento();
            onSuccess();
        });
        request.fail(onError);

    };

    var addTweetList = function(tweets, onSuccess, onError){

        for (var i = 0;i < tweets.length; i++) {
            var request = db.put(storeName, tweets[i], tweets[i].id);
            request.done(function(keys){
                lanzarEvento();
                onSuccess(keys);
            });
            request.fail(onError);
        }
    };

    var getTweet = function(tweetId, onSuccess, onError){

        var request = db.get(storeName, tweetId);
        request.done(onSuccess);
        request.fail(onError);

    };

    var getAllTweets = function(onSuccess, onError){

        var request = db.values(storeName);
        request.done(onSuccess);
        request.fail(onError);
    };

    var removeTweet = function(tweetId, onSuccess, onError){
        var request = db.remove(storeName, tweetId);
        request.done(onSuccess);
        request.fail(onError);
    };

    var removeAllTweets = function(onSuccess, onError){

        var request = db.clear(storeName);
        request.done(onSuccess);
        request.fail(onError);
    };

    var lanzarEvento = function(){
        var evento = new Event('dataChange');
        document.dispatchEvent(evento);
    };

    return{
        addTweet : addTweet,
        addTweetList : addTweetList,
        getTweet : getTweet,
        getAllTweets : getAllTweets,
        removeTweet : removeTweet,
        removeAllTweets : removeAllTweets
    };
});
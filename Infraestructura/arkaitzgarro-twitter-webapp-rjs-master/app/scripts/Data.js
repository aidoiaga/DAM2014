define('Data', ['ydn-db'], function(ydn) {
    'use strict';

    console.log('Data module started');

    var dbName = 'TwitterDB',
        keyPath = 'id',
        tweetTable = 'twitter',
        db = new ydn.db.Storage(dbName);

    var addTweet = function(tweet, success, error) {
        var req = db.add({name: tweetTable, keyPath: keyPath}, tweet);
        req.done(function(){
            lanzarEvento();
            success();
        });
        req.fail(error);
    };

    var addTweets = function(tweets, success, error) {
        var req = db.add({name: tweetTable, keyPath: keyPath}, tweets);
        req.done(function(keys){
            lanzarEvento();
            success(keys);
        });
        req.fail(error);
    };

    var getTweet = function(id, success, error) {
        var req = db.get(tweetTable, id);
        req.done(success);
        req.fail(error);
    };

    var getAllTweets = function(success, error) {
        var req = db.values(tweetTable);
        req.done(success);
        req.fail(error);
    };

    var updateTweet = function(tweet, success, error) {
        getTweet(tweet.id, function(t){
            if(t) {
                var req = db.put({name: tweetTable, keyPath: keyPath}, tweet);
                req.done(success);
                req.fail(error);
            } else {
                error('There is no tweet with id ' + tweet.id);
            }
        }, error);
    };

    var removeTweet = function(id, success, error){
        getTweet(id, function(tweet) {
            if(tweet) {
                var req = db.remove(tweetTable, id);
                req.done(success);
                req.fail(error);
            } else {
                error('There is no tweet with id ' + id);
            }
        });
    };

    var clear = function(success, error){
        var req = db.clear(tweetTable);
        req.done(success);
        req.fail(error);
    };

    var lanzarEvento = function(){
        var evento = new Event('dataChange');
        document.dispatchEvent(evento);
    };

    return {
        addTweet : addTweet,
        addTweets : addTweets,
        getTweet : getTweet,
        getAllTweets : getAllTweets,
        updateTweet : updateTweet,
        removeTweet : removeTweet,
        clear : clear
    };
});
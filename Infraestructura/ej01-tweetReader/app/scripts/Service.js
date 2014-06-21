define('Service', ['quo'], function($){
    "use strict";

    console.log('Service module started');

    var getTweets = function(config, onSuccess, onError){
        $.ajax({
            url : '/app/data/tweets.json',
            dataType : 'json',
            success : onSuccess,
            error : onError
        });
    };

    return{
        getTweets : getTweets
    };
});
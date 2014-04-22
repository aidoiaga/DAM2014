define('Controller', ['Data', 'Service'], function(DB, srv){
    "use strict";

    console.log('Controller module started');

    var getTweetsFromTwitter = function(){
        srv.getTweets({}, processTweets, error);
    };

    var processTweets = function(data){
        var tweets = [];
        if(data && data.statuses && data.statuses.length > 0){
            $.each(data.statuses, function(id, el){
                var tweet = {'idTweet' : el.id_str,
                             'date' : new Date(el.created_at),
                             'text' : el.text,
                             'userId' : el.user.id_str,
                             'userName' : el.user.name,
                             'userImage' : el.user.profile_image_url
                            };
                tweets.push(tweet);
            });
            console.log(tweets);
        }
        DB.addTweets(tweets, success, error);
    };


    var success = function(){
        console.log('DB inserts succeded');
    };

    var error = function(){
        console.log('DB inserts error');
    };

    return{
        getTweetsFromTwitter : getTweetsFromTwitter
    };
});
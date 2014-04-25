define('Controller', ['Data', 'Service', 'UI'], function(DB, srv, ui){
    'use strict';

    console.log('Controller module started');

    var getTweetsFromTwitter = function(success, error){
        srv.getTweets({}, function(data){
            processTweets(data, function(tweets){
                DB.addTweets(tweets, success, error);
            }, error);
        }, error);
    };

    var processTweets = function(data, success, error){
        var tweets = [];
        if(data && data.statuses && data.statuses.length > 0){
            for(var i = 0; i < data.statuses.length; i++){
                var tweet = {
                    id : data.statuses[i].id_str,
                    text : data.statuses[i].text,
                    created_at : new Date(data.statuses[i].created_at),
                    user : {
                        id : data.statuses[i].user.id_str,
                        name : data.statuses[i].user.name,
                        image : data.statuses[i].user.profile_image_url
                    }
                };
                tweets.push(tweet);
            }

            success(tweets);
        }
    };

    var showLatestTweets = function(){
        DB.getAllTweets(function(tweets){
                            console.log(tweets);
                            ui.showTweetsList(tweets);
                        },
                        function(err){
                            console.log(err);
                        });
    };

    return{
        getTweetsFromTwitter : getTweetsFromTwitter,
        showLatestTweets : showLatestTweets
    };
});
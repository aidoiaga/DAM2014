define('Controller', ['Data', 'Service', 'UI'], function(DB, srv, ui){
    "use strict";

    console.log('Controller module started');

    var getTweetsFromTwitter = function(success, error){
        srv.getTweets({}, function(data){
            processTweets(data, function(tweets){
                DB.addTweets(tweets, success, error);
                ui.showTweetsList(tweets);
            }, error);
        }, error);
    };

    var processTweets = function(data, success, error){
        var tweets = [];
        if(data && data.statuses && data.statuses.length > 0){
            $.each(data.statuses, function(id, el){
                var tweet = {'id' : el.id_str,
                             'date' : new Date(el.created_at),
                             'text' : el.text,
                             'userId' : el.user.id_str,
                             'userName' : el.user.name,
                             'userImage' : el.user.profile_image_url
                            };
                tweets.push(tweet);
            });
            //console.log(tweets);
            success(tweets);
        }
        else{
            error('no han llegado datos');
        }
    };


    return{
        getTweetsFromTwitter : getTweetsFromTwitter
    };
});
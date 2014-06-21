define(['Controller', 'lungo', 'quo'], function(Controller, lungo, quo) {
    'use strict';
    console.log('App started');

    var init = function(){

        lungo.init({
            name : 'TwitterApp'
        });

        Controller.getTweetsFromTwitter(Controller.showLatestTweets());
    };

    $(function(){
        init();
    });
});
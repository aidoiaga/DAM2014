define(['Controller', 'lungo', 'quo'], function(Controller, lungo, $) {
    'use strict';
    console.log('App started');

    var init = function(){

        Lungo.init({
            name : 'TwitterApp'
        });

        Controller.getTweetsFromTwitter(Controller.showLatestTweets());
    };

    $(function(){
        init();
    });
});
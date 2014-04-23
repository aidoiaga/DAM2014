define('UI', ['jquery', 'handlebars'], function($, Handlebars){
    'use strict';

    console.log('UI module started');

    var showTweetsList = function(tweets, success, error){
        var $list = $('ul#twitter-list');

        var listTpl = $('#list-tpl').html();
        var template =  Handlebars.compile(listTpl);

        var html = template({tweets : tweets});
        $list.html(html);
        success();
    };

    return{
        showTweetsList : showTweetsList
    };

});
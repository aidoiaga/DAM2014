define('UI', ['quo', 'handlebars'], function($, Handlebars){
    'use strict';

    console.log('UI module started');

    var showTweetsList = function(tweets){
        var $list = $('ul#twitter-list');

        var listTpl = $('#list-tpl').html();
        var template =  Handlebars.compile(listTpl);

        var html = template({tweets : tweets});
        $list.html(html);
    };

    return{
        showTweetsList : showTweetsList
    };
});
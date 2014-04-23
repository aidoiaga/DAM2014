/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            jquery: '../bower_components/jquery/dist/jquery',
            handlebars: '../bower_components/handlebars.js/dist/handlebars'
        },
        shim :{
            'handlebars': {
                exports : 'Handlebars'
            }
        }
    });



    describe('UI module', function () {
        var $, ui, DB;

        beforeEach(function(done){
            require(['jquery', 'UI', 'Data'], function(jquery, UI, data){
                DB = data;
                ui =  UI;
                $ = jquery;
                done();
            });
        });


        describe('#getTweetsList', function () {
            it('Print ONE Tweets in UI', function (done) {
                ui.showTweetsList([{'id' : '23423423423452345', 'text' : 'A añadido el tweet'}],
                                    function(){
                                        assert.equal($('#twitter-list').children().length,1);
                                        done();
                                    },
                                    function(err){
                                        console.log(err);
                                        throw err;
                                    });
            });
            it('Print all Tweets in UI', function (done) {
                //console.log(ui);
                DB.getAllTweets(function(tweets){
                                    ui.showTweetsList(tweets,
                                        function(){
                                            assert.equal($('#twitter-list').children().length,100);
                                            done();
                                        },
                                        function(err){
                                            console.log(err);
                                            throw err;
                                        });
                                }, function(err){
                                    console.log(err);
                                    throw err;
                                });
            });
        });

    });
})();
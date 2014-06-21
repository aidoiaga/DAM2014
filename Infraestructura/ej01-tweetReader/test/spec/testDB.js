/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            'ydn-db' : '../../bower_components/ydn-db/jsc/ydn.db-dev',
        },
        shim : {
            'ydn-db': {
                exports: 'ydn'
            }
        }
    });

    var onError = function(err){
        console.log('Error :(');
        throw err;
    };

    describe('DataBase module', function () {
        var DB;

        beforeEach(function(done){
            require(['Data'], function(data){
                DB = data;
                done();
            });
        });


        describe('#addTweet method', function () {
            it('Add one tweet', function (done) {

                var tweet = {id : '12564865875248',
                             text : 'Hola! Soy Ander!'
                            };

                DB.addTweet(tweet, function(){
                        console.log('DONE');
                        done();
                    },
                    onError);
            });
        });

        describe('#addTweets method', function () {
            it('Add some tweets 2 DB', function (done) {

                var tweets =[{id : '25698539635515',
                             text : 'Hola! Soy Mikel!'},
                             {id : '25698539635635',
                             text : 'Hola! Soy El Richi!'},
                             {id : '25698539638547',
                             text : 'Waaassaaaa!!'}
                            ];

                DB.addTweetList(tweets, function(keys){
                        console.log('Success Add List!! :D');
                        done();
                    },
                     onError);
            });
        });

        describe('#getTweet method', function () {
            it('Get a tweet from DB', function (done) {

                var tweet = {id : '12564865875248',
                             text : 'Hola! Soy Ander!'
                            };

                DB.getTweet(tweet.id, function(tweet){
                    console.log('Success get Tweet! :D');
                    done();
                },
                onError);
            });

            it('Get all tweets from DB', function (done) {
                DB.getAllTweets(function(){
                    console.log('Success get All Tweet! :D');
                    done();
                },
                onError);
            });
        });

        describe('#removeTweet method', function () {
            it('Remove tweet from DB', function (done) {

                var tweet = {id : '12564865875248',
                             text : 'Hola! Soy Ander!'
                            };

                DB.removeTweet(tweet.id, function(count){
                    console.log('Success Delete Tweet! :D');
                    done();
                },
                onError);
            });
        });
    });
})();

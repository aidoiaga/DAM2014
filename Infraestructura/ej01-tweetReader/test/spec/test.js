/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev'
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

    describe('Give it some context', function () {
        var DB;

        beforeEach(function(done){
            require(['data'], function(data){
                DB = data;
                done();
            });
        });

        describe('#put method', function () {
            it('Add some tweets', function (done) {

                var tweet = {'id' : '12564865875248',
                             'text' : 'Hola! Soy Ander!'
                            };

                var tweets =[{'id' : '25698539635515',
                             'text' : 'Hola! Soy Mikel!'},
                             {'id' : '25698539635635',
                             'text' : 'Hola! Soy El Richi!'},
                             {'id' : '25698539638547',
                             'text' : 'Waaassaaaa!!'}];

                DB.addTweet(tweet,
                    function(){
                        console.log('Success Add!! :D');
                        done();
                    },
                     onError);

                DB.getTweet(tweet.id,
                    function(objetoDev){
                        //assert.equal(tweet.id,objetoDev.id);
                        if(objetoDev.id === tweet.id ){
                            console.log('Success Get!! :D');
                            console.log(objetoDev.id);
                            console.log(tweet.id);
                            done();
                        }
                        else{
                            console.log(objetoDev);
                        }
                    },
                     onError);

                /*DB.removeTweet(tweet.id,
                    function(){
                        console.log('Success Remove!! :D');
                        done();
                    },
                     onError);*/

                DB.addTweetList(tweets,
                    function(){
                        console.log('Success Add List!! :D');
                        done();
                    },
                     onError);

                /*DB.removeAllTweets(function(){
                        console.log('Success Remove All Tweets!! :D');
                        done();
                    },
                     onError);*/

                DB.getAllTweets(function(objetoDev){
                    /*for (var i = 0; i < objetoDev.length; i++) {
                        if(objetoDev[i].id === tweet.id ){
                            console.log('Success Get All Tweets!! :D');
                            console.log(objetoDev.id);
                            console.log(tweet.id);
                            done();
                        }
                        else{
                            console.log(objetoDev);
                        }*/
                },
                onError);
                //TO-DO
                //Update de un elemento
            });
        });
    });
})();

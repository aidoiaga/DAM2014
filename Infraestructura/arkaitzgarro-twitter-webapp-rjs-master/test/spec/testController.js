/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            //jquery: '../bower_components/jquery/dist/jquery',
        }
    });



    describe('Controller module', function () {
        var ctrl, srv, DB;

        beforeEach(function(done){
            require(['Controller', 'Service', 'Data'], function(controller, service, data){
                ctrl = controller;
                srv = service;
                DB = data;
                sinon.spy(DB, 'addTweets');
                sinon.spy(srv, 'getTweets');
                done();
            });
        });

        afterEach(function(done){
            srv.getTweets.restore();
            DB.addTweets.restore();
            done();
        });

        describe('#getTweetsFromTwitter', function () {
            it('Get all tweets from twitter and save in BD', function (done) {
                ctrl.getTweetsFromTwitter(function(){
                    assert.isTrue(DB.addTweets.calledOnce, 'addTweets is not executing');
                    DB.getAllTweets(function(tweets){
                        assert.equal(100, tweets.length);
                        done();
                    });
                }, function(err){
                    console.log(err);
                    throw err;
                });
                assert.isTrue(srv.getTweets.calledOnce, 'getTweets is not executing');
            });
        });

    });
})();
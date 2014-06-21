/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            quo: '../bower_components/quojs/quo',
        }
    });

    describe('Service module', function () {
        var srv;
        var $;

        beforeEach(function(done){
            require(['Service', 'quo'], function(service, quo){
                srv = service;
                $ = quo;
                sinon.spy($, 'ajax');
                done();
            });
        });

        afterEach(function(done){
            $.ajax.restore();
            done();
        });

        describe('#getTweets', function () {
            it('$.ajax has been called', function (done) {
                srv.getTweets();
                assert.isTrue($.ajax.calledOnce);
                assert.equal('/app/data/tweets.json', $.ajax.firstCall.args[0].url);
                done();
            });
            it('Get all tweets from twitter', function (done) {
                srv.getTweets({
                    apiKey : ''
                }, function(tweets){
                    if(tweets && tweets.statuses && tweets.statuses.length === 100){
                        done();
                    } else {
                        throw "No se han obtenido los tweets";
                    }
                }, function(err){
                    throw err;
                });
                done();
            });
        });

    });
})();

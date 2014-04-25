/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            jquery: '../bower_components/jquery/dist/jquery',
        }
    });



    describe('Events module', function () {
        var ctrl, evts;

        beforeEach(function(done){
            require(['Events', 'Controller'], function(events, controller){
                ctrl = controller;
                evts = events;
                sinon.spy(ctrl, 'showLatestTweets');
                done();
            });
        });

        afterEach(function(done){
            ctrl.showLatestTweets.restore();
            done();
        });

        describe('#showLatestTweets', function () {
            it('event dataChange is called', function (done) {
                var errTimeOut = setTimeout(function(){
                    assert(false, 'Event never called');
                    done();
                }, 1000);
            });
            it('#showLatestTweets is called', function (done) {
                document.dispatchEvent(new Event('dataChange'));
                assert.isTrue(ctrl.showLatestTweets.calledOnce, 'showLatestTweets is not called');
                done();
            });
        });

    });
})();
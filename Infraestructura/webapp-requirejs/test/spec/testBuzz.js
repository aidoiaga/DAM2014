/* global describe, it */
(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        nodeRequire:require
    });

    describe('test', function () {
        var mod;
        beforeEach(function(done){
            require(['Buzz'],function(buzz){
                mod = buzz;
                done();
            });
        });

        describe('Test Buzz methods', function(){
            it('Should return true or false', function(){
                assert.equal(false,mod.isTrue(1));
                assert.equal(false,mod.isTrue(2));
                assert.equal(false,mod.isTrue(3));
                assert.equal(false,mod.isTrue(4));
                assert.equal(true,mod.isTrue(5));
                assert.equal(true,mod.isTrue(10));
                assert.equal(true,mod.isTrue(15));
                assert.equal(false,mod.isTrue());
                assert.equal(false,mod.isTrue(undefined));
            });
        });

        describe('Test Buzz methods', function(){
            it('Should return Buzz', function(){
                assert.equal('Buzz',mod.getValue());
            });
        });
    });
})();

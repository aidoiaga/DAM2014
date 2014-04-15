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
            require(['FizzBuzz'],function(fizzbuzz){
                mod = fizzbuzz;
                done();
            });
        });

        describe('Test FizzBuzz methods', function(){
            it('Should return an array with Fizz, Buzz, FizzBuzz or a number', function(){
                assert.equal('1',mod.testNumber(1));
                assert.equal('1,2,Fizz',mod.testNumber(3));
                assert.equal('1,2,Fizz,4,Buzz',mod.testNumber(5));
                assert.equal('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz',mod.testNumber(15));
            });
        });
    });
})();

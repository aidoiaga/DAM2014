//APP.FizzBuzz = (function(){})(); - es lo mismo que el define que hemos definido
define('Fizz',[],function(){
    'use strict';

    var isTrue = function(number){
        var n = number || 1;
        return (n % 3) === 0;
    };

    var getValue = function(){
        return 'Fizz';
    };

    return {
        isTrue : isTrue,
        getValue : getValue
    };
});
//APP.FizzBuzz = (function(){})(); - es lo mismo que el define que hemos definido
define('Buzz',[],function(){
    'use strict';

    var isTrue = function(number){
        var n = number || 1;
        return (n % 5) === 0;
    };

    var getValue = function(){
        return 'Buzz';
    };

    return {
        isTrue : isTrue,
        getValue : getValue
    };
});
//APP.FizzBuzz = (function(){})(); - es lo mismo que el define que hemos definido
define('FizzBuzz',['Fizz', 'Buzz'],function(Fizz, Buzz){
    'use strict';

    var validators = [];



    var testNumber = function(number){
        var list = [];
        for (var i = 1; i<=number; i++) {
            if(Fizz.isTrue(i)&&(Buzz.isTrue(i)) ){
                list.push(Fizz.getValue()+Buzz.getValue());
            }
            else if(Buzz.isTrue(i)){
                list.push(Buzz.getValue());
            }
            else if(Fizz.isTrue(i)){
                list.push(Fizz.getValue());
            }
            else{
                list.push(i);
            }
        }
        console.log(list);
        return list;
    };

    for (var i = 0; i < arguments.length; i++) {
        addValidator(arguments[i]);
    }

    return {
        testNumber:testNumber
    };
});
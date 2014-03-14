$(document).ready(function(){
    "use strict";

    var $input = $('input[name=q]');
    var $label = $input.closest('form').find('label[for="' + $input.attr('name') + '"]');
    var $hint = $label.text();

    $input.val($hint).addClass('hint');

    $label.hide();

    $input.on('focus', function(e){
        if($input.val() === $hint){
            $input.val('');//this.value='';
            $input.removeClass('hint');
        }
    });

    $input.on('blur', function(e){
        if($input.val().trim().length === 0){
            $input.val($hint);
            $input.addClass('hint');
        }
    });

});

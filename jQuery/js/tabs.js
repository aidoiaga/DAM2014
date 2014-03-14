$(document).ready(function(){
    "use strict";

    var $divs = $('div.module').hide();

    var $ul = $('<ul/>').addClass('tabs');

    $ul.first().insertBefore('div.module').first();

    var lis = [];
    $divs.each(function() {
        var $div = $(this);
        var $h2 = $div.find('h2').first().text();
        var $li = $('<li>', {
            'text' : $h2
        });
        $li.data('target', $div);//el en este caso es cada div que antes hemos ocultado

        lis.push($li.get(0));
    });
    $ul.append(lis);

    $(document).on('click', '.tabs li', function(e){
        var $this = $(this);
        $this.addClass('current').siblings('.current').removeClass('current');
        $this.data('target').show().siblings('.module').hide();
    });

    $divs.eq(0).show();
    $ul.find('li').filter(':first').addClass('current');


});
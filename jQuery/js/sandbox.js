$(document).ready(function(){
    "use strict";

    //SELECCIONES
    var $divs = $('div.module');
    console.log($divs);

    var $li = $('#myList li').eq(2);
    console.log($li[0]);
    $li = $('#myList').find('li').eq(2);
    console.log($li[0]);
    $li = $('#myList li:nth-child(3)');
    console.log($li[0]);
    $li = $('#myListItem');
    console.log($li[0]);

    var $input = $('input.input_text');
    var $label = $input.closest('form').find('label[for="' + $input.attr('name') + '"]');
    console.log($label);

    var $ocultos = $(':hidden');
    console.log($ocultos);

    var $img = $('img[alt]');
    console.log($img);

    var $filas = $('tbody tr:odd');
    console.log($filas);

    //RECORRER EL DOM

    var $imgs = [];
    $img = $('img');
    for (var i=$img.length-1; i>= 0; i--) {
        $imgs.push($img[i].alt);
    }
    console.log($imgs);

    $img.each(function(idx,el){
        console.log(el.alt);
    });

    $input = $('.input_text');
    $input.closest('form').addClass('big');

    var $item = $('#myList .current');
    $item.removeClass('current');
    $item.next().addClass('current');

    var $select = $('#specials select');
    var $submit = $select.closest('form').find('input[type=submit]');
    console.log($submit);

    $item = $('#slideshow li:first');
    $item.addClass('current');
    $item.siblings().addClass('disabled');

    //MANIPULACIÓN

    var start, end;
    start = new Date();
    var $ul = $('#myList');
    var $uls = [];
    for (i = (5 - 1); i >= 0; i--) {
        $uls.push('<li>ListItem ' + i + '</li>');
    }
    $ul.append($uls.join(''));
    end = new Date();
    console.log('Tiempo de respuesta' + (end-start));

    $('#myList li:even').remove();

    var $newp = $("<p>Parrafo añadido</p>");
    var $newh = $("<h2>Titulo 2 añadido</h2>");
    $('div.module:last').append($newh).append($newp);

    var $wednesday = $('<option value="wednesday">Wednesday</option>');
    $('select[name=day]').append($wednesday);

    var $last = $('div.module').last();
    var $newEl = $('<div/>', {
    'class' : 'module',
    'id' : 'myModule'
    });

    $newEl.append($img.first().clone()).insertAfter($last);

});
$(function(){
    "use strict";
    $(document).on('change', 'input',function(e){
        var valor = $('progress').val();
        $('progress').val(valor+1);
    });


    var $li;

    /*for(var tipo in Modernzr.inputtypes){
        $ul.append();
    }*/
    var $ul = $('#datos');
    $li = $('<p>Datos</p>');
        $ul.append($li);
    if(Modernizr.inputtypes.email){
        $li = $('<li>Soporta el email</li>');
        $ul.append($li);

    }else{
        $li = '<li>No soporta el email</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.url){
        $li = '<li>Soporta el url</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el url</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.date){
        $li = '<li>Soporta el date</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el date</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.time){
        $li = '<li>Soporta el time</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el time</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.datetime){
       $li = '<li>Soporta el datetime</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el datetime</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.month){
       $li = '<li>Soporta el month</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el month</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.week){
       $li = '<li>Soporta el week</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el week</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.number){
       $li = '<li>Soporta el number</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el number</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.range){
       $li = '<li>Soporta el range</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el range</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.tel){
       $li = '<li>Soporta el tel</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el tel</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.search){
        $li = '<li>Soporta el search</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el search</li>';
        $ul.append($li);
    }

    if(Modernizr.inputtypes.color){
        $li = '<li>Soporta el color</li>';
        $ul.append($li);
    }else{
        $li = '<li>No soporta el color</li>';
        $ul.append($li);
    }

    $li = $('<p>Codecs</p>');
    $ul.append($li);
    for (var codec in Modernizr.video) {
        if(Modernizr.video[codec]){
            $li = '<li>Soporta el codec '+ codec +'</li>';
            $ul.append($li);
        }else{
            $li = '<li>No soporta el codec '+ codec +'</li>';
            $ul.append($li);
        }
    }

    Modernizr.load({
        test: Modernizr.inputtypes.datetime,
        yep: '',
        nope: 'datetime-polyfill.js'
    });

});
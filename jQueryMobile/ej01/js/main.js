
$(function(){
    $( "#event-example" ).click(function( event ) {
        event.preventDefault();
        location.hash = "page3";
    });

    $("#cerrar").click(function(event){
        $('.ui-dialog').dialog("close");
    });

    $( "#method-example" ).click(function( event ) {
        // Append #bar
        $.mobile.navigate( "#bar", {
            info: "info about the #bar hash"
        });

        // Replace #bar with #baz
        $.mobile.navigate( "#baz" );

        // Log the results of the navigate event
        $( window ).on( "navigate", function( event, data ) {
            console.log( "INFO: "+ data.state.info );
            console.log( "DIRECTION: "+data.state.direction );
            console.log( "URL: "+data.state.url );
            console.log( "HASH:"+ data.state.hash );
        });

        // Go back to pop the state for #bar and log it
        window.history.back();
    });

});
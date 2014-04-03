(function(){
    "use strict";

    window.onload = function() {
    var canvas = document.getElementById("canvas");//obtener canvas
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");//obtener el contexto.

        //Formas basicas(Rectangulos)
        /*ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);*/

        /*ctx.fillRect(25,25,100,100);
        ctx.clearRect(45,45,60,60);
        ctx.strokeRect(50,50,50,50);*/

        //Rutas
        /*ctx.beginPath();
        ctx.moveTo(25,25); // Punto inicial para dibujar
        ctx.lineTo(105,25);
        ctx.lineTo(25,105);
        ctx.closePath();
        ctx.fill();*/

        //Arcos
        /*for(var i=0;i<4;i++){
            for(var j=0;j<3;j++){
            ctx.beginPath();
                var x = 25+j*50; // coordenada x
                var y = 25+i*50; // coordenada y
                var radius = 20; // radio del arco
                var startAngle = 0; // punto inicial del círculo
                var endAngle = Math.PI+(Math.PI*j)/2; // punto final
                var anticlockwise = i%2==0 ? false : true;
                ctx.arc(x,y,radius,startAngle,endAngle, anticlockwise);
                if (i>1) ctx.fill();
                else ctx.stroke();
            }
        }*/

        //Color fillStyle
        /*for (var i=0;i<6;i++){
            for (var j=0;j<6;j++){
                ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ',0)';
                ctx.fillRect(j*25,i*25,25,25);
            }
        }*/

        //var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);//gradiante lineal
        var gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, 150);
        gradient.addColorStop(0, '#fff');
        gradient.addColorStop(1, '#000');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    }



    };

})();

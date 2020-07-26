let currentPosition1 = 1;
let currentPosition2 = 1;
let player=1;

function lanzardados() {

    let dice1 = Math.floor(Math.random() * (7 - 1)) + 1;
    let dice2 = Math.floor(Math.random() * (7 - 1)) + 1;
    let sumdice = dice1 + dice2;

    console.log(dice1 + "-" + dice2);

    /*******Rotar dados*******/
    $({ deg: 0 }).animate({ deg: 360 }, {
        duration: 600,
        step: function (now) {
            var scale = (1 * now / 360);
            $('#ImgDado1').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgDado2').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
        }
    });

    document.getElementById("ImgDado1").src = "img/dados/" + dice1 + ".png";
    document.getElementById("ImgDado2").src = "img/dados/" + dice2 + ".png";

    /*********Mover Ficha*******/
    switch (player) {
        case 1:
            /***Player 1****/
            $('.ficha1').remove();
            currentPosition1 += sumdice;

            if (currentPosition1>=41){

                currentPosition1 -= 40;
                $( '#c'+currentPosition1 )
                    .append( '<div class="ficha1"></div>' );

                if (currentPosition1==1){

                    setTimeout(function(){

                        alert("El jugador 1  gano el juego");
                        $('.ficha1').remove();
                        $('.ficha2').remove();
                        $( '#c'+1 )
                            .append( '<div class="ficha1"></div>' );
                        $( '#c'+1 )
                            .append( '<div class="ficha2"></div>' );

                        document.getElementById("ImgDado1").src = "img/dados/rnd.png";
                        document.getElementById("ImgDado2").src = "img/dados/rnd.png";

                        }, 2000);

                }
            }else{
                $( '#c'+currentPosition1 )
                    .append( '<div class="ficha1"></div>' );

            }
            $('.containerplayer1-mensaje').html("Avanza " + sumdice + " espacios").css("background-color", "rgba(255, 0, 0, 0.7)");
            player = 2;
            break;
        case 2:
            /***Player 2****/
            $('.ficha2').remove();
            currentPosition2 += sumdice;

            if (currentPosition2>=41){

                currentPosition2 -= 40;
                $( '#c'+currentPosition2 )
                    .append( '<div class="ficha2"></div>' );
                if (currentPosition2==1){

                    setTimeout(function(){

                        alert("El jugador 2 gano el juego");
                        $('.ficha1').remove();
                        $('.ficha2').remove();
                        $( '#c'+1 )
                            .append( '<div class="ficha1"></div>' );
                        $( '#c'+1 )
                            .append( '<div class="ficha2"></div>' );

                        document.getElementById("ImgDado1").src = "img/dados/rnd.png";
                        document.getElementById("ImgDado2").src = "img/dados/rnd.png";

                        }, 2000);
                }
            }else{

                $( '#c'+currentPosition2 )
                    .append( '<div class="ficha2"></div>' );

            }
            $('.containerplayer2-mensaje').html("Avanza " + sumdice + " espacios");
            player = 1;
            break;
    }                                        
}
/*********Mostrar explicación para cada ejercicio*******/
/*----------------------------- #c40 -----------------------------*/
var elemento=document.getElementById("c40");
    elemento.onmouseover = function(e){ 
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c38 -----------------------------*/
var elemento=document.getElementById("c38");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c36 -----------------------------*/
var elemento=document.getElementById("c36");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c34 -----------------------------*/
var elemento=document.getElementById("c34");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c32 -----------------------------*/
var elemento=document.getElementById("c32");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c30 -----------------------------*/
var elemento=document.getElementById("c30");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c28 -----------------------------*/
var elemento=document.getElementById("c28");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c26 -----------------------------*/
var elemento=document.getElementById("c26");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c24 -----------------------------*/
var elemento=document.getElementById("c24");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c22 -----------------------------*/
var elemento=document.getElementById("c22");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c20 -----------------------------*/
var elemento=document.getElementById("c20");
    elemento.onmouseover = function(e){ 
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c18 -----------------------------*/
var elemento=document.getElementById("c18");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c16 -----------------------------*/
var elemento=document.getElementById("c16");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c14 -----------------------------*/
var elemento=document.getElementById("c14");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c12 -----------------------------*/
var elemento=document.getElementById("c12");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c10 -----------------------------*/
var elemento=document.getElementById("c10");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c8 -----------------------------*/
var elemento=document.getElementById("c8");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c6 -----------------------------*/
var elemento=document.getElementById("c6");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c4 -----------------------------*/
var elemento=document.getElementById("c4");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
/*----------------------------- #c2 -----------------------------*/
var elemento=document.getElementById("c2");
    elemento.onmouseover = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div style=' background-color:rgba(40, 167, 69, 0.7); margin-top: 15px; font-weight: bold; border: 2px solid white; font-size: 100%; color: white; text-align: center; border-radius:10px'>Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.</div>";
};
    elemento.onmouseout = function(e){
    document.getElementById("container-descripcion-mensaje").innerHTML =  "<div></div>";
};
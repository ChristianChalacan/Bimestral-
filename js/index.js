let currentPosition1 = 1;
let currentPosition2 = 1;
let player=1;

$(document).ready(function(){

  $('#btnchange')
  .html('Lanza Rojo')
  .on('click',function(){
    if($(this).html()==='Lanza Rojo'){

      $(this).html('Lanza Azul')

    }else{
      $(this).html('Lanza Rojo')
    }
    $('#btnchange').toggleClass('changebtn');

  });
}

);

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
                        location.reload();
                        }, 1000);


                }
            }else{
                $( '#c'+currentPosition1 )
                    .append( '<div class="ficha1"></div>' );

            }
            $('.containerplayer1-mensaje').html("Avanza " + sumdice + " espacios");


    /*---------------------------------------------- AVANZAR FICHA ---------------------------------------------*/
                if (currentPosition1 == 3){
                    setTimeout(function(){
                        alert("El jugador 1 avanza 3 espacios");
                        $('.containerplayer1-mensaje').html("Avanza 3 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 6 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 6;
                }
                if (currentPosition1 == 7){
                    setTimeout(function(){
                        alert("El jugador 1 avanza 3 espacios");
                        $('.containerplayer1-mensaje').html("Avanza 3 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 10 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 10;
                }
                if (currentPosition1 == 13){
                    setTimeout(function(){
                        alert("El jugador 1 avanza 3 espacios");
                        $('.containerplayer1-mensaje').html("Avanza 3 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 16 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 16;
                }
                if (currentPosition1 == 17){
                    setTimeout(function(){
                        alert("El jugador 1 avanza 3 espacios");
                        $('.containerplayer1-mensaje').html("Avanza 3 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 20 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 20;
                }
                if (currentPosition1 == 25){
                    setTimeout(function(){
                        alert("El jugador 1 avanza 3 espacios");
                        $('.containerplayer1-mensaje').html("Avanza 3 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 28 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 28;
                }
                if (currentPosition1 == 29){
                    setTimeout(function(){
                        alert("El jugador 1 avanza 3 espacios");
                        $('.containerplayer1-mensaje').html("Avanza 3 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 32 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 32;
                }
                if (currentPosition1 == 33){
                    setTimeout(function(){
                        alert("El jugador 1 avanza 3 espacios");
                        $('.containerplayer1-mensaje').html("Avanza 3 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 36 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 36;
                }
                if (currentPosition1 == 37){
                    setTimeout(function(){
                        alert("El jugador 1 avanza 3 espacios");
                        $('.containerplayer1-mensaje').html("Avanza 3 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 40 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 40;
                }

    /*--------------------------------------------- REGRESAR FICHA --------------------------------------------*/
                if (currentPosition1 == 5){
                    setTimeout(function(){
                        alert("El jugador 1 regresa 5 espacios");
                        $('.containerplayer1-mensaje').html("Regresa 5 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 40 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 40;
                }
                if (currentPosition1 == 9){
                    setTimeout(function(){
                        alert("El jugador 1 regresa 5 espacios");
                        $('.containerplayer1-mensaje').html("Regresa 5 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 4 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 4;
                }
                if (currentPosition1 == 15){
                    setTimeout(function(){
                        alert("El jugador 1 regresa 5 espacios");
                        $('.containerplayer1-mensaje').html("Regresa 5 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 10 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 10;
                }
                if (currentPosition1 == 19){
                    setTimeout(function(){
                        alert("El jugador 1 regresa 5 espacios");
                        $('.containerplayer1-mensaje').html("Regresa 5 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 14 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 14;
                }
                if (currentPosition1 == 23){
                    setTimeout(function(){
                        alert("El jugador 1 regresa 5 espacios");
                        $('.containerplayer1-mensaje').html("Regresa 5 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 18 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 18;
                }
                if (currentPosition1 == 27){
                    setTimeout(function(){
                        alert("El jugador 1 regresa 5 espacios");
                        $('.containerplayer1-mensaje').html("Regresa 5 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 22 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 22;
                }
                if (currentPosition1 == 35){
                    setTimeout(function(){
                        alert("El jugador 1 regresa 5 espacios");
                        $('.containerplayer1-mensaje').html("Regresa 5 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 30 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 30;
                }
                if (currentPosition1 == 39){
                    setTimeout(function(){
                        alert("El jugador 1 regresa 5 espacios");
                        $('.containerplayer1-mensaje').html("Regresa 5 espacios");
                        $('.ficha1').remove();
                        $( '#c'+ 34 )
                            .append( '<div class="ficha1"></div>' );
                        }, 1000);
                    currentPosition1 = 34;
                }

    /*--------------------------------- MOSTRAR DESCRIPCION DE LOS EJERCICIOS ---------------------------------*/
                if((currentPosition2 >= currentPosition1) || (currentPosition2 <= currentPosition1))
                {
                    if(currentPosition2 == 39 || currentPosition2 == 37 || currentPosition2 == 35 || currentPosition2 == 33 || currentPosition2 == 31 || currentPosition2 == 29 || currentPosition2 == 27 || currentPosition2 == 25 || currentPosition2 == 23 || currentPosition2 == 21 || currentPosition2 == 19 || currentPosition2 == 17 || currentPosition2 == 15 || currentPosition2 == 13 || currentPosition2 == 11 || currentPosition2 == 9 || currentPosition2 == 7 || currentPosition2 == 5 || currentPosition2 == 3 || currentPosition2 == 1){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("");
                        $('.container-nombre').html("");
                        $('.container-descripcion-mensaje').html("");
                        $('.container-descripcion-reto').html("");
                    }


                    if(currentPosition1 == 40){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("PUSH UP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 38){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 36){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("FRONT KICK");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia a la otra pierna");
                    }
                    if(currentPosition1 == 34){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 45 segundos");
                    }
                    if(currentPosition1 == 32){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos");
                    }
                    if(currentPosition1 == 30){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("ROTATION");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos y luego cambia de brazo");
                    }
                    if(currentPosition1 == 28){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("FRONT KICK");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia de pierna");
                    }
                    if(currentPosition1 == 26){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("SIDE PLANK");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.");
                        $('.container-descripcion-reto').html("Mantén la posición por un minuto y cambia de brazo");
                    }
                    if(currentPosition1 == 24){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 22){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("PLANK LEG RAISE");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.");
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 20){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 18){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("KNEE BENT PUSH UP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.");
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 16){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("ELEVATED SIDE PLANK");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.");
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 14){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 12){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 10){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("KNEES PULL");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.");
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 8){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 6){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("CHAIR STEP UP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.");
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 4){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("PUSH UP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition1 == 2){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("JUGADOR 1");
                        $('.container-nombre').css("background-color", "rgba(255, 0, 0, 0.7)").html("LUNGE");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(255, 0, 0, 0.7)").html("Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.");
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition1 == 39 || currentPosition1 == 37 || currentPosition1 == 35 || currentPosition1 == 33 || currentPosition1 == 31 || currentPosition1 == 29 || currentPosition1 == 27 || currentPosition1 == 25 || currentPosition1 == 23 || currentPosition1 == 21 || currentPosition1 == 19 || currentPosition1 == 17 || currentPosition1 == 15 || currentPosition1 == 13 || currentPosition1 == 11 || currentPosition1 == 9 || currentPosition1 == 7 || currentPosition1 == 5 || currentPosition1 == 3 || currentPosition1 == 1){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("");
                        $('.container-nombre').html("");
                        $('.container-descripcion-mensaje').html("");
                        $('.container-descripcion-reto').html("");
                    }
                }
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
                        location.reload();
                        }, 1000);
                }
            }else{

                $( '#c'+currentPosition2 )
                    .append( '<div class="ficha2"></div>' );

            }
            $('.containerplayer2-mensaje').html("Avanza " + sumdice + " espacios");

    /*---------------------------------------------- AVANZAR FICHA ---------------------------------------------*/
                if (currentPosition2 == 3){
                    setTimeout(function(){
                        alert("El jugador 2 avanza 3 espacios");
                        $('.containerplayer2-mensaje').html("Avanza 3 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 6 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 6;
                }
                if (currentPosition2 == 7){
                    setTimeout(function(){
                        alert("El jugador 2 avanza 3 espacios");
                        $('.containerplayer2-mensaje').html("Avanza 3 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 10 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 10;
                }
                if (currentPosition2 == 13){
                    setTimeout(function(){
                        alert("El jugador 2 avanza 3 espacios");
                        $('.containerplayer2-mensaje').html("Avanza 3 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 16 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 16;
                }
                if (currentPosition2 == 17){
                    setTimeout(function(){
                        alert("El jugador 2 avanza 3 espacios");
                        $('.containerplayer2-mensaje').html("Avanza 3 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 20 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 20;
                }
                if (currentPosition2 == 25){
                    setTimeout(function(){
                        alert("El jugador 2 avanza 3 espacios");
                        $('.containerplayer2-mensaje').html("Avanza 3 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 28 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 28;
                }
                if (currentPosition2 == 29){
                    setTimeout(function(){
                        alert("El jugador 2 avanza 3 espacios");
                        $('.containerplayer2-mensaje').html("Avanza 3 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 32 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 32;
                }
                if (currentPosition2 == 33){
                    setTimeout(function(){
                        alert("El jugador 2 avanza 3 espacios");
                        $('.containerplayer2-mensaje').html("Avanza 3 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 36 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 36;
                }
                if (currentPosition2 == 37){
                    setTimeout(function(){
                        alert("El jugador 2 avanza 3 espacios");
                        $('.containerplayer2-mensaje').html("Avanza 3 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 40 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 40;
                }

    /*--------------------------------------------- REGRESAR FICHA --------------------------------------------*/
                if (currentPosition2 == 5){
                    setTimeout(function(){
                        alert("El jugador 2 regresa 5 espacios");
                        $('.containerplayer2-mensaje').html("Regresa 5 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 40 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 40;
                }
                if (currentPosition2 == 9){
                    setTimeout(function(){
                        alert("El jugador 2 regresa 5 espacios");
                        $('.containerplayer2-mensaje').html("Regresa 5 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 4 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 4;
                }
                if (currentPosition2 == 15){
                    setTimeout(function(){
                        alert("El jugador 2 regresa 5 espacios");
                        $('.containerplayer2-mensaje').html("Regresa 5 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 10 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 10;
                }
                if (currentPosition2 == 19){
                    setTimeout(function(){
                        alert("El jugador 2 regresa 5 espacios");
                        $('.containerplayer2-mensaje').html("Regresa 5 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 14 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 14;
                }
                if (currentPosition2 == 23){
                    setTimeout(function(){
                        alert("El jugador 2 regresa 5 espacios");
                        $('.containerplayer2-mensaje').html("Regresa 5 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 18 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 18;
                }
                if (currentPosition2 == 27){
                    setTimeout(function(){
                        alert("El jugador 2 regresa 5 espacios");
                        $('.containerplayer2-mensaje').html("Regresa 5 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 22 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 22;
                }
                if (currentPosition2 == 35){
                    setTimeout(function(){
                        alert("El jugador 2 regresa 5 espacios");
                        $('.containerplayer2-mensaje').html("Regresa 5 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 30 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 30;
                }
                if (currentPosition2 == 39){
                    setTimeout(function(){
                        alert("El jugador 2 regresa 5 espacios");
                        $('.containerplayer2-mensaje').html("Regresa 5 espacios");
                        $('.ficha2').remove();
                        $( '#c'+ 34 )
                            .append( '<div class="ficha2"></div>' );
                        }, 1000);
                    currentPosition2 = 34;
                }


    /*--------------------------------- MOSTRAR DESCRIPCION DE LOS EJERCICIOS ---------------------------------*/

                if((currentPosition2 >= currentPosition1) || (currentPosition2 <= currentPosition1))
                {
                    if(currentPosition1 == 39 || currentPosition1 == 37 || currentPosition1 == 35 || currentPosition1 == 33 || currentPosition1 == 31 || currentPosition1 == 29 || currentPosition1 == 27 || currentPosition1 == 25 || currentPosition1 == 23 || currentPosition1 == 21 || currentPosition1 == 19 || currentPosition1 == 17 || currentPosition1 == 15 || currentPosition1 == 13 || currentPosition1 == 11 || currentPosition1 == 9 || currentPosition1 == 7 || currentPosition1 == 5 || currentPosition1 == 3 || currentPosition1 == 1){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("");
                        $('.container-nombre').html("");
                        $('.container-descripcion-mensaje').html("");
                        $('.container-descripcion-reto').html("");
                    }

                    if(currentPosition2 == 40){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("PUSH UP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 38){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 36){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("FRONT KICK");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia a la otra pierna");
                    }
                    if(currentPosition2 == 34){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 45 segundos");
                    }
                    if(currentPosition2 == 32){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos");
                    }
                    if(currentPosition2 == 30){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("ROTATION");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos y luego cambia de brazo");
                    }
                    if(currentPosition2 == 28){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("FRONT KICK");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia de pierna");
                    }
                    if(currentPosition2 == 26){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("SIDE PLANK");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.");
                        $('.container-descripcion-reto').html("Mantén la posición por un minuto y cambia de brazo");
                    }
                    if(currentPosition2 == 24){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 22){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("PLANK LEG RAISE");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.");
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 20){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 18){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("KNEE BENT PUSH UP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.");
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 16){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("ELEVATED SIDE PLANK");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.");
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 14){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 12){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 10){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("KNEES PULL");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.");
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 8){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 6){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("CHAIR STEP UP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.");
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 4){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("PUSH UP");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition2 == 2){
                        $('.containerplayer1-reto').html("");
                        $('.containerplayer2-reto').html("JUGADOR 2");
                        $('.container-nombre').css("background-color", "rgba(0, 0, 255, 0.7)").html("LUNGE");
                        $('.container-descripcion-mensaje').css("background-color", "rgba(0, 0, 255, 0.7)").html("Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.");
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition2 == 39 || currentPosition2 == 37 || currentPosition2 == 35 || currentPosition2 == 33 || currentPosition2 == 31 || currentPosition2 == 29 || currentPosition2 == 27 || currentPosition2 == 25 || currentPosition2 == 23 || currentPosition2 == 21 || currentPosition2 == 19 || currentPosition2 == 17 || currentPosition2 == 15 || currentPosition2 == 13 || currentPosition2 == 11 || currentPosition2 == 9 || currentPosition2 == 7 || currentPosition2 == 5 || currentPosition2 == 3 || currentPosition2 == 1){
                        $('.containerplayer2-reto').html("");
                        $('.containerplayer1-reto').html("");
                        $('.container-nombre').html("");
                        $('.container-descripcion-mensaje').html("");
                        $('.container-descripcion-reto').html("");
                    }

                }
            player = 1;
            break;
        }

}

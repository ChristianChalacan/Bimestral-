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
    /*--------------------------------- MOSTRAR DESCRIPCION DE LOS EJERCICIOS ---------------------------------*/
                if((currentPosition2 >= currentPosition1))
                { 
                    if(currentPosition2 == 40){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 38){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");    
                    }
                    if(currentPosition2 == 36){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia a la otra pierna");
                    }
                    if(currentPosition2 == 34){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 45 segundos");
                    }
                    if(currentPosition2 == 32){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos");    
                    }
                    if(currentPosition2 == 30){
                        $('.container-nombre').html("ROTATION");
                        $('.container-descripcion-mensaje').html("Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos y luego cambia de brazo");
                    }
                    if(currentPosition2 == 28){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia de pierna");
                    }
                    if(currentPosition2 == 26){
                        $('.container-nombre').html("SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.");      
                        $('.container-descripcion-reto').html("Mantén la posición por un minuto y cambia de brazo");
                    }
                    if(currentPosition2 == 24){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 22){
                        $('.container-nombre').html("PLANK LEG RAISE");
                        $('.container-descripcion-mensaje').html("Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 20){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 18){
                        $('.container-nombre').html("KNEE BENT PUSH UP");
                        $('.container-descripcion-mensaje').html("Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 16){
                        $('.container-nombre').html("ELEVATED SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 14){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 12){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 10){
                        $('.container-nombre').html("KNEES PULL");
                        $('.container-descripcion-mensaje').html("Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 8){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 6){
                        $('.container-nombre').html("CHAIR STEP UP");
                        $('.container-descripcion-mensaje').html("Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 4){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition2 == 2){
                        $('.container-nombre').html("LUNGE");
                        $('.container-descripcion-mensaje').html("Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }                               

                    if(currentPosition1 == 40){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 38){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");    
                    }
                    if(currentPosition1 == 36){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia a la otra pierna");
                    }
                    if(currentPosition1 == 34){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 45 segundos");
                    }
                    if(currentPosition1 == 32){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos");    
                    }
                    if(currentPosition1 == 30){
                        $('.container-nombre').html("ROTATION");
                        $('.container-descripcion-mensaje').html("Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos y luego cambia de brazo");
                    }
                    if(currentPosition1 == 28){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia de pierna");
                    }
                    if(currentPosition1 == 26){
                        $('.container-nombre').html("SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.");      
                        $('.container-descripcion-reto').html("Mantén la posición por un minuto y cambia de brazo");
                    }
                    if(currentPosition1 == 24){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 22){
                        $('.container-nombre').html("PLANK LEG RAISE");
                        $('.container-descripcion-mensaje').html("Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 20){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 18){
                        $('.container-nombre').html("KNEE BENT PUSH UP");
                        $('.container-descripcion-mensaje').html("Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 16){
                        $('.container-nombre').html("ELEVATED SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 14){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 12){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 10){
                        $('.container-nombre').html("KNEES PULL");
                        $('.container-descripcion-mensaje').html("Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 8){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 6){
                        $('.container-nombre').html("CHAIR STEP UP");
                        $('.container-descripcion-mensaje').html("Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 4){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition1 == 2){
                        $('.container-nombre').html("LUNGE");
                        $('.container-descripcion-mensaje').html("Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }                               


                }

                if((currentPosition2 <= currentPosition1))
                {      
                    if(currentPosition2 == 40){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 38){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");    
                    }
                    if(currentPosition2 == 36){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia a la otra pierna");
                    }
                    if(currentPosition2 == 34){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 45 segundos");
                    }
                    if(currentPosition2 == 32){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos");    
                    }
                    if(currentPosition2 == 30){
                        $('.container-nombre').html("ROTATION");
                        $('.container-descripcion-mensaje').html("Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos y luego cambia de brazo");
                    }
                    if(currentPosition2 == 28){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia de pierna");
                    }
                    if(currentPosition2 == 26){
                        $('.container-nombre').html("SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.");      
                        $('.container-descripcion-reto').html("Mantén la posición por un minuto y cambia de brazo");
                    }
                    if(currentPosition2 == 24){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 22){
                        $('.container-nombre').html("PLANK LEG RAISE");
                        $('.container-descripcion-mensaje').html("Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 20){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 18){
                        $('.container-nombre').html("KNEE BENT PUSH UP");
                        $('.container-descripcion-mensaje').html("Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 16){
                        $('.container-nombre').html("ELEVATED SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 14){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 12){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 10){
                        $('.container-nombre').html("KNEES PULL");
                        $('.container-descripcion-mensaje').html("Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 8){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 6){
                        $('.container-nombre').html("CHAIR STEP UP");
                        $('.container-descripcion-mensaje').html("Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 4){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition2 == 2){
                        $('.container-nombre').html("LUNGE");
                        $('.container-descripcion-mensaje').html("Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }                               


                    if(currentPosition1 == 40){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 38){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");    
                    }
                    if(currentPosition1 == 36){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia a la otra pierna");
                    }
                    if(currentPosition1 == 34){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 45 segundos");
                    }
                    if(currentPosition1 == 32){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos");    
                    }
                    if(currentPosition1 == 30){
                        $('.container-nombre').html("ROTATION");
                        $('.container-descripcion-mensaje').html("Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos y luego cambia de brazo");
                    }
                    if(currentPosition1 == 28){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia de pierna");
                    }
                    if(currentPosition1 == 26){
                        $('.container-nombre').html("SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.");      
                        $('.container-descripcion-reto').html("Mantén la posición por un minuto y cambia de brazo");
                    }
                    if(currentPosition1 == 24){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 22){
                        $('.container-nombre').html("PLANK LEG RAISE");
                        $('.container-descripcion-mensaje').html("Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 20){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 18){
                        $('.container-nombre').html("KNEE BENT PUSH UP");
                        $('.container-descripcion-mensaje').html("Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 16){
                        $('.container-nombre').html("ELEVATED SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 14){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 12){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 10){
                        $('.container-nombre').html("KNEES PULL");
                        $('.container-descripcion-mensaje').html("Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 8){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 6){
                        $('.container-nombre').html("CHAIR STEP UP");
                        $('.container-descripcion-mensaje').html("Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 4){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition1 == 2){
                        $('.container-nombre').html("LUNGE");
                        $('.container-descripcion-mensaje').html("Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
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

                        }, 2000);
                }
            }else{

                $( '#c'+currentPosition2 )
                    .append( '<div class="ficha2"></div>' );

            }
            $('.containerplayer2-mensaje').html("Avanza " + sumdice + " espacios");

    /*--------------------------------- MOSTRAR DESCRIPCION DE LOS EJERCICIOS ---------------------------------*/
                if((currentPosition2 >= currentPosition1))
                { 
                    if(currentPosition1 == 40){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 38){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");    
                    }
                    if(currentPosition1 == 36){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia a la otra pierna");
                    }
                    if(currentPosition1 == 34){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 45 segundos");
                    }
                    if(currentPosition1 == 32){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos");    
                    }
                    if(currentPosition1 == 30){
                        $('.container-nombre').html("ROTATION");
                        $('.container-descripcion-mensaje').html("Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos y luego cambia de brazo");
                    }
                    if(currentPosition1 == 28){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia de pierna");
                    }
                    if(currentPosition1 == 26){
                        $('.container-nombre').html("SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.");      
                        $('.container-descripcion-reto').html("Mantén la posición por un minuto y cambia de brazo");
                    }
                    if(currentPosition1 == 24){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 22){
                        $('.container-nombre').html("PLANK LEG RAISE");
                        $('.container-descripcion-mensaje').html("Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 20){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 18){
                        $('.container-nombre').html("KNEE BENT PUSH UP");
                        $('.container-descripcion-mensaje').html("Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 16){
                        $('.container-nombre').html("ELEVATED SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 14){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 12){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 10){
                        $('.container-nombre').html("KNEES PULL");
                        $('.container-descripcion-mensaje').html("Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 8){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 6){
                        $('.container-nombre').html("CHAIR STEP UP");
                        $('.container-descripcion-mensaje').html("Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 4){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition1 == 2){
                        $('.container-nombre').html("LUNGE");
                        $('.container-descripcion-mensaje').html("Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }

                    if(currentPosition2 == 40){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 38){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");    
                    }
                    if(currentPosition2 == 36){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia a la otra pierna");
                    }
                    if(currentPosition2 == 34){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 45 segundos");
                    }
                    if(currentPosition2 == 32){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos");    
                    }
                    if(currentPosition2 == 30){
                        $('.container-nombre').html("ROTATION");
                        $('.container-descripcion-mensaje').html("Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos y luego cambia de brazo");
                    }
                    if(currentPosition2 == 28){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia de pierna");
                    }
                    if(currentPosition2 == 26){
                        $('.container-nombre').html("SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.");      
                        $('.container-descripcion-reto').html("Mantén la posición por un minuto y cambia de brazo");
                    }
                    if(currentPosition2 == 24){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 22){
                        $('.container-nombre').html("PLANK LEG RAISE");
                        $('.container-descripcion-mensaje').html("Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 20){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 18){
                        $('.container-nombre').html("KNEE BENT PUSH UP");
                        $('.container-descripcion-mensaje').html("Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 16){
                        $('.container-nombre').html("ELEVATED SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 14){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 12){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 10){
                        $('.container-nombre').html("KNEES PULL");
                        $('.container-descripcion-mensaje').html("Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 8){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 6){
                        $('.container-nombre').html("CHAIR STEP UP");
                        $('.container-descripcion-mensaje').html("Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 4){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition2 == 2){
                        $('.container-nombre').html("LUNGE");
                        $('.container-descripcion-mensaje').html("Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }                               
                }

                if((currentPosition2 <= currentPosition1))
                {      
                    if(currentPosition1 == 40){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 38){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");    
                    }
                    if(currentPosition1 == 36){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia a la otra pierna");
                    }
                    if(currentPosition1 == 34){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 45 segundos");
                    }
                    if(currentPosition1 == 32){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos");    
                    }
                    if(currentPosition1 == 30){
                        $('.container-nombre').html("ROTATION");
                        $('.container-descripcion-mensaje').html("Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos y luego cambia de brazo");
                    }
                    if(currentPosition1 == 28){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia de pierna");
                    }
                    if(currentPosition1 == 26){
                        $('.container-nombre').html("SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.");      
                        $('.container-descripcion-reto').html("Mantén la posición por un minuto y cambia de brazo");
                    }
                    if(currentPosition1 == 24){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 22){
                        $('.container-nombre').html("PLANK LEG RAISE");
                        $('.container-descripcion-mensaje').html("Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 20){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition1 == 18){
                        $('.container-nombre').html("KNEE BENT PUSH UP");
                        $('.container-descripcion-mensaje').html("Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 16){
                        $('.container-nombre').html("ELEVATED SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 14){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 12){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 10){
                        $('.container-nombre').html("KNEES PULL");
                        $('.container-descripcion-mensaje').html("Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition1 == 8){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 6){
                        $('.container-nombre').html("CHAIR STEP UP");
                        $('.container-descripcion-mensaje').html("Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition1 == 4){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition1 == 2){
                        $('.container-nombre').html("LUNGE");
                        $('.container-descripcion-mensaje').html("Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }                        

                    if(currentPosition2 == 40){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 38){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");    
                    }
                    if(currentPosition2 == 36){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia a la otra pierna");
                    }
                    if(currentPosition2 == 34){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 45 segundos");
                    }
                    if(currentPosition2 == 32){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos");    
                    }
                    if(currentPosition2 == 30){
                        $('.container-nombre').html("ROTATION");
                        $('.container-descripcion-mensaje').html("Recuéstate de forma lateral en el suelo, levantar las caderas con el codo apoyado en el suelo, estirar el brazo libre hacia el techo y posteriormente llevarlo hacia adelante. Repetir el mismo procedimiento las veces que quieras.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 2 minutos y luego cambia de brazo");
                    }
                    if(currentPosition2 == 28){
                        $('.container-nombre').html("FRONT KICK");
                        $('.container-descripcion-mensaje').html("Levanta la rodilla, luego se estira la pierna delante. Es deseable retraer la pierna inmediatamente.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por 30 segundos y cambia de pierna");
                    }
                    if(currentPosition2 == 26){
                        $('.container-nombre').html("SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla y la otra enganchada al cuerpo, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo. Mantener esa posición el tiempo que quieras.");      
                        $('.container-descripcion-reto').html("Mantén la posición por un minuto y cambia de brazo");
                    }
                    if(currentPosition2 == 24){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 22){
                        $('.container-nombre').html("PLANK LEG RAISE");
                        $('.container-descripcion-mensaje').html("Coloca tus codos en el suelo o esterilla y eleva tu cuerpo, eleva tus piernas, de manera alternada, en forma diagonal.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 20){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza el ejercicio por un minuto");
                    }
                    if(currentPosition2 == 18){
                        $('.container-nombre').html("KNEE BENT PUSH UP");
                        $('.container-descripcion-mensaje').html("Colócate en el piso con los brazos estirados y las rodillas felxionadas 90 grados, luego baja el pecho tratando de mantener las rodillas en la misma posición.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 16){
                        $('.container-nombre').html("ELEVATED SIDE PLANK");
                        $('.container-descripcion-mensaje').html("Apoya una mano en la esterilla, luego elévate hasta que tengas un brazo y los pies sobre el suelo. El brazo que has colocado sobre la esterilla tienes que flexionarlo y los pies deben de estar juntos. Por otro lado, las piernas mántenlas rectas intentando que el peso no caiga hacia abajo, el brazo libre debes elevarlo hacia el techo y engacharlo al cuerpo de manera secuencial.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 14){
                        $('.container-nombre').html("PELVIC SCOOP");
                        $('.container-descripcion-mensaje').html("Colocate en una superficie plana y eleva tus rodillas manteniendo los pies en el suelo, finalmente eleva la pelvis. Realiza las repeticiones de forma continua.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 12){
                        $('.container-nombre').html("BODY WEIGHT SQUATS");
                        $('.container-descripcion-mensaje').html("Separe los pies al ancho de los hombros, lentamente dobla las rodillas y baja las caderas para bajar el cuerpo. Mantenga los talones planos en el piso. Mantenga la espalda lo más recta posible durante todo el levantamiento para evitar tensiones o lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 10){
                        $('.container-nombre').html("KNEES PULL");
                        $('.container-descripcion-mensaje').html("Siéntate en el suelo, apoya tus manos de forma lateral en el suelo y flexiona las piernas hacia el pecho y luego estíralas manteniendolas en el aire, debes realizar la secuencia de forma repetida.");      
                        $('.container-descripcion-reto').html("Realiza 30 repeticiones");
                    }
                    if(currentPosition2 == 8){
                        $('.container-nombre').html("JUMPING JACKS");
                        $('.container-descripcion-mensaje').html("Primero, sitúate de pie con los pies juntos y los brazos extendidos a lo largo del cuerpo; Luego, salta con las piernas y los pies a los lados, mientras levantas los brazos por encima de la cabeza. Debes asegurarte de mantener las rodillas relajadas y de flexionarlas un poco mientras aterrizas. Esto hará que evites lesiones por el impacto repetitivo.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 6){
                        $('.container-nombre').html("CHAIR STEP UP");
                        $('.container-descripcion-mensaje').html("Coloca una silla frente a una pared, luego coloca una de tus piernas encima de la silla impúlsate y sube a la silla. Realiza la repetición las veces que consideres necesario.");      
                        $('.container-descripcion-reto').html("Realiza 10 repeticiones");
                    }
                    if(currentPosition2 == 4){
                        $('.container-nombre').html("PUSH UP");
                        $('.container-descripcion-mensaje').html("Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                    if(currentPosition2 == 2){
                        $('.container-nombre').html("LUNGE");
                        $('.container-descripcion-mensaje').html("Apoya las manos en la cintura, separa un poco las piernas, luego dar un paso hacia adelante procurando que la pierna no se doble más de 90 grados, la pierna de atrás se flexionará hasta casi tocar el suelo. Volver a la posición inicial y realizar el mismo proceso con la otra pierna. Procura que la espalda se mantenga recta para evitar lesiones.");      
                        $('.container-descripcion-reto').html("Realiza 15 repeticiones");
                    }
                }            
            player = 1;
            break;
    }

}

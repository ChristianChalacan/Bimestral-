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

                        alert("El jugador 1 gano el juego");
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
            $('.containerplayer1-mensaje').html("El jugador 1 avanza " + sumdice + " espacios").css("background-color", "rgba(255, 0, 0, 0.7)");
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
            $('.containerplayer2-mensaje').html("El jugador 2 avanza " + sumdice + " espacios");
            player = 1;
            break;
    }
}

function lanzardados() {

    let dice1 = Math.floor(Math.random() * (6 - 1)) + 1;
    let dice2 = Math.floor(Math.random() * (6 - 1)) + 1;
    let sumdice = dice1 + dice2;
    let currentPosition = 0;

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

    currentPosition += sumdice;
    $( '.tablero .celda' )
        .eq( currentPosition )
        .html( $( '.ficha' ) );
}
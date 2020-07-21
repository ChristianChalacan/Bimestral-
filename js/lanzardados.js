function lanzardados() {

    let dado1 = Math.floor(Math.random() * (6 - 1)) + 1;
    let dado2 = Math.floor(Math.random() * (6 - 1)) + 1;
    let suma = dado1 + dado2;

    console.log(dado1 + "-" + dado2);

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

    document.getElementById("ImgDado1").src = "img/dados/" + dado1 + ".png";
    document.getElementById("ImgDado2").src = "img/dados/" + dado2 + ".png";
}
var dataFinal = new Date('April 7, 2022 23:00:00');

promocaoRelogio();

function promocaoRelogio() {
    var dataAtual = new Date();
    var dataLimite = dataFinal - dataAtual;

    var dias = Math.floor(dataLimite / (1000 * 60 * 60 * 24));
    var horas = Math.floor((dataLimite % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((dataLimite % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((dataLimite % (1000 * 60)) / 1000);

    segundos = checarTempo(segundos);

    document.getElementsByClassName("contagem-promo")[0].innerHTML = `${horas} : ${minutos} : ${segundos}`

    setTimeout(promocaoRelogio, 1000);

}

function checarTempo(i) {
    if (i < 10) {
        i = '0' + i
    }
    return i;
}
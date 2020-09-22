

function horario() {
    var hoje = new Date();
    var h = hoje.getHours();
    var m = hoje.getMinutes();
    var s = hoje.getSeconds();

    function checarTempo(i) {
        if (i < 10) {
            i = '0' + i
        }
        return i;
    }
    
    s = checarTempo(s);
    m = checarTempo(m);

    document.getElementById('horas').innerHTML = `${h} : ${m} : ${s}`

    setTimeout(horario, 1000);

}


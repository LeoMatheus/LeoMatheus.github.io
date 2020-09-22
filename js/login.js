
var $ = function (id) {
    return document.getElementById(id);
}


function deixarEmBranco(id, ){
    var idCampo = $(id)
    if (idCampo.value == "") {
        idCampo.placeholder = "Preencha Este campo";
        idCampo.focus();
    }
}
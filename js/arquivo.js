(function () {
    alert("Bem vindo a Peixaria preferida dos guarapuavanos");

    var result = confirm("Você deseja receber ofertas de nós?");

    if (result) {
        prompt("Digite seu email");
    } else {
        alert("Triste :(")
    }
}());

window.onload = function(){
    alert("Promoção especial!!!")
}

var $ = function (id) {
    return document.getElementById(id);
}

function sortearPeixe() {
    var peixes = ["Provavelmente você já ouviu a frase “peixe morre pela boca”. Pois saiba não é bem assim! Os peixes dificilmente comem mais do que o recomendado. Porém, o excesso de alimentos é uma das principais causas de óbito em aquário. ", "Outra frase bastante ouvida é que fulano tem a memória de um peixe dourado. A afirmação vem do mito que o peixe dourado possui a memória com duração de apenas 3 segundos. Essa é uma das maiores curiosidades sobre o peixe dourado. No entanto, estudos apontam que a memória desse peixinho pode durar vários meses", "Pequenos, coloridos e ativos, os guppys são indicados para aquaristas iniciantes. Esse é um dos motivos para a grande popularidade dos lebistes, como também são conhecidos.", "Já reparou como quase toda foto de peixe-palhaço tem uma anêmona de fundo? Esses dois seres vivos possuem uma relação denominada como mutualismo. Ou seja: existe uma relação de benefício entre as duas espécies.", "Falando de peixes e curiosidades, não podemos esquecer do oxigênio. Ele é obtido a partir de trocas gasosas entre a água e a atmosfera. Quanto maior a área de superfície do aquário, maior a disponibilidade de oxigênio. As trocas acontece a partir da superfície da água, necessitando da bomba de ar em alguns casos."];
    $('peixeSorteado').innerHTML = `<p>${peixes[Math.floor(Math.random() * peixes.length)]}</p>`

}

function mudarCor(elemento) {
    elemento.style.backgroundColor = 'rgba(85, 85, 170, 0.267)';
   }

function escolherTodos(n) {


    var x = document.getElementsByName(n);
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].type == "checkbox") {
            x[i].checked = true;

        }
    }

}

function desmarcarTodos(n) {
    var x = document.getElementsByName(n);
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].type == "checkbox") {
            x[i].checked = false;

        }
    }

}


function mostrarNome(n) {
    var x = n

    $('NomePeixe').innerHTML = x;
}
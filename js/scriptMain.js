var campoCaixa = function(index){
    return document.getElementsByClassName('caixa-text')[index];
}

function showTitle(elem){
    elem =campoCaixa(0);
    el.classList.toggle('hidden');
}

campoCaixa(0).addEventListener('mousein', () =>{
    showTitle(this);
});

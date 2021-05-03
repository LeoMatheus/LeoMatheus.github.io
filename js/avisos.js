const pesquisa = document.getElementsByTagName('input');

var invalido = function(){
    alert('operação invalida');
}

var campoSelecionado = function(e){
    return e;
}





function aviso(){
    email = prompt("Se deseja receber ofertas digite seu e-mail");
   
    if(email === null){
        invalido();
       alert("Email nulo");
    } else if(confirm(`${email} é seu email mesmo?`)){
        alert("Email Cadastrado com sucesso");
    } else{
        
        alert("Email não cadastrado");
    }


    
};





pesquisa[0].addEventListener('blur', (e) =>{
    const val = e.target.value;
    const re = /cupom/i;

    if(val.match(re)){
        invalido();
        alert("cupom não pode ser selecionado na barra de pesquisa");
    }

});





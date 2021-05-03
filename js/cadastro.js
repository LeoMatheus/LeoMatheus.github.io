const form = document.getElementById('form');
const username = document.getElementById('usuario');
const email = document.getElementById('email');
const psw = document.getElementById('password');
const psw2 = document.getElementById('password2');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    // ver os valores dos inputs

    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const pswValue = psw.value.trim();
    const psw2Value = psw2.value.trim();

    if(userValue === ''){
        //mostra o erro
        // adiciona a classe erro
        setErrorFor(username, 'Usuario não pode estar vazio');
    } else{
        // add success class
        setSuccesFor(username);
    }

    if(!isEmail(emailValue)){
        setErrorFor(email, 'Email não é valido');
    } else{
        setSuccesFor(email);
    }

    if(pswValue === ''){
        //mostra o erro
        // adiciona a classe erro
        setErrorFor(psw, 'Senha Não pode estar vazia');
    } else{
        // adiciona classe de sucesso
        setSuccesFor(psw);
    }
    if(psw2Value !== pswValue){
        setErrorFor(psw2, 'Senha não é igual');
    } else{
        setSuccesFor(psw2);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //adiciona mensagem de erro dentro do small
    small.innerText = message;

    //adiciona classe de erro
    formControl.className = 'form-control error';
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^[\w\.]+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2,3})?/.test(email);
}
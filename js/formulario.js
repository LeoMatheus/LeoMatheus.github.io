const form = document.forms[0];
const usuario = form.usuario;
const senha = form.psw;



  
   



form.onsubmit = function(e){
    e.preventDefault();
    alert('Login feito com sucesso');
}


usuario.addEventListener('invalid' , (e) =>{
    // console.log(this);
    // this.setCustomValidity(this.ValidityState.t)
    const userValue = usuario.target.trim();

    
});
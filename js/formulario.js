window.onload = function () {

    // function focusUsuario() {
        
    // }

    const login = document.getElementsByClassName('login')[0];
    const psw = document.getElementsByClassName('psw')[0];
    const errTextLogin = document.getElementsByClassName('exigencia')[0];
    const errTextpsw = document.getElementsByClassName('exigencia')[1];

    const form = document.getElementById('form');

    login.addEventListener('blur', () => {

        if (this.length < 6) {
            errTextLogin.innerHTML = `O texto deve ter mais de 6 caracteres.`;
        } 

        

            errTextLogin.classList.toggle('hidden');
    });

    // function password()  {

    //     if (this.keyCode >= 48 && this.keyCode <= 57) {
    //         errTextpsw.innerHTML = `A senha não pode ter numeros`;
    //         console.log(this.key);
    //     }
        
    //         errTextpsw.classList.toggle('hidden');
    // }

}
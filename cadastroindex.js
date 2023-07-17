const form = document.querySelector("#form");
const emailinput = document.querySelector("#email");
const passwordinput = document.querySelector("#password");
const passwordinput2 = document.querySelector("#password2");

form.addEventListener("submit", (event) => {
    // Verificação se o email está preenchido e é válido
    if (emailinput.value === " " || !isEmailValid(emailinput.value)) {
        event.preventDefault();
        alert("Preencha o campo de email ");
        return;
    }
     // Verificação de senha 
    if(!validataPassword(passwordinput.value, 5)){
        alert("A senha presisa no mini 5 digitos ");
        return;
    }

   
     


    //envio do fomulario
    form.subimit();
});

// Validação de email
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    );
    if (emailRegex.test(email)) {

        return true;
    }
        return false;


}

    // validacao de senha 
function validataPassword (Password,minDigits){
    if(Password.length >= minDigits ){
        return true;
    }
        return false;
}
const form  = document.getElementById('form');  // pega o elemento com o id indicado
const campos = document.querySelectorAll('.required');  // pega todos os elementos que tenham a classe indicada
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

form.addEventListener('submit', (event) => {    // adiciona um evento que ao clicar no botão de enviar ele verificará cada campo antes de enviar o formulário e avisará se houver alguma pendência
    event.preventDefault();
    nameValidate();
    emailValidateSignUp();
    emailValidateSignIn();
    passwordValidateSignUp();
    passwordValidateSignIn();
    comparePassword();
})

// função de erro
function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

// função de remover erro
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

// função para validar o nome da página sign up
function nameValidate(){
    if(campos[0].value.length < 3){ // se o tamanho do nome for menor que 3 caracteres da erro
        setError(0);
    }
    else{
        removeError(0); // se não remove o erro
    }
}

// função para validar o email da página sign up
function emailValidateSignUp(){
    if(!emailRegex.test(campos[1].value)){  
        setError(1);
    }
    else{
        removeError(1);
    }
}
// função para validar o email da página sign in
function emailValidateSignIn(){
    if(!emailRegex.test(campos[0].value)){
        setError(0);
    }
    else{
        removeError(0);
    }
}

// função para validar a senha da página sign up
function passwordValidateSignUp(){
    if(campos[2].value.length < 8){
        setError(2);
    }
    else{
        removeError(2);
        comparePassword();
    }
}
// função para validar a senha da página sign in
function passwordValidateSignIn(){
    if(campos[1].value.length < 8){
        setError(1);
    }
    else{
        removeError(1);
    }
}

// função para validar a confirmação da senha da página sign up
function comparePassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8){
        removeError(3);
    }
    else{
        setError(3);
    }
}
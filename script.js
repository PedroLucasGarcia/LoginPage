const form  = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }
    else {
        removeError(0);
    }
}
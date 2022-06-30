//variavel global
var nome = window.document.getElementById("nome");
var email = document.querySelector("#email");
var nomeOk = false;
var emailOk = false;

//variavel local


function validarNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length < 3) {
        txtNome.innerHTML = "nome inválido!";
        txtNome.style.color = 'red';
        nomeOk = false;
    } else {
        txtNome.innerHTML = "nome válido!"
        txtNome.style.color = 'green';
        nomeOk = true;
    }

}

function enviar() {
    if (nomeOk == true)
        alert("preenchido corretamente, enviado!")
    else
        alert('preencha o campo nome corretamente!')
}

// function validarEmail() {
//     let txtEmail = document.querySelector("#txtEmail")
//     if ((email.value.indexOf('@') < 0) && (email.value.indexOf('.') < 0)) {
//         txtEmail.innerHTML = "nome inválido!";
//         txtEmail.style.color = 'red';
//         emailOk = false;
//     } else {
//         txtEmail.innerHTML = "nome válido!"
//         txtEmail.style.color = 'green';
//         emailOk = true;
//     }


// }


function validarEmail() {
    let txtEmail = document.querySelector("#txtemail");
    if ((email.value.indexOf('@') == -1) || (email.value.indexOf('.') == -1)) {
        txtEmail.innerHTML = "email inválido!";
        txtEmail.style.color = 'red';
        nomeOk = false;
    } else {
        txtEmail.innerHTML = "email válido!"
        txtEmail.style.color = 'green';
        nomeOk = true;
    }

}





function enviarEmail() {
    if (emailOk == true)
        alert("preenchido corretamente!")
    else (emailOk == false)
    alert("preenchido incorretamente!")
}
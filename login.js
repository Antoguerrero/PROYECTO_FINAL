const formulario2 = document.getElementById('formulario2');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const boton_regis = document.getElementById('boton_reg');
const passRegex = /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[/@#%&])[A-Za-z0-9/@#%&]{8,}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const llave = document.getElementById('llave');
const ojo = document.getElementById('ojo');

llave.style.color = 'gold';

boton_regis.addEventListener('click',function(){
    window.location.href = "registro.php";
})

function validar(event){

    let enviar = true;
    event.preventDefault();
    
    enviar &= validarCampo(email,error1);
    enviar &= validarCampo(password,error2);
    enviar &= validarRegex(password,passRegex,error2);
    enviar &= validarRegex(email,emailRegex,error1);
    


    if(enviar){
        alert('Formulario enviado');
        formulario2.submit();
        formulario2.reset();
    }
}

function validarCampo(campo, error) {
    if (campo.value.trim() === '') {
        error.textContent = `El campo ${campo.name} no puede estar vacío`;
        error.style.color = 'red';
        campo.style.borderColor = 'red';
        return false;
    } else {
        error.textContent = '';
        campo.style.borderColor = 'green';
        return true;
    }
}

function validarRegex(campo, regex, error) {
    if (!regex.test(campo.value)) {
        error.textContent = 'Campo mal introducido';
        error.style.color = 'red';
        campo.style.borderColor = 'red';
        return false;
    } else {
        error.textContent = '';
        campo.style.borderColor = 'green';
        return true;
    }
}
document.addEventListener("DOMContentLoaded", function () {

    formulario2.addEventListener('submit', validar);

    formulario2.addEventListener('keydown', function (event) {
        if (event.key === "Enter") { // Detecta la tecla Enter
            event.preventDefault(); // Evita el envío automático
            validar(event); // Llama a la función de validación
        }
    });
});


ojo.addEventListener('click',function(){
   const type = password.getAttribute("type") === "password" ? "text" : "password";
   password.setAttribute("type",type);
});
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const primer_apellido = document.getElementById('primer_apellido');
const segundo_apellido = document.getElementById('segundo_apellido');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const ciudad = document.getElementById('ciudad');
const password = document.getElementById('password');
const ojo = document.getElementById('ojo');

const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');
const error5 = document.getElementById('error5');
const error6 = document.getElementById('error6');
const error7 = document.getElementById('error7');

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const telefonoRegex = /^[67]\d{8}$/;
const passRegex = /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[/@#%&])[A-Za-z0-9/@#%&]{8,}$/;

const boton_reservar = document.getElementById('boton_reservar');

ojo.addEventListener('click',function(){
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type",type);
 });

/*formulario.addEventListener('submit',function (event){
    
    event.preventDefault();
    validarCampo(nombre,error1);
    validarCampo(primer_apellido,error2);
    validarCampo(segundo_apellido,error3);
    validarCampo(telefono,error4);
    validarCampo(email,error5);
    validarCampo(ciudad,error6);
    validarPersonas(personas,error7);
    validarRegex(email,emailRegex,error5);
    validarRegex(telefono,telefonoRegex,error4);


    validar();
})*/

function validar(event){

    let enviar = true;
    event.preventDefault();
    enviar &= validarCampo(nombre,error1);
    enviar &= validarCampo(primer_apellido,error2);
    enviar &= validarCampo(segundo_apellido,error3);
    enviar &= validarCampo(telefono,error4);
    enviar &= validarCampo(email,error5);
    enviar &= validarCampo(ciudad,error6);
    enviar &= validarPersonas(password,error7);
    enviar &= validarRegex(password,passRegex,error7);
    enviar &= validarRegex(email,emailRegex,error5);
    enviar &= validarRegex(telefono,telefonoRegex,error4);


    if(enviar){
        alert('Formulario enviado');
        formulario.submit();
        formulario.reset();
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

function validarPersonas(campo,error){
    if ((campo.value.trim() === '')||(campo.value > 5)||(campo.value === '0')) {
        error.textContent = `El campo ${campo.name} no puede ser 0 ni más de 5`;
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

    formulario.addEventListener('submit', validar);

    formulario.addEventListener('keydown', function (event) {
        if (event.key === "Enter") { // Detecta la tecla Enter
            event.preventDefault(); // Evita el envío automático
            validar(event); // Llama a la función de validación
        }
    });
})




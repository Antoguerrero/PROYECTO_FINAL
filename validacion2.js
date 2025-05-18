const formulario3 = document.getElementById('formulario3');
const personas = document.getElementById('personas');
const tipo = document.getElementById('tipo');
const hora = document.getElementById('hora');
const date = document.getElementById('date');


const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');
const error5 = document.getElementById('error5');
const error6 = document.getElementById('error6');
const error7 = document.getElementById('error7');



const boton_reservar = document.getElementById('boton_reservar');



function validar(event) {

    let enviar = true;
    event.preventDefault();
    enviar &= validarPersonas(personas, error7);

    if (enviar) {
        alert('Formulario enviado');
        formulario3.submit();
        formulario3.reset();
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

function validarPersonas(campo, error) {
    if ((campo.value.trim() === '') || (campo.value > 5) || (campo.value === '0')) {
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

    formulario3.addEventListener('submit', validar);

    formulario3.addEventListener('keydown', function (event) {
        if (event.key === "Enter") { // Detecta la tecla Enter
            event.preventDefault(); // Evita el envío automático
            validar(event); // Llama a la función de validación
        }
    });
});






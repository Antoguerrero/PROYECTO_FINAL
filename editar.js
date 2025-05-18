const telefDisplay = document.getElementById('telefDisplay');
const emailDisplay = document.getElementById('emailDisplay');
const emailInput = document.getElementById('emailInput');
const telfInput = document.getElementById('telefonoInput');
const guardarButton = document.getElementById('guardarButton');
const guardarButton2 = document.getElementById('guardarButton2');
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const telefonoRegex = /^[67]\d{8}$/;

const editar = document.getElementById('editar');
const editar2 = document.getElementById('editar2');


editar.addEventListener('click',function(){
    telefDisplay.style.display = 'none';
    telfInput.style.display = 'inline';
    guardarButton.style.display = 'inline';
    editar.style.display = 'none';
});

editar2.addEventListener('click',function(){
    emailDisplay.style.display = 'none';
    emailInput.style.display = 'inline';
    guardarButton2.style.display = 'inline';
    editar2.style.display = 'none';
});

function guardarTelefono() {
    var telefonoNuevo = document.getElementById('telefonoInput').value;

    if (telefonoNuevo === '' || !telefonoRegex.test(telefonoNuevo)) {
        alert('Error al introducir el teléfono');

    }else{
        document.getElementById('telefonoHidden').value = telefonoNuevo;
        document.getElementById('telefonoForm').submit();
    } 
}

function guardarEmail() {
    var emailNuevo = document.getElementById('emailInput').value;

    if (emailNuevo === '' || !emailRegex.test(emailNuevo)) {
        alert('Error al introducir el email');

    }else{
        document.getElementById('emailHidden').value = emailNuevo;
        document.getElementById('emailForm').submit();
    } 
}

guardarButton.addEventListener('click',guardarTelefono);
guardarButton2.addEventListener('click',guardarEmail);




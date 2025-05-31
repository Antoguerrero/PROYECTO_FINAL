const date_sele = document.getElementById('date');

const hora_sele = document.getElementById('hora');
const diez = document.getElementById('10');
const once = document.getElementById('11');
const doce = document.getElementById('12');
const una = document.getElementById('13');
const cinco = document.getElementById('17');
const seis = document.getElementById('18');
const siete = document.getElementById('19');
const ocho = document.getElementById('20');


date_sele.addEventListener("change",function(){
    const fechaSeleccionada = new Date(this.value);
    const diaSemana = fechaSeleccionada.getUTCDay();

    if(diaSemana === 0){
        alert('No se puede reservar para un domingo. Por favor cambia la fecha a otro día.');
        this.value = '';
    }
});

/*hora_sele.addEventListener('click',function(){

})*/
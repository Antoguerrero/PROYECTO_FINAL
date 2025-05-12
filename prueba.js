window.addEventListener("resize", () => {
    location.reload(); // recarga la página para aplicar el nuevo contenido
});
const width = window.innerWidth;
//const boton_inicial = document.getElementById('boton_inicial');
//const form = document.getElementById('form');
//const contenido = document.getElementById('contenido');
if (width <= 760) {
    const boton_inicial = document.getElementById('boton_inicial');
    const form = document.getElementById('form');
    if(boton_inicial){
        boton_inicial.remove();
    }
    
    if(form){
        form.remove();
    }
    const contenido = document.getElementById('contenido');
    if(contenido){
    contenido.innerHTML = `<div class="container2">
      <h1 class="titulo" id="nosotros">
        NOSOTROS
      </h1>
    </div>
    <div class= "descripcion">
        <p>Somos una empresa que nos dedicamos a la realización de escapes rooms.<br>
        <i>¿Y qué es un escape room?</i><br> Muy sencillo, es una experienca/aventura en la que 
        tienes que intentar salir de la habitación o de la sala donde estás encerrado.<br>
        <i>¿Y cómo salgo de esa habitación?</i><br> Investigando y explorando por toda la sala para encontrar objetos clave
        ,llaves, combinaciones que te ayudarán a abrir los diferentes candados y poder ir encontrando
         pistas que irán haciendo que las piezas del puzzle encajen y poder resolver el escape
         room antes del tiempo 
         límete.<br><br>
        Para nuestra versión de escritorio (ordenador) hemos desarrollado una mini experiencia escape room 
        nunca antes vista en una página web, te aconsejamos que si tienes la oportunidad, lo pruebes y te conviertas
        en el mejor detective para resolver el asesinato.<br><br>
        Ahora que ya sabes más sobre nosotros adentraté y conoce nuestros escape rooms, te esperamos.<br>
        <a href="tipos.html">DESCUBRIR</a></p>
    </div>
    `;
    }



} else if (width <= 1024) {

    const boton_inicial = document.getElementById('boton_inicial');
    const form = document.getElementById('form');
    if(boton_inicial){
        boton_inicial.remove();
    }
    if(form){
        form.remove();
    }
    
    const contenido = document.getElementById('contenido');
    if(contenido){
    contenido.innerHTML = `<div class="container2">
      <h1 class="titulo" id="nosotros">
        NOSOTROS
      </h1>
    </div>
    <div class= "descripcion">
        <p>Somos una empresa que nos dedicamos a la realización de escapes rooms.<br>
        <i>¿Y qué es un escape room?</i><br> Muy sencillo, es una experienca/aventura en la que 
        tienes que intentar salir de la habitación o de la sala donde estás encerrado.<br>
        <i>¿Y cómo salgo de esa habitación?</i><br> Investigando y explorando por toda la sala para encontrar objetos clave
        ,llaves, combinaciones que te ayudarán a abrir los diferentes candados y poder ir encontrando
         pistas que irán haciendo que las piezas del puzzle encajen y poder resolver el escape
         room antes del tiempo 
         límete.<br><br>
        Para nuestra versión de escritorio (ordenador) hemos desarrollado una mini experiencia escape room 
        nunca antes vista en una página web, te aconsejamos que si tienes la oportunidad, lo pruebes y te conviertas
        en el mejor detective para resolver el asesinato.<br><br>
        Ahora que ya sabes más sobre nosotros adentraté y conoce nuestros escape rooms, te esperamos.<br>
        <a href="tipos.html">DESCUBRIR</a></p>
    </div>`;
    }


} else {
    const prueba = document.getElementById("prueba");
    const color = document.getElementById("color");
    const pruebaDos = document.getElementById("pruebaDos");
    const luz = document.getElementById("luz");
    const lamp = document.getElementById("lamp");
    const col_6 = document.getElementById("col_6");

    //Columnas de los lados //pistas
    const muerto = document.getElementById("muerto");
    const silueta = document.createElement("div");
    const pista2 = document.createElement("div");
    const pista3 = document.createElement("div");
    const pista4 = document.createElement("div");
    const pista5 = document.createElement("div");
    const pista6 = document.createElement("div");
    const herida = document.createElement("div");
    const col = document.getElementById("col");
    const col2 = document.getElementById("col2");
    const cajon = document.createElement("div");
    const cajon1 = document.createElement("button");
    const cajon2 = document.createElement("button");
    const cajon3 = document.createElement("button");
    const cajon4 = document.createElement("button");
    const back = document.createElement('button');
    back.textContent = 'ATRÁS';
    back.className = 'button';
    back.style.marginTop = "2%";
    const cuaderno = document.createElement("div");
    cuaderno.innerHTML = '<br><h1> CUADERNO </h1><br>';
    const mesa = document.createElement('div');
    const carta_chico = document.createElement('div');
    const clue = document.createElement('p');
    const clue_dos = document.createElement('p');
    const huella_libro = document.createElement('div');
    const nota_amor = document.createElement('div');
    const nota_amor_dos = document.createElement('div');
    const cambiar_clue_dos = document.createElement('p');
    const asesino = document.createElement('p');
    const cuaderno_resolución = document.createElement('div');


    //SVGs PARA EL SALÓN
    const cajones = document.createElement('div');
    const cuadro = document.createElement('div');
    const armario = document.createElement('div');
    const llave = document.createElement('div');
    const libros = document.createElement('div');
    const bolso = document.createElement('div');
    const amenaza = document.createElement('div');
    const carta_pe = document.createElement('div');
    const telefono = document.createElement('div');
    const llave_salir = document.createElement('div');

    //SVGs PARA habitacion secreta
    const fotos = document.createElement('div');
    const nota = document.createElement('div');
    const invitacion = document.createElement('div');
    const caja = document.createElement('div');
    const veneno = document.createElement('div');
    const pintalabios = document.createElement('div');
    const beforeElement = document.createElement("div");

    let tener_llave = false;
    let ver_llave = true;
    let llave_salir_boo = false;
    let bool_resolver = false;
    let modificado = false;

    const nombre_culpable = document.createElement('p');
    const arma = document.createElement('p');
    const motivo = document.createElement('p');

    //Pulsa boton comenzar
    const button = document.getElementById("button");
    const historia = document.getElementById("historia");

    let dar_herida = false;
    let terminado = false;

    let hacer_armario_contador = 0;



    //Comenzar
    button.addEventListener('click', function () {

        historia.innerHTML = `
    <p> Buenas noches.<br> Le contactamos de manera urgente ya que ha habido un asesinato a las 
    afueras de la ciudad y es preciso resolverlo esta misma noche. Por eso acudimos a usted, 
    el mejor detective de la ciudad. 
    <br>
    Todos los sospechosos se encuentran en el lugar del crimen. Allí podrá interrogarlos.<br>
    Su misión es clara: Investigar y adivinar quién mató al Sr.Penny, con qué y por qué. Tiene toda la noche
    para salir de allí con el o los cupables.<br>
    Mucha suerte...estará solo.<br><br>
    <i>"30 minutos más tarde...llega al lugar del crimen, una mansión grande, antigua pero elegante, en medio del
    bosque, la envuelve un silencio abrumador... <br><br>
    Le recibe uno de los criados, le comenta que todos los sospechos están recluidos en la sala de estar.
    El cadaver está intacto en el comedor, donde sucedió todo. Le lleva hasta allí y en la puerta usted le dice:" </i>
    -Vaya a la sala de estar con los demás, hasta que se demuestre lo contrario usted también es sospechoso.-"
    <br><br>
    <i>"Entra en el comedor oscuro y se cierra la puerta, parece que se necesita una llave para salir, está encerrado y 
    por lo que le han comentado los invitados solo estuvieron en el comedor, así que aquí tienen que estar todas las
    respuestas..."</i><br>
    <i> "Lo mejor será que encienda la luz..."</i>
    </p>
    `;
        button.remove();

        luz.addEventListener("mouseenter", function () {
            document.body.style.cursor = "url('./img/lupa2.png') 16 16,auto";
        });
        luz.addEventListener("mouseleave", function () {
            document.body.style.cursor = "auto";
        });

    });
    //Encender la luz
    let encendido = false;
    //Pista cadaver y continuación historia
    prueba.addEventListener('click', function () {

        if (encendido === false) {
            alert('Has encendido la luz del comedor.');
            encendido = true;
            lamp.style.color = "black";
            //color.style.background = "white";
            pruebaDos.style.backgroundColor = "white";
            pruebaDos.style.border = "black solid 1px";


            silueta.style.backgroundImage = "url('./img/silueta2.png')";
            silueta.style.backgroundSize = "cover";
            silueta.style.backgroundPosition = "center";
            silueta.style.width = "100%";
            silueta.style.height = "100%";
            muerto.appendChild(silueta);
            herida.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                            <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
                            </svg>`;

            herida.style.marginTop = '14%';
            herida.style.paddingLeft = '50%';

            pista2.innerHTML = `
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <a class="navbar-brand" id="pruebaTres">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-dead-end-fill" viewBox="0 0 16 16">
        <path d="M5.116 6.28h.32c.395 0 .582.24.582.722 0 .48-.186.718-.581.718h-.321zm3.636.066.268.845h-.552l.27-.845zm1.327-.066h.32c.394 0 .582.24.582.722 0 .48-.186.718-.582.718h-.32zm-.792 3h.32c.395 0 .582.24.582.722 0 .48-.186.718-.581.718h-.32z"/>
        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM4.782 6h.69c.596 0 .886.355.886.998S6.066 8 5.473 8h-.69zM7.82 7.72V8H6.571V6H7.82v.28h-.917v.57h.863v.268h-.863v.602zm.397.28h-.34l.688-2h.371l.689 2h-.352l-.177-.554h-.702L8.216 8Zm1.53-2h.69c.596 0 .886.355.886.998S11.03 8 10.436 8h-.69zm-2.923 4.72V11H5.575V9h1.248v.28h-.917v.57h.863v.268h-.863v.602zm.572.28h-.32V9h.294l.933 1.436h.014V9h.32v2h-.292l-.936-1.44h-.013zm1.56-2h.69c.596 0 .886.355.886.998S10.238 11 9.645 11h-.69z"/>
        </svg>
        </a>
    `;
            pista2.addEventListener('click', function () {
                if (!dar_herida) {
                    historia.innerHTML = '<i>"Aquí hay algo, pero veamos la causa de la muerte primero." </i>';
                }
            })
            //Colocar pista
            pista2.style.paddingLeft = "50%";
            silueta.appendChild(pista2);
            silueta.appendChild(herida);
            herida.addEventListener('click', function () {
                historia.innerHTML = `<i> No tiene heridas físicas, no hay sangre por ningún lado, pero
            está muerto, ¿cúal habrá sido la causa de la muerte entonces?<br> Veamos si hay algo más por aquí`;
                dar_herida = true;
                herida.style.color = 'white';
                if (dar_herida) {
                    agregarEventoCajones("pruebaTres");
                }
            }, { once: true });
            col.style.backgroundImage = "url('img/salon.jpeg')";
            col.style.backgroundPosition = 'center';
            //col.style.background = "rgb(252, 251, 241)";
            col2.style.background = "rgb(252, 251, 241)";


            luz.style.background = "rgb(252, 251, 241)";

            historia.innerHTML = `"¡Ahí está el cadaver! <br> Tendré que inspeccionarlo, a ver si encuentro algo importante."`;


            //Cambiar cursor a lupa
            muerto.addEventListener("mouseenter", function () {
                document.body.style.cursor = "url('./img/lupa.png') 16 16,auto";
            });
            muerto.addEventListener("mouseleave", function () {
                document.body.style.cursor = "auto";
            });

            luz.addEventListener("mouseenter", function () {
                document.body.style.cursor = "default";
            });
            luz.addEventListener("mouseleave", function () {
                document.body.style.cursor = "default";
            });


        } else {
            alert('Has apagado la luz del comedor');
            encendido = false;
            historia.innerHTML = `"Vaya, he apagado la luz de nuevo, así no veré nada.<br>Debería volver a encenderla.`;
            col.style.background = "black";
            col2.style.background = "black";
            luz.style.background = "white";
            lamp.style.color = "white";
            pista2.innerHTML = '';
            silueta.style.backgroundImage = "url('')";
            //Hover lampara
            lamp.addEventListener('mouseover', function () {
                lamp.style.color = 'black';
            })
            lamp.addEventListener('mouseout', function () {
                lamp.style.color = 'white';
            })

            luz.addEventListener("mouseenter", function () {
                document.body.style.cursor = "url('./img/lupa2.png') 16 16,auto";
            });
            luz.addEventListener("mouseleave", function () {
                document.body.style.cursor = "auto";
            });

        }

        let cont = 0;

        function agregarEventoCajones(id) {
            const elemento = document.getElementById(id);
            //Muebles
            elemento.addEventListener('click', function () {
                cont = cont + 1;
                if (cont === 1) {
                    alert('Has encontrado una llave.' + '\n' + 'Esta llave abre un cajón del comedor.');
                    muerto.removeChild(silueta);
                    console.log(cont);
                } else {
                    alert('Voy a volver a comprobar los cajones.');
                }
                /*cajon.style.backgroundImage = "url('./img/cajon.jpeg')";
                cajon.style.backgroundSize = "cover";
                cajon.style.backgroundPosition = "center";
                cajon.style.width = "90%";
                cajon.style.height = "80%";*/
                herida.remove();
                armario.remove();
                llave.remove();
                cuadro.remove();
                muerto.remove();
                pista3.remove();
                pista4.remove();
                pista5.remove();
                pista6.remove();
                muerto.style.backgroundImage = "none";
                col.style.background = "rgb(252, 251, 241)";
                cajon.style.marginLeft = "10%";
                cajon.style.marginTop = "7%";
                col2.style.background = "rgb(252, 251, 241)";
                col2.appendChild(muerto);
                col2.style.padding = '0';
                col2.style.margin = '0';
                cajones.remove();
                col2.style.border = '';
                col.appendChild(cajon);
                cajon.style.border = "solid 4px rgb(124,88,48)";
                cajon.style.height = "50vh";
                cajon.style.width = "20vw";
                //cajon.style.backgroundColor = "rgb(225,163,92)";
                cajon.style.backgroundImage = "url('img/cajon_cerrado.jpeg')";
                cajon.style.borderRadius = "4px";

                //Cajones
                //Cajon 1
                cajon1.style.borderRadius = "4px";
                cajon1.style.border = "solid 3px rgb(124,88,48)";
                cajon1.style.padding = "4";
                cajon1.style.backgroundColor = "rgb(124,88,48)";
                cajon1.style.color = "white";
                cajon1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
                            </svg>`;
                cajon1.style.marginLeft = "2%";
                cajon1.style.marginRight = "2%";
                cajon1.style.marginTop = "10%";
                cajon1.style.marginBottom = "10%";
                cajon1.style.width = "18.5vw";
                cajon1.addEventListener('mouseover', function () {
                    cajon1.style.color = 'rgb(124,88,48)';
                    cajon1.style.backgroundColor = 'white';
                    cajon1.style.border = "solid rgb(124,88,48) 3px";
                    cajon1.style.borderRadius = "4px";
                });
                cajon1.addEventListener('mouseout', function () {
                    cajon1.style.color = 'white';
                    cajon1.style.backgroundColor = 'rgb(124,88,48)';
                    cajon1.style.border = "solid rgb(124,88,48) 3px";
                    cajon1.style.borderRadius = "4px";
                });
                //Cajon 2
                cajon2.style.borderRadius = "4px";
                cajon2.style.border = "solid 3px rgb(124,88,48)";
                cajon2.style.padding = "4";
                cajon2.style.backgroundColor = "rgb(124,88,48)";
                cajon2.style.color = "white";
                cajon2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
                            </svg>`;
                cajon2.style.marginLeft = "2%";
                cajon2.style.marginRight = "2%";
                cajon2.style.marginTop = "10%";
                cajon2.style.marginBottom = "10%";
                cajon2.style.width = "18.5vw";
                cajon2.addEventListener('mouseover', function () {
                    cajon2.style.color = 'rgb(124,88,48)';
                    cajon2.style.backgroundColor = 'white';
                    cajon2.style.border = "solid rgb(124,88,48) 3px";
                    cajon2.style.borderRadius = "4px";
                });
                cajon2.addEventListener('mouseout', function () {
                    cajon2.style.color = 'white';
                    cajon2.style.backgroundColor = 'rgb(124,88,48)';
                    cajon2.style.border = "solid rgb(124,88,48) 3px";
                    cajon2.style.borderRadius = "4px";
                });
                //Cajon 3
                cajon3.style.borderRadius = "4px";
                cajon3.style.border = "solid 3px rgb(124,88,48)";
                cajon3.style.padding = "4";
                cajon3.style.backgroundColor = "rgb(124,88,48)";
                cajon3.style.color = "white";
                cajon3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
                            </svg>`;
                cajon3.style.marginLeft = "2%";
                cajon3.style.marginRight = "2%";
                cajon3.style.marginTop = "10%";
                cajon3.style.marginBottom = "10%";
                cajon3.style.width = "18.5vw";
                cajon3.addEventListener('mouseover', function () {
                    cajon3.style.color = 'rgb(124,88,48)';
                    cajon3.style.backgroundColor = 'white';
                    cajon3.style.border = "solid rgb(124,88,48) 3px";
                    cajon3.style.borderRadius = "4px";
                });
                cajon3.addEventListener('mouseout', function () {
                    cajon3.style.color = 'white';
                    cajon3.style.backgroundColor = 'rgb(124,88,48)';
                    cajon3.style.border = "solid rgb(124,88,48) 3px";
                    cajon3.style.borderRadius = "4px";
                });
                //Cajon 4
                cajon4.style.borderRadius = "4px";
                cajon4.style.border = "solid 3px rgb(124,88,48)";
                cajon4.style.padding = "4";
                cajon4.style.backgroundColor = "rgb(124,88,48)";
                cajon4.style.color = "white";
                cajon4.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
                            </svg>`;
                cajon4.style.marginLeft = "2%";
                cajon4.style.marginRight = "2%";
                cajon4.style.marginTop = "10%";
                cajon4.style.marginBottom = "10%";
                cajon4.style.width = "18.5vw";
                cajon4.addEventListener('mouseover', function () {
                    cajon4.style.color = 'rgb(124,88,48)';
                    cajon4.style.backgroundColor = 'white';
                    cajon4.style.border = "solid rgb(124,88,48) 3px";
                    cajon4.style.borderRadius = "4px";
                });
                cajon4.addEventListener('mouseout', function () {
                    cajon4.style.color = 'white';
                    cajon4.style.backgroundColor = 'rgb(124,88,48)';
                    cajon4.style.border = "solid rgb(124,88,48) 3px";
                    cajon4.style.borderRadius = "4px";
                });


                cajon.appendChild(cajon1);
                cajon.appendChild(cajon2);
                cajon.appendChild(cajon3);
                cajon.appendChild(cajon4);

                historia.innerHTML = `"Una llave...interesante.<br>
            Creo que esto abrirá uno de esos cajones."`;


                if (cajon1.addEventListener('click', function () {
                    cajonUno();
                })) {
                } else if (cajon2.addEventListener('click', function () {
                    restaurarCajon();
                    cajonDos();
                })) {

                } else if (cajon3.addEventListener('click', function () {
                    restaurarCajon();
                    cajonTres();
                })) {

                } else if (cajon4.addEventListener('click', function () {
                    restaurarCajon();
                    cajonCuatro();
                }));

            });
        }

        function restaurarCajon() {
            silueta.style.backgroundImage = "url('')";
        }

        function cajonUno() {
            setTimeout(function () {
                silueta.style.backgroundImage = "url('./img/cajon_cerrado.jpeg')";
                //silueta.style.backgroundSize = "cover";
                silueta.style.backgroundPosition = "center";
                silueta.style.width = "100%";
                silueta.style.height = "100%";
                muerto.appendChild(silueta);
                pista2.innerHTML = '';
                historia.innerHTML = '<i>"Aquí no encaja esta llave."</i>';
            }, 1000);

        }

        function cajonDos() {
            setTimeout(function () {
                silueta.style.backgroundImage = "url('img/cajon_cerrado.jpeg')";
                //silueta.style.backgroundSize = "cover";
                silueta.style.backgroundPosition = "center";
                silueta.style.width = "100%";
                silueta.style.height = "100%";
                muerto.appendChild(silueta);
                pista2.innerHTML = '';
                historia.innerHTML = '<i>"Este cajón tampoco es."</i>';
            }, 1000);
        }
        let click = false;
        let pista_lista_invitados = false;
        let pista_carta_amor = false;

        function cajonTres() {
            setTimeout(function () {
                silueta.style.backgroundImage = "url('./img/cajonabierto.jpg')";
                //silueta.style.backgroundSize = "cover";
                silueta.style.backgroundPosition = "center";
                silueta.style.width = "100%";
                silueta.style.height = "100%";
                muerto.appendChild(silueta);
                pista2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                </svg>`;
                pista2.style.transform = 'scale(4)';
                pista2.style.paddingTop = '38%';
                pista2.style.color = 'white';
                pista2.style.rotate = '11deg';
                historia.innerHTML = '"<i> Parece que este es el correcto </i>"';

                pista2.addEventListener('click', function () {
                    historia.innerHTML = `<i>"Interesante...una lista con el nombre de los invitados.<br>
                Puede que lo anote en mi cuaderno, será muy útil, ya tengo el nombre de los sospechosos."</i><br><br>
                <div id=lista>
                <ol>
                <ul>1.Jhon</ul>
                <ul>3.Ben</ul>
                <ul>5.Samanta</ul>
                <ul>Toni</ul>
                <ul>2.Maite</ul><br>
                Servicio de la noche:<br>
                -Eduardo <br>
                -Emma
                </ol>
                </div>
                <br>
                <br>
                <button id="anotar" class="button" type="submit">ANOTAR</button>
                `;

                    const lista = document.getElementById('lista');
                    lista.style.border = "solid 1px black";
                    const anotar = document.getElementById('anotar');

                    if (pista_lista_invitados) {
                        volver_al_salon2(historia);
                    } else {

                        //guardar en el cuaderno
                        anotar.addEventListener('click', function () {
                            pista_lista_invitados = true;
                            historia.innerHTML = `<i>"A partir de ahora podré ver todo lo que anote en el cuaderno para que no se me olvide."</i><br><br>
                    <button id="ver_cuaderno" class="button" type="submit">VER CUADERNO</button> `;

                            //Ver cuaderno
                            const ver_cuaderno = document.getElementById('ver_cuaderno');
                            ver_cuaderno.addEventListener('click', function () {

                                mostrar_cuaderno2(historia, cuaderno, back);
                            })

                            click = true;
                            if (click) {
                                let listaCopia = lista.cloneNode(true);
                                cuaderno.appendChild(listaCopia);
                                //console.log(cuaderno);
                            }
                        })
                    }
                });



            }, 1000);
        }

        function cajonCuatro() {
            setTimeout(function () {
                silueta.style.backgroundImage = "url('./img/cajonabierto.jpg')";
                //silueta.style.backgroundSize = "cover";
                silueta.style.backgroundPosition = "center";
                silueta.style.width = "100%";
                silueta.style.height = "100%";
                muerto.appendChild(silueta);
                pista2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                </svg>`;
                pista2.style.transform = 'scale(4)';
                pista2.style.paddingTop = '38%';
                pista2.style.color = 'white';
                pista2.style.rotate = '11deg';
                historia.innerHTML = `<i>"Al parecer esta llave abre dos cajones."</i>`;

                pista2.addEventListener('click', function () {

                    historia.innerHTML = `<i>" Una carta...</i><br> <br>
                <div id="nota_amor">
                ' - 1 de marzo 1981 -<br>
                Desde aquel día en que nos conocimos, encajamos como Dos piezas de un puzzle,
                me enamoré perdidamente de ti. Pero desde hace Una semana te noto diferente, algo 
                ha cambiado en ti. Llevo Cinco días dudando sobre si me quieres de verdad o no...
                Y ya no puedo seguir así. Creo que sé lo que pasa. Reúnete conmigo el martes a las Seis
                donde tú ya sabes. He cambiado la combinación, si lees bien, la obtendrás. Nos vemos pronto.
                Te quiero, Penny.
                </div><br>
                <i>Parece que el Sr.Penny tenía un romance con alguno de los invitados, y al parecer hay
                una sala escondida con una clave, pero ¿dónde? Tendré que seguir investigando, al menos ya 
                tengo una pista de lo que puede ser la clave de la puerta, será mejor que lo anote"</i>.<br><br>

                <button id="anotar2" class="button" type="submit">ANOTAR</button> <br><br>

                `;

                    const anotar2 = document.getElementById('anotar2');
                    if (pista_carta_amor) {

                        volver_al_salon2(historia);

                    } else {
                        anotar2.addEventListener('click', function () {

                            pista_carta_amor = true;
                            historia.innerHTML = `<i>" Sigamos con la investigación. Tengo que encontrar esa puerta secreta.
                    " </i><br><br>
                    <button id="ver_cuaderno" class="button" type="button">VER CUADERNO</button> <br><br>
                    <button id="ver_salon" class="button" type="submit">INVESTIGAR SALÓN</button>`;


                            //Ver SALON
                            const ver_salon = document.getElementById('ver_salon');
                            ver_salon.addEventListener('click', function () {
                                volver_al_salon(col, col2);
                            });

                            click = true;

                            if (click) {

                                nota_amor.innerHTML = "<br>Posible combinación puerta habitación secreta: Dos - Una - Cinco - Seis";
                                nota_amor_dos.innerHTML = '<br>- 1 de marzo 1981 -';
                                cuaderno.appendChild(nota_amor);
                                cuaderno.appendChild(nota_amor_dos);
                            }

                            //Ver cuaderno
                            const ver_cuaderno = document.getElementById('ver_cuaderno');
                            ver_cuaderno.addEventListener('click', function () {
                                mostrar_cuaderno(historia, cuaderno, back);
                            });
                        });
                    }

                });


            }, 1000);
        }

        //Para volver al salon
        function volver_al_salon(col, col2) {

            fotos.remove();
            nota.remove();
            invitacion.remove();
            caja.remove();
            historia.innerHTML = '<i>"Veamos que más hay por aquí."</i>';
            col.style.backgroundImage = "url('img/salon.jpeg')";
            col.style.backgroundPosition = 'left';
            col2.style.background = "none";
            col2.style.backgroundImage = "url('img/salon.jpeg')";
            col2.style.backgroundPosition = 'right';
            //col2.style.border = 'solid 2px black';
            col.style.padding = '0';
            col.style.margin = '0';
            col2.style.padding = '0';
            col2.style.padding = '0';
            col.style.display = 'flex';
            col.style.flexWrap = 'wrap';
            col2.style.display = 'flex';
            col2.style.felxWrap = 'wrap';

            col.addEventListener("mouseenter", function () {
                document.body.style.cursor = "url('./img/lupa.png') 16 16,auto";
            });
            col.addEventListener("mouseleave", function () {
                document.body.style.cursor = "auto";
            });
            col2.addEventListener("mouseenter", function () {
                document.body.style.cursor = "url('./img/lupa.png') 16 16,auto";
            });
            col2.addEventListener("mouseleave", function () {
                document.body.style.cursor = "auto";
            });

            //Ver los cajones
            //cajones.style.border = 'solid 2px white';
            cajones.style.width = '2rem';
            cajones.style.height = '2rem';
            cajones.innerHTML = `<svg id ="volver_cajones" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-inboxes-fill" viewBox="0 0 16 16">
            <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z"/>
            </svg>`;
            cajones.style.opacity = '0.5';
            if (click && pista_lista_invitados) {
                cajones.style.opacity = '';
                cajones.style.color = 'white';
            }
            cajones.style.marginLeft = '55%';
            cajones.style.marginTop = '100%';
            cajones.style.paddingTop = '5%';
            col2.appendChild(cajones);
            agregarEventoCajones("volver_cajones");

            //Ver cuadro
            //cuadro.style.border = 'solid 2px red';
            cuadro.style.width = '2rem';
            cuadro.style.height = '2rem';
            cuadro.innerHTML = `<svg id ="ver_cuadro" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image-fill" viewBox="0 0 16 16">
        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
        </svg>`;
            cuadro.style.marginTop = '50%';
            cuadro.style.opacity = '0.5';
            if (carta_amor_dos && carta_amor_tres && carta_amor_cuatro && carta_amor_cinco) {
                cuadro.style.color = 'white';
                cuadro.style.opacity = '';
            }
            col2.appendChild(cuadro);
            agregarEventoCuadro("ver_cuadro");

            //llave para abrir armario
            //llave.style.border = 'solid 2px blue';
            llave.style.width = '2rem';
            llave.style.height = '2rem';
            llave.style.marginTop = '160%';
            llave.style.position = 'relative';
            llave.style.right = '200px';
            llave.style.color = 'rgb(229,229,220)';
            llave.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>`;

            if (ver_llave) {
                col2.appendChild(llave);
            }
            mostrar_llave(col2);


            //Ver cajones dos(armario)
            //armario.style.border = 'solid 2px blue';
            armario.style.width = '2rem';
            armario.style.height = '2rem';
            armario.style.marginLeft = '15%';
            armario.style.marginTop = '110%';
            armario.innerHTML = `<svg id="ver_armario" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-inboxes-fill" viewBox="0 0 16 16">
            <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z"/>
            </svg>`;
            col.appendChild(armario);




            armario.addEventListener('click', function () {
                if (tener_llave) {
                    hacer_armario_contador++;
                    historia.innerHTML = `<i>" He podido abrir los dos cajones con la llave, veamos que hay por aquí."</i>`;
                    col.style.backgroundImage = "url('img/armario2.jpg')";
                    col.style.backgroundPosition = 'center';
                    col2.style.backgroundImage = "url('img/armario2.jpg')";
                    col2.style.backgroundPosition = 'center';

                    armario.remove();
                    cajones.remove();
                    cuadro.remove();
                    if (hacer_armario_contador === 1) {
                        hacer_armario(col, col2);
                    }

                } else {
                    historia.innerHTML = `<i>" Necesito una llave para abrir los cajones
                del armario."</i>`;
                }


            });

            if ((mesa.style.color === 'white') && (carta_chico.style.color === 'white')) {
                armario.style.color = 'white';


            }

            //estanteria de libros
            //libros.style.border = 'solid 2px pink';
            libros.style.width = '2rem';
            libros.style.height = '2rem';
            libros.style.color = 'rgb(103,61,42)';
            libros.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookshelf" viewBox="0 0 16 16">
                            <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5M3 14h10v-3H3zm0-4h10V7H3zm0-4h10V3H3z"/>
                            </svg>`;
            libros.style.marginLeft = '35%';
            libros.style.marginTop = '55%';
            if ((cuadro.style.color === 'white') && (cajones.style.color === 'white') && (armario.style.color === 'white')) {
                historia.innerHTML = `<i>" Parece que al fondo del salón, a la izquierda, hay una estantería, debería 
            ver si hay algo interesante."</i>`;
                col.appendChild(libros);
            }

            libros.addEventListener('click', function () {
                libreria(col, col2);
            });
            if ((veneno.style.color === 'white') && (pintalabios.style.color === 'white')) {
                libros.style.color = 'white';
                historia.innerHTML = `<i>" Creo que me falta algo por investigar..."</i>`;
            }

            //bolso
            //bolso.style.border = 'solid 2px blue';
            bolso.style.width = '2rem';
            bolso.style.height = '2rem';
            bolso.style.marginLeft = '91%';
            bolso.style.marginTop = '-30%';
            bolso.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
                            </svg>`;
            bolso.style.color = 'rgb(241,179,93)';

            if ((libros.style.color === 'white')) {
                col.appendChild(bolso);
            }

            bolso.addEventListener('click', function () {
                bolso_abierto();
            });
            //telefono
            //telefono.style.border = 'solid 2px blue';
            telefono.style.width = '2rem';
            telefono.style.height = '2rem';
            telefono.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>`;
            telefono.style.position = 'relative';
            telefono.style.marginTop = '70%';
            telefono.style.right = '220px';
            //col2.appendChild(telefono);

            if (llave_salir_boo) {
                bolso.style.color = 'white';
                historia.innerHTML = `<i>"Tengo que llamar a Eduardo."`;
                col2.appendChild(telefono);
            }

            //llamar
            telefono.addEventListener('click', function () {
                llamar();
            });
            col_6.style.backgroundImage = 'none';
            col_6.style.color = 'black';
            silueta.remove();
            cajon.remove();
            muerto.remove();
            beforeElement.remove();
            amenaza.remove();
            carta_pe.remove();
            llave_salir.remove();
            col_6.style.backgroundColor = 'white';

        }


        function volver_al_salon2(historia) {
            historia.innerHTML = `<i>"Esta pista ya la he anotado en el cuaderno, debería investigar sobre otras cosas."</i><br><br>
        <button id="ver_salon" class="button" type="submit">INVESTIGAR SALÓN</button>`;
            const ver_salon = document.getElementById('ver_salon');
            ver_salon.addEventListener('click', function () {
                volver_al_salon(col, col2);
            });

        }

        function mostrar_llave(col2) {
            if (ver_llave) {
                col2.appendChild(llave);
                if (!tener_llave && !llave.dataset.eventAdded) {
                    llave.dataset.eventAdded = "true";
                    llave.addEventListener('click', () => {
                        alert('Una llave. La guardaré para cuando haga falta');
                        llave.remove();
                        tener_llave = true;
                        ver_llave = false;
                    }, { once: true });
                }
            }
        }

        function mostrar_cuaderno(historia, book, back) {
            historia.innerHTML = '';
            historia.appendChild(book);
            historia.appendChild(back);


            back.addEventListener('click', function () {
                historia.innerHTML = `<i>" Sigamos con la investigación.
            " </i><br><br>
            <button id="ver_salon" class="button" type="submit">INVESTIGAR SALÓN</button>`;
                const ver_salon = document.getElementById('ver_salon');
                ver_salon.addEventListener('click', function () {
                    volver_al_salon(col, col2);
                });
            });

        }

        function mostrar_cuaderno2(historia, book, back) {
            historia.innerHTML = '';
            historia.appendChild(book);
            historia.appendChild(back);

            back.addEventListener('click', function () {
                historia.innerHTML = `<i>" Sigamos con la investigación. Falta un cajón...
            " </i><br><br>`;
            });
        }


        //Cuadro
        let intentos = 3;
        function agregarEventoCuadro(id) {

            const ver_cuadro = document.getElementById(id);

            ver_cuadro.addEventListener('click', function () {
                col.addEventListener("mouseenter", function () {
                    document.body.style.cursor = "auto";
                });
                col2.addEventListener("mouseenter", function () {
                    document.body.style.cursor = "auto";
                });
                col.style.backgroundImage = '';
                col2.style.backgroundImage = '';
                col2.style.backgroundColor = 'rgb(252, 251, 241)';
                ver_cuadro.remove();
                historia.innerHTML = `<i id=contar>Mmmm un cuadro.</i><br><br>
            <div id="imagen">
                <img src= 'img/cuadro.jpeg' alt="cuadro" id="dis_imagen">
            </div>`;
                const imagen = document.getElementById('imagen');
                const dis_imagen = document.getElementById('dis_imagen');
                const contar = document.getElementById('contar');
                imagen.style.width = '80%';
                imagen.style.height = '50vh';
                imagen.style.backgroundSize = 'cover';
                imagen.style.border = 'solid 2px black';
                dis_imagen.style.width = '100%';
                dis_imagen.style.height = '100%';

                if (llave && llave.parentNode) {
                    llave.remove();
                }

                armario.remove();
                cajones.remove();
                libros.remove();

                dis_imagen.addEventListener("mouseenter", function () {
                    document.body.style.cursor = "url('./img/lupa.png') 16 16,auto";
                });
                dis_imagen.addEventListener("mouseleave", function () {
                    document.body.style.cursor = "auto";
                });
                let contador_imagen = 0;
                dis_imagen.addEventListener('click', function () {
                    contador_imagen++;
                    imagen.style.marginTop = '10%';
                    imagen.style.transform = "rotate(10deg)";
                    contar.textContent = 'Parece que está un poco descolgado... Como si alguien lo hubiera manipulado antes. A ver si puedo descolgarlo del todo. ';
                    if (contador_imagen === 2) {
                        imagen.style.transform = "rotate(-15deg)";
                        setTimeout(function () {
                            imagen.style.transition = 'transform 1s ease';
                            imagen.style.transform = "translateY(200px)";
                            setTimeout(function volver() {
                                imagen.remove();
                                dis_imagen.addEventListener("mouseenter", function () {
                                    document.body.style.cursor = "auto";
                                });
                                historia.innerHTML = `<i>"Lo que suponía, una caja fuerte escondida.<br> Puedo mirar el cuaderno
                            para ver si tengo el código."</i><br><br>
                            <div id ="caja_fuerte">
                             <div id="numeros">
                                <input type ="text" name="number" class="digi" id="number" placeholder="Tienes 3 intentos"><br><br>
                                    <button id="button1" class="button" type="button" onclick ="escribirNumero(1)">1</button>
                                    <button id="button2" class="button" type="button" onclick ="escribirNumero(2)">2</button>
                                    <button id="button3" class="button" type="button" onclick ="escribirNumero(3)">3</button><br><br>
                                    <button id="button4" class="button" type="button" onclick ="escribirNumero(4)">4</button>
                                    <button id="button5" class="button" type="button" onclick ="escribirNumero(5)">5</button>
                                    <button id="button6" class="button" type="button" onclick ="escribirNumero(6)">6</button><br><br>
                                    <button id="button7" class="button" type="button" onclick ="escribirNumero(7)">7</button>
                                    <button id="button8" class="button" type="button" onclick ="escribirNumero(8)">8</button>
                                    <button id="button9" class="button" type="button" onclick ="escribirNumero(9)">9</button><br><br>
                                    <button id="buttonOK" class="button" type="button" onclick ="validar()">✅</button>
                                    <button id="button0" class="button" type="button" onclick ="escribirNumero(0)">0</button>
                                    <button id="buttonB" class="button" type="button" onclick ="eliminar()">⬅️</button>
                                </div>
                            </div><br><br>
                            <button id="ver_cuaderno" class="button" type="button">VER CUADERNO</button> <br><br>
                            <button id="ver_salon" class="button" type="submit">INVESTIGAR SALÓN</button>
                            `;
                                const ver_salon = document.getElementById('ver_salon');
                                ver_salon.addEventListener('click', function () {
                                    volver_al_salon(col, col2);
                                });
                                const ver_cuaderno = document.getElementById('ver_cuaderno');
                                ver_cuaderno.addEventListener('click', function () {
                                    mostrar_cuaderno3(historia, cuaderno, back);
                                });
                                const caja_fuerte = document.getElementById('caja_fuerte');
                                const number = document.getElementById('number');
                                const numeros = document.getElementById('numeros');
                                const button1 = document.getElementById('button1');
                                const button2 = document.getElementById('button2');
                                const button3 = document.getElementById('button3');
                                const button4 = document.getElementById('button4');
                                const button5 = document.getElementById('button5');
                                const button6 = document.getElementById('button6');
                                const button7 = document.getElementById('button7');
                                const button8 = document.getElementById('button8');
                                const button9 = document.getElementById('button9');
                                const button0 = document.getElementById('button0');
                                const buttonOK = document.getElementById('buttonOK');
                                const buttonB = document.getElementById('buttonB');

                                //Dar estilo a la caja fuerte
                                caja_fuerte.style.border = 'solid 3px black';
                                caja_fuerte.style.borderRadius = '4px';
                                caja_fuerte.style.background = 'rgb(52,52,52)';
                                caja_fuerte.style.height = '40vh';
                                caja_fuerte.style.width = '70%';
                                number.style.fontFamily = 'reloj';
                                number.style.margin = '3%';
                                number.style.textAlign = 'right';
                                number.style.border = 'solid 1px black';
                                number.style.marginBottom = '2%';
                                numeros.style.marginTop = '1%';
                                numeros.style.width = '65%';
                                numeros.style.marginLeft = '3%'
                                numeros.style.border = 'solid 2px black';
                                numeros.style.padding = '2%';
                                numeros.style.background = 'rgb(85,85,85)';
                                button1.style.marginRight = '8%';
                                button2.style.marginRight = '8%';
                                button4.style.marginRight = '8%';
                                button5.style.marginRight = '8%';
                                button7.style.marginRight = '8%';
                                button8.style.marginRight = '8%';
                                buttonOK.style.marginRight = '7%';
                                button1.style.marginLeft = '4%';
                                button4.style.marginLeft = '4%';
                                button7.style.marginLeft = '4%';
                                buttonOK.style.marginLeft = '4%';
                                buttonB.style.marginLeft = '4%';
                                //numeros.style.display = 'flex';
                                //numeros.style.flexWrap = 'wrap';

                                function mostrar_cuaderno3(historia, book, back) {
                                    historia.innerHTML = '';
                                    historia.appendChild(book);
                                    historia.appendChild(back);

                                    back.addEventListener('click', function () {
                                        volver();
                                    });
                                }
                            }, 500);
                        }, 1000);
                    }
                })

            })
        }

        window.escribirNumero = function (numero) {
            let input = document.querySelector("#number");
            input.value += numero;
        }
        window.validar = function () {
            let input = document.querySelector("#number");
            if (input.value != 5321) {
                intentos--;
                input.style.borderColor = 'red';
                input.value = '';
                input.placeholder = `Tienes ${intentos} intentos`;
                if (intentos === 0) {
                    input.value = 'BLOQUEADO POR 2 MINUTOS';
                    input.style.borderColor = 'red';
                    let botones = document.querySelectorAll(".button");
                    botones.forEach(btn => btn.disabled = true);
                    setTimeout(() => {
                        botones.forEach(btn => btn.disabled = false);
                        alert('Caja fuerte reseteada. Ya vuelve a funcionar');
                        input.value = '';
                        intentos = 3;
                        input.placeholder = `Tienes ${intentos} intentos`;
                        input.style.borderColor = '';
                    }, 120000);
                }
            } else {
                input.style.borderColor = 'green';
                input.value = 'DESBLOQUEADA';
                cajones.remove();
                cuadro.remove();
                eliminar_pista(clue);
                alert('Se ha borrado una pista del cuaderno que ha sido utilizada.');
                muerto.style.backgroundImage = "url('img/caja_fuerte_abierta.jpg')";
                muerto.style.backgroundPosition = 'center';
                muerto.style.backgroundSize = 'cover';
                muerto.style.backgroundRepeat = 'no-repeat';
                col2.appendChild(muerto);
                const ver_cuaderno = document.getElementById('ver_cuaderno');
                ver_cuaderno.remove();
                historia.textContent = 'Abierta. Vaya, cuantas cartas, veamos que pone.';
                pista3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                </svg>`;
                pista4.innerHTML = `<svg "xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                </svg>`;
                pista5.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                </svg>`;
                pista6.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                </svg>`;
                muerto.appendChild(pista3);
                muerto.appendChild(pista4);
                muerto.appendChild(pista5);
                muerto.appendChild(pista6);
                pista3.id = 'tres';
                pista4.id = 'cuatro';
                pista5.id = 'cinco';
                pista6.id = 'seis';
                pista3.style.marginTop = '80%';
                pista3.style.marginLeft = '40%';
                pista4.style.marginLeft = '35%';
                pista5.style.marginLeft = '55%';
                pista6.style.marginLeft = '50%';

                pista3.addEventListener('click', function () {
                    cartas(pista3);
                });
                pista4.addEventListener('click', function () {
                    cartas(pista4);
                });
                pista5.addEventListener('click', function () {
                    cartas(pista5);
                });
                pista6.addEventListener('click', function () {
                    cartas(pista6);

                });
            }
        }
        window.validar_dos = function () {
            let input = document.querySelector("#number");
            if (input.value != 2156) {
                intentos--;
                input.style.borderColor = 'red';
                input.value = '';
                input.placeholder = `Tienes ${intentos} intentos`;
                if (intentos === 0) {
                    input.value = 'BLOQUEADO POR 2 MINUTOS';
                    input.style.borderColor = 'red';
                    let botones = document.querySelectorAll(".button");
                    botones.forEach(btn => btn.disabled = true);
                    setTimeout(() => {
                        botones.forEach(btn => btn.disabled = false);
                        alert('Caja fuerte reseteada. Ya vuelve a funcionar');
                        input.value = '';
                        intentos = 3;
                        input.placeholder = `Tienes ${intentos} intentos`;
                        input.style.borderColor = '';
                    }, 120000);
                }
            } else {
                input.style.borderColor = 'green';
                input.value = 'DESBLOQUEADA';
                eliminar_pista(nota_amor);
                alert('Se ha borrado una pista del cuaderno que ha sido utilizada.');
                cajones.remove();
                cuadro.remove();
                historia.innerHTML = 'Lo conseguí';
                setTimeout(function () {
                    col_6.style.transition = 'transform 3s ease';
                    col_6.style.transform = "translateY(-700px)";
                    habitacion_secreta();
                }, 1000);


            }
        }
        window.validar_tres = function () {
            let input = document.querySelector("#number");
            if (input.value != 7191) {
                intentos--;
                input.style.borderColor = 'red';
                input.value = '';
                input.placeholder = `Tienes ${intentos} intentos`;
                if (intentos === 0) {
                    input.value = 'BLOQUEADO POR 2 MINUTOS';
                    input.style.borderColor = 'red';
                    let botones = document.querySelectorAll(".button");
                    botones.forEach(btn => btn.disabled = true);
                    setTimeout(() => {
                        botones.forEach(btn => btn.disabled = false);
                        alert('Caja fuerte reseteada. Ya vuelve a funcionar');
                        input.value = '';
                        intentos = 3;
                        input.placeholder = `Tienes ${intentos} intentos`;
                        input.style.borderColor = '';
                    }, 120000);
                }
            } else {
                input.style.borderColor = 'green';
                input.value = 'DESBLOQUEADA';
                caja.remove();
                cajones.remove();
                cuadro.remove();
                llave.remove();
                pista3.remove();
                pista4.remove();
                pista5.remove();
                pista6.remove();
                veneno.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
                                </svg>`;
                veneno.style.transform = 'rotate(180deg)';
                veneno.style.marginTop = '105%';
                veneno.style.marginRight = '50%';
                veneno.style.color = 'black';
                pintalabios.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-highlighter" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z"/>
                                    </svg>`;
                pintalabios.style.transform = 'rotate(180deg)';
                pintalabios.style.marginTop = '60%';
                pintalabios.style.marginRight = '50%';
                pintalabios.style.color = 'black';
                historia.innerHTML = 'Abierta, a ver si hay alguna pista aquí dentro';
                muerto.style.backgroundImage = "url('img/caja_fuerte_abierta.jpg')";
                muerto.style.backgroundPosition = 'center';
                muerto.style.backgroundSize = 'cover';
                muerto.style.backgroundRepeat = 'no-repeat';

                col2.appendChild(muerto);
                muerto.appendChild(veneno);
                muerto.appendChild(pintalabios);

                veneno.addEventListener('click', function () {
                    historia.innerHTML = `<i> " Un bote que pone veneno, con algún resto de
                líquido verde, seguramente esta sea la causa de la muerte
                y por eso el cuerpo no tenía heridas ni restos de sangre."<br><br>
                <div id="imagen_veneno">

                    <img id="foto_veneno" src="img/veneno.png" alt="veneno">

                </div><br><br>
                 <button id="anotar6" class="button" type="submit">ANOTAR</button>`;
                    veneno.style.color = 'white';
                    const imagen_veneno = document.getElementById('imagen_veneno');
                    const foto_veneno = document.getElementById('foto_veneno');
                    imagen_veneno.style.width = '50%';
                    imagen_veneno.style.height = '40%';
                    foto_veneno.style.width = '100%';
                    foto_veneno.style.height = '100%';
                    const anotar6 = document.getElementById('anotar6');
                    anotar6.addEventListener('click', function () {
                        const pista_veneno = document.createElement('p');
                        pista_veneno.innerHTML = 'Posible causa de la muerte: Envenenamiento';
                        cuaderno.appendChild(pista_veneno);
                        alert('Anotado');
                    }, { once: true });
                }, { once: true });

                pintalabios.addEventListener('click', function () {
                    historia.innerHTML = `<i> " El carmín del que he estado siguiedo el rastro anteriormente.<br>
                Pero ni rastro del dinero que decía Penny...alguien lo habrá cogido."<br><br>
                <div id="imagen_pintalabios">

                    <img id="foto_pintalabios" src="img/pintalabios.png" alt="veneno">

                </div><br><br>
                <div id="salon">

                </di>`;
                    const imagen_pintalabios = document.getElementById('imagen_pintalabios');
                    const foto_pintalabios = document.getElementById('foto_pintalabios');
                    const salon = document.getElementById('salon');
                    setTimeout(function () {
                        salon.innerHTML = `<button id="ver_salon" class="button" type="submit">INVESTIGAR SALÓN</button>`;
                        const ver_salon = document.getElementById('ver_salon');
                        ver_salon.addEventListener('click', function () {
                            volver_al_salon(col, col2);
                        });
                    }, 2000);

                    imagen_pintalabios.style.width = '50%';
                    imagen_pintalabios.style.height = '40%';
                    foto_pintalabios.style.width = '30%';
                    foto_pintalabios.style.height = '30%';
                    foto_pintalabios.style.marginLeft = '5%';
                    pintalabios.style.color = 'white';
                });
            }
        }
        window.eliminar = function () {
            let input = document.querySelector("#number");
            input.value = input.value.slice(0, -1);
        }
        let carta_amor_dos = false;
        let carta_amor_tres = false;
        let carta_amor_cuatro = false;
        let carta_amor_cinco = false;

        function cartas(pistaX) {
            if (pistaX.id === 'tres') {
                historia.innerHTML = `<br><br><div id='carta_tres'> ' - 1 de enero 1981 - <br>
            Hola cariño, ya han pasado 6 meses desde que empezó nuestra historia. Estoy muy enamorado de ti, que no
            se te olvide,
            pero tengo que contarte algo. Mi mujer ha caído enferma y los médicos no saben por qué es, cada día
            que pasa está peor así que lo que hablamos de irnos de viaje habrá que postponerlo, tengo que cuidar de ella
            y además creo que sospecha algo, ya me ha hecho unas cuantas preguntas incómodas.<br>
            Vamos a darnos unos días que se relaje el ambiente y se mejore y entonces volveremos a vernos.<br>
            No te enfades por favor, compréndelo, no puedo hacer otra cosa, te quiero.'
            </div>  <br> 
            <button id="anotar" class="button" type="submit">ANOTAR</button>`
                    ;
                const carta_tres = document.getElementById('carta_tres');
                const anotar = document.getElementById('anotar');
                anotar.addEventListener('click', function () {
                    if (carta_amor_tres) {

                        volver_al_salon2(historia);

                    } else {
                        carta_amor_tres = true;
                        carta_tres.innerHTML = ' - 1 de enero 1981 - // Carta donde cuenta que su mujer ha enfermado, se dan un tiempo.';
                        cuaderno.appendChild(carta_tres);
                        alert('Carta anotada');
                        historia.innerHTML = '<i>"Sigamos con la siguiente carta."</i>';
                        anotar.remove();
                        pista3.style.color = "white";
                        //mostrar_cuaderno(historia,cuaderno,back);
                    }
                });


            } else if (pistaX.id === 'cuatro') {
                historia.innerHTML = `<br><br><div id='carta_cuatro'> ' - 9 de febrero 1981 - <br>
            Mi mujer ha muerto.<br>
            Sé que llevamos varias semanas sin vernos y es lo que más ganas tengo de hacer.<br>
            A pesar de todo sigo enamorado de ti como el primer día, ha fallecido mi mujer y solo pienso en que por fin 
            podemos estar juntos sin nadie ni nada que se interponga, somos libres para estar juntos.<br>
            Espero que sigas sintiendo lo mismo que yo.
            <br> Te espero con muchas ganas donde siempre nos veíamos. Te quiero.'
            </div>  <br> 
            <button id="anotar" class="button" type="submit">ANOTAR</button>`
                    ;
                const carta_cuatro = document.getElementById('carta_cuatro')
                const anotar = document.getElementById('anotar');
                anotar.addEventListener('click', function () {
                    if (carta_amor_cuatro) {

                        volver_al_salon2(historia);

                    } else {
                        carta_amor_cuatro = true;
                        carta_cuatro.innerHTML = ' - 9 de febrero 1981 - // Carta donde cuenta que la mujer fallece y quiere un reencuentro.';
                        cuaderno.appendChild(carta_cuatro);
                        alert('Carta anotada');
                        historia.innerHTML = '<i>"Sigamos con la siguiente carta."</i>';
                        anotar.remove();
                        pista4.style.color = "white";
                        //mostrar_cuaderno(historia,cuaderno,back);
                    }
                });

            } else if (pistaX.id === 'cinco') {
                historia.innerHTML = `<br><br><div id='carta_dos'> ' - 7 de julio 1980 - <br>
            Esta es la primera carta que te escribo desde que empezamos lo nuestro hace dos semanas.<br>
            Estoy algo nervioso porque me siento mal por esto que le estoy haciendo a mi mujer pero no sé que me pasa,
            cuando estoy contigo me siento especial, me olvido de todos los problemas de mi vida
            y es por eso que no me arrepiento de nada. Gracias por hacerme sentir así, tengo muchas ganas de volver a verte la semana que
            viene, a ver si se pasan rápido estos días. Quedamos donde nos hemos visto estos anteriores días. Te quiero. <br>
            Penny'.</div>  <br>
            <button id="anotar" class="button" type="submit">ANOTAR</button>`;

                const carta_dos = document.getElementById('carta_dos')
                const anotar = document.getElementById('anotar');
                anotar.addEventListener('click', function () {
                    if (carta_amor_dos) {

                        volver_al_salon2(historia);

                    } else {
                        carta_amor_dos = true;
                        carta_dos.innerHTML = ' - 7 de julio 1980 - // Primera carta de amor a su amante';
                        cuaderno.appendChild(carta_dos);
                        alert('Carta anotada');
                        historia.innerHTML = '<i>"Sigamos con la siguiente carta."</i>';
                        anotar.remove();
                        pista5.style.color = "white";
                        //mostrar_cuaderno(historia,cuaderno,back);
                    }
                })


            } else if (pistaX.id === 'seis') {
                historia.innerHTML = `<br><div id = "carta_cinco"> '
                ¡Deja de enviarme más cartas, mentiroso! No quiero saber
            nada más de ti, iré a aclarar las cosas pero tú y yo hemos terminado, me has hecho mucho daño y
            lo pagarás algún día, te lo prometo.<br>
            Y deja de enviar a tu criado Eduardo a seguirme a todos lados, ¿o es que también tienes una aventura 
            con él y está celoso? Mentiroso, olvidame.'<div> <br>
            <button id="anotar" class="button" type="submit">ANOTAR</button>`;

                const carta_cinco = document.getElementById('carta_cinco')
                const anotar = document.getElementById('anotar');
                anotar.addEventListener('click', function () {
                    if (carta_amor_cinco) {

                        volver_al_salon2(historia);

                    } else {
                        carta_amor_cinco = true;
                        carta_cinco.innerHTML = '-Carta de su amante, deja al Sr.Penny, amenaza // Posible asesino.';
                        cuaderno.appendChild(carta_cinco);
                        alert('Carta anotada');
                        historia.innerHTML = '<i>"Esta era la última. Hay algo que no me cuadra...Seguiré investigando."</i>';
                        anotar.remove();
                        pista6.style.color = "white";
                        alert('Veamos cómo quedo el cuaderno');
                        mostrar_cuaderno(historia, cuaderno, back);
                    }
                })

            }

        }

        /*   function agregarEventoArmario(id) {
       
               const ver_armario = document.getElementById(id);
               if(ver_armario && !ver_armario.dataset.eventAdded){
                   ver_armario.dataset.eventAdded = 'true';
                   ver_armario.addEventListener('click', function () {
                       historia.innerHTML = `<i>" He podido abrir los dos cajones con la llave, veamos que hay por aquí."</i>`;
                       col.style.backgroundImage = "url('img/armario2.jpg')";
                       col.style.backgroundPosition = 'center';
                       col2.style.backgroundImage = "url('img/armario2.jpg')";
                       col2.style.backgroundPosition = 'center';
           
                       armario.remove();
                       cajones.remove();
                       cuadro.remove();
           
                       hacer_armario(col, col2);
                   });
               }
           }*/

        function hacer_armario(col, col2) {

            libros.remove();
            cuadro.remove();
            cajones.remove();
            const crear = document.createElement('div');
            const crear_dos = document.createElement('div');

            if (!crear.dataset.eventAdded && !crear_dos.dataset.eventAdded) {
                crear.dataset.eventAdded = 'true';
                crear_dos.dataset.eventAdded = 'true';


                crear.style.border = '4px solid darkbrown';
                crear_dos.style.border = '4px solid darkbrown';
                crear.style.width = '60%';
                crear.style.height = '78%';
                crear_dos.style.width = '60%';
                crear_dos.style.height = '78%';
                crear.style.marginLeft = '10%';
                crear_dos.style.marginLeft = '10%';
                crear.style.marginTop = '15%';
                crear_dos.style.marginTop = '15%';
                crear.style.borderRadius = '3px';
                crear_dos.style.borderRadius = '3px';
                crear.style.backgroundImage = "url('img/armario.jpg')";
                crear_dos.style.backgroundImage = "url('img/armario.jpg')";
                crear.style.backgroundPosition = 'top';


                mesa.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                </svg>`;
                carta_chico.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                </svg>`;

                mesa.style.marginTop = '40%';
                mesa.style.marginLeft = '30%';
                carta_chico.style.marginTop = '70%';
                carta_chico.style.marginLeft = '30%';

                col.addEventListener("mouseenter", function () {
                    document.body.style.cursor = "url('./img/lupa.png') 16 16,auto";
                });
                col.addEventListener("mouseleave", function () {
                    document.body.style.cursor = "auto";
                });
                col2.addEventListener("mouseenter", function () {
                    document.body.style.cursor = "url('./img/lupa.png') 16 16,auto";
                });
                col2.addEventListener("mouseleave", function () {
                    document.body.style.cursor = "auto";
                });
                col.appendChild(crear);
                col2.appendChild(crear_dos);

                crear.appendChild(mesa);
                crear_dos.appendChild(carta_chico);

                mesa.addEventListener('click', function () {

                    historia.addEventListener("mouseenter", function () {
                        document.body.style.cursor = "url('./img/lupa.png') 16 16,auto";
                    });
                    historia.addEventListener("mouseleave", function () {
                        document.body.style.cursor = "auto";
                    });

                    historia.innerHTML = `"<i> Una imagen...Muestra la mesa del comedor y dónde iría cada invitado
            sentado. Pero ¿por qué unos con numero y otros con el nombre?.¿Y esas flechas?, ¿indicarán un sentido...?</i>"
            <br><br>
            <div id="situados">
            <img id="foto_mesa" src="img/mesa.png" alt="mesa"> 
            </div>`;
                    const situados = document.getElementById('situados');
                    const foto_mesa = document.getElementById('foto_mesa');

                    situados.style.width = '80%';
                    situados.style.height = '60%';
                    foto_mesa.style.width = '100%';
                    foto_mesa.style.height = '100%';
                    foto_mesa.style.objectFit = 'contain';

                    foto_mesa.addEventListener('click', function () {
                        alert('Veamos si pone algo por detrás de la imagen...');
                        historia.innerHTML = `<i>"Aquí pone algo..."</i><br><br>
                                    <div id="situados">
                                     Recordatorio caja fuerte salón : "Seguir las flechas -> _ _ _ _"; 
                                    </div> <br><br>
                                    <button id="anotar_cuaderno" class="button" type="submit">ANOTAR</button>
                                    `;

                        const anotar_cuaderno = document.getElementById('anotar_cuaderno');

                        anotar_cuaderno.addEventListener('click', function () {
                            clue.innerHTML = '<br> Penny -> 5 -> 3 -> 2 -> 1 -> Toni';
                            cuaderno.appendChild(clue);
                            mesa.style.color = 'white';
                            alert('Anotado');
                            if (carta_chico.style.color != 'white') {
                                historia.innerHTML = '<i>"Veamos que hay en el otro."</i>';
                            } else {
                                mostrar_cuaderno(historia, cuaderno, back);
                                crear.remove();
                                crear_dos.remove();

                            }
                        });

                        const situados = document.getElementById('situados');
                        situados.style.border = 'solid 1px black';
                        situados.style.width = '600px';
                        situados.style.height = '350px';
                        situados.style.fontSize = 'smaller';

                    });

                });

                carta_chico.addEventListener('click', function () {
                    historia.innerHTML = `<i>"Una carta..."<i><br>
            
            '-15 de enero 1981-<br>
            Hola Penny.<br>
            Me encantó lo del otro día pero tenemos que ser más cautos, la cena estuvo bien pero no me gusta que 
            nos miré tanto la gente, prefiero ir más despacio, ir a tu casa o tú a la mía y preparar
            algo nosotros juntos, además lo veo más romántico.<br>
            Por cierto ¿cómo va tu mujer?, ¿está mejor?. Deberías estar más tiempo con ella y cuidarla
            al fin y al cabo es la que te ha cuidado cuando tú has estado mal y yo aunque quiera
            estar todo el tiempo del mundo contigo, te voy a esperar.<br>
            Espero con ansiedad tu carta de respuesta. Un beso. T.'<br><br>

            <div id='huella'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-fingerprint" viewBox="0 0 16 16">
            <path d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"/>
            <path d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332q0 .613-.066 1.221A.5.5 0 0 1 6 8.447q.06-.555.06-1.115zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8m-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329"/>
            <path d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334m.3 1.67a.5.5 0 0 1 .449.546 10.7 10.7 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.7 9.7 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"/>
            <path d="M3.902 4.222a5 5 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 4 4 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556m6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705M3.68 5.842a.5.5 0 0 1 .422.568q-.044.289-.044.59c0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.5 6.5 0 0 0 3.058 7q0-.375.054-.736a.5.5 0 0 1 .568-.422m8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.5 10.5 0 0 0 .584-2.678.5.5 0 0 1 .54-.456"/>
            <path d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865m-.89 1.257a.5.5 0 0 1 .04.706A5.48 5.48 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346m12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49"/>
            </svg>
            </div>
            `;

                    const huella = document.getElementById('huella');
                    huella.style.marginLeft = '100.5%';
                    huella.style.marginTop = '20%';
                    huella.style.color = 'red';

                    huella.addEventListener('click', function () {
                        historia.innerHTML = `<i>" Vaya... parece que no fuí el único que encontró esta carta... son restos
                de carmín.<br>
                Este puede ser el móvil del crimen. <br><br>
                <button id="anotar_cuaderno" class="button" type="submit">ANOTAR</button>`;

                        const anotar_cuaderno = document.getElementById('anotar_cuaderno');

                        anotar_cuaderno.addEventListener('click', function () {
                            clue_dos.innerHTML = 'Posible móvil del crimen: engañó a su amante. Hay restos de carmín...Posible asesino.';
                            cuaderno.appendChild(clue_dos);
                            carta_chico.style.color = 'white';
                            alert('Anotado');
                            if (mesa.style.color != 'white') {
                                historia.innerHTML = '<i>"Veamos que hay en el otro."</i>';
                            } else {
                                mostrar_cuaderno(historia, cuaderno, back);
                                historia.addEventListener("mouseenter", function () {
                                    document.body.style.cursor = "auto";
                                });
                                crear.remove();
                                crear_dos.remove();

                            }

                        });
                    });
                });
            }
        }

        function libreria(col, col2) {
            cuadro.remove();
            libros.remove();
            cajones.remove();
            armario.remove();
            llave.remove();
            huella_libro.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fingerprint" viewBox="0 0 16 16">
                                    <path d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"/>
                                    <path d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332q0 .613-.066 1.221A.5.5 0 0 1 6 8.447q.06-.555.06-1.115zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8m-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329"/>
                                    <path d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334m.3 1.67a.5.5 0 0 1 .449.546 10.7 10.7 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.7 9.7 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"/>
                                    <path d="M3.902 4.222a5 5 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 4 4 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556m6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705M3.68 5.842a.5.5 0 0 1 .422.568q-.044.289-.044.59c0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.5 6.5 0 0 0 3.058 7q0-.375.054-.736a.5.5 0 0 1 .568-.422m8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.5 10.5 0 0 0 .584-2.678.5.5 0 0 1 .54-.456"/>
                                    <path d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865m-.89 1.257a.5.5 0 0 1 .04.706A5.48 5.48 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346m12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49"/>
                                </svg>`;
            col.style.backgroundImage = "url('img/estanteria.jpg')";
            col.style.backgroundRepeat = "no-repeat";
            col2.style.backgroundImage = "url('img/estanteria.jpg')";
            col2.style.backgroundRepeat = "no-repeat";
            huella_libro.style.marginTop = '50%';
            huella_libro.style.marginLeft = '10%';
            historia.innerHTML = `<i>" Tiene que haber algo por aquí..."</i> `;
            col.appendChild(huella_libro);

            huella_libro.addEventListener('click', function () {
                historia.innerHTML = `
            <i>" Restos del mismo carmín que había en la carta. Veamos qué dice el libro.<br>
             '¡Claak!'.<br>
             Mmmm...Ha sonado un mecanismo, como si se abriese..."</i>`;
                setTimeout(function () {
                    col.style.transition = 'transform 2s ease';
                    col.style.transform = "translateY(500px)";
                    col2.style.transition = 'transform 2s ease';
                    col2.style.transform = "translateY(500px)";
                    historia.innerHTML = `<i> "¡Está bajando! Aquí está la puerta secreta, necesito un
                                                código para abrirla."</i>`;

                    setTimeout(function () {
                        col.style.backgroundImage = '';
                        col2.style.backgroundImage = '';
                        huella_libro.remove();
                        col.style.transform = "translateY(0)";
                        col2.style.transform = "translateY(0)";
                        col.style.backgroundColor = 'rgb(252, 251, 241)';
                        col2.style.backgroundColor = 'rgb(252, 251, 241)';

                        setTimeout(function codigo() {
                            historia.innerHTML = `<br>
                        <div id ="caja_fuerte">
                         <div id="numeros">
                            <input type ="text" name="number" class="digi" id="number" placeholder="Tienes 3 intentos"><br><br>
                                <button id="button1" class="button" type="button" onclick ="escribirNumero(1)">1</button>
                                <button id="button2" class="button" type="button" onclick ="escribirNumero(2)">2</button>
                                <button id="button3" class="button" type="button" onclick ="escribirNumero(3)">3</button><br><br>
                                <button id="button4" class="button" type="button" onclick ="escribirNumero(4)">4</button>
                                <button id="button5" class="button" type="button" onclick ="escribirNumero(5)">5</button>
                                <button id="button6" class="button" type="button" onclick ="escribirNumero(6)">6</button><br><br>
                                <button id="button7" class="button" type="button" onclick ="escribirNumero(7)">7</button>
                                <button id="button8" class="button" type="button" onclick ="escribirNumero(8)">8</button>
                                <button id="button9" class="button" type="button" onclick ="escribirNumero(9)">9</button><br><br>
                                <button id="buttonOK" class="button" type="button" onclick ="validar_dos()">✅</button>
                                <button id="button0" class="button" type="button" onclick ="escribirNumero(0)">0</button>
                                <button id="buttonB" class="button" type="button" onclick ="eliminar()">⬅️</button>
                            </div>
                        </div><br><br>
                        <button id="ver_cuaderno" class="button" type="button">VER CUADERNO</button> <br><br>
                        `;
                            col_6.style.backgroundColor = 'rgb(192,191,197)';

                            const ver_cuaderno = document.getElementById('ver_cuaderno');
                            ver_cuaderno.addEventListener('click', function () {
                                mostrar_cuaderno3(historia, cuaderno, back);
                            });
                            const caja_fuerte = document.getElementById('caja_fuerte');
                            const number = document.getElementById('number');
                            const numeros = document.getElementById('numeros');
                            const button1 = document.getElementById('button1');
                            const button2 = document.getElementById('button2');
                            const button3 = document.getElementById('button3');
                            const button4 = document.getElementById('button4');
                            const button5 = document.getElementById('button5');
                            const button6 = document.getElementById('button6');
                            const button7 = document.getElementById('button7');
                            const button8 = document.getElementById('button8');
                            const button9 = document.getElementById('button9');
                            const button0 = document.getElementById('button0');
                            const buttonOK = document.getElementById('buttonOK');
                            const buttonB = document.getElementById('buttonB');

                            //Dar estilo a la caja fuerte
                            caja_fuerte.style.border = 'solid 3px black';
                            caja_fuerte.style.borderRadius = '4px';
                            caja_fuerte.style.background = 'rgb(52,52,52)';
                            caja_fuerte.style.height = '40vh';
                            caja_fuerte.style.width = '70%';
                            number.style.fontFamily = 'reloj';
                            number.style.margin = '3%';
                            number.style.textAlign = 'right';
                            number.style.border = 'solid 1px black';
                            number.style.marginBottom = '2%';
                            numeros.style.marginTop = '1%';
                            numeros.style.width = '65%';
                            numeros.style.marginLeft = '3%'
                            numeros.style.border = 'solid 2px black';
                            numeros.style.padding = '2%';
                            numeros.style.background = 'rgb(85,85,85)';
                            button1.style.marginRight = '8%';
                            button2.style.marginRight = '8%';
                            button4.style.marginRight = '8%';
                            button5.style.marginRight = '8%';
                            button7.style.marginRight = '8%';
                            button8.style.marginRight = '8%';
                            buttonOK.style.marginRight = '7%';
                            button1.style.marginLeft = '4%';
                            button4.style.marginLeft = '4%';
                            button7.style.marginLeft = '4%';
                            buttonOK.style.marginLeft = '4%';
                            buttonB.style.marginLeft = '4%';
                            //numeros.style.display = 'flex';
                            //numeros.style.flexWrap = 'wrap';

                            function mostrar_cuaderno3(historia, book, back) {
                                historia.innerHTML = '';
                                historia.appendChild(book);
                                historia.appendChild(back);
                                col_6.style.backgroundColor = 'white';
                                back.addEventListener('click', function () {
                                    codigo();
                                }
                                )
                            }
                        }, 700);
                    }, 2000);
                }, 4000);
            })




        }

        function habitacion_secreta() {
            setTimeout(function () {
                col_6.style.transform = "translateY(0)";
                col_6.style.backgroundImage = "url('img/habitacion_secreta.jpeg')";
                col_6.style.position = 'relative';
                col_6.style.backgroundSize = "150%";
                col_6.style.backgroundRepeat = 'no-repeat';
                col_6.style.backgroundPosition = "-180px center";


                beforeElement.style.position = "absolute";
                beforeElement.style.top = "0";
                beforeElement.style.left = "0";
                beforeElement.style.width = "100%";
                beforeElement.style.height = "100%";
                beforeElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Capa semitransparente
                beforeElement.style.content = '""';
                beforeElement.style.zIndex = "-1";
                col_6.style.position = "relative";
                col_6.appendChild(beforeElement);
                col_6.style.color = "white";
                historia.innerHTML = `<i>" Veamos qué hay aquí dentro..."</i>`;


            }, 3000);

            col.style.backgroundImage = "url('img/habitacion_secreta.jpeg')";
            col2.style.backgroundImage = "url('img/habitacion_secreta.jpeg')";
            col.style.backgroundPosition = 'left';
            col2.style.backgroundPosition = 'right';

            fotos.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
                            </svg>`;

            //fotos.style.border = 'solid 2px red';
            fotos.style.marginTop = '150%';
            fotos.style.marginLeft = '40%';
            fotos.style.width = '2rem';
            fotos.style.height = '2rem';
            col.appendChild(fotos);

            nota.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                        </svg>`;

            //nota.style.border = 'solid 2px red';
            nota.style.marginTop = '148%';
            nota.style.marginLeft = '5%';
            nota.style.width = '2rem';
            nota.style.height = '2rem';
            col.appendChild(nota);


            invitacion.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
        </svg>`;

            //invitacion.style.border = 'solid 2px red';
            invitacion.style.marginTop = '144%';
            invitacion.style.marginLeft = '5%';
            invitacion.style.width = '2rem';
            invitacion.style.height = '2rem';
            col.appendChild(invitacion);

            caja.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-safe" viewBox="0 0 16 16">
        <path d="M1 1.5A1.5 1.5 0 0 1 2.5 0h12A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V13H.5a.5.5 0 0 1 0-1H1V8.5H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1zM2.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5z"/>
        <path d="M13.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M4.828 4.464a.5.5 0 0 1 .708 0l1.09 1.09a3 3 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3 3 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3 3 0 0 1 0-3.476l-1.09-1.09a.5.5 0 0 1 0-.708M6.95 6.586a2 2 0 1 0 2.828 2.828A2 2 0 0 0 6.95 6.586"/>
        </svg>`;

            //caja.style.border = 'solid 2px red';
            caja.style.marginTop = '160%';
            caja.style.marginLeft = '25%';
            caja.style.width = '2rem';
            caja.style.height = '2rem';
            col2.appendChild(caja);


            fotos.addEventListener('click', function () {
                historia.innerHTML = `<i>" Unas fotos...creo que son Penny y ... ¿Samanta? "</i><br><br>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" id = "carrusel">
            <div class="carousel-item active">
                <img src="img/foto1.jpeg" class="d-block w-100" alt="foto1">
            </div>
            <div class="carousel-item">
                <img src="img/foto2.jpg" class="d-block w-100" alt="foto2">
            </div>
            <div class="carousel-item">
                <img src="img/foto3.jpg" class="d-block w-100" alt="foto3">
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
            </div><br><br>
            <p id="comentario">
            </p>`;
                const carrusel = document.getElementById('carrusel');
                carrusel.style.width = '50%';
                carrusel.style.width = '50%';
                carrusel.style.marginLeft = '25%';
                fotos.style.color = 'white';
                const comentario = document.getElementById('comentario');
                setTimeout(function () {
                    comentario.innerHTML = `<i> " Así que la amante de Penny era Samanta.<br>
                Se les ve felices...pero no quita que estuviera engañando a su mujer...<br>
                Algo pasó para que Samanta le mandara esa carta de ruptura tan rotunda.<br>
                Bien, sigamos."</i>`;
                }, 1500);

            }, { once: true });
            nota.addEventListener('click', function () {
                historia.innerHTML = `<i> " Una pequeña nota..."</i><br>
            'Samanta, si alguna vez necesitas ayuda te dejo dinero en la caja fuerte de esta habitación, 
            tú eres la única que sabe de la existencia de esta sala, cuántos momentos hemos pasado
            aquí juntos...La combinación la cambié cuando me dejaste y me devolviste todas las cartas.
            Búscalas, están en el salón, y cuando las tengas la combincaión es el número del día
            en que te envié la carta en orden temporal.<br>
            Aunque pasó lo que pasó siempre te querré y te cuidaré como pueda. Se que algún día
            volverás y verás esto, espero que me perdones.'`;
                nota.style.color = 'white';
            }, { once: true });
            invitacion.addEventListener('click', function () {
                historia.innerHTML = `<i> " La invitación a la cena."</i><br>
            <br>
            - Queridos amigos,<br>
            Os escribo para invitaros a cenar el día 13 de Octubre con motivo de anunciaros
            algo muy importante.<br>
            Vosotros sois mis únicos amigos, algunos ya os conoceis y para los que no, será una gran oportunidad
            para que lo hagais, pasaremos una noche maravillosa.<br>
            El menú de la cena será excepcional, os lo aseguro. Os espero.<br>
            Para: Samanta, Toni, Maite, Ben, Jhon.-<br><br>
            <p id = "anuncio">
            </p>`;
                const anuncio = document.getElementById('anuncio');
                setTimeout(function () {
                    anuncio.innerHTML = `<i>" ¿Qué sería eso tan importante que tenía que decirles? "</i>`;
                }, 3000);
                invitacion.style.color = 'white';
            }, { once: true });
            caja.addEventListener('click', function volver_dos() {
                historia.innerHTML = `
                            <div id ="caja_fuerte">
                             <div id="numeros">
                                <input type ="text" name="number" class="digi" id="number" placeholder="Tienes 3 intentos"><br><br>
                                    <button id="button1" class="button" type="button" onclick ="escribirNumero(1)">1</button>
                                    <button id="button2" class="button" type="button" onclick ="escribirNumero(2)">2</button>
                                    <button id="button3" class="button" type="button" onclick ="escribirNumero(3)">3</button><br><br>
                                    <button id="button4" class="button" type="button" onclick ="escribirNumero(4)">4</button>
                                    <button id="button5" class="button" type="button" onclick ="escribirNumero(5)">5</button>
                                    <button id="button6" class="button" type="button" onclick ="escribirNumero(6)">6</button><br><br>
                                    <button id="button7" class="button" type="button" onclick ="escribirNumero(7)">7</button>
                                    <button id="button8" class="button" type="button" onclick ="escribirNumero(8)">8</button>
                                    <button id="button9" class="button" type="button" onclick ="escribirNumero(9)">9</button><br><br>
                                    <button id="buttonOK" class="button" type="button" onclick ="validar_tres()">✅</button>
                                    <button id="button0" class="button" type="button" onclick ="escribirNumero(0)">0</button>
                                    <button id="buttonB" class="button" type="button" onclick ="eliminar()">⬅️</button>
                                </div>
                            </div><br><br>
                            <button id="ver_cuaderno" class="button" type="button">VER CUADERNO</button> <br><br>
                            
                            `;

                const ver_cuaderno = document.getElementById('ver_cuaderno');
                ver_cuaderno.addEventListener('click', function () {
                    mostrar_cuaderno3(historia, cuaderno, back);
                });
                const caja_fuerte = document.getElementById('caja_fuerte');
                const number = document.getElementById('number');
                const numeros = document.getElementById('numeros');
                const button1 = document.getElementById('button1');
                const button2 = document.getElementById('button2');
                const button3 = document.getElementById('button3');
                const button4 = document.getElementById('button4');
                const button5 = document.getElementById('button5');
                const button6 = document.getElementById('button6');
                const button7 = document.getElementById('button7');
                const button8 = document.getElementById('button8');
                const button9 = document.getElementById('button9');
                const button0 = document.getElementById('button0');
                const buttonOK = document.getElementById('buttonOK');
                const buttonB = document.getElementById('buttonB');

                //Dar estilo a la caja fuerte
                caja_fuerte.style.border = 'solid 3px black';
                caja_fuerte.style.borderRadius = '4px';
                caja_fuerte.style.background = 'rgb(52,52,52)';
                caja_fuerte.style.height = '40vh';
                caja_fuerte.style.width = '70%';
                number.style.fontFamily = 'reloj';
                number.style.margin = '3%';
                number.style.textAlign = 'right';
                number.style.border = 'solid 1px black';
                number.style.marginBottom = '2%';
                numeros.style.marginTop = '1%';
                numeros.style.width = '65%';
                numeros.style.marginLeft = '3%'
                numeros.style.border = 'solid 2px black';
                numeros.style.padding = '2%';
                numeros.style.background = 'rgb(85,85,85)';
                button1.style.marginRight = '8%';
                button2.style.marginRight = '8%';
                button4.style.marginRight = '8%';
                button5.style.marginRight = '8%';
                button7.style.marginRight = '8%';
                button8.style.marginRight = '8%';
                buttonOK.style.marginRight = '7%';
                button1.style.marginLeft = '4%';
                button4.style.marginLeft = '4%';
                button7.style.marginLeft = '4%';
                buttonOK.style.marginLeft = '4%';
                buttonB.style.marginLeft = '4%';
                //numeros.style.display = 'flex';
                //numeros.style.flexWrap = 'wrap';

                function mostrar_cuaderno3(historia, book, back) {
                    historia.innerHTML = '';
                    historia.appendChild(book);
                    historia.appendChild(back);

                    back.addEventListener('click', function () {
                        volver_dos();
                    });
                }
            }, { once: true });
        }

        function bolso_abierto() {

            armario.remove();
            cajones.remove();
            cuadro.remove();
            bolso.remove();
            libros.remove();

            historia.innerHTML = `<i>" No me había dado cuenta, el bolso de Samanta, 
        pero por qué se lo ha dejado aquí...echaré un vistazo."</i>`;
            col.style.backgroundImage = "none";
            col2.style.backgroundImage = "url('img/bolso.jpg')";
            col2.style.backgroundPosition = 'center';
            amenaza.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                            </svg>`;
            //amenaza.style.border = 'solid 2px blue';
            amenaza.style.width = '2rem';
            amenaza.style.height = '2rem';
            amenaza.style.marginLeft = '18%';
            amenaza.style.marginTop = '70%';
            amenaza.style.color = 'white';
            carta_pe.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                            </svg>`;
            //carta_pe.style.border = 'solid 2px blue';
            carta_pe.style.width = '2rem';
            carta_pe.style.height = '2rem';
            carta_pe.style.marginLeft = '2%';
            carta_pe.style.marginTop = '120%';
            carta_pe.style.color = 'white';
            llave_salir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                </svg>`;
            //llave_salir.style.border = 'solid 2px blue';
            llave_salir.style.width = '2rem';
            llave_salir.style.height = '2rem';
            llave_salir.style.marginLeft = '20%';
            llave_salir.style.marginTop = '40%';
            llave_salir.style.color = 'rgb(229,229,220)';
            col2.appendChild(amenaza);
            col2.appendChild(llave_salir);
            col2.appendChild(carta_pe);

            amenaza.addEventListener('click', function () {
                historia.innerHTML = `<i>" Parece un trozo de papel."</i><br><br>
            'Como digas algo, tú serás mi próxima victima, estás en mi punto de mira, lo sé todo.'<br><br>
            <div id="observacion">
            </div>`;
                const observacion = document.getElementById('observacion');
                setTimeout(function () {
                    observacion.innerHTML = `<i>" ¿Alguien amenazó a Samanta? o ¿es que no le dio tiempo a 
                darselo a quien la descubrió? "</i>`;
                }, 2500);
            });
            llave_salir.addEventListener('click', function () {
                historia.innerHTML = `<i>" Una copia de la llave para salir del comedor."</i>`;
                llave_salir_boo = true;
                llave_salir.remove();
            })
            carta_pe.addEventListener('click', function () {
                historia.innerHTML = `<i> " Una carta...¡¿Para Penny!? "</i><br><br>
            'Penny, quería decirte que a pesar de todo el daño que me hiciste,
            mentirme diciendo que cuidabas a tu mujer cuando tenías una aventura con Toni y que
            me dejaste de lado diciéndome que me querías, a pesar de todo eso, yo sí te quiero de verdad y
            hay algo que debes saber porque me preocupa.
            <br>
            El otro día, cuando aclaramos las cosas y nos despedimos, en el camino de vuelta recordé que me dejé
            el carmín en la mesa del comedor y decidí volver a por él aunque tú no estuvieras en casa, ya 
            que conozco a tu personal, y al abrir la puerta del comedor vi a Toni, con el carmín en la mano
            y vi que descubrió nuestra habitación secreta, en la otra mano llevaba un bote con un líquido verde pero no vi
            bien qué era, cerré la puerta y me fui corriendo.<br>
            Te estoy siendo totalmente sincera, por favor, cuando leas esto créeme, ha descubierto nuestra aventura
            y no sé cómo se lo tomará. Habla con él cuando puedas y ten cuidado.'<br><br>
            <div id="observacion">
            </div>`;
                const observacion = document.getElementById('observacion');
                setTimeout(function () {
                    observacion.innerHTML = `<i>" ¿Por qué no llegó a enviarle o a darle esta carta a Penny?,
                ¿será verdad lo que dice?<br>
                A ver si puedo hablar con Eduardo, el criado , creo que tienen un telefono interno para 
                comunicarse con el servicio aquí en el comedor. "</i><br><br>
                <button id="ver_salon" class="button" type="submit">INVESTIGAR SALÓN</button>
                `;
                    const ver_salon = document.getElementById('ver_salon');
                    ver_salon.addEventListener('click', function () {
                        volver_al_salon(col, col2);
                    });
                }, 10000);
            });

        }

        function llamar() {
            historia.innerHTML = `<div id="uno">
                                    <div id='titulo'>
                                        DETECTIVE
                                    </div>
                                    <p id='mensaje_uno'>
                                    </p><br><br>
                                    <p id='mensaje_tres'>
                                    </p><br><br><br><br>
                                    <p id='mensaje_cinco'>
                                    </p><br><br><br><br>
                                    <p id='mensaje_siete'>
                                    </p><br><br>
                                    <p id='mensaje_nueve'>
                                    </p><br><br>
                                    <p id='mensaje_once'>
                                    </p><br><br>
                                </div>
                                <div id="dos">
                                    <div id='titulo2'>
                                        EDUARDO
                                    </div>
                                    <p id='mensaje_dos'>
                                    </p><br><br><br>
                                    <p id='mensaje_cuatro'>
                                    </p><br><br>
                                    <p id='mensaje_seis'>
                                    </p><br><br>
                                    <p id='mensaje_ocho'>
                                    </p><br><br><br><br>
                                    <p id='mensaje_diez'>
                                   </p><br><br>
                                    <p id='mensaje_doce'>
                                   </p><br><br>
                                </div>`;
            const uno = document.getElementById('uno');
            const dos = document.getElementById('dos');
            const titulo = document.getElementById('titulo');
            const titulo2 = document.getElementById('titulo2');

            const mensaje_uno = document.getElementById('mensaje_uno');
            const mensaje_dos = document.getElementById('mensaje_dos');
            const mensaje_tres = document.getElementById('mensaje_tres');
            const mensaje_cuatro = document.getElementById('mensaje_cuatro');
            const mensaje_cinco = document.getElementById('mensaje_cinco');
            const mensaje_seis = document.getElementById('mensaje_seis');
            const mensaje_siete = document.getElementById('mensaje_siete');
            const mensaje_ocho = document.getElementById('mensaje_ocho');
            const mensaje_nueve = document.getElementById('mensaje_nueve');
            const mensaje_diez = document.getElementById('mensaje_diez');
            const mensaje_once = document.getElementById('mensaje_once');
            const mensaje_doce = document.getElementById('mensaje_doce');

            titulo.style.textAlign = 'center';
            titulo2.style.textAlign = 'center';
            historia.style.height = '90vh';
            historia.style.display = 'flex';
            uno.style.height = '100%';
            dos.style.height = '100%';
            uno.style.width = '50%';
            dos.style.width = '50%';
            uno.style.textAlign = 'left';
            dos.style.textAlign = 'right';

            mensaje_uno.innerHTML = '...';
            setTimeout(function () {
                mensaje_uno.innerHTML = `<i>-"Eduardo, ¿me oyes?, ¿estas ahí? Soy el detective. "</i>`;
                setTimeout(function () {
                    mensaje_dos.innerHTML = `<br><br>...`;
                }, 500);

            }, 1000);

            setTimeout(function () {
                mensaje_dos.innerHTML = `<br><br>-'Sí detective dime.'`;
                setTimeout(function () {
                    mensaje_tres.innerHTML = `<br><br>...`;
                }, 500);
            }, 3000);

            setTimeout(function () {
                mensaje_tres.innerHTML = `<i>"-¿Usted había visto antes a Toni?,¿lo conocía?"</i>`;
                setTimeout(function () {
                    mensaje_cuatro.innerHTML = `<br><br>...`;
                }, 500);
            }, 7600);

            setTimeout(function () {
                mensaje_cuatro.innerHTML = `'-Sí señor, bueno empezó a venir a casa cuando enfermó
            la mujer de Penny, la verdad que es un buen hombre, a veces se quedaba cuidando a Rosa cuando
            Penny se tenía que ir a trabajar.'`;
                setTimeout(function () {
                    mensaje_cinco.innerHTML = `...`;
                }, 500);
            }, 12600);

            setTimeout(function () {
                mensaje_cinco.innerHTML = `<i>"-¿La cuidaba?"</i>`;
                setTimeout(function () {
                    mensaje_seis.innerHTML = `...`;
                }, 500);
            }, 16500);

            setTimeout(function () {
                mensaje_seis.innerHTML = `-'Sí señor, Toni es médico y traía medicinas especiales para
            la mujer de Penny.'`;
                setTimeout(function () {
                    mensaje_siete.innerHTML = `...`;
                }, 500);
                mensaje_uno.remove();
                mensaje_dos.remove();
            }, 20000);

            setTimeout(function () {
                mensaje_siete.innerHTML = `-<i>"¿Medicinas especiales?...¿qué tipo de medicinas especiales? `;
                setTimeout(function () {
                    mensaje_ocho.innerHTML = `...`;
                }, 500);

            }, 26000);

            setTimeout(function () {
                mensaje_ocho.innerHTML = `-'Sí señor, sobretodo iba siempre con un tarro con un líquido verde
            pero nunca supe que era exactamente supongo que hierbas especiales.' `;
                setTimeout(function () {
                    mensaje_nueve.innerHTML = `...`;
                }, 500);
            }, 32000);

            setTimeout(function () {
                mensaje_nueve.innerHTML = `-<i>"Jumm, Interesante y ¿le viste hacer algo sospechoso alguna vez?</i>" `;
                setTimeout(function () {
                    mensaje_diez.innerHTML = `...`;
                }, 500);
                mensaje_tres.remove();
                mensaje_cuatro.remove();
            }, 38800);

            setTimeout(function () {
                mensaje_diez.innerHTML = `-'No señor, ya le digo que es un buen hombre. Aunque, bueno ahora que lo dice
            si que fue raro que aquel día que Penny habló con Samanta, cuando se fueron, llevaba dos bolsas pesadas,
            le dije como siempre si le ayudaba a llevarlas al coche y me contestó muy borde que ni las tocara y que me fuera, fue un poco raro
            ,siempre había sido muy amable conmigo salvo ese día.' `;
                setTimeout(function () {
                    mensaje_once.innerHTML = `...`;
                    mensaje_cinco.remove();
                    mensaje_seis.remove();
                }, 500);
            }, 44000);

            setTimeout(function () {
                mensaje_once.innerHTML = `<i>("Podía ser el dinero de la caja fuerte, Samanta no mentía...".)<br>-"Vale muchas
            gracias Eduardo ya mismo termino y todo esto quedará resuelto."`;
                setTimeout(function () {
                    mensaje_doce.innerHTML = `...`;
                }, 500);
                mensaje_siete.remove();
                mensaje_ocho.remove();
                mensaje_nueve.remove();
            }, 50000);

            setTimeout(function () {
                mensaje_doce.innerHTML = `-'Espero haberle servido de ayuda detective.'`;
            }, 56500);

            setTimeout(function resolve() {
                historia.style.display = 'block';
                col_6.style.backgroundColor = 'white';
                eliminar_pista(clue_dos);
                asesino.innerHTML = 'Asesino: Toni.'
                cambiar_clue_dos.innerHTML = `Móvil del crimen: Venganza amorosa.`;
                cuaderno.appendChild(cambiar_clue_dos);
                cuaderno.appendChild(asesino);
                if (!modificado) {
                    alert('Se ha modificado el móvil del crimen en el cuaderno.');
                    modificado = true;
                }
                uno.remove();
                dos.remove();
                historia.innerHTML = `<i>" Al parecer Toni envenenó a la mujer de Penny aprovechando que
            se pusó enferma y así poder tener una relación con Penny, lo que no sabía es que Penny tenía
            una relación con Samanta y ese secreto le costó la vida por engañarle. Usó el mismo veneno que para matar
            a Rosa, la mujer de Penny y ha intentado incriminar a Samanta."</i><br><br>
            <div id="boton_resolver">
            </div>
            `;
                if (!bool_resolver) {
                    alert('Veamos una última vez el cuaderno');
                    mostrar_cuaderno4(historia, cuaderno, back);
                    bool_resolver = true;
                }


                telefono.style.color = 'white';
                const resolver = document.createElement('div');
                const boton_resolver = document.getElementById('boton_resolver');

                if (bool_resolver) {
                    resolver.innerHTML = '<button id="resolver" class="button" type="submit">RESOLVER</button>';
                    boton_resolver.appendChild(resolver);
                    resolver.addEventListener('click', function () {
                        resolver_todo();
                    });
                }


                function mostrar_cuaderno4(historia, book, back) {
                    historia.innerHTML = '';
                    historia.appendChild(book);
                    historia.appendChild(back);

                    back.addEventListener('click', function () {
                        resolve();
                    });
                }

            }, 70000);


        }

        function resolver_todo() {
            alert('Sales del comedor con la copia de la llave y te dirijes a donde están los invitados.');
            cuadro.remove();
            cajones.remove();
            armario.remove();
            libros.remove();
            bolso.remove();
            telefono.remove();
            muerto.remove()
            col.style.backgroundImage = "url('img/sala_espera.jpg')";
            col2.style.backgroundImage = "url('img/sala_espera.jpg')";
            col.style.backgroundPosition = 'left';
            col2.style.backgroundPosition = 'right';
            historia.innerHTML = `<i>" Tras una larga noche de investigación por fin he podido determinar
        quién ha sido, cómo y por qué."</i>
        <br>
        <div id='opciones'><br><br>
        El asesino es:
        <button id="opcion_uno" class="button" type="button" onclick ="escribirNombre('Samanta')" >SAMANTA</button>
        <button id="opcion_dos" class="button" type="button" onclick ="escribirNombre('Toni')">TONI</button>
        <button id="opcion_tres" class="button" type="button" onclick ="escribirNombre('Jhon')">JHON</button>
        <button id="opcion_cuatro" class="button" type="button" onclick ="escribirNombre('Ben')">BEN</button>
        <button id="opcion_cinco" class="button" type="button" onclick ="escribirNombre('Maite')">MAITE</button>
        <button id="opcion_seis" class="button" type="button" onclick ="escribirNombre('Eduardo')">EDUARDO</button>
        <button id="opcion_siete" class="button" type="button" onclick ="escribirNombre('Emma')">EMMA</button>
        </div>
         `;
            const opciones = document.getElementById('opciones');
            opciones.style.display = 'flex';
            opciones.style.gap = '2%';

            window.escribirNombre = function (nombre) {
                nombre_culpable.innerHTML = `El asesino es ${nombre}.<br>`;
                cuaderno_resolución.appendChild(nombre_culpable);
                opciones.innerHTML = ` 
        El arma del crimen es:   
        <button id="opcion_uno" class="button" type="button" onclick ="escribirArma('Veneno')" >VENENO</button>
        <button id="opcion_dos" class="button" type="button" onclick ="escribirArma('Martillo')">MARTILLO</button>
        <button id="opcion_tres" class="button" type="button" onclick ="escribirArma('Cuchillo')">CUCHILLO</button>`;

            }

            window.escribirArma = function (armas) {
                arma.innerHTML = `El arma del crimen ha sido el ${armas}.<br>`;
                cuaderno_resolución.appendChild(arma);
                opciones.innerHTML = `El móvil del crimen es:   
        <button id="opcion_uno" class="button" type="button" onclick ="escribirCausa('Dinero')" >DINERO</button>
        <button id="opcion_dos" class="button" type="button" onclick ="escribirCausa('Amor')">AMOR</button>
        <button id="opcion_tres" class="button" type="button" onclick ="escribirCausa('Envidia')">ENVIDIA</button>`;
            }

            window.escribirCausa = function (causa) {
                motivo.innerHTML = `El móvil del crimen fue el ${causa}`;
                cuaderno_resolución.appendChild(motivo);
                validar_respuesta()
            }

            function validar_respuesta() {
                if ((nombre_culpable.innerHTML !== `El asesino es Toni.<br>`) || (arma.innerHTML !== `El arma del crimen ha sido el Veneno.<br>`) || (motivo.innerHTML !== `El móvil del crimen fue el Amor`)) {
                    alert('Has fallado en la resolución.');
                    alert('Revisaré el cuaderno de nuevo');
                    mostrar_cuaderno5(historia, cuaderno, back);

                } else {
                    alert('¡Enhorabuena lo has completado con éxito!');
                    historia.innerHTML = '';
                    historia.appendChild(cuaderno_resolución);
                    terminado = true;
                    if (terminado) {
                        done();
                    }

                }

                function mostrar_cuaderno5(historia, book, back) {
                    historia.innerHTML = '';
                    historia.appendChild(book);
                    historia.appendChild(back);

                    back.addEventListener('click', function () {
                        resolver_todo();
                    });
                }
            }
        }

        function done() {
            historia.innerHTML = `ENHORABUENA!! Has completado el mini escape room.<br>
        Eperamos que te haya gustado, ahora descubre nuestros diferentes 
        escape rooms : <a href="tipos.html">DESCUBRIR</a> `;
        }

        function eliminar_pista(pista) {
            pista.remove();
        }
    });

}

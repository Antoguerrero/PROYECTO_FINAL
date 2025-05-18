<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ESCAPE ROOM</title>
    <link href="css/estilos.css" rel="stylesheet">
    <link rel="icon" href="./img/interrogacion.ico">
</head>

<body>
    <header>
        <div class="container2 dos" id="luz">
            <h1 class="titulo" id="tipos">
                REGISTRO
            </h1>
        </div>
    </header>
    <main>
        <div class="container2">
            <h4> ÚNETE A LA FAMILIA</h4>
        </div>
        <form action="conexion2.php" method="POST" id="formulario" class="formulario">
            <div class="campo">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre"> 
            <p><sup id="error1"></sup></p><br><br>
            </div>

            <div class="campo">
            <label for="apellido">Primer apellido:</label>
            <input type="text" id="primer_apellido" name="primer_apellido" placeholder="Primer apellido">
            <p><sup id="error2"></sup></p><br><br>
            </div>

            <div class="campo">
            <label for="apellidoDos">Segundo apellido:</label>
            <input type="text" id="segundo_apellido" name="segundo_apellido" placeholder="Segundo apellido">
            <p><sup id="error3"></sup></p><br><br>
            </div>

            <div class="campo">
            <label for="telefono">Número de teléfono:</label>
            <input type="number" id="telefono" name="telefono" placeholder="Número teléfono">
            <p><sup id="error4"></sup></p><br><br>
            </div>

            <div class="campo">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email">
            <p><sup id="error5"></sup></p><br><br>
            </div>

            <div class="campo">
            <label for="ciudad">Ciudad:</label>
            <input type="text" id="ciudad" name="ciudad" placeholder="Ciudad">
            <p><sup id="error6"></sup></p><br><br>
            </div>

            <div class="campo">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="Contraseña"><svg id="ojo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
            <span class="sub">Debe tener al menos 8 caracteres entre ellos: Una mayúscula,un número y un caracter especial.</span><br>
            <p><sup id="error7"></sup></p><br><br>
            </div>

        <div class="campo_dos">
        <input type="checkbox" id="checkbox" required>
        <label for="checkbox">Aceptar términos y condiciones. Al aceptar accedes a unirte a la familia de Escape Room.<br>
        No se está suscribiendo a ninguna suscripción de pago.</label>
        </div><br><br>
        <br>
        <br>

        <div class="campo_tres">
        <button class="button" type="submit" id="boton_unirse" >UNIRSE</button>
        </div>

        </form>
    </main>

    <script src="libs/boostrap/dist/js/bootstrap.min.js"></script>
    <script src="js/registro.js"></script>
    <!--<script src="./js/prueba.js"></script>
    <script src="js/validacion.js"></script>-->
    <!--<script src="js/buscador.js"></script>
    <script src="js/restriccion_hora.js"></script>-->
</body>
</html>
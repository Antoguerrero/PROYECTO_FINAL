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
        <div class="container2" id="luz">
            <h1 class="titulo" id="tipos">
                RESERVAR
            </h1>
        </div>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid" id="color">
                <a class="navbar-brand" href="login.php"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30"
                        fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                        <path
                            d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!--aqui-->
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;"
                        role="tablist">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html#nosotros">NOSOTROS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="tipos.html">TIPOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="reservar.php">RESERVAR</a>
                        </li>
                    </ul>
                    <form class="d-flex" id="form">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"
                            id="pruebaDos">
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <div class="container2">
            <h4> HAZ TU RESERVA AHORA O <a href="login.php">REGISTRATE</a> PARA OBTENER VENTAJAS </h4>
        </div>
        <form action="conexion.php" method="POST" id="formulario" class="formulario">
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
            <label for="ciudad">¿De donde vienes a jugar?:</label>
            <input type="text" id="ciudad" name="ciudad" placeholder="Ciudad">
            <p><sup id="error6"></sup></p><br><br>
            </div>

            <div class="campo">
            <label for="personas">Número de personas:</label>
            <input type="number" id="personas" name="numero_personas" placeholder="0">
            <p><sup id="error7"></sup></p><br><br>
            </div>

            <div class="campo">
            <label for="tipo">Elige el escape room:</label>

        
        
        <select id="tipo" name="tipo" required>
            <option value="1" <?php if ($escape_preseleccionado == '1') echo 'selected'; ?>>ASILO DE ARKHAM</option>
            <option value="2" <?php if ($escape_preseleccionado == '2') echo 'selected'; ?>>EL TESORO DE LOS INCAS</option>
            <option value="3" <?php if ($escape_preseleccionado == '3') echo 'selected'; ?>>JEDIS CONTRA EL IMPERIO</option>
            <option value="4" <?php if ($escape_preseleccionado == '4') echo 'selected'; ?>>SHERLOCK HOLMES Y EL MISTERIO DEL BIG BEN</option>
        </select>
        </div>
        <br>
        <br>

        <div class="campo">
        <label for="hora">A que hora será:</label>
        <select id="hora" name="hora" required>
            <option value="10" id="10">10:00</option>
            <option value="11" id="11">11:00</option>
            <option value="12" id="12">12:00</option>
            <option value="13" id="13">13:00</option>
            <option value="17" id="17">17:00</option>
            <option value="18" id="18">18:00</option>
            <option value="19" id="19">19:00</option>
            <option value="20" id="20">20:00</option>
        </select>
        </div>
        <br><br>

        <div class="campo">
        <label for="fecha">Fecha:</label>
        <input type="date" id="date" name="fecha" required min="<?php echo date('Y-m-d'); ?>">
        <p><sub>(De lunes a sábado)</sub></p>
        </div> 
        <br><br>

        <div class="campo_dos">
        <input type="checkbox" id="checkbox" required>
        <label for="checkbox">Aceptar términos y condiciones.</label>
        </div><br><br>

        <div class="campo_dos">
        <input type="checkbox" id="checkbox_dos" required>
        <label for="checkbox_dos">El pago se realizará en el establecimiento. Via efectivo o tarjeta.</label>
        </div>
        <br>
        <br>

        <div class="campo_tres">
        <button class="button" type="submit" id="boton_reservar" >RESERVAR</button>
        </div>

        </form>
    </main>

    <script src="libs/boostrap/dist/js/bootstrap.min.js"></script>
    <script src="./js/prueba.js"></script>
    <script src="js/validacion.js"></script>
    <script src="js/buscador.js"></script>
    <script src="js/restriccion_hora.js"></script>
</body>
</html>
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
                <a class="navbar-brand" href="familia.php"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" id="persona" class="bi bi-person-badge-fill" viewBox="0 0 20 20">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" />
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
                            <a class="nav-link" aria-current="page" href="index2.html#nosotros">NOSOTROS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="tipos2.html">TIPOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="reservar2.php">RESERVAR</a>
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
        <?php
        $escape_preseleccionado = $_GET['ID_ESCAPE'] ?? '';
        ?>
        <div class="container2">
            <h4> HAZ TU RESERVA AHORA </h4>
        </div>
        <form action="conexion4.php" method="POST" id="formulario3" class="formulario">

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
                <input type="date" id="date" name="fecha" min="<?php echo date('Y-m-d'); ?>" required>
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
                <button class="button" type="submit" id="boton_reservar">RESERVAR</button>
            </div>

        </form>
    </main>

    <script src="libs/boostrap/dist/js/bootstrap.min.js"></script>
    <script src="./js/prueba.js"></script>
    <script src="js/validacion2.js"></script>
    <script src="js/buscador.js"></script>
    <script src="js/restriccion_hora.js"></script>
</body>

</html>
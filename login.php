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
                FAMILIA
            </h1>
        </div>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid" id="color">
                <a  class="navbar-brand"><svg id="llave" xmlns="http://www.w3.org/2000/svg" width="50" height="30"
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
                            <a class="nav-link" aria-current="page" href="reservar.php">RESERVAR</a>
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
            <h4> INICIA SESIÓN O REGISTRATE A LA ESCAPE ROOM FAMILIA </h4>
        </div>
        <form action="conexion3.php" method="POST" id="formulario2" class="formulario2">
            <div class="campo_cuatro">
            <label for="email">Email:</label>
            <?php
                $email_recibido = $_POST['email'] ?? '';
            ?>
            <input type="text" id="email" name="email" placeholder="Email" value="<?php echo htmlspecialchars($email_recibido); ?>"> 
            <p><sup id="error1"></sup></p><br><br>
            </div>

            <div class="campo_cuatro">
            <label for="password">Contraseña: </label>
            <input type="password" id="password" name="password" placeholder="Contraseña *"><svg id="ojo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg><br><br>
            <p><sup id="error2"></sup></p><br><br>
            </div>
            <span class="sub"><sup>*</sup>Debe tener al menos 8 caracteres entre ellos: Una mayúscula,un número y un caracter especial.</span>


        <div class="campo_cuatro">
        <button class="button" type="submit" id="boton_ini" >INICIAR SESIÓN</button>
        </div>
        </form>

        <div class="campo_cuatro">
        <button class="button" type="button" id="boton_reg" >REGISTRATE</button>
        </div>
    </main>

    <script src="libs/boostrap/dist/js/bootstrap.min.js"></script>
    <!--<script src="./js/prueba.js"></script>-->
    <script src="js/buscador.js"></script>
    <!--<script src="js/restriccion_hora.js"></script>-->
    <script src="js/login.js"></script>
</body>
</html>
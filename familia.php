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
                FAMILIA ESCAPE ROOM
            </h1>
        </div>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid" id="color">
                <a class="navbar-brand"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" id="persona" class="bi bi-person-badge-fill" viewBox="0 0 20 20">
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
                            <a class="nav-link" aria-current="page" href="reservar2.php">RESERVAR</a>
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
    <!--Cone base de datos-->
    <?php

    session_start();
    $email = $_SESSION['EMAIL'] ?? 'No disponible';
    $id = $_SESSION['ID_CLIENTE'] ?? 'No disponible';


    $servername = "localhost";
    $username = "ESCAPE"; // Usuario por defecto de XAMPP
    $password = "trabajofinalescaperoom"; // Contraseña vacía por defecto en XAMPP
    $dbname = "ESCAPEROOM"; // Nombre de la base de datos

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }
    $stmt = $conn->prepare("SELECT NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO, EMAIL, TELEFONO, CIUDAD FROM CLIENTES WHERE ID_CLIENTE = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->bind_result($nombre, $apellido1, $apellido2, $email, $telefono, $ciudad);
    $stmt->fetch();
    $nombre_mayus = strtoupper($nombre);
    $stmt->close();

    $conn->close();
    ?>
    <main>
        <div class="container2">
            <h4> BIENVENIDO <?php echo htmlspecialchars($nombre_mayus); ?> </h4>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                    type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">MI PERFIL</button>
            </li>
            <li class="nav-item" role="presentation" id="reservas">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                    type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">MIS RESERVAS</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                tabindex="0">
                <div class="container2">
                    <h1 class="titulo">MI PERFIL</h1>
                </div>
                <div class="historia dos">

                    <p><strong>NOMBRE COMPLETO:</strong> <?php echo htmlspecialchars("$nombre $apellido1 $apellido2"); ?></p>

                    <tr>
                        <th><strong> EMAIL:</strong> <span id="emailDisplay"><?php echo htmlspecialchars($email); ?></span></th>
                        <input type="text" id="emailInput" value="<?php echo htmlspecialchars($email); ?>" style="display: none;" />

                        <th><button id="editar2" class="button" type="button">Editar</button></th>
                        <button id="guardarButton2" class="button" type="button" style="display: none;">Guardar</button>

                        <form id="emailForm" action="actualizarEmail.php" method="POST" style="display: none;">
                        <input type="hidden" name="ID_CLIENTE" value="<?php echo $id; ?>" /> <!-- ID del cliente -->
                        <input type="hidden" name="EMAIL" id="emailHidden" value="" />
                    </form>

                    </tr>
                    <br>
                    <br>
                    <td>
                    <th><strong>TELÉFONO:</strong><span id="telefDisplay"> <?php echo htmlspecialchars($telefono); ?></span></th>
                    <input type="text" id="telefonoInput" value="<?php echo htmlspecialchars($telefono); ?>" style="display: none;" />

                    <th><button id="editar" class="button" type="button">Editar</button></th>
                    <button id="guardarButton" class="button" type="button" style="display: none;">Guardar</button>

                    <form id="telefonoForm" action="actualizarTelefono.php" method="POST" style="display: none;">
                        <input type="hidden" name="ID_CLIENTE" value="<?php echo $id; ?>" /> <!-- ID del cliente -->
                        <input type="hidden" name="TELEFONO" id="telefonoHidden" value="" />
                    </form>
                    </td>
                    <br>
                    <br>
                    <p><strong>CIUDAD:</strong> <?php echo htmlspecialchars($ciudad); ?></p>
                </div>
            </div>
            <!--SECCIÓN mis reservas-->
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="1">
                <div class="container2">
                    <h1 class="titulo">MIS RESERVAS</h1>
                </div>
                <div class="historia" id="tabla">
                    <?php

                    session_start();
                    $email = $_SESSION['EMAIL'] ?? 'No disponible';
                    $id = $_SESSION['ID_CLIENTE'] ?? 'No disponible';


                    $servername = "localhost";
                    $username = "ESCAPE"; // Usuario por defecto de XAMPP
                    $password = "trabajofinalescaperoom"; // Contraseña vacía por defecto en XAMPP
                    $dbname = "ESCAPEROOM"; // Nombre de la base de datos

                    $conn = new mysqli($servername, $username, $password, $dbname);

                    if ($conn->connect_error) {
                        die("Conexión fallida: " . $conn->connect_error);
                    }

                    $stmt2 = $conn->prepare("SELECT * FROM reserva_total INNER JOIN RESERVAS ON reserva_total.ID_RESERVA = RESERVAS.ID_RESERVA INNER JOIN CLIENTES ON RESERVAS.ID_CLIENTE = CLIENTES.ID_CLIENTE
                    WHERE CLIENTES.ID_CLIENTE = ?");
                    $stmt2->bind_param("i", $id);
                    $stmt2->execute();
                    $resultado = $stmt2->get_result();


                    if ($resultado->num_rows > 0) {

                        echo "<div id='tabla'>";
                        echo "<table>";
                        echo "<tr>
                                    <th>ID Reserva</th>
                                    <th>Nombre</th>
                                    <th>Escape Room</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Duración</th>
                                    <th>Número de Personas</th>
                                    <th>Precio por persona</th>
                                    <th>Precio Total</th>
                                  </tr>";

                        while ($fila = $resultado->fetch_assoc()) {
                            echo "<tr>";
                            echo "<td>" . htmlspecialchars($fila['ID_RESERVA']) . "</td>";
                            echo "<td>" . htmlspecialchars($fila['NOMBRE']) . "</td>";
                            echo "<td>" . htmlspecialchars($fila['ESCAPE_ROOM']) . "</td>";
                            echo "<td>" . htmlspecialchars($fila['FECHA']) . "</td>";
                            echo "<td>" . htmlspecialchars($fila['HORA']) . " h" . "</td>";
                            echo "<td>" . htmlspecialchars($fila['DURACION']) . " min" . "</td>";
                            echo "<td>" . htmlspecialchars($fila['NUM_PERSONAS']) . "</td>";
                            echo "<td>" . htmlspecialchars($fila['PRECIO_POR_PERSONA']) . " €" . "</td>";
                            echo "<td>" . htmlspecialchars($fila['PRECIO_TOTAL']) . " €" . "</td>";
                            echo "</tr>";
                        }

                        echo "</table>";
                        echo "</div>";
                    } else {
                        echo "No tiene ninguna reserva.";
                    }

                    $stmt2->close();
                    $conn->close();
                    ?>
                </div>
            </div>
        </div>
    </main>

    <script src="libs/boostrap/dist/js/bootstrap.min.js"></script>
    <!--<script src="./js/prueba.js"></script>-->
    <script src="js/buscador2.js"></script>
    <!--<script src="js/restriccion_hora.js"></script>-->
    <!--<script src="js/login.js"></script>-->
    <script src="js/familia.js"></script>
    <script src="js/editar.js"></script>
</body>

</html>
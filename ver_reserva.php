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
                CONFIRMACION DE TU RESERVA
            </h1>
        </div>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid" id="color">
                <a class="navbar-brand"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30"
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
            <h4> TU RESERVA </h4>
        </div>

        <?php
        session_start(); // Iniciar la sesión antes de usar $_SESSION

        // Datos de conexión a la base de datos
        $servername = "localhost";
        $username = "ESCAPE"; // Usuario por defecto de XAMPP
        $password = "trabajofinalescaperoom"; // Contraseña vacía por defecto en XAMPP
        $dbname = "ESCAPEROOM"; // Nombre de la base de datos

        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verificar conexión
        if ($conn->connect_error) {
            die("Conexión fallida: " . $conn->connect_error);
        }

        if ($_SERVER['REQUEST_METHOD'] === "POST") {

            $id_reserva = $_POST['id'];

            $stmt = $conn->prepare("SELECT * FROM reserva_total WHERE ID_RESERVA = ?");
            $stmt->bind_param("i", $id_reserva);
            $stmt->execute();
            $resultado = $stmt->get_result();


            if ($resultado->num_rows > 0) {

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
            } else {
                echo "No se encontró la reserva.";
            }

            $stmt->close();
        } else {
            echo "ID de reserva no válido.";
        }

        $stmt = $conn->prepare("SELECT CLIENTES.EMAIL FROM RESERVAS INNER JOIN CLIENTES ON RESERVAS.ID_CLIENTE = CLIENTES.ID_CLIENTE WHERE RESERVAS.ID_RESERVA = ?");
        $stmt->bind_param("i", $id_reserva);
        $stmt->execute();
        $result = $stmt->get_result();
        $email_conseguido = $result->fetch_assoc();


        $destinatario = $email_conseguido['EMAIL'];  // Email obtenido de la base de datos
        $asunto = "Confirmación de reserva Escape Room";
        $mensaje = "
                <html>
                    <head>
                        <title>Confirmación de tu reserva</title>
                    </head>
                    <body>
                        <h2>Gracias por reservar con nosotros</h2>
                            <p>Tu reserva ha sido confirmada para el día <strong>$fecha</strong> a las <strong>$hora</strong>.</p>
                            <p>Número de personas: <strong>$numero_personas</strong></p>
                            <p>Escape Room seleccionado: <strong>$nombre_escape</strong></p>
                    </body>
                </html>
";

        // Encabezados para correo en HTML
        $headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: escaperoomtrabajofinal@gmail.com" . "\r\n";

        if (mail($destinatario, $asunto, $mensaje, $headers)) {
            echo "<p class='confir'>Hemos enviado la confirmación de la reserva a " . htmlspecialchars($email_conseguido['EMAIL']) . ".<br> Gracias por confiar en nosotros. Nos vemos pronto en la experiencia. " . "</p>";
        } else {
            echo "<p>Error al enviar el correo.</p>";
        }


        $conn->close();

        ?>

    </main>

    <script src="libs/boostrap/dist/js/bootstrap.min.js"></script>
    <script src="./js/prueba.js"></script>
    <script src="js/buscador.js"></script> 
</body>

</html>
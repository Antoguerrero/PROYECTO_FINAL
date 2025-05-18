<?php
// Inicia la sesión si es necesario
session_start();

$servername = "localhost";
$username = "ESCAPE"; // Usuario por defecto de XAMPP
$password = "trabajofinalescaperoom"; // Contraseña vacía por defecto en XAMPP
$dbname = "ESCAPEROOM"; // Nombre de la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verifica si los datos se han enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtiene los valores enviados desde el formulario
    $id_cliente = $_POST['ID_CLIENTE'];
    $telefono = $_POST['TELEFONO'];



    if (!preg_match("/^[0-9]{9}$/", $telefono)) {
        die("Teléfono no válido.");
    }

    $telefono_int = (int)$telefono;
    
    // Prepara la consulta para actualizar el teléfono
    $stmt = $conn->prepare("UPDATE CLIENTES SET TELEFONO = ? WHERE ID_CLIENTE = ?");
    $stmt->bind_param("ii", $telefono_int, $id_cliente);

    // Ejecuta la consulta
    if ($stmt->execute()) {
        echo "Teléfono actualizado correctamente.";
        // Redirige a una página de éxito o vuelve a cargar la página actual
        header('Location: familia.php'); // O la página que corresponda
    } else {
        echo "Error al actualizar el teléfono: " . $stmt->error;
    }

    // Cierra la conexión
    $stmt->close();
    $conn->close();
}
?>

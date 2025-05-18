<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
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

// Verificar si los datos fueron enviados por POST
if ($_SERVER['REQUEST_METHOD'] === "POST" && isset($_POST['email']) && isset($_POST['password'])) {
    $email = trim($_POST['email']);
    $contra = $_POST['password'];

    // Preparar la consulta SQL para buscar el email
    $stmt = $conn->prepare("SELECT ID_CLIENTE, EMAIL, PASSWORD FROM CLIENTES WHERE EMAIL = ? AND PASSWORD IS NOT NULL");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    // Verificar si el usuario existe
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id_cliente,$email_db, $password_hash);
        $stmt->fetch();

        // Verificar la contraseña ingresada con la almacenada
        if (password_verify($contra, $password_hash)) {
            $_SESSION["EMAIL"] = $email_db; // Guardar email en la sesión
            $_SESSION["ID_CLIENTE"] = $id_cliente;
            header("Location: familia.php");
            exit(); // Importante para evitar que el script continúe
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Usuario no encontrado.";
    }

    $stmt->close();
} else {
    echo "Datos no enviados correctamente.";
}

$conn->close();
?>


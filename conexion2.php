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
if ($_SERVER['REQUEST_METHOD'] === "POST") {

    $nombre = trim($_POST['nombre']);
    $primer_apellido = trim($_POST['primer_apellido']);
    $segundo_apellido = trim($_POST['segundo_apellido']);
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $ciudad = trim($_POST['ciudad']);
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT);


    if (empty($nombre) || empty($primer_apellido) || empty($segundo_apellido) || empty($telefono) || empty($email) || empty($ciudad) || empty($password)) {
        echo "<div id='mensajeError'>Todos los campos son obligatorios.</div>";
        exit;
    }

    $emailRegex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
    $numeroRegex = "/^[0-9]{9}$/";

    // Validar el email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<div class='mensajeError2'>Por favor, ingresa un email válido.</div>";
        exit;
    }
    //Validar telefono
    if (!preg_match("/^[0-9]{9}$/", $telefono)) {
        echo "<div class = 'mensajeError3'> Teléfono NO válido: " . $telefono . "</div>";
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO CLIENTES (NOMBRE,PRIMER_APELLIDO,SEGUNDO_APELLIDO,TELEFONO,EMAIL,CIUDAD,PASSWORD) VALUES (?,?,?,?,?,?,?)");
    $stmt->bind_param("sssisss", $nombre,$primer_apellido,$segundo_apellido,$telefono,$email,$ciudad,$password);
    $stmt->execute();
    $id_cliente = $conn->insert_id;
    $stmt->close();


} else {
    echo "Datos no enviados correctamente.";
}

$conn->close();
?>

<form id="redirectForm" action="login.php" method="POST">
    <input type="hidden" name="email" value="<?php echo $email; ?>">
</form>

<script>
    document.getElementById('redirectForm').submit();
</script>
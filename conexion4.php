<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start(); // Iniciar la sesión antes de usar $_SESSION
$id = $_SESSION['ID_CLIENTE'] ?? 'No disponible';

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

    $numero_personas = $_POST['numero_personas'];
    $tipo = $_POST['tipo'];
    $hora = $_POST['hora'];
    $fecha = date("Y-m-d", strtotime($_POST['fecha']));

    if (empty($numero_personas)) {
        echo "<div id='mensajeError'>Todos los campos son obligatorios.</div>";
        exit;
    }

    
    $stmt = $conn->prepare("INSERT INTO RESERVAS (ID_CLIENTE,ID_ESCAPE,NUM_PERSONAS,FECHA,HORA) VALUES (?,?,?,?,?)");
    $stmt->bind_param("iiisi", $id,$tipo,$numero_personas,$fecha,$hora);
    $stmt->execute();
    $id_reserva = $conn->insert_id;
    $stmt->close();

    $stmt = $conn->prepare("SELECT * FROM reserva_total WHERE ID_RESERVA = ? ");
    $stmt->bind_param("i", $id_reserva);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = $result->fetch_assoc();
    $stmt->close();

} else {
    echo "Datos no enviados correctamente.";
}

$conn->close();
?>
<form id="redirectForm" action="familia.php#reservas" method="POST">
    <input type="hidden" name="id" value="<?php echo $id_reserva; ?>">
</form>

<script>
    document.getElementById('redirectForm').submit();
</script>
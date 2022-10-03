<?php
if($_SERVER['REQUEST_METHOD'] != 'POST') {
    header("Location: index.html");
}
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$tema = $_POST['tema'];
$mensaje = $_POST['mensaje'];

var_dump($nombre);
mail('joaquin.vega@misena.edu.co', "Mensaje web: $tema", $mensaje);
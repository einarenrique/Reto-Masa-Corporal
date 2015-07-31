<?php
session_start();
include ("fung33ker.php");
$funcion=new Funciones();
$conexion=$funcion->conectarse();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$email = $request->email;
@$pass = $request->pass;
if(($email != "")&&($pass != "")){;
  $sql = "SELECT AES_DECRYPT (Password,'$email') FROM usuarios WHERE User = '$email';";
  $tabla=$funcion->busqueda($sql, $conexion);
  if($tabla[0]==$pass){
    $_SESSION["user"] = $email;
    printf("Ok");
  }
  else
  printf("No existe el usuario o la contraseña es incorrecta.");
}
else{
  printf("Error");
}
?>

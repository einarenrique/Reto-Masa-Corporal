<?php
session_start();
include ("fung33ker.php");
$funcion=new Funciones();
$conexion=$funcion->conectarse();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$email = $request->email;
@$pass = $request->pass;
if(($email != "")&&($pass != "")){
  $sql1 = "SELECT User FROM usuarios WHERE User = '$email';";
  $tabla=$funcion->busqueda($sql1, $conexion);
  if($tabla[0]==""){
    $sql="INSERT INTO usuarios values('','$email',AES_ENCRYPT('$pass','$email'))";
    $b = $funcion->ejecutar($sql, $conexion);
    if($b > 0){
      $_SESSION['user'] == $email;
      printf("Ok");
    }
    else printf("Error al agregar a la base de datos.");
  }
  else {
    printf("Ya existe un usuario con ese correo.");
  }

}
else{
  printf("Error");
}
?>

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
  $sql="INSERT INTO usuarios values('','$email',AES_ENCRYPT('$pass','$email'))";
  $b=$funcion->ejecutar($sql, $conexion);
  if($b>0){
    $_SESSION['user'] == $email;
    printf("Ok");
  }
  else
  printf("Error");
}
else{
  printf("Error");
}
?>

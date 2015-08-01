<?php
session_start();
include ("fung33ker.php");
$funcion=new Funciones();
$conexion=$funcion->conectarse();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$peso = $request->peso;
@$altura = $request->altura;
@$imc = $request->imc;
@$id = $request->id;

if(($peso != "")&&($altura != "")&&($imc != "")&& ($id != "")){
    $sql="INSERT INTO medidas values('', '$id', '$altura', '$peso','$imc');";
    $b = $funcion->ejecutar($sql, $conexion);
    if($b > 0){
      printf("Ok");
    }
    else printf("Error al agregar a la base de datos.");
}
else{
  printf("Error");
}
?>

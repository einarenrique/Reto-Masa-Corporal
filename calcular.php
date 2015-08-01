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
$sql1="SELECT * FROM medidas WHERE Id='$id'";
if(($peso != "")&&($altura != "")&&($imc != "")&& ($id != "")){
  $tabla=$funcion->busqueda($sql1, $conexion);
  if($tabla[1] != "$Id"){
    $sql="INSERT INTO medidas values('', '$id', '$altura', '$peso','$imc');";
    $b = $funcion->ejecutar($sql, $conexion);
    if($b > 0){
      printf("Ok");
    }
    else printf("Error al agregar a la base de datos.");
  }
  else{
    $sql="UPDATE medidas SET Altura=$altura, Peso=$peso, BMI=$imc WHERE Persona = '$id';";
    $b = $funcion->ejecutar($sql, $conexion);
    if($b > 0){
      printf("Ok2");
    }
    else printf("Error al agregar a la base de datos. $sql");
  }
}
else{
  printf("Error");
}
?>

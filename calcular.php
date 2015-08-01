<?php
session_start();
include ("fung33ker.php");
$funcion=new Funciones();
$conexion=$funcion->conectarse();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$altura = $request->altura;
@$peso = $request->peso;
@$imc = $request->imc;
@$id = $request->id;
$sql1="SELECT * FROM medidas WHERE Persona ='$id'";
if(($peso != "")&&($altura != "")&&($imc != "")&& ($id != "")){
  $tabla=$funcion->busqueda($sql1, $conexion);
  if($tabla[1] != "$id"){
    $sql="INSERT INTO medidas values('', '$id', '$altura', '$peso','$imc');";
    $b = $funcion->ejecutar($sql, $conexion);
    if($b > 0){
      printf("Ok");
    }
    else printf("Error al agregar a la base de datos.");
  }
  else{
    if($tabla[2] != $altura || $tabla[3] != $peso || $tabla[4] != $imc){
      $sql="UPDATE medidas SET Altura=$altura, Peso=$peso, BMI=$imc WHERE Persona = '$id';";
      $b = $funcion->ejecutar($sql, $conexion);
      if($b > 0){
        printf("Ok2");
      }
      else printf("Error al agregar a la base de datos.");
    }
    else{
      printf("Ok2");
    }
  }
}
else{
  printf("Error");
}
?>

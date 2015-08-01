<?php
session_start();
include ("fung33ker.php");
if($_SESSION["user"] != ""){
  $funcion=new Funciones();
  $conexion=$funcion->conectarse();
  $id=$_SESSION["id"];
  $sql="SELECT Persona, Altura, Peso, BMI FROM medidas WHERE Persona = '$id';";
  $tabla=$funcion->busqueda($sql, $conexion);
  if($tabla[0] == $id){
    printf($id);
    printf("|");
    printf($tabla[1]);
    printf("|");
    printf($tabla[2]);
    printf("|");
    printf($tabla[3]);
  }
  else printf($_SESSION["id"]);
}
else {
  printf("No");
}



?>

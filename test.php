<?php

include ("./fung33ker.php");
printf("1");
$funcion=new Funciones();
printf("2");
$conexion=$funcion->conectarse();
printf("3");
 $sql = "SELECT User FROM usuarios";
  $tabla=$funcion->busqueda($sql, $conexion);
  if($tabla[0]!=""){
    printf($tabla[0]);
  }
  else
  printf("No existe el usuario o la contraseña es incorrecta.");
?>

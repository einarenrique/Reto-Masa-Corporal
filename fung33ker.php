<?php
class Funciones {
    //Funcion para conectarse a uno de los 2 servidores de MySQL
    public function conectarse()
    {
    //SE ESTABLECE LA CONEXION CON EL SERVIDOR MYSQL, SE MANDA COMO PARAMETROS EL NOMBRE DEL SERVIDOR
    // EL NOMBRE DE USUARIO Y LA CONTRASEÑA
        error_reporting(0);
        try{
              $link=mysql_connect("us-cdbr-iron-east-02.cleardb.net","b884bc44b673ed","5e166b98");
              if (!mysql_select_db("heroku_b959f0e1de9d3a7", $link))
              {
                  echo "alert('Error seleccionando a la base de datos');";
                  exit();
              }

        }catch(mysqli_sql_exception $e) {
          echo "alert('No se pudo conectar');";
    }
    //SELECCIONA UNA BASE DE DATOS Y REGRESA UN VALOR DE VERDADERO SI LOGRA USARLO

    return $link;
  }

    //Para modificar y crear nuevos registros
    public function ejecutar($sql,$conexion){
        $n=0;
        $resultado=mysql_query($sql,$conexion);
        $n=mysql_affected_rows($conexion);
        return $n;
    }

    //Hacer una busqueda y regresar un ROW
    public function busqueda($sql,$conexion){
        $resultado=mysql_query($sql,$conexion);
        $row =mysql_fetch_array($resultado);
        return $row;
    }

    //Hacer una busqueda y regresa el resultado total
    public function busqueda2($sql,$conexion){
        $resultado=mysql_query($sql,$conexion);
        return $resultado;
    }

   //Regresa datos para un Select
   public function existe($sql,$conexion){
        $resultado=mysql_query($sql,$conexion);
        $row =mysql_fetch_array($resultado);
        return $row;
       if($row!=""){
           return true;
       }
 else {
           return false;
       }
   }
}
?>

<?php
class Funciones {

    //Funcion para conectarse a uno de los 2 servidores de MySQL
    public function conectarse()
    {
    //SE ESTABLECE LA CONEXION CON EL SERVIDOR MYSQL, SE MANDA COMO PARAMETROS EL NOMBRE DEL SERVIDOR
    // EL NOMBRE DE USUARIO Y LA CONTRASEÑA
        error_reporting(0);
        $serv1 = fsockopen("127.0.0.1", 80, $errno, $errstr, 1);

        try{
            if(!$serv1){
                if(!$serv2){
                    echo "Los servidores de base de datos se encuentran caidos<br>";
                }
                else{
                    $link=mysql_connect("localhost","root","1");
                    fclose($serv2);
                }
            }
            else{
                $link=mysql_connect("localhost","root","root");
                fclose($serv1);
            }
        }catch(mysqli_sql_exception $e) {
    }
    //SELECCIONA UNA BASE DE DATOS Y REGRESA UN VALOR DE VERDADERO SI LOGRA USARLO
    if (!mysql_select_db("bodymass",$link))
    {
        echo "Error seleccionando a la base de datos";
        exit();
    }
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
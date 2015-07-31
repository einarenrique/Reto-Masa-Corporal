<?php
class Funciones {
    //Funcion para conectarse a uno de los 2 servidores de MySQL
    public function conectarse()
    {
    //SE ESTABLECE LA CONEXION CON EL SERVIDOR MYSQL, SE MANDA COMO PARAMETROS EL NOMBRE DEL SERVIDOR
    // EL NOMBRE DE USUARIO Y LA CONTRASEÑA
        try{
          $conexion = mysqli_connect("us-cdbr-iron-east-02.cleardb.net","b884bc44b673ed","5e166b98", "heroku_b959f0e1de9d3a7");
        }catch(mysqli_sql_exception $e) {
          printf("alert('No se pudo conectar');");
    }
    //SELECCIONA UNA BASE DE DATOS Y REGRESA UN VALOR DE VERDADERO SI LOGRA USARLO

    return $conexion;
  }

    //Para modificar y crear nuevos registros
    public function ejecutar($sql,$conexion){
        $n=0;
        $resultado = mysqli_query($conexion, $sql);
        $n= mysqli_num_rows($resultado);
        return $n;
    }

    //Hacer una busqueda y regresar un ROW
    public function busqueda($sql,$conexion){
        $resultado=mysqli_query($conexion, $sql);
        $row =mysqli_fetch_array($resultado);
        return $row;
    }
}
?>

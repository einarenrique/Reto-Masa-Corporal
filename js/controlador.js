angular.module("MiApp",[])
.controller("Controlador", function($scope, $http){
  $scope.Id = "";
  $scope.altura = "";
  $scope.peso = "";
  $scope.IMC = "";
  $scope.resultado = "";
  var request = $http({
    method: "post",
    url: "/sesion.php",
    data: {},
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  request.success(function (data) {
    if(data == "No"){
      window.alert("Debe iniciar sesión primero");
      location.href="/index.html#IniciarSesion";
    }
    else {
      arreglo = data.split('|');
      $scope.Id = arreglo[0];
      if(arreglo.length > 1){
        $scope.altura = arreglo[1];
        $scope.peso = arreglo[2];
        $scope.IMC = arreglo[3];
        $scope.TextoIMC();
      }
    }
  });

  $scope.calcular = function()
  {
    $scope.resultado = "";
    $scope.IMC = "";
    if($scope.altura == ""){
      Materialize.toast('Por favor, introduce tu altura.', 4000);
    }
    else if(isNaN($scope.altura)){
      Materialize.toast('Debe introducir un número en su altura', 4000);
    }
    else
    {
      $scope.altura = $scope.altura.toString().replace(',','.');
      var alturaMetro=$scope.altura/100;
      if($scope.altura < 0){
        Materialize.toast('La altura que introduzca debe ser positiva.', 4000);
      }
      else if($scope.altura == 0){
        Materialize.toast('La altura que introduzca debe ser mayor a 0.', 4000);
      }
      else if($scope.altura < 3){
        Materialize.toast('Ha introducido la altura en metros. Por favor, multipliquela por 100 para introducirla en centimetros.', 4000);
      }
      else{
        if(isNaN($scope.peso)){
          Materialize.toast('Debe introducir un número en su peso.', 4000);
        }
        else if($scope.peso == ""){
          Materialize.toast('Por favor, introduce tu peso.', 4000);
        }
        else if($scope.peso < 0){
          Materialize.toast('El peso que introduzca debe ser positivo.', 4000);
        }
        else if($scope.peso == 0){
          Materialize.toast('El peso que introduzca debe ser mayor a 0.', 4000);
        }
        else{
          $scope.resultado = "";

          /*CALCULO IMC*/
          var alturaCuadrado=alturaMetro*alturaMetro;
          $scope.IMC = $scope.peso/alturaCuadrado;
          $scope.IMC = Math.round($scope.IMC*100)/100;

          $scope.TextoIMC();

          var request2 = $http({
            method: "post",
            url: "./calcular.php",
            data: {
              peso: $scope.peso,
              altura: $scope.altura,
              imc: $scope.IMC,
              id: $scope.Id
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          });
          request2.success(function (data) {
            if(data == "Ok"){
              Materialize.toast('Datos guardados', 1000);
            }
            else if(data == "Ok2"){
              Materialize.toast('Datos actualizados', 1000);
            }
            else{
              Materialize.toast(data, 4000);
            }
          });
          request2.error(function(error, status, headers, config){
            console.log(error);
          });
        }
      }
    }
  }
  $scope.LogOut = function()
  {
    var request = $http({
      method: "post",
      url: "/logout.php",
      data: {},
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    request.success(function (data) {
      if(data == "Ok"){
        Materialize.toast('Cerro sesión', 800);
        setTimeout(function(){location.href="/";}, 800);
      }
      else{
        Materialize.toast("Error", 4000);
      }
    });
  }

  $scope.TextoIMC = function(){
    /*CALCULO DESCRIPCION IMC*/
    if($scope.IMC<15){
      $scope.resultado = "Delgadez Severa";
    }
    else if($scope.IMC<17){
      $scope.resultado = "Delgadez Moderada";
    }
    else if($scope.IMC<18.6){
      $scope.resultado = "Delgadez Aceptable";
    }
    else if($scope.IMC<26){
      $scope.resultado = "Peso Normal (saludable)";
    }
    else if($scope.IMC<31){
      $scope.resultado = "Sobrepeso";
    }
    else if($scope.IMC<36){
      $scope.resultado = "Obeso: Tipo I (moderadamente obeso)";
    }
    else if($scope.IMC<41){
      $scope.resultado = "Obeso: Tipo II (severamente obeso)";
    }
    else if($scope.IMC>=41){
      $scope.resultado = "Obeso: Tipo III (muy severamente obeso)";
    }
  }
});

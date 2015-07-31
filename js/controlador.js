angular.module("MiApp",[])
.controller("Controlador", function($scope, $http){
  window.alert("Debe iniciar sesión primero");
  location.href="/index.html#IniciarSesion";
  $scope.peso = "";
  $scope.altura = "";
  $scope.resultado = "";
  $scope.IMC = "";
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
      }
    }
  }
});

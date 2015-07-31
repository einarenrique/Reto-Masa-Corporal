angular.module("MiApp",[])
  .controller("Controlador", function($scope, $http){
    $scope.peso = "";
    $scope.altura = "";
    $scope.resultado = "";
    $scope.IMC = "";

    $scope.calcular = function()
    {
      console.log("Entro");
        $scope.resultado = "";
        $scope.IMC = "";
      	$scope.altura = $scope.altura.toString().replace(',','.');
      	var alturaMetro=$scope.altura/100;
      	if($scope.altura == ""){
      			$scope.resultado = "Por favor, introduce tu altura.";
      	}
      	else if($scope.altura <0){
      			$scope.resultado = "La altura que introduzca debe ser positiva.";
      	}
      	else if($scope.altura <20){
      			$scope.resultado = "Ha introducido la altura en metros. Por favor, multipliquela por 100 para introducirla en centimetros.";
      	}
      	else{
      			$scope.resultado = "";
      			if($scope.peso==""){
      				$scope.resultado = "Por favor, introduce tu peso.";
      			}
      			else if($scope.peso<0){
      					$scope.resultado = "El peso que introduzca debe ser positivo.";
      			}
      			else{
      				$scope.resultado = "";

      				/*CALCULO IMC*/
      				var alturaCuadrado=alturaMetro*alturaMetro;
      				$scope.IMC = $scope.peso/alturaCuadrado;
      				$scope.IMC = Math.round($scope.IMC*100)/100;
      				/*CALCULO DESCRIPCION IMC*/
      				if($scope.IMC<16){
      					$scope.resultado = "Delgadez Severa";
      				}
      				else if($scope.IMC<17){
      					$scope.resultado = "Delgadez Moderada";
      				}
      				else if($scope.IMC<18.5){
      					$scope.resultado = "Delgadez Aceptable";
      				}
      				else if($scope.IMC<25){
      					$scope.resultado = "Peso Normal";
      				}
      				else if($scope.IMC<30){
      					$scope.resultado = "Sobrepeso";
      				}
      				else if($scope.IMC<35){
      					$scope.resultado = "Obeso: Tipo I";
      				}
      				else if($scope.IMC<40){
      					$scope.resultado = "Obeso: Tipo II";
      				}
      				else if($scope.IMC>=40){
      					$scope.resultado = "Obeso: Tipo III";
      				}
      			}
      	}
    }
  });

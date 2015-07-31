angular.module("MiApp",[])
.controller("Login", function($scope, $http){
  $scope.Registro = function () {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if ($scope.email == "" || $scope.email == null) {
      Materialize.toast('Debe escribir su correo.', 4000);
      document.getElementById("email").focus();
    }
    else if (!emailReg.test($scope.email)) {
      Materialize.toast('Debe corregir su correo.', 4000);
      document.getElementById("email").focus();
    }
    else if ($scope.password == "" || $scope.password == null) {
      Materialize.toast('Debe escribir su contraseña.', 4000);
    }
    else if ($scope.password2 == "" || $scope.password2 == null) {
      Materialize.toast('Debe repetir su contraseña.', 4000);
    }
    else if ($scope.password != $scope.password2) {
      Materialize.toast('Las contraseñas no coinciden.', 4000);
    }
    else {
      var request = $http({
        method: "post",
        //url: window.location.host + "NuevoUsuario.php",
        url: "/NuevoUsuario.php",
        data: {
          email: $scope.email,
          pass: $scope.password
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      request.success(function (data) {
        if(data == "Ok"){
          Materialize.toast('Creo el usuario '+$scope.email, 1500);
          setTimeout(function(){location.href="/calcular.html";}, 1500);
        }
        else{
          Materialize.toast(data, 4000);
        }
      });
    }
  }
  $scope.Login = function () {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if ($scope.loginEmail == "" || $scope.loginEmail == null) {
      Materialize.toast('Debe escribir su correo.', 4000);
      document.getElementById("txInicioEmail").focus();
    }
    else if (!emailReg.test($scope.loginEmail)) {
      Materialize.toast('Debe corregir su correo.', 4000);
      document.getElementById("txInicioEmail").focus();
    }
    else if ($scope.loginPassword == "" || $scope.loginPassword == null) {
      Materialize.toast('Debe escribir su contraseña.', 4000);
      document.getElementById("txInicioContra").focus();
    }
    else {
      var request = $http({
        method: "post",
        //url: window.location.host + "login.php",
        url: "/login.php",
        data: {
          email: $scope.loginEmail,
          pass: $scope.loginPassword
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      request.success(function (data) {
        if(data == "Ok"){
          Materialize.toast('Inicio sesión como '+$scope.loginEmail, 1500);
          setTimeout(function(){location.href="/calcular.html";}, 1500);
        }
        else{
          Materialize.toast(data, 4000);
        }
      });
    }
  }
});

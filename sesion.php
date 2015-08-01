<?php
session_start();
if($_SESSION["user"] != ""){
  printf($_SESSION["id"]);
}
else {
  printf("No");
}
?>

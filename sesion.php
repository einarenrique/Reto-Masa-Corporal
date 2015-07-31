<?php
session_start();
if($_SESSION["user"] != ""){
  printf($_SESSION["user"]);
}
else {
  printf("No");
}
?>

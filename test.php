<?php
$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);

printf($server);
printf("<br>");
printf($username);
printf("<br>");
printf($password);
printf("<br>");
printf($db);

?>

<?php

include_once "utils.php";
//mysql_connect("192.168.241.12", "root", "nopass") or die(mysql_error());
mysql_connect("localhost", "root", "nopass") or die(mysql_error());
mysql_select_db("sms_map") or die(mysql_error());

?>
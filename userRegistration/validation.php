<?php

session_start();

$connection= mysqli_connect('localhost','root','AOHdoCucmYXvXbYd');

if (!$connection) {
    error_log("Failed to connect to MySQL: " . mysqli_error($connection));
    die('Internal server error');
}

mysqli_select_db($connection, 'userregistration');


$name=$_POST['user'];
$pass=$_POST['password'];

$s=" select * from usertable where name='$name' && password='$pass' ";

$result=mysqli_query($connection, $s);

$num=mysqli_num_rows($result);

if($num == 1){
    $_SESSION['username'] = $name;
    header('location:home.php');
}
else{
    header('location:login.php');
}

?>
<?php

session_start();

$connection= mysqli_connect('localhost','root','AOHdoCucmYXvXbYd');



mysqli_select_db($connection, 'userregistration');

$name=$_POST['user'];
$pass=$_POST['password'];

$s=" select * from usertable where name ='$name' ";

$result=mysqli_query($connection, $s);

$num=mysqli_num_rows($result);

if($num == 1){
    echo" Username already taken";
}
else{
    $reg= "insert into usertable (name, password) values ('$name', '$pass')";
}
mysqli_query($connection, $reg);
echo" Registration Successful";

?>
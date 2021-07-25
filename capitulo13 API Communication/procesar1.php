<?PHP
header('Access-Control-Allow-Origin: *');
print('Su nombre es: '.$_POST['nombre'].'<br>');
print('Su apellido es: '.$_POST['apellido']);
?>
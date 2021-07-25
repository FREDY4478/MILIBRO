function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('boton');
    boton.addEventListener('click', enviar, false);
    socket=new WebSocket("ws://www.dominio.com:12345/server.php");
    socket.addEventListener('open', abierto, false);
    socket.addEventListener('message', recibido, false);
    socket.addEventListener('close', cerrado, false);
    socket.addEventListener('error', errores, false);
    }
    function abierto(){
    cajadatos.innerHTML='CONEXION ABIERTA<br>';
    cajadatos.innerHTML+='Estado: '+socket.readyState;
    }
    function recibido(e){
    var lista=cajadatos.innerHTML;
    cajadatos.innerHTML='Recibido: '+e.data+'<br>'+lista;
    }
    function cerrado(){
    var lista=cajadatos.innerHTML;
    cajadatos.innerHTML='CONEXION CERRADA<br>'+lista;
    var boton=document.getElementById('boton');
    boton.disabled=true;
    }
    function errores(){
    var lista=cajadatos.innerHTML;
    cajadatos.innerHTML='ERROR<br>'+lista;
    }
    function enviar(){
    var comando=document.getElementById('comando').value;
    if(comando=='cerrar'){
    socket.close();
    }else{
    socket.send(comando);
    }
    }
    window.addEventListener('load', iniciar, false);
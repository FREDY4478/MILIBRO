function iniciar(){
    var boton=document.getElementById('boton');
    boton.addEventListener('click', enviar, false);
    trabajador=new SharedWorker('trabajador.js');
    trabajador.port.addEventListener('message', recibido, false);
    trabajador.port.start();
    }
    
    function recibido(e){
    alert(e.data);
    }
    function enviar(){
    var nombre=document.getElementById('nombre').value;
    trabajador.port.postMessage(nombre);
    }
    window.addEventListener('load', iniciar, false);
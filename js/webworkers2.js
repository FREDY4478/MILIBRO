function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('boton');
    boton.addEventListener('click', enviar, false);
    trabajador=new Worker('trabajador.js');
    trabajador.addEventListener('message', recibido, false);
    }
    function enviar(){
    var nombre=document.getElementById('nombre').value;
    if(nombre=='cerrar1'){
    trabajador.terminate();
    cajadatos.innerHTML='Trabajador Detenido';
    }else{
    trabajador.postMessage(nombre);
    }
    }
    function recibido(e){
    cajadatos.innerHTML=e.data;
    }
    window.addEventListener('load', iniciar, false);

    addEventListener('message', recibido, false);
function recibido(e){
if(e.data=='cerrar2'){
postMessage('Trabajador Detenido');
close();
}else{
var respuesta='Su nombre es '+e.data;
postMessage(respuesta);
}
}
importScripts('mascodigos.js');
addEventListener('message', recibido, false);
function recibido(e){
prueba();
}
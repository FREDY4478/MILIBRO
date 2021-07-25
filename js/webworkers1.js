function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('boton');
    boton.addEventListener('click', enviar, false);
    trabajador=new Worker('trabajador.js');
    trabajador.addEventListener('error', errores, false);
    }
    function enviar(){
    var nombre=document.getElementById('nombre').value;
    trabajador.postMessage(nombre);
    }
    function errores(e){
    cajadatos.innerHTML='ERROR: '+e.message+'<br>';
    cajadatos.innerHTML+='Archivo: '+e.filename+'<br>';
    cajadatos.innerHTML+='Línea: '+e.lineno;
    }
    window.addEventListener('load', iniciar, false);
    addEventListener('message', recibido, false);
function recibido(e){
prueba();
}
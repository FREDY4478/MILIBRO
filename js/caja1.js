function iniciar(){
    trabajador=new SharedWorker('trabajador.js');
    trabajador.port.addEventListener('message', recibido, false);
    trabajador.port.start();
    }
    function recibido(e){
    var cajadatos=document.getElementById('cajadatos');
    cajadatos.innerHTML=e.data;
    }
    window.addEventListener('load', iniciar, false);
    puertos=new Array();
addEventListener('connect', conectar, false);
function conectar(e){
puertos.push(e.ports[0]);
e.ports[0].onmessage=enviar;
}
function enviar(e){
for(f=0; f < puertos.length; f++){
puertos[f].postMessage('Su nombre es '+e.data);
}
}
function iniciar(){
    window.addEventListener('message', receptor, false);
    }
   
    function receptor(e){
    var cajadatos=document.getElementById('cajadatos');
    if(e.origin=='http://www.dominio1.com'){
    cajadatos.innerHTML='mensaje válido: '+e.data;
    e.source.postMessage('mensaje recibido', e.origin);
    }else{
    cajadatos.innerHTML='origen inválido';
    }
    }
    window.addEventListener('load', iniciar, false);
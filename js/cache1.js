function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    window.addEventListener('online', function(){ estado(1); },
    false);
    window.addEventListener('offline', function(){ estado(2); },
    false);
    }
    function estado(valor){
    switch(valor){
   
    case 1:
    cajadatos.innerHTML+='<br>Estamos Conectados';
    break;
    case 2:
    cajadatos.innerHTML+='<br>Estamos Desconectados';
    break;
    }
    }
    window.addEventListener('load', iniciar, false);
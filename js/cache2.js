function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    cache=window.applicationCache;
    cache.addEventListener('checking', function(){ mostrar(1); },
    false);
    cache.addEventListener('downloading', function(){ mostrar(2); },
    false);
    cache.addEventListener('cached', function(){ mostrar(3); },
    false);
    cache.addEventListener('updateready', function(){ mostrar(4); },
    false);
    cache.addEventListener('obsolete', function(){ mostrar(5); },
    false);
    }
    
    function mostrar(valor){
    cajadatos.innerHTML+='<br>Estado: '+cache.status;
    cajadatos.innerHTML+=' | Evento: '+valor;
    }
    window.addEventListener('load', iniciar, false);
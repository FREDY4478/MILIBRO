function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var actualizar=document.getElementById('actualizar');
    actualizar.addEventListener('click', actualizarcache, false);
    var prueba=document.getElementById('prueba');
    prueba.addEventListener('click', probarcache, false);
    cache=window.applicationCache;
    cache.addEventListener('updateready', function(){ mostrar(1); },
    false);
    cache.addEventListener('noupdate', function(){ mostrar(2); },
    false);
    }
    function actualizarcache(){
    cache.update();
    }
    function probarcache(){
    cajadatos.innerHTML+='<br>cambiar este mensaje';
    }
    function mostrar(valor){
    switch(valor){
    case 1:
    cajadatos.innerHTML+='<br>Actualización Lista';
    break;
    case 2:
    cajadatos.innerHTML+='<br>Actualización No Disponible';
    break;
    }
    }
    window.addEventListener('load', iniciar, false);
function iniciar(){
    var cache=window.applicationCache;
    cache.addEventListener('error', errores, false);
    }
    function errores(){
    alert('error');
    }
    window.addEventListener('load', iniciar, false);
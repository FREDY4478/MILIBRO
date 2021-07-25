function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    cajadatos.innerHTML='<progress value="0" max="100">0%</progress>';
    
    cache=window.applicationCache;
    cache.addEventListener('progress', progreso, false);
    cache.addEventListener('cached', mostrar, false);
    cache.addEventListener('updateready', mostrar, false);
    cache.addEventListener('noupdate', mostrar, false);
    }
    function progreso(e){
    if(e.lengthComputable){
    var por=parseInt(e.loaded/e.total*100);
    var barraprogreso=cajadatos.querySelector("progress");
    barraprogreso.value=por;
    barraprogreso.innerHTML=por+'%';
    }
    }
    function mostrar(){
    cajadatos.innerHTML='Terminado';
    }
    window.addEventListener('load', iniciar, false);


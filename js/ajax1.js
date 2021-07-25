function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('boton');
    boton.addEventListener('click', leer, false);
    }
    function leer(){
    var url="trailer.ogg";
    var solicitud=new XMLHttpRequest();
    solicitud.addEventListener('loadstart',comenzar,false);
    solicitud.addEventListener('progress',estado,false);
    solicitud.addEventListener('load',mostrar,false);
    solicitud.open("GET", url, true);
    solicitud.send(null);
    }
    function comenzar(){
    cajadatos.innerHTML='<progress value="0" max="100">0%</progress>';
    }
    function estado(e){
    if(e.lengthComputable){
    var por=parseInt(e.loaded/e.total*100);
    var barraprogreso=cajadatos.querySelector("progress");
    barraprogreso.value=por;
    barraprogreso.innerHTML=por+'%';
    }
    }
    function mostrar(e){
    cajadatos.innerHTML='Terminado';
    }
    window.addEventListener('load', iniciar, false);
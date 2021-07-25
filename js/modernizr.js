function iniciar(){
    var cajadatos=document.getElementById('cajadatos');
    if(Modernizr.boxshadow){
    cajadatos.innerHTML='Box Shadow está disponible';
    }else{
    cajadatos.innerHTML='Box Shadow no está disponible';
    }
    }
    window.addEventListener('load', iniciar, false);
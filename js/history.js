function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    url=document.getElementById('url');
    url.addEventListener('click', cambiar, false);
    }
    function cambiar(){
    cajadatos.innerHTML='La URL es pagina2';
    window.history.pushState(null, null, 'pagina2.html');
    }
    window.addEventListener('load', iniciar, false);
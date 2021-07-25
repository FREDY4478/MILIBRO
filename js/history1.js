function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    url=document.getElementById('url');
    url.addEventListener('click', cambiar, false);
    window.addEventListener('popstate', nuevaurl ,false);
    window.history.replaceState(1, null);
    }
    function cambiar(){
    mostrar(2);
    window.history.pushState(2, null, 'pagina2.html');
    }
    function nuevaurl(e){
    mostrar(e.state);
    }
    
    function mostrar(actual){
    cajadatos.innerHTML='La URL es página '+actual;
    }
    window.addEventListener('load', iniciar, false);
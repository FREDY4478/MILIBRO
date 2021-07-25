function iniciar(){
    for(var f=1;f<5;f++){
    url=document.getElementById('url'+f);
    url.addEventListener('click', function(x){
    return function(){ cambiar(x);}
    }(f), false);
    }
    window.addEventListener('popstate', nuevaurl ,false);
    window.history.replaceState(1, null, 'pagina1.html');
    }
    function cambiar(pagina){
    mostrar(pagina);
    window.history.pushState(pagina, null, 'pagina'+pagina+'.html');
    }
    function nuevaurl(e){
    mostrar(e.state);
    }
    function mostrar(actual){
    if(actual!=null){
    imagen=document.getElementById('imagen');
    imagen.src='http://www.minkbooks.com/content/monster' +
    actual + '.gif';
    }
    }
    window.addEventListener('load', iniciar, false);
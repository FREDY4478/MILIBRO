function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('boton');
    boton.addEventListener('click', crear, false);
    window.webkitRequestFileSystem(window.PERSISTENT, 5*1024*1024,
    creardd, errores);
    }
    function creardd(sistema) {
    dd=sistema.root;
    ruta='';
    mostrar();
    }
    function errores(e){
    alert('Error: '+e.code);
    }
    function crear(){
    var nombre=document.getElementById('entrada').value;
    if(nombre!=''){
    nombre=ruta+nombre;
    dd.getFile(nombre, {create: true, exclusive: false}, mostrar,
    errores);
    }
    }
    function mostrar(){
    document.getElementById('entrada').value='';
    cajadatos.innerHTML='';
    dd.getDirectory(ruta,null,leerdir,errores);
    }
    function leerdir(dir){
    var lector=dir.createReader();
    var leer=function(){
    lector.readEntries(function(archivos){
    if(archivos.length){
    listar(archivos);
    leer();
    }
    }, errores);
    }
    leer();
    }
    function listar(archivos){
    for(var i=0; i<archivos.length; i++) {
    if(archivos[i].isFile) {
    cajadatos.innerHTML+=archivos[i].name+'<br>';
    }else if(archivos[i].isDirectory){
    cajadatos.innerHTML+='<span onclick="cambiardir(\''+archivos[i].name+'\')"class="directorio">+'+archivos[i].name+'</span><br>';
    }
    }
    }
    function cambiardir(nuevaruta){
    ruta=ruta+nuevaruta+'/';
    mostrar();
    }
    window.addEventListener('load', iniciar, false);
    function volver(){
        dd.getDirectory(ruta,null,function(dir){
        dir.getParent(function(padre){
        ruta=padre.fullPath;
        mostrar();
        }, errores);
        },errores);
    }
    
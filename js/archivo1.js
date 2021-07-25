function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('boton');
    boton.addEventListener('click', leerarchivo, false);
    window.webkitRequestFileSystem(window.PERSISTENT, 5*1024*1024,
    creardd, errores);
    }
    function creardd(sistema){
    dd=sistema.root;
    }
    function errores(e){
    alert('Error: '+e.code);
    }
    function leerarchivo(){
    var nombre=document.getElementById('entrada').value;
    dd.getFile(nombre, {create: false}, function(entrada) {
    entrada.file(leercontenido, errores);
    }, errores);
    }
    function leercontenido(archivo){
    cajadatos.innerHTML='Nombre: '+archivo.name+'<br>';
    cajadatos.innerHTML+='Tipo: '+archivo.type+'<br>';
    cajadatos.innerHTML+='Tamaño: '+archivo.size+' bytes<br>';
    var lector=new FileReader();
    lector.onload=exito;
    lector.readAsText(archivo);
    }
    function exito(e){
    var resultado=e.target.result;
    document.getElementById('entrada').value='';
    cajadatos.innerHTML+='Contenido: '+resultado;
    }
    window.addEventListener('load', iniciar, false);
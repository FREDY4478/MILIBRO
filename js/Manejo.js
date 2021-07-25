function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('boton');
    boton.addEventListener('click', modificar, false);
    window.webkitRequestFileSystem(window.PERSISTENT, 5*1024*1024,
    creardd, errores);
    }
    function creardd(sistema){
    dd=sistema.root;
    ruta='';
    mostrar();
    }
    function errores(e){
    alert('Error: '+e.code);
    }
    function modificar(){
    var origen=document.getElementById('origen').value;
    var destino=document.getElementById('destino').value;
    dd.getFile(origen,null,function(archivo){
    dd.getDirectory(destino,null,function(dir){
    archivo.moveTo(dir,null,exito,errores);
    },errores);
    },errores);
    }
    function exito(){
    document.getElementById('origen').value='';
    document.getElementById('destino').value='';
    mostrar();
    }
    function mostrar(){
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
function modificar(){
    var origen=document.getElementById('origen').value;
    var destino=document.getElementById('destino').value;
    dd.getFile(origen,null,function(archivo){
    dd.getDirectory(destino,null,function(dir){
    archivo.copyTo(dir,null,exito,errores);
    },errores);
    },errores);
    }
    function modificar(){
        var origen=document.getElementById('origen').value;
        var origen=ruta+origen;
        dd.getFile(origen,null,function(entrada){
        entrada.remove(exito,errores);
        },errores);
        }
        function modificar(){
            var destino=document.getElementById('destino').value;
            dd.getDirectory(destino,null,function(entrada){
            
            entrada.removeRecursively(exito,errores);
            },errores);
            }
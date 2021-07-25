function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('boton');
    boton.addEventListener('click', escribirarchivo, false);
    window.webkitRequestFileSystem(window.PERSISTENT, 5*1024*1024,
    creardd, errores);
    }
    function creardd(sistema){
    dd=sistema.root;
    }
    function errores(e){
    alert('Error: '+e.code);
    }
    function escribirarchivo(){
    var nombre=document.getElementById('entrada').value;
    
    dd.getFile(nombre, {create: true, exclusive:
    false},function(entrada){
    entrada.createWriter(escribircontenido, errores);
    }, errores);
    }
    function escribircontenido(fileWriter) {
    var texto=document.getElementById('texto').value;
    fileWriter.onwriteend=exito;
    var blob=new WebKitBlobBuilder();
    blob.append(texto);
    fileWriter.write(blob.getBlob());
    }
    function exito(){
    document.getElementById('entrada').value='';
    document.getElementById('texto').value='';
    cajadatos.innerHTML='Hecho!';
    }
    window.addEventListener('load', iniciar, false);
/*agregando contenido */
function escribircontenido(fileWriter) {
    var texto=document.getElementById('texto').value;
    fileWriter.seek(fileWriter.length);
    fileWriter.onwriteend=exito;
    var blob=new WebKitBlobBuilder();
    blob.append(texto);
    fileWriter.write(blob.getBlob());
    }
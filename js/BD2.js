function agregarobjeto(){
    var clave=document.getElementById('clave').value;
    var titulo=document.getElementById('texto').value;
    var fecha=document.getElementById('fecha').value;
    var transaccion=bd.transaction(['peliculas'],
    IDBTransaction.READ_WRITE);
    var almacen=transaccion.objectStore('peliculas');
    var solicitud=almacen.add({id: clave, nombre: titulo, fecha:
    fecha});
    solicitud.addEventListener('success', function(){
    mostrar(clave) }, false);
    document.getElementById('clave').value='';
    document.getElementById('texto').value='';
    document.getElementById('fecha').value='';
    }
function mostrarlista(e){
    var cursor=e.result || e.target.result;
   
    if(cursor){
    cajadatos.innerHTML+='<div>'+cursor.value.id+' -
    '+cursor.value.nombre+' - '+cursor.value.fecha+' <button
    onclick="eliminar(\''+cursor.value.id+'\')">Eliminar</button></div>';
    cursor.continue();
    }
    }
    function eliminar(clave){
    if(confirm('Está Seguro?')){
    var transaccion=bd.transaction(['peliculas'],
    IDBTransaction.READ_WRITE);
    var almacen=transaccion.objectStore('peliculas');
    var solicitud=almacen.delete(clave);
    solicitud.addEventListener('success', mostrar, false);
    }
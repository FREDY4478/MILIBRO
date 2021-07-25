function mostrar(){
    cajadatos.innerHTML='';
    var transaccion=bd.transaction(['peliculas']);
    var almacen=transaccion.objectStore('peliculas');
    var indice=almacen.index('BuscarFecha');
    var cursor=indice.openCursor(null, IDBCursor.PREV);
    cursor.addEventListener('success', mostrarlista, false);
    }
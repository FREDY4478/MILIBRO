function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('grabar');
    boton.addEventListener('click', agregarobjeto, false);
    if('webkitIndexedDB' in window){
    window.indexedDB=window.webkitIndexedDB;
    window.IDBTransaction=window.webkitIDBTransaction;
    window.IDBKeyRange=window.webkitIDBKeyRange;
    window.IDBCursor=window.webkitIDBCursor;
    }else if('mozIndexedDB' in window){
    window.indexedDB=window.mozIndexedDB;
    }
    var solicitud=indexedDB.open('mibase');
    solicitud.addEventListener('error', errores, false);
    solicitud.addEventListener('success', crear, false);
    }
function mostrar(clave){
    var transaccion=bd.transaction(['peliculas']);
    var almacen=transaccion.objectStore('peliculas');
    var solicitud=almacen.get(clave);
    solicitud.addEventListener('success', mostrarlista, false);
    }
    function mostrarlista(e){
    var resultado=e.result || e.target.result;
    cajadatos.innerHTML='<div>'+resultado.id+' - '+resultado.nombre+'- '+resultado.fecha+'</div>';
    }
    window.addEventListener('load', iniciar, false);
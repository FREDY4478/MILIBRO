function errores(e){
    alert('Error: '+e.code+' '+e.message);
    }
    function crear(e){
    bd=e.result || e.target.result;
    if(bd.version==''){
    var solicitud=bd.setVersion('1.0');
    solicitud.addEventListener('error', errores, false);
    solicitud.addEventListener('success', crearbd, false);
    }
    }
    function crearbd(){
        var almacen=bd.createObjectStore('peliculas',{keyPath:'id'});
        almacen.createIndex('BuscarFecha', 'fecha',{unique: false});
        }

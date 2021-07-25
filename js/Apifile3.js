function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var archivos=document.getElementById('archivos');
    archivos.addEventListener('change', procesar, false);
    }
    function procesar(e){
    var archivos=e.target.files;
    cajadatos.innerHTML='';
    var archivo=archivos[0];
    var lector=new FileReader();
    lector.onloadstart=comenzar;
    lector.onprogress=estado;
    lector.onloadend=function(){ mostrar(archivo); };
    lector.readAsBinaryString(archivo);
    }
    function comenzar(e){
    cajadatos.innerHTML='<progress value="0" max="100">0%</progress>';
    }
    function estado(e){
    var por=parseInt(e.loaded/e.total*100);
    cajadatos.innerHTML='<progress value="'+por+'" max="100">'
    +por+'%</progress>';
    }
    function mostrar(archivo){
    cajadatos.innerHTML='Nombre: '+archivo.name+'<br>';
    cajadatos.innerHTML+='Tipo: '+archivo.type+'<br>';
    cajadatos.innerHTML+='Tamaño: '+archivo.size+' bytes<br>';
    }
    window.addEventListener('load', iniciar, false);
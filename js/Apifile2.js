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
    lector.onload=function(e){ mostrar(e, archivo); };
    var blob=archivo.slice(0,1000);
    lector.readAsBinaryString(blob);
    }
    function mostrar(e, archivo){
    var resultado=e.target.result;
    cajadatos.innerHTML='Nombre: '+archivo.name+'<br>';
    cajadatos.innerHTML+='Tipo: '+archivo.type+'<br>';
    cajadatos.innerHTML+='Tamaño: '+archivo.size+' bytes<br>';
    
    cajadatos.innerHTML+='Tamaño Blob: '+resultado.length+'
    bytes<br>';
    cajadatos.innerHTML+='Blob: '+resultado;
    }
    window.addEventListener('load', iniciar, false);
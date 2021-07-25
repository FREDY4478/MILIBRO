function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var archivos=document.getElementById('archivos');
    archivos.addEventListener('change', procesar, false);
    }
    function procesar(e){
    var archivos=e.target.files;
    var archivo=archivos[0];
    var lector=new FileReader();
    lector.onload=mostrar;
    lector.readAsText(archivo);
    }
    function mostrar(e){
    var resultado=e.target.result;
    cajadatos.innerHTML=resultado;
    }
    window.addEventListener('load', iniciar, false);
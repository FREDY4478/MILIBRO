function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var archivos=document.getElementById('archivos');
    archivos.addEventListener('change', subir, false);
    }
    function subir(e){
    var archivos=e.target.files;
    var archivo=archivos[0];
    var datos=new FormData();
    datos.append('archivo',archivo);
    var url="procesar.php";
    var solicitud=new XMLHttpRequest();
    var xmlupload=solicitud.upload;
    xmlupload.addEventListener('loadstart',comenzar,false);
    xmlupload.addEventListener('progress',estado,false);
    xmlupload.addEventListener('load',mostrar,false);
    solicitud.open("POST", url, true);
    solicitud.send(datos);
    }
    function comenzar(){
    cajadatos.innerHTML='<progress value="0" max="100">0%</progress>';
    }
    function estado(e){
    if(e.lengthComputable){
    var por=parseInt(e.loaded/e.total*100);
    var barraprogreso=cajadatos.querySelector("progress");
    barraprogreso.value=por;
    barraprogreso.innerHTML=por+'%';
    }
    }
    function mostrar(e){
    cajadatos.innerHTML='Terminado';
    }
    window.addEventListener('load', iniciar, false);
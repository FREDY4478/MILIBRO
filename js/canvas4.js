function iniciar(){ 
   var elemento=document.getElementById('lienzo'); 
   lienzo=elemento.getContext('2d'); 
   lienzo.beginPath(); 
    // aquí va el trazado 
    lienzo.stroke(); 
} 
window.addEventListener("load", iniciar, false);
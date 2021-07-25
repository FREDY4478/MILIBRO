function iniciar(){ 
   var elemento=document.getElementById('lienzo'); 
   lienzo=elemento.getContext('2d'); 
   lienzo.beginPath(); 

   lienzo.moveTo(100,100); 
   lienzo.lineTo(200,200); 
   lienzo.lineTo(100,200); 
    lienzo.fill(); 
} 
window.addEventListener("load", iniciar, false);
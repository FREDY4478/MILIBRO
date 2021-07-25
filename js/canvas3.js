function iniciar(){ 
   var elemento=document.getElementById('lienzo'); 
   lienzo=elemento.getContext('2d'); 
   
   var gradiente=lienzo.createLinearGradient(0,0,10,100); 
   gradiente.addColorStop(0.5, '#0000FF'); 
   gradiente.addColorStop(1, '#000000'); 
   lienzo.fillStyle=gradiente; 
   lienzo.fillRect(10,10,100,100); 
   lienzo.fillRect(150,10,200,100); 
} 
window.addEventListener("load", iniciar, false);

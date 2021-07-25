function iniciar(){ 
  var elemento=document.getElementById('lienzo'); 
  lienzo=elemento.getContext('2d');
  lienzo.font="bold 24px verdana, sans-serif"; 
  lienzo.textAlign="start"; 
  lienzo.textBaseline="bottom"; 
  lienzo.fillText("Mi mensaje", 100,124); 
  var tamano=lienzo.measureText("Mi mensaje"); 
  lienzo.strokeRect(100,100,tamano.width,24); 
} 
window.addEventListener("load", iniciar, false);
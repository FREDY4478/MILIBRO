function iniciar(){ 
  var elemento=document.getElementById('lienzo'); 
  lienzo=elemento.getContext('2d'); 
  lienzo.beginPath(); 
  lienzo.moveTo(50,50); 
  lienzo.quadraticCurveTo(100,125, 50,200); 
  lienzo.moveTo(250,50); 
  lienzo.bezierCurveTo(200,125, 300,125, 250,200); 
  lienzo.stroke(); 
} 
window.addEventListener("load", iniciar, false);
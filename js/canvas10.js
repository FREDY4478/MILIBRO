function iniciar(){ 
  var elemento=document.getElementById('lienzo'); 
  lienzo=elemento.getContext('2d'); 
  lienzo.beginPath(); 
  var radianes=Math.PI/180*45; 
  lienzo.arc(100,100,50,0,radianes, false); 
  lienzo.stroke(); 
} 
window.addEventListener("load", iniciar, false);
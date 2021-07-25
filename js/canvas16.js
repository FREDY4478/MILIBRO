function iniciar(){ 
  var elemento=document.getElementById('lienzo');
  lienzo=elemento.getContext('2d'); 
  lienzo.font="bold 20px verdana, sans-serif"; 
  lienzo.fillText("PRUEBA",50,20); 
  lienzo.translate(50,70); 
  lienzo.rotate(Math.PI/180*45); 
  lienzo.fillText("PRUEBA",0,0); 
  lienzo.rotate(-Math.PI/180*45); 
  lienzo.translate(0,100); 
  lienzo.scale(2,2); 
  lienzo.fillText("PRUEBA",0,0); 
} 
window.addEventListener("load", iniciar, false); 
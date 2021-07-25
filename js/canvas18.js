function iniciar(){ 
  var elemento=document.getElementById('lienzo'); 
  lienzo=elemento.getContext('2d'); 
  lienzo.save(); 
  lienzo.translate(50,70); 
  lienzo.font="bold 20px verdana, sans-serif"; 
  lienzo.fillText("PRUEBA1",0,30); 
  lienzo.restore(); 
  lienzo.fillText("PRUEBA2",0,30); 
} 
window.addEventListener("load", iniciar, false);

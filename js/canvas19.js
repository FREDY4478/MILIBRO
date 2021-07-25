function iniciar(){ 
  var elemento=document.getElementById('lienzo'); 
  lienzo=elemento.getContext('2d'); 
  lienzo.fillStyle="#990000"; 
  lienzo.fillRect(100,100,300,100); 
  lienzo.globalCompositeOperation="destination-atop"; 
  lienzo.fillStyle="#AAAAFF"; 
  lienzo.font="bold 80px verdana, sans-serif"; 
  lienzo.textAlign="center"; 
  lienzo.textBaseline="middle"; 
  lienzo.fillText("PRUEBA",250,110); 
} 
window.addEventListener("load", iniciar, false);
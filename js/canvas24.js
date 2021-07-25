function iniciar(){ 
  var elemento=document.getElementById('lienzo'); 
  lienzo=elemento.getContext('2d'); 
  var imagen=new Image(); 
  imagen.src="https://static9.depositphotos.com/1013328/1238/i/950/depositphotos_12388299-stock-photo-baeutiful-lake.jpg"; 
  imagen.addEventListener("load", modificarimagen, false); 
} 
function modificarimagen(e){ 
  imagen=e.target; 
  var patron=lienzo.createPattern(imagen,'repeat'); 
  lienzo.fillStyle=patron; 
  lienzo.fillRect(0,0,500,300); 
} 
window.addEventListener("load", iniciar, false);
function iniciar() { 
   maximo=600; 
   medio=document.getElementById('medio'); 
   reproducir=document.getElementById('reproducir'); 
   barra=document.getElementById('barra');
   progreso=document.getElementById('progreso'); 
   reproducir.addEventListener('click', presionar, false); 
   barra.addEventListener('click', mover, false); 
}


function presionar(){ 
   if(!medio.paused && !medio.ended) { 
       medio.pause(); 
       reproducir.innerHTML='Reproducir'; 
       window.clearInterval(bucle); 
   }else{ 
       medio.play(); 
       reproducir.innerHTML='Pausa'; 
       bucle=setInterval(estado, 1000); 
   } 
}

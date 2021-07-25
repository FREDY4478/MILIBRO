function hacerclic(){ 
    var lista=document.querySelectorAll("#principal p"); 
   lista[0].onclick=mostraralerta; 
} 
function mostraralerta(){ 
   alert('hizo clic!'); 
} 
window.onload=hacerclic;

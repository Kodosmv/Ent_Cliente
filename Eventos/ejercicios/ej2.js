        
document.addEventListener('mousemove', eventoFind);  
function eventoFind(evento){        
    
    let p = document.getElementById("position");
    p.textContent = `Posición del ratón: (${evento.clientX}, ${evento.clientY})`;
    
}


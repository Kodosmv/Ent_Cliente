        
        
function eventoFind(){        
    (evento)=>{
    if(evento.type=="keyup"){
    alert(evento.key);
    }
    else if(evento.type=="click"){
    alert(evento.clientX+" "+evento.clientY);
    }
    }
    document.getElementById("miObjeto").onclick=mostrarMensaje;
    document.onkeyup=mostrarMensaje;
}
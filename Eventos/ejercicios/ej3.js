document.addEventListener(oncontextmenu, borrar );
let pal = document.getElementsByTagName('p');

for (const key in pal) {

    key.addEventListener(oncontextmenu, borrar);
   
    
    
}

function borrar(event){
    
    pal.textcontent= event.style.display='none';

}
function ocultar(event){

}
function restaurar(){

}
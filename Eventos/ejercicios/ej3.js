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
document.getElementById('reaparece').addEventListener('click', ()=>{
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
})
function restaurar(){

}
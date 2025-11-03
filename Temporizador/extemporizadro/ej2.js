
let barra='';
let contador = 0;
let intervalo = setInterval(()=>{
    barra += ' +';
    console.log(barra);
    contador ++;

    if(contador === 10){
        clearInterval(intervalo);
        console.log(`carga completa`);
    }

} ,5000);

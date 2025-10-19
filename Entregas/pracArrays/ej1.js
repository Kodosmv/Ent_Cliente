console.log("Practica 1 : ");

for (let i = 0; i <= 50; i++) {
    let numeroPrim = [];
    while( numeroPrim.length< 6){
        let numSerie = Math.floor(Math.random() *49 )+1;
        if(!numeroPrim.includes(numSerie)){
            numeroPrim.push(numSerie);
        }
    }
    
    console.log(`Primitiva ${i} : ${numeroPrim}`);
}
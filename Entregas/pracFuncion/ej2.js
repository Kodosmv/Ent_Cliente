
function ej2() {
    let palabras= pedirPalabra();
    let mapPalabras = new Map();

    palabras.forEach(i => {
        let palabra = i.toLowerCase().trim();
        let cont = 0;
        if(mapPalabras.has(palabra)){
            mapPalabras.forEach((valor, key)=> {
                if (key === palabra){
                    cont= valor +1;
                }
            });

        }else{
            cont = 1;
        }
        mapPalabras.set(palabra, cont);
    });

    mostrarMap(mapPalabras);
}
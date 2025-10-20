function pedirPalabra(){
    let palabras = [];
    let palabra;
    do{
        palabra = window.prompt(
            'Dime una palabra'
        );
        if(palabra) palabras.push(palabra);

    }while(palabra);

    
}
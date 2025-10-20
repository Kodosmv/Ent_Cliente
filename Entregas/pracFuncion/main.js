function pedirPalabra(){
    let palabras = [];
    let palabra;
    do{
        palabra = window.prompt(
            'Dime una palabra'
        );
        if(palabra) palabras.push(palabra);

    }while(palabra);

    return palabras;
    
}

function mostrarPantalla(lista) {
    document.getElementById('sol').innerHTML = 
        `Lista de palabras introducidas:
        <p>${lista.join(", ")}</p> `;
}
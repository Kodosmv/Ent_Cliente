
function ej1(){

    let llamarPalabra = pedirPalabra();

    llamarPalabra = [...new Set(llamarPalabra)]
    llamarPalabra.sort((a, b) => b.localeCompare(a, "es"));

    mostrarPantalla(llamarPalabra);
}
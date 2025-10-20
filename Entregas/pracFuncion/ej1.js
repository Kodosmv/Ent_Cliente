const llamarPalabra = pedirPalabra();

llamarPalabra = new Set(pedirPalabra);
llamarPalabra.reverse();
console.log(`Lista de palabras ${llamarPalabra}`);
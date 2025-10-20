let llamarPalabra = pedirPalabra();

llamarPalabra = new Set(llamarPalabra);
llamarPalabra.reverse();
console.log(`Lista de palabras ${llamarPalabra}`);
let llamarPalabra = pedirPalabra();

llamarPalabra = [...new Set(llamarPalabra)]
llamarPalabra.sort((a, b) => b.localeCompare(a, "es"));
console.log(`Lista de palabras ${llamarPalabra}`);
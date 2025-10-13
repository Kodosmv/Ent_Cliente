// normal, se imprime Adios y  hola
var mensaje = 'hola';
if (true) {
  let mensaje = 'Adiós';
  console.log(mensaje);
}
console.log(mensaje);
// solo let, el cambio solo afecta dentro del buble por eso ADios, hola

let mensaje = 'hola';
if (true) {
  let mensaje = 'Adiós';
  console.log(mensaje);
}
console.log(mensaje);

//solo var, cambias el valor de mensaje al ultimo que has indicado Adios Adios
var mensaje = 'hola';
if (true) {
  var mensaje = 'Adiós';
  console.log(mensaje);
}
console.log(mensaje); 

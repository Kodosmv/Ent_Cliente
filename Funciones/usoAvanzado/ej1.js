let numeros = [1, 1, 2, 3, 4, 2, 7, 9];
let suma = (num) => {
  let sum = 0;
  for (const i of num) {
    sum += i;
  }
  return sum;
};

console.log(suma(numeros));

function sumRecursiva(numeros){
    if(numeros.length === 0) {
        return 0;
    }
    return numeros[0] + sumRecursiva(numeros.slice(1));
}
console.log(`Suma numeros recursiva: ${sumRecursiva(numeros)}` )
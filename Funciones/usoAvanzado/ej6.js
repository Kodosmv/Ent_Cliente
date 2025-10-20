const personas = [
  { nombre: 'Juan', edad: 17 },
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Pedro', edad: 19 },
  { nombre: 'Laura', edad: 16 },
];

let filPer = personas.filter((personas) => personas.edad > 18);
console.log(filPer);

let multPer = filPer.map((filPer) => filPer.edad * 2);
console.log(multPer);

let redPer = multPer.reduce((x, edad) => x + edad, 0);
console.log(redPer);

/* Solución mejor forma 
const resultado = personas
	.filter((persona) => persona.edad>18) // filtrar mayores de 18
	.map((persona)=> persona.edad *2)
	.reduce((acumulador, edad) => acumulador +edad, 0);

console.log(`Resultado final : ${resultado}`);*/
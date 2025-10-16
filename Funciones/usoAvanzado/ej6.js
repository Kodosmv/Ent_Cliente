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

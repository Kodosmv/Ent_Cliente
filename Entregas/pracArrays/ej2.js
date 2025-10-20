console.log(`Practica 2 :`);

let contadorNum = {};

for (let i = 1; i <= 10; i++) {
	contadorNum[i] = 0;
}
for (let i = 0; i < 10000; i++) {
  	let numero = Math.floor(Math.random() * 10) + 1;
  	contadorNum[numero]++;
}
for (let i = 1; i <= 10; i++) {
 	console.log(`Num ${i}: ${contadorNum[i]}`);
}

let contador = 0;

for (let i = 1; i < 50; i++) {
  if (i % 4 == 0) {
    contador += i;
    console.log(i);
  }
}
console.log(contador);

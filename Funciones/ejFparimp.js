let par = (num) => {
  if (num % 2 == 0) {
    return `El numero es par ${num}`;
  } else if (num == 0) {
    return `el numero es 0`;
  } else {
    return `el numero es impar ${num}`;
  }
};
console.log(par(9));

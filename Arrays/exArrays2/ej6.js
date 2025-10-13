let contador = 0;

for (let i = 20; i > 1; i--) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz ' + i);
  } else if (i % 5 == 0) {
    console.log('Buzz ' + i);
  } else if (i % 3 == 0) {
    console.log('Fizz ' + i);
  } else {
    console.log(i);
  }
}

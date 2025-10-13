 //Ex 1
alert('Bienvenido a mi pag');

// ex 2
var nombre = prompt('Dime tu nombre');
alert('Hola' + nombre + ' vete ya ');

// ex 3
var a = parseInt(prompt('Introduce el primer num:'));
var b = parseInt(prompt('Introduce el segundo numero: '));

alert('La suma de los numero es: ' + (a + b));

// ex 4
var age = parseInt(prompt('Introduce tu edad : '));
if (age >= 18) {
  alert('Eres mayor de edad ' + age);
} else {
  alert('eres menor de edad ' + age);
}

//ex 5.1
var myProd = document.getElementById('productos');
var precios = myProd.getElementsByClassName('precio');
var tam = precios.length;
var texto = document.createElement('p');
texto.textContent = 'Hay ' + tam + ' productos';
document.getElementById('log').appendChild(texto);

// ex 5.2
var myP = document.getElementById('p1');
var txt = document.createElement('p');
txt.textContent = myP.textContent;
var inn = document.createElement('p');
inn.innerHTML = myP.innerHTML; // Si uso inn.textContent si sale el span entero
document.getElementById('log').appendChild(txt); // guarda el contenido no el html
document.getElementById('log').appendChild(inn); // respeta la negrita del texto

// ex 5.3
var myN = document.getElementById('n2');
myN.textContent = 'Reposición completada. Gracias por vuestra paciencia';

// ex 5.4
var myPre = document.getElementsByClassName('precio');
for (let i = 0; i < myPre.length; i++) {
  let num = parseFloat(myPre[i].textContent);
  myPre[i].textContent = num + 0.1;
}

// ex 5.5
var newP = document.createElement('li');
newP.innerHTML = 'Tila <span class = "precio" > 2.20 </span> € ';
document.getElementById('lista').appendChild(newP);

// ex 5.6
var prim = document.getElementById('p1');
prim.innerHTML = 'Producto destacado <span class="precio">9.99</span> €';

// ex 5.7
var b = document.getElementById('n2');
b.parentNode.removeChild(b);

// ex 5.8
var alu = document.getElementsByName('alumnos');
for (let i = 0; i < alu.length; i++) {
  alu[i].setAttribute('checked', '');
}

// ex 5.9
var moreP = document.getElementById('lista');
var newTxt = document.createElement('p');
var pp = moreP.getElementsByClassName('precio').length;
newTxt.textContent = 'Hay ' + pp + ' elementos en la lista';
document.getElementById('log').appendChild(newTxt);

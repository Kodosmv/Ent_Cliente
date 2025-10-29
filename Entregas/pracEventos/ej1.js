let saludar = document.getElementById("saludar");
let cajita = document.getElementById("box");
let numRan = document.getElementById("numRan");
let reset = document.getElementById("reset");
// saludar
saludar.onclick = function() {
    let saludo = 'Hola :D';
    ver.textContent =  saludo;
};
// crear caja
cajita.onclick = function() {
    let box = document.createElement("div");
    box.textContent = "Nueva Caja";
    box.style.backgroundColor = "red";
    box.style.width="200px";
    box.style.height="200px";
  ver.appendChild(box);
};
//num random
numRan.onclick = function() {
    let numero = Math.floor(Math.random() * 100) + 1;
    ver.textContent = "Número aleatorio: " + numero;
};
//reiniciar
reset.onclick = function() {
    ver.innerHTML = "";
};
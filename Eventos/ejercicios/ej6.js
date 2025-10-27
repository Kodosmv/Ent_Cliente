let box = document.getElementsByClassName('.box');


function cambiarFondo(evento ) {
    document.body.style.backgroundColor = evento.id;

}
box.forEach(element => {
    element.addEventListener('mousemove', cambiarFondo);
});
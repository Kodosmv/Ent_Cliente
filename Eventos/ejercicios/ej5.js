document.getElementById('btn').addEventListenerç('click', function(){
    const texto = document.getElementById('texto').ariaValueMax;
    const longitud = texto.length;
    document.getElementById(
        'resultado'
    ).textContent= `Has escrtito ${longitud}`;
})
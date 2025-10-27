function saludar(nombre){

    alert('Hola '+ nombre );
}

//window.addEventListener('DOMContentLoaded', function(){
    const radios = document.getElementsByName('persona');

    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', function(){
            saludar(this.value);
        });
        
    }
//})

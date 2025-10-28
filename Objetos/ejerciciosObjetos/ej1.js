let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    
    presentar : function(){

        return `Hola (${persona.nombre},${persona.profesion})`;
    },
    cumplirAnios : function(){
        this.edad+= 1;
        return `Tiene. : (${this.edad})`;
    }

}
// ej1 mostrar nombre y profesión
console.log(persona.presentar());
// ej2 años
console.log(persona.cumplirAnios());
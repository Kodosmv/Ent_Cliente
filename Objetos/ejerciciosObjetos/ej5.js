class Animal {
    constructor (nombre, edad){
        this.edad = edad;
        this.nombre= nombre;
    
    }
    emitirSonido(){
        return `Sonido Generico`;
    }
}
class Perro extends Animal{
    constructor (nombre, edad){
        super (nombre, edad);
    }
    emitirSonido(){
        return '!Guau!'
    }
}
let p2 = new Animal('Jose', 5);
let p1 = new Perro('Juan', 2);
console.log(p1);
console.log(p1.emitirSonido());
console.log(p2.emitirSonido());
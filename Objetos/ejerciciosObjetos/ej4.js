class Coche {
    constructor(marca,modelo,ano,){
        this.marca= marca;
        this.modelo= modelo;
        this.ano= ano;
    }
    mostrarDAtos(){
    return `La marca ${this.marca}, El modelo ${this.modelo}, El año ${this.ano}`;

    }
    
} 



let p = new Coche('Volvo', 'M40', '2012');
console.log(p.mostrarDAtos());

let b = new Coche('Audi', 'aa', '2000');
console.log(b.mostrarDAtos());
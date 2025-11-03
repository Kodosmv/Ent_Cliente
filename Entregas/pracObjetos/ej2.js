//clase ordenador
class Ordenador{
    constructor(marca, modelo, memoria=4, discoDuro=512, pulgadas=17){
         
        this.marca = marca;
        this.modelo = modelo;
        this.discoDuro = discoDuro;
        this.memoria = memoria;
        this.pulgadas = pulgadas; 
    }
    toString(){
        return 'Marca : '+ this.marca +', Modelo: '+ this.modelo +', Memoria: '+this.memoria+', Disco Duro: ' + this.discoDuro +' Pulgadas : '+ this.pulgadas 

    }

}
//clase portatil
class Portatil extends Ordenador{
    constructor(marca, modelo, memoria=4, discoDuro=256, pulgadas=12, autonomia = 4){
        super(marca, modelo, memoria, discoDuro, pulgadas)
       this.autonomia = autonomia;
    }
    toString(){
        return super.toString()+ ' Autonomia : '+ this.autonomia;
    }
}

let o1 = new Ordenador('Hp','345');
console.log(o1.toString());
let p1 = new Portatil('hp', '234','6');
console.log(p1.toString());
function ej2(){
    let s = '';

    let o2 = new Ordenador('Lenovo', '58');
    let p2 = new Portatil('Apel', '694', 9);
    
    s += 'Ordenador: ' + o2.toString() + '\n';  
    s += 'Portátil: ' + p2.toString() + '\n';

    document.getElementById('sol').textContent = s;
}
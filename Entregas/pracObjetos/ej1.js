class Rectangulo{
    constructor(width, height){
        
        if(width <=0 && height<=0){
            this.height= 1;
            this.width=1;
        }else if(width <=0 ){ 
            this.width=1;
            this.height= height;
        }else if(height<=0){
            this.height= 1;
            this.width= width;
        }else{
            this.width= width;
            this.height= height;
        }
    }
    cambiarDimesiones( num1 ,  num2){
        if(num1 <=0 && num2<=0){
            this.height= 1;
            this.width=1;
        }else if(num1 <=0 ){ 
            this.width=1;
            this.height= num2;
        }else if(num2<=0){
            this.height= 1;
            this.width= num1;
        }else{
            this.width= num1;
            this.height= num2;
        }
    }
    calcularArea(){
        return this.width*this.height;
    }
    copiaRectan(){
        let rCopia= new Rectangulo(this.width, this.height);
        return rCopia;

    }
    comparaRectan(r2){
        if(this.width > r2.width){
            return `el primero es mayor`;
        }else if(this.width<r2.width){
            return `el primero es menor`;
        }else{
            return `son iguales`;
        }

    }
}
let r1= new  Rectangulo(3,4);
let r2= new Rectangulo(3,4);
console.log(r1.calcularArea());
console.log(r1.comparaRectan(r2));

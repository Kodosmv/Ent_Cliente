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
    cambiarDimensiones( num1 ,  num2){
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
            return ` mayor`;
        }else if(this.width<r2.width){
            return ` menor`;
        }else{
            return `son iguales`;
        }

    }
}
let r= new  Rectangulo(3,4);
let r0= new Rectangulo(3,4);
console.log(r.calcularArea());
console.log(r.comparaRectan(r0));

function ej1() {
    let salida = '' ;

   
    let r1 = new Rectangulo(3, 4); 
    let r2 = new Rectangulo(5, 2); 

    salida += 'Calcular el área : área de r1 = ' + r1.calcularArea() + ', área de r2 = ' + r2.calcularArea() + '\n';
    salida += 'Comparar: El rectángulo r1 es ' + r1.comparaRectan(r2) + ' que el rectángulo r2 \n';
    let copiaR1 = r1.copiaRectan();
    salida += 'Copiar: Copia de r1 = ancho: ' + copiaR1.width + ', alto: ' + copiaR1.height + '\n';

   
    r2.cambiarDimensiones(-2, 6); 
    salida += 'Modificar datos: nuevo r2 = ancho: ' + r2.width + ', alto: ' + r2.height + ', área: ' + r2.calcularArea() + '\n';

   
    document.getElementById('sol').textContent = salida;
}
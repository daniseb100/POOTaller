class Empleado{
    constructor(nom,ape,gen,fna,fin,sal,imp){
        this.nom=nom;
        this.ape=ape;
        this.gen=gen;
        this.fna=fna;
        this.fin=fin;
        this.sal=sal;
        this.imp=imp;
    }
    darNom(){
        return this.nom;
    }
    darApe(){
        return this.ape;
    }
    darGen(){
        return this.gen;
    }
    darFna(){
        return this.fna;
    }
    darFin(){
        return this.fin;
    }
    darSal(){
        return this.sal;
    }
    actualizarSal(sal){
        this.sal=sal;
    }
    darImp(){
        return this.imp;
    }
   actualizarImp(imp){
        this.imp=imp;   
   }

}
let emp1= new Empleado("Pedro","Mantilla","M","16-6-1982","5-4-2000",1500000,19);
document.getElementById('nombre').innerHTML = emp1.darNom();
document.getElementById('ape').innerHTML = emp1.darApe();
document.getElementById('sex').innerHTML = emp1.darGen();
document.getElementById('fna').innerHTML = emp1.darFna();
document.getElementById('fing').innerHTML = emp1.darFin();
document.getElementById('salario').innerHTML = ""+emp1.darSal();
document.getElementById('impuesto').innerHTML = ""+emp1.darImp();

function calcularEdad() {

    document.getElementById('edad').innerHTML = ""+calcularYeards(emp1.fna);
}

function calcularAnt() {
    document.getElementById('ant').innerHTML = ""+calcularYeards(emp1.fin);
}

function calcularYeards( fecha ){
    // Si la fecha es correcta, calculamos la edad
   var values = fecha.split("-");

   var yeard = values[2];

   // cogemos los valores actuales
   var fecha_hoy = new Date();
   var ahora_yeard = fecha_hoy.getYear();
  
   // realizamos el calculo
   var edad = (ahora_yeard + 1900) - yeard;
   
   return edad;

}

function prestaciones(){
    let pres = (calcularYeards(emp1.fin)*emp1.sal)/12;
    document.getElementById('pres').innerHTML = ""+pres;
}

function nuevoSal(){
	let cant = prompt("Introdusca Nuevo Salario");
	//Convertir txt a entero
	let c = parseInt(cant);
	emp1.actualizarSal(c);
	document.getElementById('salario').innerHTML = ""+emp1.darSal();
}


function nuevoImp(){
    let canti = prompt("Introduzca Nuevo Salario");
    //Convertir txt a entero
    let c = parseInt(canti);
    emp1.actualizarImp(c);
    document.getElementById('impuesto').innerHTML = ""+emp1.darImp();
}


function impuestos(){

    let impu = (emp1.sal)*(emp1.imp)/100;
    document.getElementById('imp').innerHTML = ""+impu;
    alert("La cantidad de impuestos a pagar es de:" + impu);

}

function SalarioTotal(){

    let salt = (emp1.sal)-(emp1.sal)*(emp1.imp)/100;
    document.getElementById('salt').innerHTML = ""+salt;
    alert("El salario total libre es de:" + salt);

}


function ImpuestosPrestaciones(){

    let imppre = 
    document.getElementById('imppre').innerHTML = ""+imppre;
    alert("La cantidad de impuestos a pagar por las prestaciones es de:" + imppre);

}

function SalarioTotalPrestaciones(){

    let salpre = ((calcularYeards(emp1.fin)*emp1.sal)/12)-((calcularYeards(emp1.fin)*emp1.sal)/12)*(emp1.sal)-(emp1.sal)*(emp1.imp)/100;
    document.getElementById('salpre').innerHTML = ""+salpre;
    alert("la cantidad libre de las prestaciones es de:" + salpre);

}
class Empleado {
    constructor(nomb, apel, gen, fna, fin, sal, imp) {
        this.nom = nomb;
        this.ape = apel;
        this.gen = gen;
        this.fna = fna;
        this.fin = fin;
        this.sal = sal;
        this.imp = imp;
    }
    obtenerNombre() {
        return this.nom;
    }
    obtenerApe() {
        return this.ape;
    }
    obtenerGene() {
        return this.gen;
    }
    darFna() {
        return this.fna;
    }
    darFin() {
        return this.fin;
    }
    darSal() {
        return this.sal;
    }
    actualizarSal(sal) {
        this.sal = sal;
    }
    darImp() {
        return this.imp;
    }
    actualizarImp(imp) {
        this.imp = imp;
    }

}
let empleado = new Empleado("Daniel", "Calpa", "M", "16-6-1999", "5-4-2015", 1500000, 19);
document.getElementById('nombre').innerHTML = empleado.obtenerNombre();
document.getElementById('ape').innerHTML = empleado.obtenerApe();
document.getElementById('sex').innerHTML = empleado.obtenerGene();
document.getElementById('fna').innerHTML = empleado.darFna();
document.getElementById('fing').innerHTML = empleado.darFin();
document.getElementById('salario').innerHTML = "" + empleado.darSal();
document.getElementById('impuesto').innerHTML = "" + empleado.darImp();

function calcularEdad() {

    document.getElementById('edad').innerHTML = "" + calcularYeards(empleado.fna);
}

function calcularAnt() {
    document.getElementById('ant').innerHTML = "" + calcularYeards(empleado.fin);
}

function calcularYeards(fecha) {
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

function prestaciones() {
    let pres = (calcularYeards(empleado.fin) * empleado.sal) / 12;
    document.getElementById('pres').innerHTML = "" + pres;
}

function nuevoSal() {
    let cant = prompt("Por favor Digite Nuevo Salario");
    //Convertir txt a entero
    let c = parseInt(cant);
    empleado.actualizarSal(c);
    document.getElementById('salario').innerHTML = "" + empleado.darSal();
}


function nuevoImp() {
    let canti = prompt("Por favor Digite el nuevo Impuesto demandado");
    //Convertir txt a entero
    let c = parseInt(canti);
    empleado.actualizarImp(c);
    document.getElementById('impuesto').innerHTML = "" + empleado.darImp();
}


function impuestos() {

    let impu = (empleado.sal) * (empleado.imp) / 100;
    document.getElementById('imp').innerHTML = "" + impu;
    alert("La cantidad de impuestos a pagar es de:" + impu);

}

function SalarioTotal() {

    let salt = (empleado.sal) - (empleado.sal) * (empleado.imp) / 100;
    document.getElementById('salt').innerHTML = "" + salt;
    alert("El salario total libre es de:" + salt);

}


function ImpuestosPrestaciones() {

    let imppre = ((empleado.sal) - (empleado.sal) * (empleado.imp) / 100) * calcularYeards(empleado.fin)/12 * (empleado.imp) / 100  ;
    document.getElementById('imppre').innerHTML = "" + imppre;
    alert("La cantidad de impuestos a pagar por las prestaciones es de:" + imppre);

}

function SalarioTotalPrestaciones() {

    let salpre = ((empleado.sal) - (empleado.sal) * (empleado.imp) / 100) * calcularYeards(empleado.fin)/12 -(((empleado.sal) - (empleado.sal) * (empleado.imp) / 100) * calcularYeards(empleado.fin)/12 * (empleado.imp) / 100);
    document.getElementById('salpre').innerHTML = "" + salpre;
    alert("la cantidad libre de las prestaciones es de:" + salpre);

}
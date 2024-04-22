const INTERVALO =10;

console.log("intervalo sera de "+ INTERVALO + "minutos");
//INTERVALO=15;

//var intervalo=15;
//console.log("intervalo sera de "+ intervalo + "minutos var" );
//var intervalo=20;
//console.log("intervalo sera de "+ intervalo + "minutos var" );

let varb= true;
let varn= 3.141592;
let vars= "texto string";
let varl;


console.log("para la variable varb="+varb+"con el tipo dato="+typeof varb);
console.log("para la variable varn="+varn+"con el tipo dato="+typeof varn);
console.log("para la variable  vars="+vars+"con el tipo dato="+typeof vars);
console.log("para la variable varl="+varl+"con el tipo dato="+typeof varl);

varl=vars
console.log("para la variable varl="+varl+"con el tipo dato="+typeof varl);



let var1 = 15.25;     // Aquí, la coma se interpretará como un operador, por lo que var1 será 15.
let var2 = 0;         // var2 se asigna directamente con el valor 0.
let var3 = true;      // var3 se asigna directamente con el valor booleano true.
let var4 = "100";     // var4 se asigna directamente con la cadena "100".
let varx;             // Se declara vars sin inicializarla.
//implicitas
varx = var1 ;  
varx = var2 ;
console.log("para la variable implicita="+varx+"con el tipo dato="+typeof varx);
varx = var3 ;    
console.log("para la variable implicita="+varx+"con el tipo dato="+typeof varx);
varx = var4 ;    
console.log("para la variable implicita="+varx+"con el tipo dato="+typeof varx);

//explicitas
varx=var1+var2;
console.log("para la variable explicita="+varx+"con el tipo dato="+typeof varx);


varx = Number(var2) + Number(var3);
console.log("para la variable explicita=" + varx + " con el tipo dato=" + typeof varx);

varx = Number(var3) + Number(var4);
console.log("para la variable explicita=" + varx + " con el tipo dato=" + typeof varx);

/*
let carrito=[
    "leche",1,"carne",2,"papa",3,"fideos",1
];

console.log("item:"+carrito[0]);
console.log("cantidad:"+carrito[1]);
console.log("item:"+carrito[2]);
console.log("cantidad:"+carrito[3]);
console.log("item:"+carrito[4]);
console.log("cantidad:"+carrito[5]);
console.log("item:"+carrito[6]);
console.log("cantidad:"+carrito[7]);

carrito.push("pan", 2);
console.log(carrito);
*/

let carrito = [
    { nombre: 'leche', cantidad: 1, precio: 7.5 },
    { nombre: 'carne', cantidad: 2, precio: 10 },
    { nombre: 'fideo', cantidad: 1, precio: 2 },
    { nombre: 'papa', cantidad: 3, precio: 4 }
];

let carrito2 = [
    { nombre: 'leche', cantidad: 1, precio: 7.5 },
    { nombre: 'carne', cantidad: 2, precio: 10 },
    { nombre: 'fideo', cantidad: 1, precio: 2 },
    { nombre: 'papa', cantidad: 3, precio: 4 }
];

function compararPorNombre(a, b) {
    if (a.nombre < b.nombre) {
        return -1;
    }
    if (a.nombre > b.nombre) {
        return 1;
    }
    return 0;
}

carrito.sort(compararPorNombre);

console.log("Carrito ordenado por nombre:");
console.log(carrito);

let item = { nombre: 'arroz', cantidad: 5, precio: 1 };
carrito2.push(item);
carrito2.sort(compararPorNombre);
console.log("Carrito con nuevo item:");
console.log(carrito2);

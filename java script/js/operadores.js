/*
let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b=: "+a);
a=11;
a+=b;
console.log("a+=b: "+a);
a++;
console.log("a++: "+a);
a--;
console.log("a--: "+a);

if(a%2==0)
console.log("a es PAR");
else
console.log("a es IMPAR");
console.log(a+b+Number("5"));
*/
//Generar un array de 10 Nombre: "juan" y Notas:random de 20-100.
//Mostrar la nota mayor, menor y promedio

// Función para generar un número aleatorio entre un rango dado
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar un array de 10 elementos con nombres aleatorios y notas calculadas
let nombres = ["Juan", "Pedro", "María", "Luis", "Ana", "Carlos", "Laura", "Miguel", "Sofía", "Diego"];
let array = nombres.map(nombre => ({ nombre, nota: generarNumeroAleatorio(20, 100) }));

// Calcular la nota mayor, menor y promedio
let notas = array.map(objeto => objeto.nota);
let notaMayor = Math.max(...notas);
let notaMenor = Math.min(...notas);
let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;

console.log("Array:", array);
console.log("Nota mayor:", notaMayor);
console.log("Nota menor:", notaMenor);
console.log("Promedio:", promedio);
/*
// Compra de supermercado
let carrito = [
  "leche", 1,
  "carne", 2,
  "papa", 3,
  "fideos", 4
];

// Ordenar el carrito alfabéticamente por los nombres de los items
carrito.sort();

console.log("item: " + carrito[0]);
console.log("Cantidad: " + carrito[1]);
console.log("item: " + carrito[2]);
console.log("Cantidad: " + carrito[3]);
console.log("item: " + carrito[4]);
console.log("Cantidad: " + carrito[5]);
console.log("item: " + carrito[6]);
console.log("Cantidad: " + carrito[7]);

console.log("IMPRESION COMPLETA");
console.log(carrito);
*/
/*
//añadir nuevo itm y cantidad
carrito.push("cebolla",5);
console.log(carrito);
*/
/*
let item = {nombre:'Leche',cantidad:1};
console.log("item: "+item.nombre);
console.log("cantidad: "+item.cantidad);

let carrito=[{nombre: 'Leche',cantidad:1},
             {nombre: 'Carne',cantidad:2},
             {nombre: 'fideo',cantidad:1},
             {nombre: 'papa',cantidad:3}];
console.log(carrito);
item={nombre: 'arroz',cantidad:5};
carrito.push(item);
console.log(carrito)
*/

//adicionar item del precio y el total  
let carrito=[{nombre: 'Leche',cantidad:1,precio:7.5},
             {nombre: 'Carne',cantidad:2,precio:15},
             {nombre: 'fideo',cantidad:1,precio:10},
             {nombre: 'papa',cantidad:3,precio:6}];

             console.log("Carrito con precios y totales:");
             carrito.forEach((item) => {
               // Calcular precio total
               const precioTotal = item.cantidad * item.precio;
             
               console.log("Nombre: " + item.nombre);
               console.log("Cantidad: " + item.cantidad);
               console.log("Precio: Bs" + item.precio);
               console.log("Precio Total: Bs" + precioTotal);
               console.log("------------------------");
             });

item={nombre: 'pilfrut',cantidad:5,precio:1.5};
carrito.push(item);
const precioTotal = item.cantidad * item.precio;
             
console.log("Nombre: " + item.nombre);
console.log("Cantidad: " + item.cantidad);
console.log("Precio: Bs" + item.precio);
console.log("Precio Total: Bs" + precioTotal);
console.log("------------------------");
console.log(carrito);

//buscar ffunciones para ordenar un array.
//.sort orden alfabetico o numerico 
/*
let numeros=[4,2,6,1,8,3,10];

numeros.sort((a,b) => a - b);
console.log(numeros);
*/
console.log("IMPRESION ORDENADA POR PRECIO");
let carritoOrdenadoPorPrecio = carrito.slide().sort((a,b) => a.precio - b.precio);
console.log(carritoOrdenadoPorPrecio);

console.log("IMPRESION ORDENADA POR NOMBRE");
let carritoOrdenadoPorNombre = carrito.slide().sort((a,b) => a.nombre.localeCompare (b.nombre));
console.log(carritoOrdenadoPorNombre);

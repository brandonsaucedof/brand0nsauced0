
// Obtener el valor del color seleccionado
var selectedColor = prompt("Selecciona un color (en formato hexadecimal, por ejemplo, #ff0000 para rojo):");

// Obtener el primer número
var num1 = parseFloat(prompt("Ingresa el primer número:"));

// Obtener el segundo número
var num2 = parseFloat(prompt("Ingresa el segundo número:"));

// Calcular la suma de los números
var suma = num1 + num2;

// Mostrar tanto el color como la suma en la consola
console.log("SALIDA:");
console.log("Color seleccionado:", selectedColor);
console.log("La suma de", num1, "y", num2, "es:", suma);

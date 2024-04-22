// Función para verificar si un número es primo
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

// Función para generar N números primos menores que 110 y almacenarlos en un array
function generarNumerosPrimos(N) {
    const primos = [];
    let contador = 0;
    let numero = 2;

    while (contador < N) {
        if (esPrimo(numero) && numero < 110) {
            primos.push(numero);
            contador++;
        }
        numero++;
    }

    return primos;
}

// Definir la cantidad de números primos que se desean generar
const cantidadPrimos = 28; // Puedes cambiar este valor según lo que necesites

// Generar los números primos y almacenarlos en un array
const numerosPrimos = generarNumerosPrimos(cantidadPrimos);

// Imprimir los números primos generados
console.log("Números primos generados menores que 110:");
console.log(numerosPrimos);
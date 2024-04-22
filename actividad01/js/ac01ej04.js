function contarLetraO(frase) {
    // Convertir la frase a minúsculas para contar las letras sin distinguir mayúsculas y minúsculas
    frase = frase.toLowerCase();
    let contadorO = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === 'o') {
            contadorO++;
        }
    }

    return contadorO;
}

function obtenerVocales(frase) {
    frase = frase.toLowerCase();
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let vocalesEncontradas = [];

    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i]) && !vocalesEncontradas.includes(frase[i])) {
            vocalesEncontradas.push(frase[i]);
        }
    }

    return vocalesEncontradas;
}

function contarVocales(frase) {
    frase = frase.toLowerCase();
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let conteoTotal = 0;
    let conteoVocales = {};

    for (let vocal of vocales) {
        let contador = 0;
        for (let i = 0; i < frase.length; i++) {
            if (frase[i] === vocal) {
                contador++;
                conteoTotal++;
            }
        }
        if (contador > 0) {
            conteoVocales[vocal] = contador;
        }
    }

    conteoVocales['total de vocales'] = conteoTotal;

    return conteoVocales;
}


function main() {
    const frase = prompt("Ingrese una frase:");
    const cantidadO = contarLetraO(frase);
    const vocales = obtenerVocales(frase);
    const conteoVocales = contarVocales(frase);

    console.log(`La letra 'o' aparece ${cantidadO} veces.`);
    console.log(`Las vocales que aparecen son: ${vocales.join(', ')}.`);
    console.log("Cuántas veces aparecen cada una de las vocales:");
    for (let vocal in conteoVocales) {
        console.log(`${vocal}: ${conteoVocales[vocal]}`);
    }
}

// Llamar a la función principal
main()
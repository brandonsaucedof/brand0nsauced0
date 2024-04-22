function combinarNombresApellidos(nombres, apellidos) {
    // Crear un array para almacenar los nombres completos
    let nombresCompletos = [];

    // Recorrer los arrays de nombres y apellidos para combinarlos
    for (let nombre of nombres) {
        for (let apellido of apellidos) {
            // Combinar nombre y apellido y formatearlos
            let nombreCompleto = formatearNombre(nombre) + ' ' + formatearNombre(apellido);
            nombresCompletos.push(nombreCompleto);
        }
    }

    // Mezclar el array de nombres completos de forma aleatoria
    nombresCompletos = shuffleArray(nombresCompletos);

    return nombresCompletos;
}

function formatearNombre(nombre) {
    // Dividir el nombre en palabras separadas por espacio
    let palabras = nombre.toLowerCase().split(' ');

    // Convertir la primera letra de cada palabra en mayúscula
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substring(1);
    }

    // Unir las palabras nuevamente en un solo string
    return palabras.join(' ');
}

// Función para mezclar un array de forma aleatoria
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Arrays de nombres y apellidos
const nombres = ['juan', 'maria', 'pedro', 'carlos', 'laura', 'javier'];
const apellidos = ['perez', 'gonzalez', 'rodriguez', 'fernandez', 'lopez', 'sanchez'];

// Generar y mostrar los nombres completos combinados y formateados
const nombresCompletos = combinarNombresApellidos(nombres, apellidos);
console.log("Nombres completos combinados y formateados:");
console.log(nombresCompletos);
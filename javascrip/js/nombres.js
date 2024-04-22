const CANTIDAD_VARIACIONES = 20;

function obtenerAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function cargarNombresCompletos(cantidad) {
    
    let nombres = ["Juan", "María", "Luis", "Ana", "Pedro", "Laura", "Diego", "Sofía", "Carlos", "Elena",
               "Miguel", "Claudia", "Pablo", "Lucía", "Javier", "Valeria", "Andrés", "Camila", "Fernando", "Isabel"];
    let apellidos = ["García", "Martínez", "López", "González", "Rodríguez", "Pérez", "Sánchez", "Romero", "Fernández", "Gutiérrez",
                 "Díaz", "Muñoz", "Álvarez", "Jiménez", "Ruiz", "Hernández", "Torres", "Serrano", "Flores", "Ortega"];


    let nombresCompletos = Array.from({ length: cantidad }, () => {
        let nombreAleatorio = obtenerAleatorio(nombres);
        let apellidoAleatorio = obtenerAleatorio(apellidos);
        return `${nombreAleatorio} ${apellidoAleatorio}`;
    });

    return nombresCompletos;
}

let nombresCompletos = cargarNombresCompletos(CANTIDAD_VARIACIONES);

function imprimirNombresCompletos(){
console.log("Nombres completos aleatorios:", nombresCompletos)};

imprimirNombresCompletos();
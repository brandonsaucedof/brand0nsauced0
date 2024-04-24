// Función para inicializar el registro de estudiantes
function iniciarRegistro() {
    // Función para manejar el envío del formulario
    function handleSubmit(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        
        // Obtener los valores del formulario
        var ci = $("#ci").val();
        var nombre = $("#nombre").val();
        var fechaNacimiento = $("#fechaNacimiento").val();
        var direccion = $("#direccion").val();

        // Crear una fila de la tabla con los datos ingresados
        var fila = '<tr><td>' + ci + '</td><td>' + nombre + '</td><td>' + fechaNacimiento + '</td><td>' + direccion + '</td></tr>';

        // Agregar la fila a la tabla
        $("#tablaEstudiantes tbody").append(fila);

        // Limpiar el formulario
        $("#registroForm")[0].reset();
    }

    // Manejar el envío del formulario
    $("#registroForm").submit(handleSubmit);
}

// Esperar a que el DOM esté listo
$(document).ready(function(){
    iniciarRegistro();
});

function mostrarFormulario(idFormulario) {
    // Ocultar todos los formularios
    var formularios = document.querySelectorAll('.content');
    formularios.forEach(function(formulario) {
        formulario.style.display = 'none';
    });
    
    // Mostrar el formulario correspondiente
    var formularioMostrar = document.getElementById(idFormulario);
    if (formularioMostrar) {
        formularioMostrar.style.display = 'block';
    }
}
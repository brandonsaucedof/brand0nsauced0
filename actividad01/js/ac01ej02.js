// Función para validar el usuario y la contraseña
function validarUsuarioYContraseña(usuario, contraseña) {
    const usuariosValidos = ['juan', 'pedro', 'maria', 'raul'];
    const contraseñaValida = 'D153n0W3b2';

    // Verificar si el usuario está en la lista de usuarios válidos y la contraseña es correcta
    if (usuariosValidos.includes(usuario) && contraseña === contraseñaValida) {
        return true; // Usuario y contraseña válidos
    } else {
        return false; // Usuario o contraseña inválidos
    }
}

// Función principal para solicitar el nombre de usuario y la contraseña
function ingresarCredenciales() {
    let usuario = prompt('Ingrese su nombre de usuario:');
    let contraseña = prompt('Ingrese su contraseña:');

    // Validar usuario y contraseña
    if (validarUsuarioYContraseña(usuario.toLowerCase(), contraseña)) {
        console.log('Inicio de sesión exitoso.');
    } else {
        console.log('Nombre de usuario o contraseña incorrectos.');
    }
}

// Llamar a la función para iniciar el proceso de inicio de sesión
ingresarCredenciales();

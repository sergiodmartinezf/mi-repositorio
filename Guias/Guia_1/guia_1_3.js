function validarContrasena(contrasena) {

    if (contrasena.length < 8) {
        return false;
    }
 
    if (!/[A-Z]/.test(contrasena)){
        return false;
    }
    if(!/\d/.test(contrasena)){
        return false;
    }

    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(contrasena)) {
        return false;
    }
    
    return true
}
const contrasena = prompt('Escribe una contraseña:');
var validar = validarContrasena(contrasena);

while (!validar) {
    alert('La contraseña no cumple con los requisitos, inténtalo de nuevo.');
    const nuevaContrasena = prompt('Escribe una contraseña:');
    validar = validarContrasena(nuevaContrasena);
}

alert('La contraseña es válida.');
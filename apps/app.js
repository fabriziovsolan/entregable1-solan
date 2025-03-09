// Credenciales de ingreso validas para la aplicacion
let Credenciales = {
    username: 'admin',
    password: 'admin'
};

function solicitarCredencial() {
    let username = prompt('Ingrese su nombre de usuario');
    let password = prompt('Ingrese su contraseña');
    return { username, password };
};

function validarCredencial(credencialesIngresadas) {
    if (credencialesIngresadas.username === Credenciales.username && credencialesIngresadas.password === Credenciales.password) {
        alert('Credenciales correctas');
    } else {
        alert('Credenciales incorrectas');
    }
}


let credencialesIngresadas = solicitarCredencial();
validarCredencial(credencialesIngresadas);
function validar_longitud(nickname) {
    const longitud = nickname.length;
    if (longitud >= 9) {
        return true;
    } else {
        return false;
    };
};

function validar_letras_mayus(nickname) {
    const validar_letras_mayus = /[A-Z]/.test(nickname);
    if (validar_letras_mayus) {
        return true;
    } else {
        return false;
    };
};

function validar_letras_min(nickname) {
    const validar_letras_min = /[a-z]/.test(nickname);
    if (validar_letras_min) {
        return true;
    } else {
        return false;
    };
};

function validar_numeros(nickname) {
    const validar_numeros = /[0-9]/.test(nickname);
    if (validar_numeros) {
        return true;
    } else {
        return false;
    };
};

function validar_inicio_y_fin(nickname) {
    const inicio = nickname[0];
    const validar_inicio = /[0-9]/.test(inicio);
    const fin = nickname[nickname.length - 1];
    let validar_fin = "";
    const validar_fin1 = /[A-Z]/.test(fin);
    const validar_fin2 = /[a-z]/.test(fin);
    if (validar_fin1 || validar_fin2) {
        validar_fin = true;
    };
    if (validar_inicio && validar_fin) {
        return true;
    } else {
        return false;
    };
};

function validar_nickname_comleto(nickname) {
    const val1 = validar_longitud(nickname);
    const val2 = validar_letras_mayus(nickname);
    const val3 = validar_letras_min(nickname);
    const val4 = validar_numeros(nickname);
    const val5 = validar_inicio_y_fin(nickname);
    if (val1 && val2 && val3 && val4 && val5) {
        return true;
    } else {
        return false;
    };
};

while (true) {
    var nickname = prompt("Ingrese un nombre de usuario: ", 0);
    if (nickname != "") {
        break;
    };
};

const respuesta = validar_nickname_comleto(nickname);
if (respuesta) {
    alert("El nombre de usuario es válido");
} else {
    alert("El nombre de usuario no cumple con los requisitos solicitados");
};


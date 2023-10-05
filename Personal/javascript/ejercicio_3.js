var clave = prompt("Ingrese clave: ", 0);

respuesta = validar(clave);

function validar(contra) {

    const val_1 = tiene_8car(contra);
    const val_2 = tiene_mayuscula(contra);
    const val_3 = tiene_numero(contra);
    const val_4 = tiene_car_esp(contra);

    if (val_1 && val_2 && val_3 && val_4) {
        alert("La contraseña es válida");
    } else {
        let params = "";
        if (val_1 == false) {
            params = params + "La contraseña posee menos de 8 caracteres" + "\n";
        };
        if (val_2 == false) {
            params = params + "La contraseña no tiene letras mayúsculas" + "\n";
        };
        if (val_3 == false) {
            params = params + "La contraseña no tiene números" + "\n";
        };
        if (val_4 == false) {
            params = params + "La contraseña no tiene carácteres especiales" + "\n";
        };
        alert("La contraseña no cumple con los requisitos de seguridad. Específicamente:" + "\n" + params);
    };

};

function tiene_8car(contra) {
    const long = contra.length;
    if (long >= 8) {
        return true;
    } else {
        return false;
    };
};

function tiene_mayuscula(contra) {
    const buscar = contra.search(/[A-Z]/);
    if (buscar == -1) {
        return false;
    } else {
        return true;
    };
};

function tiene_numero(contra) {
    const buscar = contra.search(/[0-9]/);
    if (buscar == -1) {
        return false;
    } else {
        return true;
    };
};

function tiene_car_esp(contra) {
    const buscar = contra.search(/[!@#$%^&*()_+{}[\]:;<>,.?~\-]/);
    if (buscar == -1) {
        return false;
    } else {
        return true;
    };
};


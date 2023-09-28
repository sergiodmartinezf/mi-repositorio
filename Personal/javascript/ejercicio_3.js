var clave = prompt("Ingrese clave: ", 0);

function buscar_mayus(contra) {
    buscar = contra.search(/ABCDEFGHIJKLMNOPQRSTUVWXYZ/);
    if (buscar == -1) {
        alert("no hay mayuscula")
    } else {
        alert("hay mayuscula");
    };
};

let respuesta = buscar_mayus(clave);
function string_a_number_array(cadena) {
    let array_cadena = cadena.split(',');
    const cant_elementos = array_cadena.length;
    for (let i = 0; i < cant_elementos; i++) {
        array_cadena[i] = Number(array_cadena[i]);
    };
    return array_cadena;
};

function buscar_mayor(arreglo) {
    const numero_mayor = Math.max(...arreglo);
    return numero_mayor;
};

function validar(arreglo) {
    const cant_elementos = arreglo.length;
    let res = true;
    for (let i = 0; i < cant_elementos; i++) {
        if (arreglo[i] != "number") {
            res = false;
        };
    };
    return res;
};

var secuencia = prompt("Ingrese una secuencia de números separados por comas: ", 0);

const res1 = string_a_number_array(secuencia);
const res2 = validar(res1);

if (res2 == true) {
    const res3 = buscar_mayor(res1);
    alert(`El número más grande de los ingresados es ${res3}`);
} else {
    alert(`La secuencia ingresada no es válida`);
};
 
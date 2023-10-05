function string_a_number_array(cadena) {
    let array_cadena = cadena.split(',');
    const cant_elementos = array_cadena.length;
    for (let i = 0; i < cant_elementos; i++) {
        array_cadena[i] = Number(array_cadena[i]);
    };
    return array_cadena;
};

function buscar_mayor(arreglo) {
};

var secuencia = prompt("Ingrese una secuencia de números separados por comas: ", 0);

res = string_a_number(secuencia);
 
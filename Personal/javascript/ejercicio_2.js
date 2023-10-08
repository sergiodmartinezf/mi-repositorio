let oracion = prompt("Ingrese una oración: ", 0);

let arreglo_oracion = oracion.split(" ");

let cant_palabras = arreglo_oracion.length;

let cant_palabras_corregido = cant_palabras;

for (let i = 0; i <= cant_palabras; i++) {
    if (arreglo_oracion[i] == " " || arreglo_oracion[i] == "") {
        cant_palabras_corregido = cant_palabras_corregido - 1;
    };
};

alert(`La oración "${oracion}" posee ${cant_palabras_corregido} palabras`);

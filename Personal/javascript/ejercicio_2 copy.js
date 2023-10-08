// Recibe la oración.
var oracion = prompt("Ingrese una oración: ", 0);

longitud = oracion.length;


// Variable inicializada de total de palabras en oración.
var totalpalabras = 0;

// 
for (var i = 1; i <= longitud; i++) {
    if (oracion[i] == " " && oracion[i-1] != " ") {
        totalpalabras = totalpalabras + 1;
    };
};


// Mostrar oración y número de palabras.
alert("Oración ingresada: " + oracion + "\n" + "Cantidad de palabras: " + totalpalabras)

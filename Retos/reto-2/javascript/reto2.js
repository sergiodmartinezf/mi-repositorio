
// Obtención de la primera nota
var nota1 = prompt("Ingrese la primera nota: ", 0);
while (nota1 < 1 || nota1 > 7) {
    var nota1 = prompt("Ingrese la primera nota: ", 0);
};

// Obtención de la segunda nota
var nota2 = prompt("Ingrese la segunda nota: ", 0);
while (nota2 < 1 || nota2 > 7) {
    var nota2 = prompt("Ingrese la segunda nota: ", 0);
};

// Obtención de la tercera nota
var nota3 = prompt("Ingrese la tercera nota: ", 0);
while (nota3 < 1 || nota3 > 7) {
    var nota3 = prompt("Ingrese la tercera nota: ", 0);
};

// Cálculo del promedio
const pond_nota_1 = nota1 * 0.4;
const pond_nota_2 = nota2 * 0.3;
const pond_nota_3 = nota3 * 0.3;
const prom_final = pond_nota_1 + pond_nota_2 + pond_nota_3;
Math.trunc(prom_final);

let mensaje_estado;

// Aprueba-Reprueba-Exime
if (prom_final < 3.95) {
    mensaje_estado = "¡Ha reprobado la asignatura!";
} else {
    if (prom_final >= 4.95) {
        mensaje_estado = "¡Queda eximido/a de la asignatura!";
    } else {
        mensaje_estado = "¡Se va a examen!";
    };
};

// Muestra el promedio
alert("El promedio ponderado es: " + prom_final + "\n" + "" + "\n" + mensaje_estado);



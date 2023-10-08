function mostrar_promedio(nota1,nota2,nota3) {
    var estado = "";
    nota1 = nota1*0.4;
    nota2 = nota2*0.3;
    nota3 = nota3*0.3;
    promedio_notas = nota1 + nota2 + nota3;
    if (promedio_notas >= 3.95 && promedio_notas < 4.95) {
        estado = "¡Se va a exámen!";
    } else if (promedio_notas >= 4.95) {
        estado = "¡Se exime de la asignatura!";
    } else {
        estado = "¡Reprobó la asignatura!";
    };
    mensaje_promedio = `El promedio final es ${promedio_notas} \n estado`;
    return mensaje_promedio;
};

while (true) {
    var nota1 = parseFloat(prompt("Ingrese la primera nota: ", 0));
    if (nota1 >= 1 && nota1 <= 7) {
        break;
    } else {
        alert("La nota ingresada no es válida");
    };
};

while (true) {
    var nota2 = parseFloat(prompt("Ingrese la primera nota: ", 0));
    if (nota2 >= 1 && nota2 <= 7) {
        break;
    } else {
        alert("La nota ingresada no es válida");
    };
};

while (true) {
    var nota3 = parseFloat(prompt("Ingrese la primera nota: ", 0));
    if (nota3 >= 1 && nota3 <= 7) {
        break;
    } else {
        alert("La nota ingresada no es válida");
    };
};

respuesta=mostrar_promedio(nota1,nota2,nota3); 
alert(respuesta);
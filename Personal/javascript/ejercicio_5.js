function calcular_imc(param_estatura, param_peso) {
    let imc = param_peso / (param_estatura*param_estatura);
    return imc;
};

function obtener_estado(param_imc) {
    let estado = "";
    if (param_imc >= 18.5 && param_imc <= 24.9) {
        estado = "Normal";
    } else if (param_imc < 18.5) {
        estado = "Bajo Peso";
    } else {
        estado = "Sobrepeso";
    };
    return estado;
};

while (true) {
    var estatura = prompt("Ingrese su estatura (m): ", 0);
    estatura = Number(estatura);
    if (typeof estatura == "number" && estatura >= 0) break;
};

while (true) {
    var peso = prompt("Ingrese su peso (kg): ", 0);
    peso = Number(peso);
    if (typeof peso == "number" && peso >= 0) break;
};

usuario_imc = calcular_imc(estatura, peso);
usuario_estado = obtener_estado(usuario_imc);

alert(`El IMC es ${usuario_imc}, por lo que el estado es ${usuario_estado}`);

// masa/estatura^2
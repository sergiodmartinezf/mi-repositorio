function validar(puntaje) {
    if (puntaje == 0.0 || puntaje == 0.2 || puntaje == 0.4 || puntaje == 0.6 || puntaje == 0.8) {
        return true;
    } else {
        return false;
    };
};

function analizar_puntaje(puntaje) {
    let mensaje_evaluación = "";
    let nivel_rendimiento = "";
    let cant_dinero = 0;
    if (puntaje == 0.2) {

        nivel_rendimiento = "Insuficiente";
        cant_dinero=250000*0.2;

    } else if (puntaje == 0.4) {

        nivel_rendimiento = "Aceptable";
        cant_dinero=250000*0.4;

    } else if (puntaje == 0.6) {

        nivel_rendimiento = "Meritorio";
        cant_dinero=250000*0.6;

    } else if (puntaje == 0.8) {

        nivel_rendimiento = "Excelente";
        cant_dinero=250000*0.8;

    } else {

        nivel_rendimiento = "Insuficiente";

    }; 
    mensaje_evaluación = `Su nivel de rendimiento es: "${nivel_rendimiento}" \nLa cantidad de dinero que recibirá es de: $${cant_dinero}`;
    return mensaje_evaluación;
};

while (true) {
    var puntaje = prompt("Ingrese su puntaje: ", 0);
    puntaje = parseFloat(puntaje.replace(",","."))
    validar_puntaje = validar(puntaje);
    if (validar_puntaje) {
        break;
    };
};

respuesta = analizar_puntaje(puntaje);
alert(respuesta);


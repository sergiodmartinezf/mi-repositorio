function calcular() {

    const valor_total_boleta = Number(document.getElementById('total_boleta').value);

    if (validar(valor_total_boleta)) {

        const valor_porc_propina = Number(document.getElementById('porc_propina').value);

        let valor_propina = valor_total_boleta * valor_porc_propina;
        let valor_total_pago = valor_total_boleta + valor_propina;

        valor_propina = "$ " + valor_propina.toString() + " CLP";
        valor_total_pago = "$ " + valor_total_pago.toString() + " CLP";

        document.getElementById('propina').innerHTML = valor_propina;
        document.getElementById('total_pago').innerHTML = valor_total_pago;

    } else {

        document.getElementById('propina').innerHTML = "";
        document.getElementById('total_pago').innerHTML = "";

        alert("El total de boleta ingresado no es válido");

    };
};

function validar(numero) {
    if (Number.isInteger(numero) == true && numero >= 0) {
        return true;
    } else {
        return false;
    };
};
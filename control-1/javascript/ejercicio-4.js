function calcular_total_factura(cantidad, porc_iva) {
    const monto_iva = cantidad*porc_iva;
    const cantidad_total = cantidad + monto_iva;
    return cantidad_total;
};

while (true) {
    var cantidad = parseFloat(prompt("Ingrese un monto: "));
    if (cantidad >= 0) {
        break;
    };
};

while (true) {
    var porc_iva = parseFloat(prompt("Ingrese un porcentaje de IVA: "));
    if (porc_iva >= 0) {
        break;
    };
};

alert("La cantidad total es: " + calcular_total_factura(cantidad, porc_iva));
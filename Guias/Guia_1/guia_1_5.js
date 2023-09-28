function IndiceMasa(alturaF, peso) {
    const indice = peso / (alturaF * alturaF);

    if (indice < 18.5) {
        alert(`Su estado es: Bajo peso`);
    } else if (indice >= 18.5 && indice <= 24.9) {
        alert('Su estado es: Normal');
    } else {
        alert('Su estado es: Sobrepeso');
    }
}

let alturaF;
while (true) {
    const altura = prompt('Ingresa tu altura en metros:');
    const alturaEnMetros = parseFloat(altura.replace(',', '.'));
    if (!isNaN(alturaEnMetros) && alturaEnMetros > 0 && alturaEnMetros >= 1 && alturaEnMetros <= 5) {
        alturaF = alturaEnMetros;
        break;
    } else {
        alert('La altura ingresada no es válida o está fuera del rango.');
    }
}

const peso = parseFloat(prompt('Ingresa tu peso:'));

if (!isNaN(alturaF) && !isNaN(peso) && alturaF > 0 && peso > 0) {
    IndiceMasa(alturaF, peso);
} else {
    alert('Ingresa valores válidos para altura y peso.');
}


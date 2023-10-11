function validar_no_numeros(texto) {
    validar_texto = /[0-9]/.test(texto);
    if (validar_texto) {
        return false;
    } else {
        return true;
    };
};

function contar_letras_en_frase(frase, letra) {
    let contador = 0;
    let letra_actual = "";
    for (var i = 0; i <= frase.length; i++) {
        letra_actual = frase [i];
        if (letra_actual == letra) {
            contador = contador + 1;
        };
    };
    return contador;
};

while (true) {
    var frase = prompt("Ingrese una frase: ", 0);
    const validar_frase = validar_no_numeros(frase);
    if (validar_frase) {
        break;
    };
};

while (true) {
    var letra = prompt("Ingrese una letra: ", 0);
    const validar_letra = validar_no_numeros(letra);
    const length_letra = letra.length;
    if (validar_letra && length_letra == 1) {
        break;
    };
};

const respuesta = contar_letras_en_frase(frase, letra);
alert(`La frase "${frase}" contiene la letra "${letra}" un total de ${respuesta} veces.`);
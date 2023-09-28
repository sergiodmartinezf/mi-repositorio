const numeros = prompt('Ingresa una serie de números separados por comas:');
const numerosL = numeros.split(',');

if (numerosL.every(numero => /^[0-9]+$/.test(numero))) {

    const cadnumeros = numerosL.map(numero => parseFloat(numero.trim()));
    const numeroMasGrande = Math.max(...cadnumeros);
    
    alert(`El número más grande es: ${numeroMasGrande}`);
} else {
    alert('Ingresaste una serie de números no válidos.');
}

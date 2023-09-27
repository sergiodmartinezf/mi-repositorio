// Recibe el número entero positivo.
var num = prompt("Ingrese un número entero positivo: ", 0);

// Transforma el dato tipo string a un dato tipo número.
num = Number(num);

// Se verifica que no se acepte el dato ingresado mientras no sea un entero positivo.
while (Number.isInteger(num) == false || num < 0) {
    num = prompt("Ingrese un número entero positivo: ", 0);
    num = Number(num);
};

// Se inicializa la variable que tendrá la suma total de los elementos pares hasta el entero ingresado.
var suma = 0;

// Se realiza la suma.
for (var i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        suma = suma + i;
    };
};

// Se muestra la suma total.
alert("La suma total de todos los números pares desde 1 hasta el entero ingresado es igual a: " + suma);


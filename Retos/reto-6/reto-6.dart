import 'dart:io';

// Crear un programa en Dart que contenga una función que 
// determine si un número dado es primo o no. Además en 
// otra función verificar si el número es par o es impar. 
// El usuario debe ingresar el número por consola.

void main() {

  // Se pide número
  print("Ingrese un número:");
  int numero = int.parse(stdin.readLineSync()!);
  
  // Se determina si el número es primo o no.
  var primoSiNo = esPrimo(numero);
  print(primoSiNo);

  // Se determina si el número es par o impar.
  var parSiNo = esPar(numero);
  print(parSiNo);

}

String esPrimo(int a) {
  // En caso de que el número sea 1, 2, 3 o 5, entonces se considera primo.
  if (a == 1 || a == 2 || a == 3 || a == 5) {
    return "El número ingresado es primo";

  // En caso de que el número sea -1, -2, -3 o -5, entonces se considera primo.
  } else if (a == -1 || a == -2 || a == -3 || a == -5) {
    return "El número ingresado es primo";

  // Si el número es divisible por 2, 3 y 5, entonces se considera no primo.
  } else if (a%2 != 0 && a%3 != 0 && a%5 != 0) {
    return "El número ingresado es primo";
  } else {
    return "El número ingresado no es primo";
  }
}

String esPar(int a) {

  // Si el número es divisible por 2, entonces par. Caso contrario, el número no será par.
  if (a%2 == 0) {
    return "El número ingresado es par";
  } else {
    return "El número ingresado no es par";
  }
}
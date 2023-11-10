import 'dart:math';

void main() {
  print("############ 01-LISTAS NÚMERICAS ###########");
  List<int> enteros = []; // "<int>" indica que acepta enteros
  for (int i = 0; i <= 10; i++) {
    enteros.add(i);
  }

  print("Impresión vertical de la Lista newlist:");
  for (int i = 0; i < enteros.length; i++) { // ".length" entrega longitud.
    print(enteros[i]);
  }

  print("\nLista newlist: $enteros");

  //Generar una lista de números consecutivos de 1 a 10 (similar al uso del range)
  List<int> listagenerada = List.generate(10, (i) => i + 1);
  print("Lista Generada: $listagenerada");

  print("\n############ 02-LISTAS DE STRINGS ###########");
  //Inicialización explícita
  List<String> nombres = ['Tito', 'Pepe', 'Seba'];
  print("Lista de nombres: $nombres");

  //Inicialización implícita
  List<String> colores = List<String>.from(['Azul', 'Rojo', 'Verde']);
  print("Lista de colores: $colores");

  print("\n############ 03-CONSULTANDO ELEMENTOS EN UNA LISTA ###########");
  //Accediendo al primer elemento de la lista nombres
  print(nombres[0]); //elemento 1
  print(nombres.elementAt(1)); //elemento 2
  print(nombres.last); //consultando el último elemento
  print(nombres.first); // primer elemento
  print(nombres[nombres.length - 1]); //¿funcionará este código? Basicamente mostrará el último elemento de la lista

  List<int> numeros = [4, 7, 2, 9, 1];
  int maximo = numeros.reduce(max);
  int minimo = numeros.reduce(min);
  print("El máximo es $maximo y el mínimo es $minimo");
}

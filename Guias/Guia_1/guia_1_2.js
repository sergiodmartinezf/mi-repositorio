const oracion = prompt('ingrese una oracion:');

const separar = oracion.split(" ");

const FiltroPalabras = separar.filter(palabra => palabra.trim() !== "");

const numeroP = FiltroPalabras.length;

alert(`oracion escrita: ${oracion}
tiene ${numeroP} palabra(s)`);

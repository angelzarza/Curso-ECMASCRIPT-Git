"use strict";

var nombres = ["Carlos", "Maria", "Angel", "Juan"]; // Forma larga de hacerlo #1
// const numero_caracteres = nombres.map(function(nombre){
//     console.log(`${nombre} tiene ${nombre.length} caracteres.`);
// });
// Ejemplo de forma corta #2
// (parametro) => {
//     return //codigo a ejecutar
// }

var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " caracteres.");
});
console.log(numero_caracteres);
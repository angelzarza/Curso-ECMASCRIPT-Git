"use strict";

// Con EM6 podemos crear cadenas de texto que tengan variables en formato ${variable} que apunten a su contenido.
var nombre = "Angel Zarza";
var edad = 29;
var pais = "España";
console.log("La persona es ".concat(nombre, ", tiene ").concat(edad, " y es de ").concat(pais));
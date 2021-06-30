"use strict";

var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    // Devuelve 2 objetos y los acortamos de esa forma. 
    // Forma larga Nombre: nombre
    nombre: nombre,
    edad: edad,
    // Forma antigua
    // mostrarInfo: () => {
    //     return `${nombre} tiene ${edad} años`;
    // }
    mostrarInfo: function mostrarInfo() {
      return "".concat(nombre, " tiene ").concat(edad, " a\xF1os");
    }
  };
};

document.write(crearObjeto("Angel", 29).mostrarInfo());
"use strict";

// Parametros Rest (...datos) nos va a permitir recibir todos los argumentos
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
}; // Podemos pasar todos sus elementos como argumentos con los 3 puntos con parametro Spread


var arregloDatos = ["Angel", 29, "correo@correo.com", "España"];
mostrarDatos.apply(void 0, arregloDatos);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saludo = exports.mensajeAlerta = void 0;

// Exportamos la funcion (mensajeAlerta) a (app.js)
var mensajeAlerta = function mensajeAlerta(mensaje) {
  alert(mensaje);
};

exports.mensajeAlerta = mensajeAlerta;

var saludo = function saludo() {
  console.log("Saludo!");
};

exports.saludo = saludo;
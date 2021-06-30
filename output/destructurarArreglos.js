"use strict";

// Extraemos los valores de persona y los guardamos en una variable.
var persona = ["Angel", 29, "España"];
var nombre = persona[0],
    pais = persona[2],
    _persona$ = persona[3],
    oficio = _persona$ === void 0 ? "No especificado" : _persona$;

var mostrarInfo = function mostrarInfo(nombre) {
  return console.log(nombre);
};

mostrarInfo(nombre);
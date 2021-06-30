"use strict";

var _mensajeAlerta = require("./modulos/mensajeAlerta");

var _clasePersona = _interopRequireDefault(require("./modulos/clasePersona"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importamos la funcion de (mensajeAlerta) del script (mensajeAlerta.js)
// Importamos la clase (Persona) del script (clasePersona.js)
// Tambien podriamos hacer import aleatorio from "./modulos/clasePersona";
// Ya que exportamos una clase por defecto y podemos llamarla como queramos
(0, _mensajeAlerta.mensajeAlerta)("Hola Mundo");
(0, _mensajeAlerta.saludo)();
var angel = new _clasePersona["default"]("Angel", 29);
angel.mostrarInfo();
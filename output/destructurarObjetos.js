"use strict";

// Extraemos los valores de usuario y los guardamos en una variable.
var usuario = {
  nombre: "Angel",
  correo: "ajdshas@sjhhd.com",
  edad: "29",
  pais: "España"
};
var nombre = usuario.nombre,
    pais = usuario.pais;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? "Desarrollador web" : _ref$profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);
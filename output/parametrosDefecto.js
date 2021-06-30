"use strict";

// Podemos crear valores por defecto dentro de la función.
function registrarUsuario(nombre, pais, correo) {
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "No especificado";
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Correo: ").concat(correo, ", Tel\xE9fono: ").concat(telefono);
}

console.log(registrarUsuario("Carlos", "España", "asdsa@hsdfhs.com"));
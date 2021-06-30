"use strict";

var promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var exito = true;

    if (exito) {
      // Accion que se ejecutara
      resolve("La operacion tuvo exito");
    } else {
      // Accion que se ejecutara si la promesa no se cumple
      reject("La operacion no tuvo exito");
    }
  }, 3000);
});
promesa.then(function (mensaje) {
  alert(mensaje);
});
promesa["catch"](function (mensaje) {
  alert(mensaje);
});
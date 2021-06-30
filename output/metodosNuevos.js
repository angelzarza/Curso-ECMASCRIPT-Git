"use strict";

// Metodos con strings
var texto = "Hola Mundo";
console.log(texto, "empieza con la letra h:", texto.toLowerCase().startsWith("h"));
console.log(texto, "empieza con la letra o:", texto.toLowerCase().endsWith("o"));
console.log(texto, "incliye la palabra mundo:", texto.includes("Mundo"));
var amigos = ["Angel", "Maria", "Miguel", " Manuel"];
console.log(amigos, "El nombre Jose esta incluido?:", amigos.includes("Jose"));
console.log(amigos, "Nombre con mas de 6 caracteres:", amigos.find(function (amigo) {
  return amigo.length > 6;
}));
console.log(amigos.findIndex(function (amigo) {
  return amigo === "Manuel";
}));
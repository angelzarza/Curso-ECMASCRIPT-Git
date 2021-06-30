// Extraemos los valores de persona y los guardamos en una variable.

const persona = ["Angel", 29, "España"];

const [nombre, , pais, oficio = "No especificado"] = persona;

const mostrarInfo = (nombre) => console.log(nombre);

mostrarInfo(nombre);
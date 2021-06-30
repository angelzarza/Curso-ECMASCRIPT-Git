// Parametros Rest (...datos) nos va a permitir recibir todos los argumentos

const mostrarDatos = (...datos) => {
    console.log(datos);
}

// Podemos pasar todos sus elementos como argumentos con los 3 puntos con parametro Spread
const arregloDatos = ["Angel", 29, "correo@correo.com", "España"];
mostrarDatos(...arregloDatos);

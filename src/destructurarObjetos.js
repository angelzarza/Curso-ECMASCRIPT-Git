// Extraemos los valores de usuario y los guardamos en una variable.

const usuario = {
    nombre: "Angel",
    correo: "ajdshas@sjhhd.com",
    edad: "29",
    pais: "España"
    
}

const {nombre, pais} = usuario;

const mostrarInfo = ( { nombre, profesion = "Desarrollador web" } ) => console.log(`${nombre} es ${profesion}`);

mostrarInfo(usuario);
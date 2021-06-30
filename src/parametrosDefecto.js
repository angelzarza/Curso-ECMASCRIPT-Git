// Podemos crear valores por defecto dentro de la función.

function registrarUsuario(nombre, pais, correo, telefono = "No especificado"){
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Teléfono: ${telefono}`;
}

console.log(registrarUsuario("Carlos", "España", "asdsa@hsdfhs.com"));
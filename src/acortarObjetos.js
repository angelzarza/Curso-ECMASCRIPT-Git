const crearObjeto = (nombre, edad) => {
    return {
        // Devuelve 2 objetos y los acortamos de esa forma. 
        // Forma larga Nombre: nombre
        nombre,
        edad,

        // Forma antigua
        // mostrarInfo: () => {
        //     return `${nombre} tiene ${edad} años`;
        // }
        mostrarInfo() {
            return `${nombre} tiene ${edad} años`;
        }
    }
}

document.write(crearObjeto("Angel", 29).mostrarInfo());
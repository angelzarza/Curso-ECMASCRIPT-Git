class Usuario {
    constructor(nombre, edad, correo){
        this.nombre = nombre,
        this.edad = edad,
        this.correo = correo;

    }

    mostrarSaludo(mensaje){
        return alert(mensaje);
    }

    mostrarInfo(){
        return `
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Edad:</b> ${this.edad} <br />
            <b>Correo:</b> ${this.correo} <br />
            <hr />
        `;
    }
}

const carlos = new Usuario("Angel", 29, "as@as.com");
document.write(carlos.mostrarInfo());

const alejandro = new Usuario("Alejandro", 23, "ejemplo@correo.com");
document.write(alejandro.mostrarInfo());

class Estuadiante extends Usuario {
    constructor(nombre, edad, correo, carrera){
        super(nombre, edad, correo);
        this.carrera = carrera;
    }

    mostrarInfo(){
        return `
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Edad:</b> ${this.edad} <br />
            <b>Correo:</b> ${this.correo} <br />
            <b>Carrera:</b> ${this.carrera} <br />
            <hr />
        `;
    }
}

const maria = new Estuadiante("Maria", 30, "ejemplo2@correo.com", "Matematica");
document.write(maria.mostrarInfo());
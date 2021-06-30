// Exportamos la clase (Persona) al script (app.js)
// Con export default exportamos por defecto una clase en caso de tener varias
export default class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInfo(){
        console.log(`${this.nombre} tiene ${this.edad} años`)
    }
}

// Importamos la funcion de (mensajeAlerta) del script (mensajeAlerta.js)
// Importamos la clase (Persona) del script (clasePersona.js)
import { mensajeAlerta, saludo } from "./modulos/mensajeAlerta";
import Persona from "./modulos/clasePersona";
// Tambien podriamos hacer import aleatorio from "./modulos/clasePersona";
// Ya que exportamos una clase por defecto y podemos llamarla como queramos

mensajeAlerta("Hola Mundo");
saludo();

const angel = new Persona("Angel", 29);
angel.mostrarInfo();
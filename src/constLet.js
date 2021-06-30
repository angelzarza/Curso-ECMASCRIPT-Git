// Caracteristica #1
// Podemos re-declarar variables con var
// Esto puede causar problemas en donde re-declaramos sin darnos cuenta.

//var nombre = 'Angel';
//var nombre = 'Zarza';


// Con let esto no sucede, si re-delaramos nos saltara error al compilar

// let nombre = "Angel Zarza";
// console.log("Hola " + nombre);

// Caracteristica #2
// scope es una caracteristica que evitar el uso de variables o constantes fuera de los bloques donde se definen.
// let y const tambien tienen un scope en el que no podemos acceder a las variables creadas dentro de una función.

// function saludo(){
//     var nombre = "Angel";
//     return "Hola " + nombre;
// }

// console.log(nombre);


// Caracteristica #3
// let y const tienen un scope de tipo bloque

// let edad = 18;

// if(edad >= 18){
//     let esAdulto = true;
// }

// console.log(esAdulto);



// Caracteristica #4
// const lo usamos cuando queremos que el valor de una variable nunca cambie.

// const nombre = "Angel";
// nombre = "Carlos";

// console.log(nombre);

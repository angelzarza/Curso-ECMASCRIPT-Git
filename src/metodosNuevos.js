// Metodos con strings

const texto = "Hola Mundo";

console.log(texto, "empieza con la letra h:", texto.toLowerCase().startsWith("h"));

console.log(texto, "empieza con la letra o:", texto.toLowerCase().endsWith("o"));

console.log(texto, "incliye la palabra mundo:", texto.includes("Mundo"));

const amigos = ["Angel", "Maria", "Miguel", " Manuel"];

console.log(amigos, "El nombre Jose esta incluido?:", amigos.includes("Jose"));

console.log(amigos, "Nombre con mas de 6 caracteres:", amigos.find(amigo => amigo.length > 6));

console.log(amigos.findIndex(amigo => amigo === "Manuel"));
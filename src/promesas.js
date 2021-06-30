const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const exito = true;
        if(exito){
            // Accion que se ejecutara
            resolve("La operacion tuvo exito");
        } else {
            // Accion que se ejecutara si la promesa no se cumple
            reject("La operacion no tuvo exito");
        }
    }, 3000);
    
});

promesa.then((mensaje)=>{
    alert(mensaje);
});

promesa.catch((mensaje)=>{
    alert(mensaje);
});

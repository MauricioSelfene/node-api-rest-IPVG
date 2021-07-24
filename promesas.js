let paises = [];

const agregarPais = pais => new Promise( (resolve, reject) => {
        setTimeout(() => {

            //probocar error
            if(pais == "Canada") {
                reject("El pais no es de latinoamerica")
            }

            paises.push(pais);
            //reject("Error al ingrear el pais");
            resolve(`Agregado: ${ pais }`);
        }, 3000);
    }    
);

agregarPais("Chile")
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return agregarPais("Argentina");
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        //return agregarPais("Peru");
        return agregarPais("Canada"); //error
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return agregarPais("Bolivia");
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
    })
    .catch(error => {
        console.log(error);
    })
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

/* async function iniciarProceso(){
    /* let resultado = await agregarPais("Chile");
    //console.log(resultado); 
    await agregarPais("Chile");
    await agregarPais("Argentina");
    await agregarPais("Peru");
    await agregarPais("Bolivia");
    console.log(paises);
} */

async function iniciarProceso() {
    try {
        let resultado = await agregarPais("Chile")
        console.log(resultado);
        resultado = await agregarPais("Argentina")
        console.log(resultado);
        //resultado = await agregarPais("Canada")    //prueba para llamar el reject
        resultado = await agregarPais("Peru")
        console.log(resultado);
        resultado = await agregarPais("Bolivia")
        console.log(resultado);
        console.log(paises)
    } catch (error) {
        console.log(error);
    }
}

iniciarProceso();
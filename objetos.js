const producto = {
    nombre: "Monitor Gamer 20\"",
    precio: 30000,
    informacion: {
        peso: "1 kg",
        medida: "50 cm"
    },
    disponibilidad: ["Los Angeles", "Chillan", "Concepcion"]
}

/* 
let nombre = producto.nombre;
let precio = producto.precio;
let medida = producto.medida;
*/

//desestructuración
const { nombre, precio, informacion }= producto;

//agregamos al objeto con producto.stock = 60

const bodega = {
    nombreBodega : "Los Angeles",
    stockBodega: 450
}


const datosObjetos = {...producto, ...bodega}
console.log(datosObjetos)
//console.log(producto.informacion.medida);


console.log(Object.keys(bodega));
console.log(Object.values(bodega));
console.log(Object.entries(bodega));


function imprimir({nombre, precio, informacion: { peso }}){
    console.log(` Nombre: ${ nombre } Precio: $ ${ precio } Peso: ${ peso } `)
}
imprimir(producto);


//console.log(peso);
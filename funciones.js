function sumar(numero = 45, numnero2 = 40){
    return numero + numnero2
}

console.log(sumar(52))

const imprimir = function() {
    return "Imprimir datos !";
}

const imprimir2 = ()=> {
    return "Imprimir datos 2 !";
}

//()=> corta
const imprimir3 = ()=>  console.log("Imprimir datos 3 !") ;

//()=> Mas corta
const imprimir4 = ()=>  "Imprimir datos 4 !";

//datos

const imprimir5 = (nombre) => `Saludo ${nombre}`;

console.log(imprimir());
console.log(imprimir2());
console.log(imprimir3());
console.log(imprimir4());
console.log(imprimir5());
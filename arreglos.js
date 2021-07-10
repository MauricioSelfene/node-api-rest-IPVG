const numeros = [1,2,3,4,5,6,7,8,9];
console.log(numeros[2])

const nombres = ["Juan", "Pedro", "Diago"];
console.log(nombres)

const cualquierCosaXD = [1, "hola", 2.5, true, {numero:1, nombre: "Mauricio"}];
console.log(cualquierCosaXD)

console.log(numeros.length);

for (let index = 0; index < numeros.length; index++) {
    
    console.log("[" + numeros[index] + "]");
    
}

numeros.push(200);
numeros.unshift(300);
console.log("Uso de unshift 300 -> " + numeros + "<- 200 Uso de push")

for (const iterator of numeros) {
    console.log("iteramos " + iterator);
}

numeros.forEach(function(elemento) {
    console.log("foreach " + elemento)
});

console.log("son map " + numeros);
 const numerosNuevos = numeros.map(function(elemento) {
    return elemento * 2;
});


const numerosMayores = numeros.filter(el => el > 10);

const sumaArreglo = numeros.reduce(( total, el)=> total + el, 0 )

console.log("reduce " + sumaArreglo)
console.log("Filter " + numerosMayores)
console.log("con map * 2 " + numerosNuevos);

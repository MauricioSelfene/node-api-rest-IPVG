/*
Node = 2
js = 1
JavaScript = 2
cuantas veces aparecen las palabras (sin los puntos parentecis) solo una vez palabras repetidas
*/

let texto = "Node. js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en . js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript."

texto = texto.toLowerCase() 
console.log("1 " + texto);

strSinPuntos = texto.replace('.', ' ');
console.log(strSinPuntos)
strSinParentesis = texto.replace('(', ' ');

console.log(strSinParentesis)
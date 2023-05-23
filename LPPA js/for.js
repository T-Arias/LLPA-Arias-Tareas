/* 5. For */
/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando unbucle for de JavaScript para mostrar una alerta utilizando cada una de laspalabras. */
var arr5 = ['hola','que','tal','buen','dia'];
arr5.forEach(function(element)  {
   console.log(element);
});

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula ymostrar una alerta por cada palabra modificada. */
var arr5 = ['hola','que','tal','buen','dia'];
arr5.forEach(function(element)  {
   var conver = element.toUpperCase().substring(0,1) + element.toLowerCase().substring(1)
   console.log(conver);
});

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al arraydel punto a)
 recorrerlo con un bucle for para ir guardando cada palabra dentro dela variable sentence. Al final mostrar una única alerta con la cadena completa. */
 var sentence = '';
 array.forEach(function(element) {
   sentence +=element;
 })
 console.log(sentence);

/* d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array conel número de la repetición, es decir que al final de la ejecución del bucle 
fordebería haber 10 elementos dentro del array, desde el número 0 hasta al número9. Mostrar por la consola del navegador el array final (utilizar console.log). */
var empty =[];
for (let index = 0; index < 10; index++) {
   empty.push(index);   
}
console.log(empty);
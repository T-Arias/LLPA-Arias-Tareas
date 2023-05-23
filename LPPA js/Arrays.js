/* 3. Arrays 
a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar porconsola los meses 5 y 11 (utilizar console.log). */
var array= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array[4]);
console.log(array[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log(array.sort());

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push) */
array.push('chau'); /* agrega un elemento al final */
array.unshift('hola'); /* agrega un elemento al inicio */
console.log(array);

/* d.Quitar un elemento del principio y del final del array (utilizar shift y pop). */
array.shift();
array.pop();
console.log(array);

/* e.Invertir el orden del array (utilizar reverse). */
array.reverse();
console.log(array);

/* f. Unir todos los elementos del array 
en un único string donde cada mes esteseparado por un guión - (utilizar join). */
console.log(array.join('-'));

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre(utilizar slice). */
var array= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array.slice(4,11));
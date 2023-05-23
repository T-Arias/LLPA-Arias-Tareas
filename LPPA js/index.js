/* 3. Arraysa. 
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

/* 4. If Elsea.
a.Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
 si elvalor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than0,5” 
 y sino un alerta con el mensaje “Lower than 0,5” */
 var num = Math.random();
 if(num>=0.5){
    console.log('Greater than 0,5');
 }else{
    console.log('Lower than 0,5');
 };

 /* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 ymuestre los siguientes mensajes de alerta: */
 /* i. “Bebe” si la edad es menor a 2 años; 
 ii. “Niño” si la edad es entre 2 y 12 años;
 iii. “Adolescente” entre 13 y 19 años;
 iv. “Joven” entre 20 y 30 años
 v. “Adulto” entre 31 y 60 años
 vi. “Adulto mayor” entre 61 y 75 años;
 vii. “Anciano” si es mayor a 75 años.*/
 var edad =76;
if(edad<2)console.log('Bebe');
if(edad>=2 && edad<=12)console.log('Niño');
if(edad>=13 && edad<=19)console.log('Adolecente');
if(edad>=20 && edad<=30)console.log('Joven');
if(edad>=31 && edad<=60)console.log('Adulto');
if(edad>=61 && edad<=75)console.log('Adulto mayor');
if(edad>75)console.log('Anciano');

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
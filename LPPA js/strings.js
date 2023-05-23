 /* 2. Strings */
 /* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase). */
 var upper = 'la verdadera felicidad consiste en hacer el bien';
 console.log(upper.toUpperCase());

 /* b. Crear una variable de tipo string con al menos 10 caracteres y generar un 
 nuevostring con los primeros 5 caracteres guardando el resultado en una nuevavariable (utilizar substring). */
var substring = upper.substring(0,5);
console.log(substring);

  /* c. Crear una variable de tipo string con al menos 10 caracteres y generar un 
 nuevostring con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring). */
 var substringUlt = upper.substring(upper.length -3, upper.length);
 console.log(substringUlt);

 /* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con la primera 
 letra en mayúscula y las demás en minúscula. Guardar elresultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase yel operador +). */
 var ejd = upper.toUpperCase().substring(0,1) + upper.toLowerCase().substring(1,upper.length);
 console.log(ejd);

 /* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco.
 Encontrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf) */
 var index = upper.indexOf(" ");
 console.log(index);

 /* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres yalgún espacio entre medio).
  Utilizar los métodos de los ejercicios anteriores paragenerar un nuevo string que tenga la primera letra de 
  ambas palabras enmayúscula y las demás letras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +). */
  var strf1 = "hola mundo";
  var str12 = strf1.toUpperCase().substring(0,1) + strf1.toLowerCase().substring(1,strf1.indexOf(" ")) +" "+ strf1.toUpperCase().substring(strf1.indexOf(" ")+1,strf1.indexOf(" ")+2)+strf1.toLowerCase().substring(strf1.indexOf(" ")+2,strf1.length);
  console.log(str12);
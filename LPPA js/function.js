/* 6. Funciones
a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.Ejecutar la función y guardar el resultado en una variable,
 mostrando el valor dedicha variable en la consola del navegador. */
 function suma(value1,value2) {
    return value1 + value2;    
 }
console.log(suma(10,5));
/* b. A la función suma anterior, agregarle una validación para controlar si alguno delos parámetros no es un número, 
mostrar una alerta aclarando que uno de losparámetros tiene error y retornar el valor NaN como resultado. */
function suma(value1,value2) {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        return value1 + value2;    
    }   else{
        return 'Ambos parametros enviados deben ser numeros';
    }
 }
console.log(suma(10,5));
console.log(suma('10',5));

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */
function validate_integer(params) {
    return Number.isInteger(params);
}
console.log(validate_integer(12));
console.log(validate_integer(12.5));

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que losnúmeros sean enteros. En caso que haya decimales 
mostrar un alerta con elerror y retorna el número convertido a entero (redondeado). */
function suma(value1,value2) {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        if (Number.isInteger(value1,value2)) {
            return value1 + value2;
        } else {
            return 'Un numero enviado no es entero, pero el resutado redondeado seria: ' + Math.round(value1 + value2); 
        } 
    }   else{
        return 'Ambos parametros enviados deben ser numeros';
    }
 }
console.log(suma(10,5));
console.log(suma(10.5,5));